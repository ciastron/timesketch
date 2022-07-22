webpackHotUpdate("login",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Common/UploadForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/UploadForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\n/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_RestApiClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/RestApiClient */ \"./src/utils/RestApiClient.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      headers: [],\n      // headers in the CSV \n      hMissing: {},\n      headersMapping: {},\n      form: {\n        name: '',\n        file: ''\n      },\n      fileName: '',\n      error: '',\n      percentCompleted: 0\n    };\n  },\n  methods: {\n    getSelection: function getSelection(e) {\n      /**\n       * method to map of the missing headers\n       * it verifies if some conditions are met before submitting the form,\n       * in particular:\n       * 1. missing headers must be map with exsiting headers in the CSV\n       * 2. 2 or more missing headers can not be mapped to the same exsiting header\n       * 3. If missing header can not be mapped with an existing one, then, \n       *      it can be \"created\" a new one and a default value is associated to each row for that header\n       */\n      var key = e.target.name; // key = datetime | message | timestamp_desc\n\n      var value = e.target.options[e.target.options.selectedIndex].text; // value = existing CSV header\n\n      this.headersMapping[key][0] = value;\n\n      if (value === \"New header\") {\n        // ask to the user the default row's value\n        var newHVal = \"\";\n\n        while (!newHVal) {\n          newHVal = prompt(\"Insert the default value for this header\");\n        }\n\n        this.headersMapping[key][1] = newHVal;\n      } else {\n        this.headersMapping[key][1] = \"\";\n      } // get all the values of headersMapping and put them in array\n\n\n      var allValues = [];\n\n      for (var k in this.headersMapping) {\n        allValues.push(this.headersMapping[k][0]);\n      } // 1. check if mapping is completed, i.e., if there are not empty or null field for the mapping\n\n\n      if (!allValues.some(function (e) {\n        return e === '' || !e;\n      })) {\n        // 2. check if all selected headers are unique (except from 'New header')\n        allValues = allValues.filter(function (e) {\n          return e !== \"New header\";\n        });\n\n        if (allValues.length === new Set(allValues).size) {\n          this.error = \"\";\n        } else {\n          // there are duplicates in the selection list\n          this.error = \"New headers mapping contains duplicates\";\n        }\n      } else {\n        // meaning: Exist at least 1 element of allValues that is null or empty\n        this.error = \"Finish headers selection\";\n      }\n    },\n    clearFormData: function clearFormData() {\n      this.form.name = '';\n      this.form.file = '';\n      this.fileName = '';\n      this.headersMapping = {\n        \"datetime\": [null, null],\n        \"message\": [null, null],\n        \"timestamp_desc\": [null, null]\n      };\n      this.hMissing = {\n        \"datetime\": true,\n        \"message\": true,\n        \"timestamp_desc\": true\n      };\n    },\n    submitForm: function submitForm() {\n      var _this = this;\n\n      if (this.error === 'Please select a file with a valid extension') {\n        return;\n      }\n\n      var formData = new FormData();\n      formData.append('file', this.form.file);\n      formData.append('name', this.form.name);\n      formData.append('provider', 'WebUpload');\n      formData.append('context', this.fileName);\n      formData.append('total_file_size', this.form.file.size);\n      formData.append('sketch_id', this.$store.state.sketch.id);\n      var hMapping = JSON.stringify(this.headersMapping);\n      formData.append('headersMapping', hMapping);\n      var config = {\n        headers: {\n          'Content-Type': 'multipart/form-data'\n        },\n        onUploadProgress: function (progressEvent) {\n          this.percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n        }.bind(this)\n      };\n      _utils_RestApiClient__WEBPACK_IMPORTED_MODULE_7__[\"default\"].uploadTimeline(formData, config).then(function (response) {\n        _this.$store.dispatch('updateSketch', _this.$store.state.sketch.id);\n\n        _this.$emit('toggleModal');\n\n        _this.clearFormData();\n\n        _this.percentCompleted = 0;\n      }).catch(function (e) {});\n    },\n    setFileName: function setFileName(fileList) {\n      /* 1. Initilize the variables */\n      // this mapping represents a dictionary where for each mandatory fields we assign\n      // 0. name of the column to map\n      // 1. value of the column in case we want to insert a new one\n      //      e.g., we do not have timestamp_desc: we add a new one (the value of rows in this column\n      //            will be the same)\n      this.headersMapping = {\n        \"datetime\": [null, null],\n        \"message\": [null, null],\n        \"timestamp_desc\": [null, null]\n      }; // headers missing in the CSV:\n      // if the headers is present, then the value of the corresponding field is set to true\n\n      this.hMissing = {\n        \"datetime\": true,\n        \"message\": true,\n        \"timestamp_desc\": true\n      };\n      this.headers = [];\n      var fileName = fileList[0].name;\n      var fileExtension = fileName.split('.')[1];\n      this.form.file = fileList[0];\n      this.form.name = fileName.split('.').slice(0, -1).join('.');\n      this.fileName = fileName;\n      this.error = '';\n      /* 2. Check for the correct extension */\n\n      var allowedExtensions = ['csv', 'json', 'jsonl', 'plaso'];\n\n      if (!allowedExtensions.includes(fileExtension)) {\n        this.error = 'Please select a file with a valid extension';\n      } // TODO: need to verify with JSONL files\n\n      /* 3. Manage CSV missing headers */\n\n\n      if (fileExtension === \"csv\") {\n        var reader = new FileReader();\n        var file = document.getElementById(\"datafile\").files[0]; // read only 1000 B --> it is reasonable that the header of the CSV file ends before the 1000^ byte.\n        // this is done to prevent JS reading a large CSV file (GBs) \n\n        var vueJS = this;\n        reader.readAsText(file.slice(0, 1000));\n\n        reader.onloadend = function (e) {\n          if (e.target.readyState === FileReader.DONE) {\n            // DONE == 2\n\n            /* 3a. Extract the headers from the CSV*/\n            var data = e.target.result;\n            var headers = data.split(\"\\n\")[0]; //<--- is there a better way to split columns?\n\n            headers = headers.split(\",\"); // all  headers of CSV uploaded\n            // BIG ASSUMPTION: CSV separator is ','\n\n            for (var i in headers) {\n              vueJS.headers.push({\n                id: i,\n                val: headers[i]\n              });\n            }\n            /* 3b. Check if the mandatory headers are present in the extracted ones */\n\n\n            if (headers.indexOf(\"datetime\") < 0) {\n              vueJS.hMissing[\"datetime\"] = false;\n            } else delete vueJS.headersMapping[\"datetime\"];\n\n            if (headers.indexOf(\"message\") < 0) {\n              vueJS.hMissing[\"message\"] = false;\n            } else delete vueJS.headersMapping[\"message\"];\n\n            if (headers.indexOf(\"timestamp_desc\") < 0) {\n              vueJS.hMissing[\"timestamp_desc\"] = false;\n            } else delete vueJS.headersMapping[\"timestamp_desc\"];\n\n            var hMissingArray = vueJS.isHMissing();\n\n            if (hMissingArray.length > 0) {\n              vueJS.error = 'Missing headers: ' + hMissingArray.toString();\n            }\n          }\n        };\n      }\n    },\n    isHMissing: function isHMissing() {\n      /**\n       * isHMissing --> is there a missing header?\n       * verify if there is at least one missing header\n       * it returns an array containing the missing headers\n       */\n      var hMissingArray = [];\n\n      for (var key in this.hMissing) {\n        if (!this.hMissing[key]) hMissingArray.push(key);\n      }\n\n      return hMissingArray;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL1VwbG9hZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9VcGxvYWRGb3JtLnZ1ZT8yOWUwIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS1cbkNvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInN1Ym1pdEZvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZSBoYXMtbmFtZVwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZpbGUtbGFiZWxcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImRhdGFmaWxlXCIgY2xhc3M9XCJmaWxlLWlucHV0XCIgdHlwZT1cImZpbGVcIiBuYW1lPVwicmVzdW1lXCIgdi1vbjpjaGFuZ2U9XCJzZXRGaWxlTmFtZSgkZXZlbnQudGFyZ2V0LmZpbGVzKVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGUtY3RhXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXBsb2FkXCI+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIENob29zZSBhIGZpbGXigKZcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlLW5hbWVcIiB2LWlmPVwiZmlsZU5hbWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFmaWxlTmFtZVwiPlBsZWFzZSBzZWxlY3QgYSBmaWxlPC9zcGFuPlxuICAgICAgICAgICAgICB7eyBmaWxlTmFtZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JcIj5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm1lc3NhZ2UgaXMtZGFuZ2VyIG1iLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgICAgICAge3sgZXJyb3IgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLS0gXG4gICAgICBcbiAgICAgIE5leHQgbGluZXMgb2YgY29kZSByZXByZXNlbnQgdGhlIGRyb3Bkd29uIG1lbnVcbiAgICAgIEl0IGlzIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCAod2l0aCBhbiBleHRyYSBvcHRpb246IE5ldyBoZWFkZXIpIHRvIGFsbG93XG4gICAgICAgIHRoZSB1c2VyIHRvIG1hcCB0aGUgbWlzc2luZyBoZWFkZXIgd2l0aCBhbiBleHN0aW5nIG9uZVxuXG4gICAgICAtLS0+XG4gICAgICA8ZGl2IHYtZm9yPVwiKHZhbHVlLCBrZXkpIGluIGhNaXNzaW5nXCI+XG4gICAgICAgIDxsYWJlbCB2LWlmPVwiIXZhbHVlXCI+e3trZXl9fSA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IHYtaWY9XCIhdmFsdWVcIiA6bmFtZT1cImtleVwiIDppZD1cImtleVwiIHYtb246Y2xpY2s9XCJnZXRTZWxlY3Rpb24oJGV2ZW50KVwiPlxuICAgICAgICAgIDxvcHRpb24+PGJyPk5ldyBoZWFkZXI8L2JyPjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJoIGluIGhlYWRlcnNcIiA6dmFsdWU9XCJoXCI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhaE1pc3NpbmdbaC52YWxdXCI+XG4gICAgICAgICAgICAgIHt7aC52YWx9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiIHYtaWY9XCJmaWxlTmFtZVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk5hbWU8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJOYW1lIHlvdXIgdGltZWxpbmVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cIiFlcnJvclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiB2LWlmPVwiZmlsZU5hbWVcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0ubmFtZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiTmFtZSB5b3VyIHRpbWVsaW5lXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCIgdi1pZj1cImZpbGVOYW1lICYmIHBlcmNlbnRDb21wbGV0ZWQgPT09IDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8YnIgLz5cbiAgICA8Yi1wcm9ncmVzc1xuICAgICAgdi1pZj1cInBlcmNlbnRDb21wbGV0ZWQgIT09IDBcIlxuICAgICAgOnZhbHVlPVwicGVyY2VudENvbXBsZXRlZFwiXG4gICAgICBzaG93LXZhbHVlXG4gICAgICBmb3JtYXQ9XCJwZXJjZW50XCJcbiAgICAgIHR5cGU9XCJpcy1pbmZvXCJcbiAgICAgIHNpemU9XCJpcy1tZWRpdW1cIlxuICAgID5cbiAgICAgIDxzcGFuIHYtaWY9XCJwZXJjZW50Q29tcGxldGVkID09PSAxMDBcIj5XYWl0aW5nIGZvciByZXF1ZXN0IHRvIGZpbmlzaC4uPC9zcGFuPlxuICAgIDwvYi1wcm9ncmVzcz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vdXRpbHMvUmVzdEFwaUNsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXJzOiBbXSwgLy8gaGVhZGVycyBpbiB0aGUgQ1NWIFxuICAgICAgaE1pc3NpbmcgOiB7fSwgXG4gICAgICBoZWFkZXJzTWFwcGluZyA6IHt9LFxuICAgICAgZm9ybToge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZmlsZTogJycsXG4gICAgICB9LFxuICAgICAgZmlsZU5hbWU6ICcnLCBcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIHBlcmNlbnRDb21wbGV0ZWQ6IDAsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0U2VsZWN0aW9uOiBmdW5jdGlvbihlKXtcbiAgICAgIC8qKlxuICAgICAgICogbWV0aG9kIHRvIG1hcCBvZiB0aGUgbWlzc2luZyBoZWFkZXJzXG4gICAgICAgKiBpdCB2ZXJpZmllcyBpZiBzb21lIGNvbmRpdGlvbnMgYXJlIG1ldCBiZWZvcmUgc3VibWl0dGluZyB0aGUgZm9ybSxcbiAgICAgICAqIGluIHBhcnRpY3VsYXI6XG4gICAgICAgKiAxLiBtaXNzaW5nIGhlYWRlcnMgbXVzdCBiZSBtYXAgd2l0aCBleHNpdGluZyBoZWFkZXJzIGluIHRoZSBDU1ZcbiAgICAgICAqIDIuIDIgb3IgbW9yZSBtaXNzaW5nIGhlYWRlcnMgY2FuIG5vdCBiZSBtYXBwZWQgdG8gdGhlIHNhbWUgZXhzaXRpbmcgaGVhZGVyXG4gICAgICAgKiAzLiBJZiBtaXNzaW5nIGhlYWRlciBjYW4gbm90IGJlIG1hcHBlZCB3aXRoIGFuIGV4aXN0aW5nIG9uZSwgdGhlbiwgXG4gICAgICAgKiAgICAgIGl0IGNhbiBiZSBcImNyZWF0ZWRcIiBhIG5ldyBvbmUgYW5kIGEgZGVmYXVsdCB2YWx1ZSBpcyBhc3NvY2lhdGVkIHRvIGVhY2ggcm93IGZvciB0aGF0IGhlYWRlclxuICAgICAgICovXG5cbiAgICAgICAgdmFyIGtleSA9IGUudGFyZ2V0Lm5hbWU7IC8vIGtleSA9IGRhdGV0aW1lIHwgbWVzc2FnZSB8IHRpbWVzdGFtcF9kZXNjXG4gICAgICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0Lm9wdGlvbnNbZS50YXJnZXQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0OyAvLyB2YWx1ZSA9IGV4aXN0aW5nIENTViBoZWFkZXJcbiAgICAgICAgdGhpcy5oZWFkZXJzTWFwcGluZ1trZXldWzBdID0gdmFsdWVcbiAgICAgICAgaWYodmFsdWUgPT09IFwiTmV3IGhlYWRlclwiKXsgLy8gYXNrIHRvIHRoZSB1c2VyIHRoZSBkZWZhdWx0IHJvdydzIHZhbHVlXG4gICAgICAgICAgdmFyIG5ld0hWYWwgPSBcIlwiXG4gICAgICAgICAgd2hpbGUoIW5ld0hWYWwpe1xuICAgICAgICAgICAgbmV3SFZhbCA9IHByb21wdChcIkluc2VydCB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhpcyBoZWFkZXJcIilcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5oZWFkZXJzTWFwcGluZ1trZXldWzFdID0gbmV3SFZhbFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLmhlYWRlcnNNYXBwaW5nW2tleV1bMV0gPSBcIlwiXG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgYWxsIHRoZSB2YWx1ZXMgb2YgaGVhZGVyc01hcHBpbmcgYW5kIHB1dCB0aGVtIGluIGFycmF5XG4gICAgICAgIGxldCBhbGxWYWx1ZXMgPSBbXVxuICAgICAgICBmb3IobGV0IGsgaW4gdGhpcy5oZWFkZXJzTWFwcGluZyl7XG4gICAgICAgICAgYWxsVmFsdWVzLnB1c2godGhpcy5oZWFkZXJzTWFwcGluZ1trXVswXSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIGNoZWNrIGlmIG1hcHBpbmcgaXMgY29tcGxldGVkLCBpLmUuLCBpZiB0aGVyZSBhcmUgbm90IGVtcHR5IG9yIG51bGwgZmllbGQgZm9yIHRoZSBtYXBwaW5nXG4gICAgICAgIGlmKCFhbGxWYWx1ZXMuc29tZShlID0+IChlPT09JycgfHwgIWUpKSl7IFxuICAgICAgICAgIC8vIDIuIGNoZWNrIGlmIGFsbCBzZWxlY3RlZCBoZWFkZXJzIGFyZSB1bmlxdWUgKGV4Y2VwdCBmcm9tICdOZXcgaGVhZGVyJylcbiAgICAgICAgICBhbGxWYWx1ZXMgPSBhbGxWYWx1ZXMuZmlsdGVyKGUgPT4gZSAhPT0gXCJOZXcgaGVhZGVyXCIpXG4gICAgICAgICAgaWYoYWxsVmFsdWVzLmxlbmd0aCA9PT0gbmV3IFNldChhbGxWYWx1ZXMpLnNpemUpe1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IFwiXCJcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBkdXBsaWNhdGVzIGluIHRoZSBzZWxlY3Rpb24gbGlzdFxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IFwiTmV3IGhlYWRlcnMgbWFwcGluZyBjb250YWlucyBkdXBsaWNhdGVzXCIgIFxuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgLy8gbWVhbmluZzogRXhpc3QgYXQgbGVhc3QgMSBlbGVtZW50IG9mIGFsbFZhbHVlcyB0aGF0IGlzIG51bGwgb3IgZW1wdHlcbiAgICAgICAgICB0aGlzLmVycm9yID0gXCJGaW5pc2ggaGVhZGVycyBzZWxlY3Rpb25cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBjbGVhckZvcm1EYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZm9ybS5uYW1lID0gJydcbiAgICAgIHRoaXMuZm9ybS5maWxlID0gJydcbiAgICAgIHRoaXMuZmlsZU5hbWUgPSAnJ1xuICAgICAgdGhpcy5oZWFkZXJzTWFwcGluZyA9IHtcbiAgICAgICAgXCJkYXRldGltZVwiIDogW251bGwsIG51bGxdLFxuICAgICAgICBcIm1lc3NhZ2VcIiA6IFtudWxsLCBudWxsXSxcbiAgICAgICAgXCJ0aW1lc3RhbXBfZGVzY1wiIDogW251bGwsIG51bGxdLFxuICAgICAgfVxuICAgICAgdGhpcy5oTWlzc2luZyA9IHtcbiAgICAgICAgXCJkYXRldGltZVwiIDogdHJ1ZSxcbiAgICAgICAgXCJtZXNzYWdlXCIgOiB0cnVlLFxuICAgICAgICBcInRpbWVzdGFtcF9kZXNjXCIgOiB0cnVlLFxuICAgICAgfVxuICAgIH0sXG4gICAgc3VibWl0Rm9ybTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5lcnJvciA9PT0gJ1BsZWFzZSBzZWxlY3QgYSBmaWxlIHdpdGggYSB2YWxpZCBleHRlbnNpb24nICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgdGhpcy5mb3JtLmZpbGUpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLmZvcm0ubmFtZSlcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvdmlkZXInLCAnV2ViVXBsb2FkJylcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGV4dCcsIHRoaXMuZmlsZU5hbWUpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RvdGFsX2ZpbGVfc2l6ZScsIHRoaXMuZm9ybS5maWxlLnNpemUpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NrZXRjaF9pZCcsIHRoaXMuJHN0b3JlLnN0YXRlLnNrZXRjaC5pZClcbiAgICAgIHZhciBoTWFwcGluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuaGVhZGVyc01hcHBpbmcpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2hlYWRlcnNNYXBwaW5nJywgaE1hcHBpbmcpXG4gICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgfSxcbiAgICAgICAgb25VcGxvYWRQcm9ncmVzczogZnVuY3Rpb24ocHJvZ3Jlc3NFdmVudCkge1xuICAgICAgICAgIHRoaXMucGVyY2VudENvbXBsZXRlZCA9IE1hdGgucm91bmQoKHByb2dyZXNzRXZlbnQubG9hZGVkICogMTAwKSAvIHByb2dyZXNzRXZlbnQudG90YWwpXG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIH1cbiAgICAgIEFwaUNsaWVudC51cGxvYWRUaW1lbGluZShmb3JtRGF0YSwgY29uZmlnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3VwZGF0ZVNrZXRjaCcsIHRoaXMuJHN0b3JlLnN0YXRlLnNrZXRjaC5pZClcbiAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGVNb2RhbCcpXG4gICAgICAgICAgdGhpcy5jbGVhckZvcm1EYXRhKClcbiAgICAgICAgICB0aGlzLnBlcmNlbnRDb21wbGV0ZWQgPSAwXG4gICAgICAgfSlcbiAgICAgICAuY2F0Y2goZSA9PiB7fSkgXG4gICAgfSxcbiAgICBzZXRGaWxlTmFtZTogZnVuY3Rpb24oZmlsZUxpc3QpIHtcblxuICAgICAgLyogMS4gSW5pdGlsaXplIHRoZSB2YXJpYWJsZXMgKi9cblxuICAgICAgLy8gdGhpcyBtYXBwaW5nIHJlcHJlc2VudHMgYSBkaWN0aW9uYXJ5IHdoZXJlIGZvciBlYWNoIG1hbmRhdG9yeSBmaWVsZHMgd2UgYXNzaWduXG4gICAgICAvLyAwLiBuYW1lIG9mIHRoZSBjb2x1bW4gdG8gbWFwXG4gICAgICAvLyAxLiB2YWx1ZSBvZiB0aGUgY29sdW1uIGluIGNhc2Ugd2Ugd2FudCB0byBpbnNlcnQgYSBuZXcgb25lXG4gICAgICAvLyAgICAgIGUuZy4sIHdlIGRvIG5vdCBoYXZlIHRpbWVzdGFtcF9kZXNjOiB3ZSBhZGQgYSBuZXcgb25lICh0aGUgdmFsdWUgb2Ygcm93cyBpbiB0aGlzIGNvbHVtblxuICAgICAgLy8gICAgICAgICAgICB3aWxsIGJlIHRoZSBzYW1lKVxuICAgICAgdGhpcy5oZWFkZXJzTWFwcGluZyA9IHtcbiAgICAgICAgXCJkYXRldGltZVwiIDogW251bGwsIG51bGxdLFxuICAgICAgICBcIm1lc3NhZ2VcIiA6IFtudWxsLCBudWxsXSxcbiAgICAgICAgXCJ0aW1lc3RhbXBfZGVzY1wiIDogW251bGwsIG51bGxdLFxuICAgICAgfVxuICAgICAgLy8gaGVhZGVycyBtaXNzaW5nIGluIHRoZSBDU1Y6XG4gICAgICAvLyBpZiB0aGUgaGVhZGVycyBpcyBwcmVzZW50LCB0aGVuIHRoZSB2YWx1ZSBvZiB0aGUgY29ycmVzcG9uZGluZyBmaWVsZCBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgdGhpcy5oTWlzc2luZyA9IHtcbiAgICAgICAgXCJkYXRldGltZVwiIDogdHJ1ZSxcbiAgICAgICAgXCJtZXNzYWdlXCIgOiB0cnVlLFxuICAgICAgICBcInRpbWVzdGFtcF9kZXNjXCIgOiB0cnVlLFxuICAgICAgfVxuICAgICAgdGhpcy5oZWFkZXJzID0gW11cbiAgICAgIGxldCBmaWxlTmFtZSA9IGZpbGVMaXN0WzBdLm5hbWVcbiAgICAgIGxldCBmaWxlRXh0ZW5zaW9uID0gZmlsZU5hbWUuc3BsaXQoJy4nKVsxXVxuICAgICAgdGhpcy5mb3JtLmZpbGUgPSBmaWxlTGlzdFswXVxuICAgICAgdGhpcy5mb3JtLm5hbWUgPSBmaWxlTmFtZVxuICAgICAgICAuc3BsaXQoJy4nKVxuICAgICAgICAuc2xpY2UoMCwgLTEpXG4gICAgICAgIC5qb2luKCcuJylcbiAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZVxuICAgICAgdGhpcy5lcnJvciA9ICcnXG4gICAgICBcbiAgICAgIC8qIDIuIENoZWNrIGZvciB0aGUgY29ycmVjdCBleHRlbnNpb24gKi9cbiAgICAgIGxldCBhbGxvd2VkRXh0ZW5zaW9ucyA9IFsnY3N2JywgJ2pzb24nLCAnanNvbmwnLCAncGxhc28nXVxuICAgICAgaWYgKCFhbGxvd2VkRXh0ZW5zaW9ucy5pbmNsdWRlcyhmaWxlRXh0ZW5zaW9uKSkge1xuICAgICAgICB0aGlzLmVycm9yID0gJ1BsZWFzZSBzZWxlY3QgYSBmaWxlIHdpdGggYSB2YWxpZCBleHRlbnNpb24nXG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IG5lZWQgdG8gdmVyaWZ5IHdpdGggSlNPTkwgZmlsZXNcblxuICAgICAgLyogMy4gTWFuYWdlIENTViBtaXNzaW5nIGhlYWRlcnMgKi9cblxuICAgICAgaWYoZmlsZUV4dGVuc2lvbiA9PT0gXCJjc3ZcIil7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHZhciBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhZmlsZVwiKS5maWxlc1swXVxuICAgICAgICBcbiAgICAgICAgLy8gcmVhZCBvbmx5IDEwMDAgQiAtLT4gaXQgaXMgcmVhc29uYWJsZSB0aGF0IHRoZSBoZWFkZXIgb2YgdGhlIENTViBmaWxlIGVuZHMgYmVmb3JlIHRoZSAxMDAwXiBieXRlLlxuICAgICAgICAvLyB0aGlzIGlzIGRvbmUgdG8gcHJldmVudCBKUyByZWFkaW5nIGEgbGFyZ2UgQ1NWIGZpbGUgKEdCcykgXG4gICAgICAgIHZhciB2dWVKUyA9IHRoaXNcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZS5zbGljZSgwLCAxMDAwKSlcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnJlYWR5U3RhdGUgPT09IEZpbGVSZWFkZXIuRE9ORSl7ICAvLyBET05FID09IDJcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8qIDNhLiBFeHRyYWN0IHRoZSBoZWFkZXJzIGZyb20gdGhlIENTViovIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdmFyIGRhdGEgPSBlLnRhcmdldC5yZXN1bHRcbiAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBkYXRhLnNwbGl0KFwiXFxuXCIpWzBdIC8vPC0tLSBpcyB0aGVyZSBhIGJldHRlciB3YXkgdG8gc3BsaXQgY29sdW1ucz9cbiAgICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc3BsaXQoXCIsXCIpIC8vIGFsbCAgaGVhZGVycyBvZiBDU1YgdXBsb2FkZWRcbiAgICAgICAgICAgICAgLy8gQklHIEFTU1VNUFRJT046IENTViBzZXBhcmF0b3IgaXMgJywnXG4gICAgICAgICAgICAgIGZvcihsZXQgaSBpbiBoZWFkZXJzKXtcbiAgICAgICAgICAgICAgICB2dWVKUy5oZWFkZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZCA6IGksXG4gICAgICAgICAgICAgICAgICAgIHZhbCA6IGhlYWRlcnNbaV1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLyogM2IuIENoZWNrIGlmIHRoZSBtYW5kYXRvcnkgaGVhZGVycyBhcmUgcHJlc2VudCBpbiB0aGUgZXh0cmFjdGVkIG9uZXMgKi9cblxuICAgICAgICAgICAgICBpZiggaGVhZGVycy5pbmRleE9mKFwiZGF0ZXRpbWVcIikgPCAwICl7XG4gICAgICAgICAgICAgICAgICB2dWVKUy5oTWlzc2luZ1tcImRhdGV0aW1lXCJdID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgZGVsZXRlIHZ1ZUpTLmhlYWRlcnNNYXBwaW5nW1wiZGF0ZXRpbWVcIl1cbiAgICAgICAgICAgICAgaWYoIGhlYWRlcnMuaW5kZXhPZihcIm1lc3NhZ2VcIikgPCAwICl7XG4gICAgICAgICAgICAgICAgICB2dWVKUy5oTWlzc2luZ1tcIm1lc3NhZ2VcIl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgICAgICBkZWxldGUgdnVlSlMuaGVhZGVyc01hcHBpbmdbXCJtZXNzYWdlXCJdXG4gICAgICAgICAgICAgIGlmKCBoZWFkZXJzLmluZGV4T2YoXCJ0aW1lc3RhbXBfZGVzY1wiKSA8IDAgKXtcbiAgICAgICAgICAgICAgICB2dWVKUy5oTWlzc2luZ1tcInRpbWVzdGFtcF9kZXNjXCJdID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgZGVsZXRlIHZ1ZUpTLmhlYWRlcnNNYXBwaW5nW1widGltZXN0YW1wX2Rlc2NcIl1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGxldCBoTWlzc2luZ0FycmF5ID0gdnVlSlMuaXNITWlzc2luZygpXG4gICAgICAgICAgICAgIGlmIChoTWlzc2luZ0FycmF5Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZ1ZUpTLmVycm9yID0gJ01pc3NpbmcgaGVhZGVyczogJyArIGhNaXNzaW5nQXJyYXkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgICAgICAgXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0hNaXNzaW5nOiBmdW5jdGlvbigpe1xuICAgICAgLyoqXG4gICAgICAgKiBpc0hNaXNzaW5nIC0tPiBpcyB0aGVyZSBhIG1pc3NpbmcgaGVhZGVyP1xuICAgICAgICogdmVyaWZ5IGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBtaXNzaW5nIGhlYWRlclxuICAgICAgICogaXQgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBtaXNzaW5nIGhlYWRlcnNcbiAgICAgICAqL1xuICAgICAgbGV0IGhNaXNzaW5nQXJyYXkgPSBbXSBcbiAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuaE1pc3Npbmcpe1xuICAgICAgICBpZighdGhpcy5oTWlzc2luZ1trZXldKVxuICAgICAgICAgIGhNaXNzaW5nQXJyYXkucHVzaChrZXkpXG4gICAgICB9XG4gICAgICByZXR1cm4gaE1pc3NpbmdBcnJheVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBaE1BO0FBZkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Common/UploadForm.vue?vue&type=script&lang=js&\n");

/***/ })

})