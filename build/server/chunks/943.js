exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 1304:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9637);
/* harmony import */ var _styles_components_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_button_module_scss__WEBPACK_IMPORTED_MODULE_2__);




const Button = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const handleClick = href => {
    router.push(href);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    className: (_styles_components_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
    onClick: () => handleClick(props.route),
    children: props.name
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Button);

/***/ }),

/***/ 2608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_copy_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(884);
/* harmony import */ var _styles_components_copy_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_copy_module_scss__WEBPACK_IMPORTED_MODULE_1__);




const Copy = props => {
  const HeadingTypes = {
    "primary": /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: props.head
    }),
    "secondary": /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      children: props.head
    }),
    "tertiary": /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      children: props.head
    })
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_components_copy_module_scss__WEBPACK_IMPORTED_MODULE_1___default().copy),
    children: [HeadingTypes[props.type], /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      children: props.text
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Copy);

/***/ }),

/***/ 9671:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_heading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(677);
/* harmony import */ var _styles_components_heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_heading_module_scss__WEBPACK_IMPORTED_MODULE_1__);



const Heading = props => {
  const HeadingTypes = {
    "primary": /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: props.head
    }),
    "secondary": /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      children: props.head
    }),
    "tertiary": /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      children: props.head
    })
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_components_heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading),
    children: HeadingTypes[props.type]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Heading);

/***/ }),

/***/ 7943:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ About; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Copy.jsx
var Copy = __webpack_require__(2608);
// EXTERNAL MODULE: ./components/Button.jsx
var Button = __webpack_require__(1304);
// EXTERNAL MODULE: ./styles/components/paragraph.module.scss
var paragraph_module = __webpack_require__(5391);
var paragraph_module_default = /*#__PURE__*/__webpack_require__.n(paragraph_module);
;// CONCATENATED MODULE: ./components/Paragraph.jsx



const Paragraph = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (paragraph_module_default()).paragraph,
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: props.text
    })
  });
};

/* harmony default export */ var components_Paragraph = (Paragraph);
// EXTERNAL MODULE: ./components/Heading.jsx
var Heading = __webpack_require__(9671);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/layouts/about.module.scss
var about_module = __webpack_require__(2637);
var about_module_default = /*#__PURE__*/__webpack_require__.n(about_module);
;// CONCATENATED MODULE: ./layouts/About.jsx









const AboutLayout = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (about_module_default()).about,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Heading/* default */.Z, {
      type: "primary",
      head: "About Me"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Paragraph, {
      text: "I'm a freelance web developer based in London who primarily works with local businesses, SMEs and self-employed professionals to help them improve their digital offerings. When working with clients my goal is to optimise the user experience and maximise the brand impact."
    })]
  });
};

/* harmony default export */ var About = (AboutLayout);

/***/ }),

/***/ 9637:
/***/ (function(module) {

// Exports
module.exports = {
	"button": "button_button__1HlPo"
};


/***/ }),

/***/ 884:
/***/ (function(module) {

// Exports
module.exports = {
	"copy": "copy_copy__T6PEF"
};


/***/ }),

/***/ 677:
/***/ (function(module) {

// Exports
module.exports = {
	"heading": "heading_heading__1voFU"
};


/***/ }),

/***/ 5391:
/***/ (function(module) {

// Exports
module.exports = {
	"paragraph": "paragraph_paragraph__1wEPQ"
};


/***/ }),

/***/ 2637:
/***/ (function(module) {

// Exports
module.exports = {
	"about": "about_about__25k1u"
};


/***/ })

};
;