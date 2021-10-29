/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_starch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/starch */ \"./src/scripts/starch.js\");\n/* harmony import */ var _scripts_levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/levels */ \"./src/scripts/levels.js\");\n/* harmony import */ var _scripts_levels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_levels__WEBPACK_IMPORTED_MODULE_2__);\n\n\n //===============================================\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Hello World\");\n  var main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n}); //================================================//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0FHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQTZDLFlBQU07QUFFbkRDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsTUFBSVIsd0RBQUosQ0FBWU8sSUFBWjtBQUVDLENBTkQsR0FPQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Noby1wbGF0ZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5pbXBvcnQgc3RhcmNoIGZyb20gXCIuL3NjcmlwdHMvc3RhcmNoXCI7XG5pbXBvcnQgbGV2ZWxzIGZyb20gXCIuL3NjcmlwdHMvbGV2ZWxzXCI7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCkgPT4ge1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbm5ldyBFeGFtcGxlKG1haW4pO1xuXG59KVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0iXSwibmFtZXMiOlsiRXhhbXBsZSIsInN0YXJjaCIsImxldmVscyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Example = /*#__PURE__*/function () {\n  function Example(ele) {\n    _classCallCheck(this, Example);\n\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>I'm Alive! </h1>\";\n    this.handleclick = this.handleclick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleclick);\n  }\n\n  _createClass(Example, [{\n    key: \"handleclick\",\n    value: function handleclick() {\n      this.ele.children[0].innerText = \"Ouch!\";\n    }\n  }]);\n\n  return Example;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDSixtQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtBLEdBQUwsQ0FBU0MsU0FBVCxHQUFxQixzQkFBckI7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0gsR0FBTCxDQUFTSSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLRixXQUF4QztBQUNEOzs7O1dBRUQsdUJBQWM7QUFDWixXQUFLRixHQUFMLENBQVNLLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUJDLFNBQXJCLEdBQWlDLE9BQWpDO0FBQ0Q7Ozs7OztBQUdILCtEQUFlUCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hvLXBsYXRlLXByb2plY3QvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZXtcbiAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgdGhpcy5lbGUgPSBlbGU7IFxuICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkknbSBBbGl2ZSEgPC9oMT5cIjtcbiAgICBcbiAgICB0aGlzLmhhbmRsZWNsaWNrID0gdGhpcy5oYW5kbGVjbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZWNsaWNrKTtcbiAgfVxuXG4gIGhhbmRsZWNsaWNrKCkge1xuICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImVsZSIsImlubmVySFRNTCIsImhhbmRsZWNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/levels.js":
/*!*******************************!*\
  !*** ./src/scripts/levels.js ***!
  \*******************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/kenny/cho-plate-project/src/scripts/levels.js: Unexpected token (3:9)\n\n\u001b[0m \u001b[90m 1 |\u001b[39m \u001b[36mconst\u001b[39m levels \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 2 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 |\u001b[39m   level1 \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 |\u001b[39m     food\u001b[33m:\u001b[39m [\u001b[32m\"white rice\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"blueberry muffin\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"bagel\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m     carbMax\u001b[33m:\u001b[39m \u001b[35m5\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 |\u001b[39m   }\u001b[33m,\u001b[39m\u001b[0m\n    at Parser._raise (/home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:541:17)\n    at Parser.raiseWithData (/home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:534:17)\n    at Parser.raise (/home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:495:17)\n    at Parser.unexpected (/home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:3550:16)\n    at Parser.checkExpressionErrors (/home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:3643:12)\n    at Parser.parseMaybeAssign (/home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:11150:12)\n    at /home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:11081:39\n    at Parser.allowInAnd (/home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:12922:16)\n    at Parser.parseMaybeAssignAllowIn (/home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseVar (/home/kenny/cho-plate-project/node_modules/@babel/parser/lib/index.js:13809:70)");

/***/ }),

/***/ "./src/scripts/starch.js":
/*!*******************************!*\
  !*** ./src/scripts/starch.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar starch = {\n  whiteRice: {\n    //20451\n    name: \"white rice\",\n    size: \"1cup\",\n    kcal: 242,\n    carb: 5 //img: http://clipart-library.com/new_gallery/79-799184_input-bowl-of-rice-3.png;\n\n  },\n  whiteBread: {\n    //18967\n    name: \"white bread\",\n    size: \"1slice\",\n    kcal: 66,\n    carb: 1 // img: \n\n  },\n  refriedBeans: {\n    //16103\n    name: \"refried beans\",\n    kcal: 214,\n    carb: 3,\n    size: \"1cup\" // img: \n\n  },\n  spaghetti: {\n    //36630\n    name: \"spaghetti with meat sauce\",\n    kcal: 670,\n    carb: 7,\n    size: \"554g\" // img: \n\n  },\n  spaghettiHalf: {\n    //36630\n    name: \"half spaghetti with meat sauce\",\n    kcal: 335,\n    carb: 4,\n    size: \"277g\" // img: \n\n  },\n  bakedPotato: {\n    //170112\n    name: \"baked potato\",\n    kcal: 124,\n    carb: 3,\n    size: \"1 potato (156g)\" //img: \n\n  },\n  blueberryMuffin: {\n    //\n    name: \"blueberry muffin\",\n    kcal: 424,\n    carb: 6,\n    size: \"1 medium (113g)\" //img: \n\n  },\n  bagel: {\n    //18274\n    name: \"wheat bagel\",\n    kcal: 245,\n    carb: 5,\n    size: \"1 bagel (98g)\" //img: \n\n  } // {//\n  //   name: \"\",\n  //   kcal: ,\n  //   carb: ,\n  //   size: \"\",\n  //   //img: \n  // }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (starch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdGFyY2guanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQU1BLE1BQU0sR0FBRztBQUViQyxFQUFBQSxTQUFTLEVBQUU7QUFBRTtBQUNYQyxJQUFBQSxJQUFJLEVBQUUsWUFERztBQUVUQyxJQUFBQSxJQUFJLEVBQUUsTUFGRztBQUdUQyxJQUFBQSxJQUFJLEVBQUUsR0FIRztBQUlUQyxJQUFBQSxJQUFJLEVBQUUsQ0FKRyxDQUtUOztBQUxTLEdBRkU7QUFVYkMsRUFBQUEsVUFBVSxFQUFFO0FBQUU7QUFDWkosSUFBQUEsSUFBSSxFQUFFLGFBREk7QUFFVkMsSUFBQUEsSUFBSSxFQUFFLFFBRkk7QUFHVkMsSUFBQUEsSUFBSSxFQUFFLEVBSEk7QUFJVkMsSUFBQUEsSUFBSSxFQUFFLENBSkksQ0FLVjs7QUFMVSxHQVZDO0FBa0JiRSxFQUFBQSxZQUFZLEVBQUU7QUFBQztBQUNiTCxJQUFBQSxJQUFJLEVBQUUsZUFETTtBQUVaRSxJQUFBQSxJQUFJLEVBQUUsR0FGTTtBQUdaQyxJQUFBQSxJQUFJLEVBQUUsQ0FITTtBQUlaRixJQUFBQSxJQUFJLEVBQUUsTUFKTSxDQUtaOztBQUxZLEdBbEJEO0FBMEJiSyxFQUFBQSxTQUFTLEVBQUU7QUFBQztBQUNWTixJQUFBQSxJQUFJLEVBQUUsMkJBREc7QUFFVEUsSUFBQUEsSUFBSSxFQUFFLEdBRkc7QUFHVEMsSUFBQUEsSUFBSSxFQUFFLENBSEc7QUFJVEYsSUFBQUEsSUFBSSxFQUFFLE1BSkcsQ0FLVDs7QUFMUyxHQTFCRTtBQWtDYk0sRUFBQUEsYUFBYSxFQUFFO0FBQUM7QUFDZFAsSUFBQUEsSUFBSSxFQUFFLGdDQURPO0FBRWJFLElBQUFBLElBQUksRUFBRSxHQUZPO0FBR2JDLElBQUFBLElBQUksRUFBRSxDQUhPO0FBSWJGLElBQUFBLElBQUksRUFBRSxNQUpPLENBS2I7O0FBTGEsR0FsQ0Y7QUEwQ2JPLEVBQUFBLFdBQVcsRUFBRTtBQUFDO0FBQ1pSLElBQUFBLElBQUksRUFBRSxjQURLO0FBRVhFLElBQUFBLElBQUksRUFBRSxHQUZLO0FBR1hDLElBQUFBLElBQUksRUFBRSxDQUhLO0FBSVhGLElBQUFBLElBQUksRUFBRSxpQkFKSyxDQUtYOztBQUxXLEdBMUNBO0FBa0RiUSxFQUFBQSxlQUFlLEVBQUU7QUFBQztBQUNoQlQsSUFBQUEsSUFBSSxFQUFFLGtCQURTO0FBRWZFLElBQUFBLElBQUksRUFBRSxHQUZTO0FBR2ZDLElBQUFBLElBQUksRUFBRSxDQUhTO0FBSWZGLElBQUFBLElBQUksRUFBRSxpQkFKUyxDQUtmOztBQUxlLEdBbERKO0FBMERiUyxFQUFBQSxLQUFLLEVBQUU7QUFBQztBQUNOVixJQUFBQSxJQUFJLEVBQUUsYUFERDtBQUVMRSxJQUFBQSxJQUFJLEVBQUUsR0FGRDtBQUdMQyxJQUFBQSxJQUFJLEVBQUUsQ0FIRDtBQUlMRixJQUFBQSxJQUFJLEVBQUUsZUFKRCxDQUtMOztBQUxLLEdBMURNLENBa0ViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXhFYSxDQUFmO0FBNEVBLCtEQUFlSCxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hvLXBsYXRlLXByb2plY3QvLi9zcmMvc2NyaXB0cy9zdGFyY2guanM/ZTEwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdGFyY2ggPSB7XG4gIFxuICB3aGl0ZVJpY2U6IHsgLy8yMDQ1MVxuICAgIG5hbWU6IFwid2hpdGUgcmljZVwiLFxuICAgIHNpemU6IFwiMWN1cFwiLFxuICAgIGtjYWw6IDI0MixcbiAgICBjYXJiOiA1LFxuICAgIC8vaW1nOiBodHRwOi8vY2xpcGFydC1saWJyYXJ5LmNvbS9uZXdfZ2FsbGVyeS83OS03OTkxODRfaW5wdXQtYm93bC1vZi1yaWNlLTMucG5nO1xuICB9LFxuXG4gIHdoaXRlQnJlYWQ6IHsgLy8xODk2N1xuICAgIG5hbWU6IFwid2hpdGUgYnJlYWRcIixcbiAgICBzaXplOiBcIjFzbGljZVwiLFxuICAgIGtjYWw6IDY2LFxuICAgIGNhcmI6IDEsXG4gICAgLy8gaW1nOiBcbiAgfSxcblxuICByZWZyaWVkQmVhbnM6IHsvLzE2MTAzXG4gICAgbmFtZTogXCJyZWZyaWVkIGJlYW5zXCIsXG4gICAga2NhbDogMjE0LFxuICAgIGNhcmI6IDMsXG4gICAgc2l6ZTogXCIxY3VwXCIsXG4gICAgLy8gaW1nOiBcbiAgfSxcblxuICBzcGFnaGV0dGk6IHsvLzM2NjMwXG4gICAgbmFtZTogXCJzcGFnaGV0dGkgd2l0aCBtZWF0IHNhdWNlXCIsXG4gICAga2NhbDogNjcwLFxuICAgIGNhcmI6IDcsXG4gICAgc2l6ZTogXCI1NTRnXCIsXG4gICAgLy8gaW1nOiBcbiAgfSxcblxuICBzcGFnaGV0dGlIYWxmOiB7Ly8zNjYzMFxuICAgIG5hbWU6IFwiaGFsZiBzcGFnaGV0dGkgd2l0aCBtZWF0IHNhdWNlXCIsXG4gICAga2NhbDogMzM1LFxuICAgIGNhcmI6IDQsXG4gICAgc2l6ZTogXCIyNzdnXCIsXG4gICAgLy8gaW1nOiBcbiAgfSxcbiAgXG4gIGJha2VkUG90YXRvOiB7Ly8xNzAxMTJcbiAgICBuYW1lOiBcImJha2VkIHBvdGF0b1wiLFxuICAgIGtjYWw6IDEyNCxcbiAgICBjYXJiOiAzLFxuICAgIHNpemU6IFwiMSBwb3RhdG8gKDE1NmcpXCIsXG4gICAgLy9pbWc6IFxuICB9LFxuXG4gIGJsdWViZXJyeU11ZmZpbjogey8vXG4gICAgbmFtZTogXCJibHVlYmVycnkgbXVmZmluXCIsXG4gICAga2NhbDogNDI0LFxuICAgIGNhcmI6IDYsXG4gICAgc2l6ZTogXCIxIG1lZGl1bSAoMTEzZylcIixcbiAgICAvL2ltZzogXG4gIH0sXG5cbiAgYmFnZWw6IHsvLzE4Mjc0XG4gICAgbmFtZTogXCJ3aGVhdCBiYWdlbFwiLFxuICAgIGtjYWw6IDI0NSxcbiAgICBjYXJiOiA1LFxuICAgIHNpemU6IFwiMSBiYWdlbCAoOThnKVwiLFxuICAgIC8vaW1nOiBcbiAgfSxcblxuICAvLyB7Ly9cbiAgLy8gICBuYW1lOiBcIlwiLFxuICAvLyAgIGtjYWw6ICxcbiAgLy8gICBjYXJiOiAsXG4gIC8vICAgc2l6ZTogXCJcIixcbiAgLy8gICAvL2ltZzogXG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFyY2g7XG4iXSwibmFtZXMiOlsic3RhcmNoIiwid2hpdGVSaWNlIiwibmFtZSIsInNpemUiLCJrY2FsIiwiY2FyYiIsIndoaXRlQnJlYWQiLCJyZWZyaWVkQmVhbnMiLCJzcGFnaGV0dGkiLCJzcGFnaGV0dGlIYWxmIiwiYmFrZWRQb3RhdG8iLCJibHVlYmVycnlNdWZmaW4iLCJiYWdlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/starch.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaG8tcGxhdGUtcHJvamVjdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;