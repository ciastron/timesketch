# Copyright 2020 Google Inc. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""A tool to mock the run of an analyzer.

This tool can be used to mock a run of the analyzer without
requiring you to have a full blown Timesketch instance up and running.
It also allows for some automated tests of analyzers.

Example way of running the tool:

  $ python analyzer_run.py --test_file test_file.txt \
      ../timesketch/lib/analyzers/my_analyzer.py MyAnalyzerSketchPlugin

Remark: The tool ignores OpenSearch queries. It should be fed with
data that matches the expected output of the analyzer.

"""

import argparse
import importlib.util
import os
import sys

from timesketch.lib.analyzers import interface


def get_codepath():
    """Return the absolute path to where the tool is run from."""
    path = __file__
    if path.startswith(os.path.sep):
        return path

    dirname = os.path.dirname(path)
    for sys_path in sys.path:
        if sys_path.endswith(dirname):
            return sys_path
    return dirname


def run_analyzer(analyzer_name, analyzer_path, test_file_path):
    """Run an analyzer on test data and returns results from the run.

    Args:
        analyzer_name: the name of the analyzer to run.
        analyzer_path: the path to the analyzer file.
        test_file_path: the path to a test file that contains event data
            to feed to the analyzer as part of the test.

    Raises:
        IOError: if the path to either test or analyzer file does not exist
                 or if the analyzer module or class cannot be loaded.

    Returns:
        A context object (instance of AnalyzerContext). The context contains
        information about the analyzer run, and can be used to generate
        a text based report.
    """
    if not os.path.isfile(analyzer_path):
        raise IOError("Analyzer not found at path: {0:s}".format(analyzer_path))
    if not os.path.isfile(test_file_path):
        raise IOError("Test file path not found at path: {0:s}".format(test_file_path))

    spec = importlib.util.spec_from_file_location("module.name", analyzer_path)
    analyzer_module = importlib.util.module_from_spec(spec)
    if analyzer_module is None:
        raise IOError("Unable to load analyzer module.")
    spec.loader.exec_module(analyzer_module)
    analyzer_class = getattr(analyzer_module, analyzer_name)

    if not analyzer_class:
        return IOError(
            "Class: {0:s} does not exist within the analyzer module.".format(
                analyzer_name
            )
        )

    if analyzer_class.IS_SKETCH_ANALYZER:
        analyzer = analyzer_class(test_file_path, 1)
    else:
        analyzer = analyzer_class(test_file_path)

    context = interface.AnalyzerContext(analyzer.NAME)
    analyzer.set_context(context)
    analyzer.run_wrapper()
    return context


if __name__ == "__main__":
    code_path = get_codepath()
    # We want to ensure our mocked libraries get loaded first.
    sys.path.insert(0, code_path)

    description = (
        "Mock an analyzer run. This tool is intended for developers "
        "of analyzers to assist during the development to make sure the "
        "analyzer is doing what it is supposed to do. The tool can also "
        "be used for automatic testing to make sure the analyzers are "
        "still working as intended."
    )
    epilog = (
        "Remember to feed the tool with proper test data. The data has to "
        "contain all fields that would be generated by other analyzers that "
        "this analyzer depends on, since dependent analyzers are not run."
    )

    arguments = argparse.ArgumentParser(description=description, allow_abbrev=True)
    arguments.add_argument(
        "--test_file",
        "--file",
        dest="test_file_path",
        action="store",
        default="",
        type=str,
        metavar="PATH_TO_TEST_FILE",
        help=("Path to the file containing the test data to feed to the " "analyzer."),
    )
    arguments.add_argument(
        "analyzer_path",
        action="store",
        default="",
        type=str,
        metavar="PATH_TO_ANALYZER",
        help="Path to the analyzer to test.",
    )
    arguments.add_argument(
        "analyzer_class",
        action="store",
        default="",
        type=str,
        metavar="NAME_OF_ANALYZER_CLASS",
        help="Name of the analyzer class",
    )

    try:
        options = arguments.parse_args()
    except UnicodeEncodeError:
        print(arguments.format_help())
        sys.exit(1)

    if not os.path.isfile(options.test_file_path):
        print("Need to provide test data.")
        sys.exit(1)

    if not os.path.isfile(options.analyzer_path):
        print(
            "The path to the analyzer file does not exist ({0:s})".format(
                options.analyzer_path
            )
        )
        sys.exit(1)

    report_string = run_analyzer(
        analyzer_name=options.analyzer_class,
        analyzer_path=options.analyzer_path,
        test_file_path=options.test_file_path,
    )
    print(report_string.get_string_report())
