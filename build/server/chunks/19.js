exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 6019:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layouts_Header; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./styles/components/navbar.module.scss
var navbar_module = __webpack_require__(8276);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./styles/components/logo.module.scss
var logo_module = __webpack_require__(4073);
var logo_module_default = /*#__PURE__*/__webpack_require__.n(logo_module);
;// CONCATENATED MODULE: ./components/Logo.jsx



const Logo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (logo_module_default()).logo,
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      className: "logo",
      viewBox: "0 0 157 136",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#202125",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M69.2624 16L78.5 0L87.7376 16L147.638 119.75L156.875 135.75H138.4H18.5999H0.124702L9.36231 119.75L69.2624 16ZM27.8375 119.75L78.5 32L129.162 119.75H112.419L112.131 119.25L87.7376 77L78.5 61L69.2624 77L44.93 119.25L44.5807 119.75H27.8375ZM63.3446 119.25L78.5 93L93.6554 119.25H63.3446Z"
      })
    })
  });
};

/* harmony default export */ var components_Logo = (Logo);
;// CONCATENATED MODULE: ./components/Navbar.jsx






const Navbar = () => {
  const router = (0,router_.useRouter)();

  const handleClick = href => {
    router.push(href);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: (navbar_module_default()).navbar,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      onClick: () => handleClick("/"),
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Logo, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      onClick: () => handleClick("/about"),
      children: "About"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      onClick: () => handleClick("/services"),
      children: "Services"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      onClick: () => handleClick("/projects"),
      children: "Projects"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      onClick: () => handleClick("/contact"),
      children: "Get in Touch"
    })]
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "aa-web-design-ui-kit"
var external_aa_web_design_ui_kit_ = __webpack_require__(8448);
;// CONCATENATED MODULE: ./layouts/Header.jsx







const Header = ({
  children
}) => {
  const router = (0,router_.useRouter)();

  const Nav = /*#__PURE__*/jsx_runtime_.jsx(external_aa_web_design_ui_kit_.Navigation, {
    backgroundColor: "white",
    accentColor: "blue",
    paddingSide: 10,
    align: "right",
    activeLink: "/",
    links: [{
      name: 'Services',
      route: 'services',
      onClick: () => router.push('services')
    }, {
      name: 'Projects',
      route: 'projects',
      onClick: () => router.push('projects')
    }],
    logo: "/icons/logo.svg",
    menu: "/icons/hamburger.svg",
    visible: true,
    white: "white",
    black: "black"
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "UTF-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Web Developer Portfolio"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "Alfred Adeoye, Web Developer, Portfolio, React, JavaScript, Front End Development"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "author",
        content: "Alfred Adeoye"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Alfred Adeoye"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/svg",
        href: "/icons/favicon.svg"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), children]
  });
};

/* harmony default export */ var layouts_Header = (Header);

/***/ }),

/***/ 4073:
/***/ (function(module) {

// Exports
module.exports = {
	"logo": "logo_logo__3pWch"
};


/***/ }),

/***/ 8276:
/***/ (function(module) {

// Exports
module.exports = {
	"navbar": "navbar_navbar__2JxWJ"
};


/***/ })

};
;