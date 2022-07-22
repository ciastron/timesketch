webpackHotUpdate("index",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Common/UploadForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/UploadForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\n/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_RestApiClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/RestApiClient */ \"./src/utils/RestApiClient.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      headers: [],\n      // headers in the CSV \n      headerMissing: {},\n      headersMapping: {},\n      form: {\n        name: '',\n        file: ''\n      },\n      fileName: '',\n      error: '',\n      percentCompleted: 0\n    };\n  },\n  methods: {\n    getSelection: function getSelection(e) {\n      /**\n       * method to map of the missing headers\n       * it verifies if some conditions are met before submitting the form,\n       * in particular:\n       * 1. missing headers must be map with exsiting headers in the CSV\n       * 2. 2 or more missing headers can not be mapped to the same exsiting header\n       * 3. If missing header can not be mapped with an existing one, then, \n       *      it can be \"created\" a new one and a default value is associated to each row for that header\n       */\n      var key = e.target.name; // key = datetime | message | timestamp_desc\n\n      var value = e.target.options[e.target.options.selectedIndex].text; // value = existing CSV header\n\n      this.headersMapping[key][0] = value;\n\n      if (value === \"New header\") {\n        // ask to the user the default row's value\n        var newHVal = \"\";\n\n        while (!newHVal) {\n          newHVal = prompt(\"Insert the default value for this header\");\n        }\n\n        this.headersMapping[key][1] = newHVal;\n      } else {\n        this.headersMapping[key][1] = \"\";\n      } // get all the values of headersMapping and put them in array\n\n\n      var allValues = [];\n\n      for (var k in this.headersMapping) {\n        allValues.push(this.headersMapping[k][0]);\n      } // 1. check if mapping is completed, i.e., if there are not empty or null field for the mapping\n\n\n      if (!allValues.some(function (e) {\n        return e === '' || !e;\n      })) {\n        // 2. check if all selected headers are unique (except from 'New header')\n        allValues = allValues.filter(function (e) {\n          return e !== \"New header\";\n        });\n\n        if (allValues.length === new Set(allValues).size) {\n          this.error = \"\";\n        } else {\n          // there are duplicates in the selection list\n          this.error = \"New headers mapping contains duplicates\";\n        }\n      } else {\n        // meaning: Exist at least 1 element of allValues that is null or empty\n        this.error = \"Finish headers selection\";\n      }\n    },\n    clearFormData: function clearFormData() {\n      this.form.name = '';\n      this.form.file = '';\n      this.fileName = '';\n      this.headersMapping = {\n        \"datetime\": [null, null],\n        \"message\": [null, null],\n        \"timestamp_desc\": [null, null]\n      };\n      this.headerMissing = {\n        \"datetime\": true,\n        \"message\": true,\n        \"timestamp_desc\": true\n      };\n    },\n    submitForm: function submitForm() {\n      var _this = this;\n\n      if (this.error === 'Please select a file with a valid extension') {\n        return;\n      }\n\n      var formData = new FormData();\n      formData.append('file', this.form.file);\n      formData.append('name', this.form.name);\n      formData.append('provider', 'WebUpload');\n      formData.append('context', this.fileName);\n      formData.append('total_file_size', this.form.file.size);\n      formData.append('sketch_id', this.$store.state.sketch.id);\n      var hMapping = JSON.stringify(this.headersMapping);\n      formData.append('headersMapping', hMapping);\n      var config = {\n        headers: {\n          'Content-Type': 'multipart/form-data'\n        },\n        onUploadProgress: function (progressEvent) {\n          this.percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n        }.bind(this)\n      };\n      _utils_RestApiClient__WEBPACK_IMPORTED_MODULE_7__[\"default\"].uploadTimeline(formData, config).then(function (response) {\n        _this.$store.dispatch('updateSketch', _this.$store.state.sketch.id);\n\n        _this.$emit('toggleModal');\n\n        _this.clearFormData();\n\n        _this.percentCompleted = 0;\n      }).catch(function (e) {});\n    },\n    setFileName: function setFileName(fileList) {\n      /* 1. Initilize the variables */\n      // this mapping represents a dictionary where for each mandatory fields we assign\n      // 0. name of the column to map\n      // 1. value of the column in case we want to insert a new one\n      //      e.g., we do not have timestamp_desc: we add a new one (the value of rows in this column\n      //            will be the same)\n      this.headersMapping = {\n        \"datetime\": [null, null],\n        \"message\": [null, null],\n        \"timestamp_desc\": [null, null]\n      }; // headers missing in the CSV:\n      // if the headers is present, then the value of the corresponding field is set to true\n\n      this.headerMissing = {\n        \"datetime\": true,\n        \"message\": true,\n        \"timestamp_desc\": true\n      };\n      this.headers = [];\n      var fileName = fileList[0].name;\n      var fileExtension = fileName.split('.')[1];\n      this.form.file = fileList[0];\n      this.form.name = fileName.split('.').slice(0, -1).join('.');\n      this.fileName = fileName;\n      this.error = '';\n      /* 2. Check for the correct extension */\n\n      var allowedExtensions = ['csv', 'json', 'jsonl', 'plaso'];\n\n      if (!allowedExtensions.includes(fileExtension)) {\n        this.error = 'Please select a file with a valid extension';\n      } // TODO: need to verify with JSONL files\n\n      /* 3. Manage CSV missing headers */\n\n\n      if (fileExtension === \"csv\") {\n        var reader = new FileReader();\n        var file = document.getElementById(\"datafile\").files[0]; // read only 1000 B --> it is reasonable that the header of the CSV file ends before the 1000^ byte.\n        // this is done to prevent JS reading a large CSV file (GBs) \n\n        var vueJS = this;\n        reader.readAsText(file.slice(0, 1000));\n\n        reader.onloadend = function (e) {\n          if (e.target.readyState === FileReader.DONE) {\n            // DONE == 2\n\n            /* 3a. Extract the headers from the CSV */\n            var data = e.target.result;\n            var headers = data.split(\"\\n\")[0]; // <--- is there a better way to split columns?\n\n            headers = headers.split(\",\"); // all  headers of CSV uploaded\n            // BIG ASSUMPTION: CSV separator is ','\n\n            for (var i in headers) {\n              vueJS.headers.push({\n                id: i,\n                val: headers[i]\n              });\n            }\n            /* 3b. Check if the mandatory headers are present in the extracted ones */\n\n\n            if (headers.indexOf(\"datetime\") < 0) {\n              vueJS.headerMissing[\"datetime\"] = false;\n            } else delete vueJS.headersMapping[\"datetime\"];\n\n            if (headers.indexOf(\"message\") < 0) {\n              vueJS.headerMissingheaderMissing[\"message\"] = false;\n            } else delete vueJS.headersMapping[\"message\"];\n\n            if (headers.indexOf(\"timestamp_desc\") < 0) {\n              vueJS.hMissing[\"timestamp_desc\"] = false;\n            } else delete vueJS.headersMapping[\"timestamp_desc\"];\n\n            var hMissingArray = vueJS.isHMissing();\n\n            if (hMissingArray.length > 0) {\n              vueJS.error = 'Missing headers: ' + hMissingArray.toString();\n            }\n          }\n        };\n      }\n    },\n    isHMissing: function isHMissing() {\n      /**\n       * isHMissing --> is there a missing header?\n       * verify if there is at least one missing header\n       * it returns an array containing the missing headers\n       */\n      var hMissingArray = [];\n\n      for (var key in this.hMissing) {\n        if (!this.hMissing[key]) hMissingArray.push(key);\n      }\n\n      return hMissingArray;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL1VwbG9hZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9VcGxvYWRGb3JtLnZ1ZT8yOWUwIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS1cbkNvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInN1Ym1pdEZvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZSBoYXMtbmFtZVwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZpbGUtbGFiZWxcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImRhdGFmaWxlXCIgY2xhc3M9XCJmaWxlLWlucHV0XCIgdHlwZT1cImZpbGVcIiBuYW1lPVwicmVzdW1lXCIgdi1vbjpjaGFuZ2U9XCJzZXRGaWxlTmFtZSgkZXZlbnQudGFyZ2V0LmZpbGVzKVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGUtY3RhXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXBsb2FkXCI+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIENob29zZSBhIGZpbGXigKZcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlLW5hbWVcIiB2LWlmPVwiZmlsZU5hbWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFmaWxlTmFtZVwiPlBsZWFzZSBzZWxlY3QgYSBmaWxlPC9zcGFuPlxuICAgICAgICAgICAgICB7eyBmaWxlTmFtZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JcIj5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm1lc3NhZ2UgaXMtZGFuZ2VyIG1iLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgICAgICAge3sgZXJyb3IgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBcbiAgICAgIFxuICAgICAgTmV4dCBsaW5lcyBvZiBjb2RlIHJlcHJlc2VudCB0aGUgZHJvcGR3b24gbWVudVxuICAgICAgSXQgaXMgZHluYW1pY2FsbHkgZ2VuZXJhdGVkICh3aXRoIGFuIGV4dHJhIG9wdGlvbjogTmV3IGhlYWRlcikgdG8gYWxsb3dcbiAgICAgICAgdGhlIHVzZXIgdG8gbWFwIHRoZSBtaXNzaW5nIGhlYWRlciB3aXRoIGFuIGV4c3Rpbmcgb25lXG5cbiAgICAgIC0tPlxuICAgICAgPGRpdiB2LWZvcj1cIih2YWx1ZSwga2V5KSBpbiBoZWFkZXJNaXNzaW5nXCI+XG4gICAgICAgIDxsYWJlbCB2LWlmPVwiIXZhbHVlXCI+e3trZXl9fSA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IHYtaWY9XCIhdmFsdWVcIiA6bmFtZT1cImtleVwiIDppZD1cImtleVwiIHYtb246Y2xpY2s9XCJnZXRTZWxlY3Rpb24oJGV2ZW50KVwiPlxuICAgICAgICAgIDxvcHRpb24+PGJyPk5ldyBoZWFkZXI8L2JyPjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJoIGluIGhlYWRlcnNcIiA6dmFsdWU9XCJoXCI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhaE1pc3NpbmdbaC52YWxdXCI+XG4gICAgICAgICAgICAgIHt7aC52YWx9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiIHYtaWY9XCJmaWxlTmFtZVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk5hbWU8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJOYW1lIHlvdXIgdGltZWxpbmVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cIiFlcnJvclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiB2LWlmPVwiZmlsZU5hbWVcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0ubmFtZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiTmFtZSB5b3VyIHRpbWVsaW5lXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCIgdi1pZj1cImZpbGVOYW1lICYmIHBlcmNlbnRDb21wbGV0ZWQgPT09IDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8YnIgLz5cbiAgICA8Yi1wcm9ncmVzc1xuICAgICAgdi1pZj1cInBlcmNlbnRDb21wbGV0ZWQgIT09IDBcIlxuICAgICAgOnZhbHVlPVwicGVyY2VudENvbXBsZXRlZFwiXG4gICAgICBzaG93LXZhbHVlXG4gICAgICBmb3JtYXQ9XCJwZXJjZW50XCJcbiAgICAgIHR5cGU9XCJpcy1pbmZvXCJcbiAgICAgIHNpemU9XCJpcy1tZWRpdW1cIlxuICAgID5cbiAgICAgIDxzcGFuIHYtaWY9XCJwZXJjZW50Q29tcGxldGVkID09PSAxMDBcIj5XYWl0aW5nIGZvciByZXF1ZXN0IHRvIGZpbmlzaC4uPC9zcGFuPlxuICAgIDwvYi1wcm9ncmVzcz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vdXRpbHMvUmVzdEFwaUNsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXJzOiBbXSwgLy8gaGVhZGVycyBpbiB0aGUgQ1NWIFxuICAgICAgaGVhZGVyTWlzc2luZyA6IHt9LCBcbiAgICAgIGhlYWRlcnNNYXBwaW5nIDoge30sXG4gICAgICBmb3JtOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBmaWxlOiAnJyxcbiAgICAgIH0sXG4gICAgICBmaWxlTmFtZTogJycsIFxuICAgICAgZXJyb3I6ICcnLFxuICAgICAgcGVyY2VudENvbXBsZXRlZDogMCxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRTZWxlY3Rpb246IGZ1bmN0aW9uKGUpe1xuICAgICAgLyoqXG4gICAgICAgKiBtZXRob2QgdG8gbWFwIG9mIHRoZSBtaXNzaW5nIGhlYWRlcnNcbiAgICAgICAqIGl0IHZlcmlmaWVzIGlmIHNvbWUgY29uZGl0aW9ucyBhcmUgbWV0IGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLFxuICAgICAgICogaW4gcGFydGljdWxhcjpcbiAgICAgICAqIDEuIG1pc3NpbmcgaGVhZGVycyBtdXN0IGJlIG1hcCB3aXRoIGV4c2l0aW5nIGhlYWRlcnMgaW4gdGhlIENTVlxuICAgICAgICogMi4gMiBvciBtb3JlIG1pc3NpbmcgaGVhZGVycyBjYW4gbm90IGJlIG1hcHBlZCB0byB0aGUgc2FtZSBleHNpdGluZyBoZWFkZXJcbiAgICAgICAqIDMuIElmIG1pc3NpbmcgaGVhZGVyIGNhbiBub3QgYmUgbWFwcGVkIHdpdGggYW4gZXhpc3Rpbmcgb25lLCB0aGVuLCBcbiAgICAgICAqICAgICAgaXQgY2FuIGJlIFwiY3JlYXRlZFwiIGEgbmV3IG9uZSBhbmQgYSBkZWZhdWx0IHZhbHVlIGlzIGFzc29jaWF0ZWQgdG8gZWFjaCByb3cgZm9yIHRoYXQgaGVhZGVyXG4gICAgICAgKi9cblxuICAgICAgICB2YXIga2V5ID0gZS50YXJnZXQubmFtZTsgLy8ga2V5ID0gZGF0ZXRpbWUgfCBtZXNzYWdlIHwgdGltZXN0YW1wX2Rlc2NcbiAgICAgICAgdmFyIHZhbHVlID0gZS50YXJnZXQub3B0aW9uc1tlLnRhcmdldC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQ7IC8vIHZhbHVlID0gZXhpc3RpbmcgQ1NWIGhlYWRlclxuICAgICAgICB0aGlzLmhlYWRlcnNNYXBwaW5nW2tleV1bMF0gPSB2YWx1ZVxuICAgICAgICBpZih2YWx1ZSA9PT0gXCJOZXcgaGVhZGVyXCIpeyAvLyBhc2sgdG8gdGhlIHVzZXIgdGhlIGRlZmF1bHQgcm93J3MgdmFsdWVcbiAgICAgICAgICB2YXIgbmV3SFZhbCA9IFwiXCJcbiAgICAgICAgICB3aGlsZSghbmV3SFZhbCl7XG4gICAgICAgICAgICBuZXdIVmFsID0gcHJvbXB0KFwiSW5zZXJ0IHRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGlzIGhlYWRlclwiKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmhlYWRlcnNNYXBwaW5nW2tleV1bMV0gPSBuZXdIVmFsXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuaGVhZGVyc01hcHBpbmdba2V5XVsxXSA9IFwiXCJcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBhbGwgdGhlIHZhbHVlcyBvZiBoZWFkZXJzTWFwcGluZyBhbmQgcHV0IHRoZW0gaW4gYXJyYXlcbiAgICAgICAgbGV0IGFsbFZhbHVlcyA9IFtdXG4gICAgICAgIGZvcihsZXQgayBpbiB0aGlzLmhlYWRlcnNNYXBwaW5nKXtcbiAgICAgICAgICBhbGxWYWx1ZXMucHVzaCh0aGlzLmhlYWRlcnNNYXBwaW5nW2tdWzBdKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gMS4gY2hlY2sgaWYgbWFwcGluZyBpcyBjb21wbGV0ZWQsIGkuZS4sIGlmIHRoZXJlIGFyZSBub3QgZW1wdHkgb3IgbnVsbCBmaWVsZCBmb3IgdGhlIG1hcHBpbmdcbiAgICAgICAgaWYoIWFsbFZhbHVlcy5zb21lKGUgPT4gKGU9PT0nJyB8fCAhZSkpKXsgXG4gICAgICAgICAgLy8gMi4gY2hlY2sgaWYgYWxsIHNlbGVjdGVkIGhlYWRlcnMgYXJlIHVuaXF1ZSAoZXhjZXB0IGZyb20gJ05ldyBoZWFkZXInKVxuICAgICAgICAgIGFsbFZhbHVlcyA9IGFsbFZhbHVlcy5maWx0ZXIoZSA9PiBlICE9PSBcIk5ldyBoZWFkZXJcIilcbiAgICAgICAgICBpZihhbGxWYWx1ZXMubGVuZ3RoID09PSBuZXcgU2V0KGFsbFZhbHVlcykuc2l6ZSl7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gXCJcIlxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy8gdGhlcmUgYXJlIGR1cGxpY2F0ZXMgaW4gdGhlIHNlbGVjdGlvbiBsaXN0XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gXCJOZXcgaGVhZGVycyBtYXBwaW5nIGNvbnRhaW5zIGR1cGxpY2F0ZXNcIiAgXG4gICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAvLyBtZWFuaW5nOiBFeGlzdCBhdCBsZWFzdCAxIGVsZW1lbnQgb2YgYWxsVmFsdWVzIHRoYXQgaXMgbnVsbCBvciBlbXB0eVxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBcIkZpbmlzaCBoZWFkZXJzIHNlbGVjdGlvblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsZWFyRm9ybURhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5mb3JtLm5hbWUgPSAnJ1xuICAgICAgdGhpcy5mb3JtLmZpbGUgPSAnJ1xuICAgICAgdGhpcy5maWxlTmFtZSA9ICcnXG4gICAgICB0aGlzLmhlYWRlcnNNYXBwaW5nID0ge1xuICAgICAgICBcImRhdGV0aW1lXCIgOiBbbnVsbCwgbnVsbF0sXG4gICAgICAgIFwibWVzc2FnZVwiIDogW251bGwsIG51bGxdLFxuICAgICAgICBcInRpbWVzdGFtcF9kZXNjXCIgOiBbbnVsbCwgbnVsbF0sXG4gICAgICB9XG4gICAgICB0aGlzLmhlYWRlck1pc3NpbmcgPSB7XG4gICAgICAgIFwiZGF0ZXRpbWVcIiA6IHRydWUsXG4gICAgICAgIFwibWVzc2FnZVwiIDogdHJ1ZSxcbiAgICAgICAgXCJ0aW1lc3RhbXBfZGVzY1wiIDogdHJ1ZSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1Ym1pdEZvcm06IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuZXJyb3IgPT09ICdQbGVhc2Ugc2VsZWN0IGEgZmlsZSB3aXRoIGEgdmFsaWQgZXh0ZW5zaW9uJyApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHRoaXMuZm9ybS5maWxlKVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5mb3JtLm5hbWUpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb3ZpZGVyJywgJ1dlYlVwbG9hZCcpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRleHQnLCB0aGlzLmZpbGVOYW1lKVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b3RhbF9maWxlX3NpemUnLCB0aGlzLmZvcm0uZmlsZS5zaXplKVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdza2V0Y2hfaWQnLCB0aGlzLiRzdG9yZS5zdGF0ZS5za2V0Y2guaWQpXG4gICAgICB2YXIgaE1hcHBpbmcgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmhlYWRlcnNNYXBwaW5nKVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdoZWFkZXJzTWFwcGluZycsIGhNYXBwaW5nKVxuICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uKHByb2dyZXNzRXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnBlcmNlbnRDb21wbGV0ZWQgPSBNYXRoLnJvdW5kKChwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICB9XG4gICAgICBBcGlDbGllbnQudXBsb2FkVGltZWxpbmUoZm9ybURhdGEsIGNvbmZpZylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCd1cGRhdGVTa2V0Y2gnLCB0aGlzLiRzdG9yZS5zdGF0ZS5za2V0Y2guaWQpXG4gICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlTW9kYWwnKVxuICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRGF0YSgpXG4gICAgICAgICAgdGhpcy5wZXJjZW50Q29tcGxldGVkID0gMFxuICAgICAgIH0pXG4gICAgICAgLmNhdGNoKGUgPT4ge30pIFxuICAgIH0sXG4gICAgc2V0RmlsZU5hbWU6IGZ1bmN0aW9uKGZpbGVMaXN0KSB7XG5cbiAgICAgIC8qIDEuIEluaXRpbGl6ZSB0aGUgdmFyaWFibGVzICovXG5cbiAgICAgIC8vIHRoaXMgbWFwcGluZyByZXByZXNlbnRzIGEgZGljdGlvbmFyeSB3aGVyZSBmb3IgZWFjaCBtYW5kYXRvcnkgZmllbGRzIHdlIGFzc2lnblxuICAgICAgLy8gMC4gbmFtZSBvZiB0aGUgY29sdW1uIHRvIG1hcFxuICAgICAgLy8gMS4gdmFsdWUgb2YgdGhlIGNvbHVtbiBpbiBjYXNlIHdlIHdhbnQgdG8gaW5zZXJ0IGEgbmV3IG9uZVxuICAgICAgLy8gICAgICBlLmcuLCB3ZSBkbyBub3QgaGF2ZSB0aW1lc3RhbXBfZGVzYzogd2UgYWRkIGEgbmV3IG9uZSAodGhlIHZhbHVlIG9mIHJvd3MgaW4gdGhpcyBjb2x1bW5cbiAgICAgIC8vICAgICAgICAgICAgd2lsbCBiZSB0aGUgc2FtZSlcbiAgICAgIHRoaXMuaGVhZGVyc01hcHBpbmcgPSB7XG4gICAgICAgIFwiZGF0ZXRpbWVcIiA6IFtudWxsLCBudWxsXSxcbiAgICAgICAgXCJtZXNzYWdlXCIgOiBbbnVsbCwgbnVsbF0sXG4gICAgICAgIFwidGltZXN0YW1wX2Rlc2NcIiA6IFtudWxsLCBudWxsXSxcbiAgICAgIH1cbiAgICAgIC8vIGhlYWRlcnMgbWlzc2luZyBpbiB0aGUgQ1NWOlxuICAgICAgLy8gaWYgdGhlIGhlYWRlcnMgaXMgcHJlc2VudCwgdGhlbiB0aGUgdmFsdWUgb2YgdGhlIGNvcnJlc3BvbmRpbmcgZmllbGQgaXMgc2V0IHRvIHRydWVcbiAgICAgIHRoaXMuaGVhZGVyTWlzc2luZyA9IHtcbiAgICAgICAgXCJkYXRldGltZVwiIDogdHJ1ZSxcbiAgICAgICAgXCJtZXNzYWdlXCIgOiB0cnVlLFxuICAgICAgICBcInRpbWVzdGFtcF9kZXNjXCIgOiB0cnVlLFxuICAgICAgfVxuICAgICAgdGhpcy5oZWFkZXJzID0gW11cbiAgICAgIGxldCBmaWxlTmFtZSA9IGZpbGVMaXN0WzBdLm5hbWVcbiAgICAgIGxldCBmaWxlRXh0ZW5zaW9uID0gZmlsZU5hbWUuc3BsaXQoJy4nKVsxXVxuICAgICAgdGhpcy5mb3JtLmZpbGUgPSBmaWxlTGlzdFswXVxuICAgICAgdGhpcy5mb3JtLm5hbWUgPSBmaWxlTmFtZVxuICAgICAgICAuc3BsaXQoJy4nKVxuICAgICAgICAuc2xpY2UoMCwgLTEpXG4gICAgICAgIC5qb2luKCcuJylcbiAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZVxuICAgICAgdGhpcy5lcnJvciA9ICcnXG4gICAgICBcbiAgICAgIC8qIDIuIENoZWNrIGZvciB0aGUgY29ycmVjdCBleHRlbnNpb24gKi9cbiAgICAgIGxldCBhbGxvd2VkRXh0ZW5zaW9ucyA9IFsnY3N2JywgJ2pzb24nLCAnanNvbmwnLCAncGxhc28nXVxuICAgICAgaWYgKCFhbGxvd2VkRXh0ZW5zaW9ucy5pbmNsdWRlcyhmaWxlRXh0ZW5zaW9uKSkge1xuICAgICAgICB0aGlzLmVycm9yID0gJ1BsZWFzZSBzZWxlY3QgYSBmaWxlIHdpdGggYSB2YWxpZCBleHRlbnNpb24nXG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IG5lZWQgdG8gdmVyaWZ5IHdpdGggSlNPTkwgZmlsZXNcblxuICAgICAgLyogMy4gTWFuYWdlIENTViBtaXNzaW5nIGhlYWRlcnMgKi9cblxuICAgICAgaWYoZmlsZUV4dGVuc2lvbiA9PT0gXCJjc3ZcIil7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHZhciBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhZmlsZVwiKS5maWxlc1swXVxuICAgICAgICBcbiAgICAgICAgLy8gcmVhZCBvbmx5IDEwMDAgQiAtLT4gaXQgaXMgcmVhc29uYWJsZSB0aGF0IHRoZSBoZWFkZXIgb2YgdGhlIENTViBmaWxlIGVuZHMgYmVmb3JlIHRoZSAxMDAwXiBieXRlLlxuICAgICAgICAvLyB0aGlzIGlzIGRvbmUgdG8gcHJldmVudCBKUyByZWFkaW5nIGEgbGFyZ2UgQ1NWIGZpbGUgKEdCcykgXG4gICAgICAgIHZhciB2dWVKUyA9IHRoaXNcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZS5zbGljZSgwLCAxMDAwKSlcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnJlYWR5U3RhdGUgPT09IEZpbGVSZWFkZXIuRE9ORSl7ICAvLyBET05FID09IDJcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8qIDNhLiBFeHRyYWN0IHRoZSBoZWFkZXJzIGZyb20gdGhlIENTViAqLyBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHZhciBkYXRhID0gZS50YXJnZXQucmVzdWx0XG4gICAgICAgICAgICAgIHZhciBoZWFkZXJzID0gZGF0YS5zcGxpdChcIlxcblwiKVswXSAvLyA8LS0tIGlzIHRoZXJlIGEgYmV0dGVyIHdheSB0byBzcGxpdCBjb2x1bW5zP1xuICAgICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zcGxpdChcIixcIikgLy8gYWxsICBoZWFkZXJzIG9mIENTViB1cGxvYWRlZFxuICAgICAgICAgICAgICAvLyBCSUcgQVNTVU1QVElPTjogQ1NWIHNlcGFyYXRvciBpcyAnLCdcbiAgICAgICAgICAgICAgZm9yKGxldCBpIGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgICAgIHZ1ZUpTLmhlYWRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkIDogaSxcbiAgICAgICAgICAgICAgICAgICAgdmFsIDogaGVhZGVyc1tpXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvKiAzYi4gQ2hlY2sgaWYgdGhlIG1hbmRhdG9yeSBoZWFkZXJzIGFyZSBwcmVzZW50IGluIHRoZSBleHRyYWN0ZWQgb25lcyAqL1xuXG4gICAgICAgICAgICAgIGlmKCBoZWFkZXJzLmluZGV4T2YoXCJkYXRldGltZVwiKSA8IDAgKXtcbiAgICAgICAgICAgICAgICAgIHZ1ZUpTLmhlYWRlck1pc3NpbmdbXCJkYXRldGltZVwiXSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB2dWVKUy5oZWFkZXJzTWFwcGluZ1tcImRhdGV0aW1lXCJdXG4gICAgICAgICAgICAgIGlmKCBoZWFkZXJzLmluZGV4T2YoXCJtZXNzYWdlXCIpIDwgMCApe1xuICAgICAgICAgICAgICAgICAgdnVlSlMuaGVhZGVyTWlzc2luZ2hlYWRlck1pc3NpbmdbXCJtZXNzYWdlXCJdID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgZGVsZXRlIHZ1ZUpTLmhlYWRlcnNNYXBwaW5nW1wibWVzc2FnZVwiXVxuICAgICAgICAgICAgICBpZiggaGVhZGVycy5pbmRleE9mKFwidGltZXN0YW1wX2Rlc2NcIikgPCAwICl7XG4gICAgICAgICAgICAgICAgdnVlSlMuaE1pc3NpbmdbXCJ0aW1lc3RhbXBfZGVzY1wiXSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB2dWVKUy5oZWFkZXJzTWFwcGluZ1tcInRpbWVzdGFtcF9kZXNjXCJdXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgaE1pc3NpbmdBcnJheSA9IHZ1ZUpTLmlzSE1pc3NpbmcoKVxuICAgICAgICAgICAgICBpZiAoaE1pc3NpbmdBcnJheS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB2dWVKUy5lcnJvciA9ICdNaXNzaW5nIGhlYWRlcnM6ICcgKyBoTWlzc2luZ0FycmF5LnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgIFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNITWlzc2luZzogZnVuY3Rpb24oKXtcbiAgICAgIC8qKlxuICAgICAgICogaXNITWlzc2luZyAtLT4gaXMgdGhlcmUgYSBtaXNzaW5nIGhlYWRlcj9cbiAgICAgICAqIHZlcmlmeSBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgbWlzc2luZyBoZWFkZXJcbiAgICAgICAqIGl0IHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbWlzc2luZyBoZWFkZXJzXG4gICAgICAgKi9cbiAgICAgIGxldCBoTWlzc2luZ0FycmF5ID0gW10gXG4gICAgICBmb3IobGV0IGtleSBpbiB0aGlzLmhNaXNzaW5nKXtcbiAgICAgICAgaWYoIXRoaXMuaE1pc3Npbmdba2V5XSlcbiAgICAgICAgICBoTWlzc2luZ0FycmF5LnB1c2goa2V5KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhNaXNzaW5nQXJyYXlcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQWhNQTtBQWZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Common/UploadForm.vue?vue&type=script&lang=js&\n");

/***/ })

})