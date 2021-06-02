(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4094:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: ./redux/transition/transitionTypes.js
const PAGE_ENTER = "PAGE_ENTER";
const PAGE_EXIT = "PAGE_EXIT";

;// CONCATENATED MODULE: ./redux/transition/transitionReducer.js

const initialState = {
  shrink: false
};

const transitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_ENTER:
      return {
        shrink: false
      };

    case PAGE_EXIT:
      return {
        shrink: true
      };

    default:
      return state;
  }
};

/* harmony default export */ var transition_transitionReducer = (transitionReducer);
;// CONCATENATED MODULE: ./redux/rootReducer.js


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  transition: transition_transitionReducer
});
/* harmony default export */ var redux_rootReducer = (rootReducer);
;// CONCATENATED MODULE: ./redux/store.js


const store = (0,external_redux_namespaceObject.createStore)(redux_rootReducer);
/* harmony default export */ var redux_store = (store);
// EXTERNAL MODULE: ./layouts/Header.jsx + 2 modules
var Header = __webpack_require__(6019);
;// CONCATENATED MODULE: ./pages/_app.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: redux_store,
    children: /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 8448:
/***/ (function(module) {

"use strict";
module.exports = require("aa-web-design-ui-kit");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544,19], function() { return __webpack_exec__(4094); });
module.exports = __webpack_exports__;

})();