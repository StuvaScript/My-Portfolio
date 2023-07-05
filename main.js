/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/* ---------------------------------------- */
/* My additions at the very bottom */
/* ---------------------------------------- */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
     ========================================================================== */

/**
   * Remove the margin in all browsers.
   */

body {
  margin: 0;
}

/**
   * Render the \`main\` element consistently in IE.
   */

main {
  display: block;
}

/**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */

/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
     ========================================================================== */

/**
   * Remove the gray background on active links in IE 10.
   */

a {
  background-color: transparent;
}

/**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

b,
strong {
  font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
   * Add the correct font size in all browsers.
   */

small {
  font-size: 80%;
}

/**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
     ========================================================================== */

/**
   * Remove the border on images inside links in IE 10.
   */

img {
  border-style: none;
}

/* Forms
     ========================================================================== */

/**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
   * Correct the inability to style clickable types in iOS and Safari.
   */

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

/**
   * Remove the inner border and padding in Firefox.
   */

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
   * Correct the padding in Firefox.
   */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

progress {
  vertical-align: baseline;
}

/**
   * Remove the default vertical scrollbar in IE 10+.
   */

textarea {
  overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
     ========================================================================== */

/*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

details {
  display: block;
}

/*
   * Add the correct display in all browsers.
   */

summary {
  display: list-item;
}

/* Misc
     ========================================================================== */

/**
   * Add the correct display in IE 10+.
   */

template {
  display: none;
}

/**
   * Add the correct display in IE 10.
   */

[hidden] {
  display: none;
}

/* ---------------------------------------- */
/* Stu's Addition */

/* makes sizing simpler */

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* no margins or padding */

* {
  margin: 0;
  padding: 0;
}
/* ---------------------------------------- */
`, "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/* ---------------------------------------- */\n/* My additions at the very bottom */\n/* ---------------------------------------- */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n\n/* ---------------------------------------- */\n/* Stu's Addition */\n\n/* makes sizing simpler */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* no margins or padding */\n\n* {\n  margin: 0;\n  padding: 0;\n}\n/* ---------------------------------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Allura/Allura-Regular.ttf */ "./src/fonts/Allura/Allura-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/navy.png */ "./src/images/navy.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --background: #1d1d1d;
  --dark-grey: rgb(107, 107, 107);
  --light-grey: rgb(153, 153, 153);
  --light: white;
  --accent-color: rgb(8, 253, 216);
}

@font-face {
  font-family: 'Allura';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

*::before {
  font-family: Allura;
  color: var(--dark-grey);
  font-size: 1.25rem;
  font-weight: 100;
  position: absolute;
  left: -1rem;
  top: -1.25rem;
}

*::after {
  font-family: Allura;
  color: var(--dark-grey);
  font-size: 1.25rem;
  font-weight: 100;
  position: absolute;
  left: -1rem;
  bottom: -1.5rem;
}

.light-grey {
  color: var(--light-grey);
}

.accent {
  color: var(--accent-color);
}

/* TODO Use max width and text center or flex center when making larger responsive design. That way the content is only so big and not stretching the entire length of the screen */

body {
  font-family: Arial, Helvetica, sans-serif;
  background: var(--background) url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  color: var(--light);
  padding: 0px 30px;
  position: relative;
  font-size: 0.9rem;
}

body > * {
  height: 100vh;
}

body::before {
  content: '<body>';
  top: 0.5rem;
  left: 0.8rem;
}

body::after {
  content: '</body>';
  bottom: 0.5rem;
  left: 0.8rem;
}

/* ! \`\`**Hero**\`\` */

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
}

#profile-img {
  border-radius: 250px 750px 250px 750px / 750px 250px 750px 250px;
  height: min(80vw, 300px);
  min-width: 150px;
  max-width: 300px;
  object-fit: cover;
  object-position: center 30%;
  animation: border-slide 5s ease-in-out infinite alternate;
}

@keyframes border-slide {
  50% {
    border-radius: 750px 550px 350px 750px / 350px 750px 550px 450px;
  }
  100% {
    border-radius: 750px 250px 750px 250px / 250px 750px 250px 750px;
  }
}

h1 {
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 40px;
  margin: 0;
}

h1::before {
  content: '<h1>';
}

h1::after {
  content: '</h1>';
}

/* ! \`\`**About**\`\` */

.about {
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: auto;
  min-height: 100vh;
  padding-bottom: 50px;
}

h2 {
  color: var(--accent-color);
  position: relative;
  font-size: 40px;
}

h2::before {
  content: '<h2>';
}

h2::after {
  content: '</h2>';
}

p {
  position: relative;
  line-height: 1.5rem;
  letter-spacing: 0.3px;
}

p:first-of-type:before {
  content: '<p>';
}

p:last-of-type:after {
  content: '</p>';
}

h3 {
  color: var(--accent-color);
  position: relative;
  font-size: 18px;
}

a:link,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}

.tech-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.6rem;
  column-gap: 2rem;
  justify-content: center;
}

.tech-list li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.tech-list img {
  width: 50px;
}

.tech-name-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ! \`\`**Projects**\`\` */

.projects {
  height: auto;
  min-height: 100vh;
  padding-bottom: 50px;
}

.container {
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  position: relative;
  z-index: 0;
  opacity: 0.5;
  transform: scale(1);
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
}

.card:hover {
  z-index: 1;
  opacity: 1;
  transform: scale(1.1);
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
}

.card > img {
  width: 100%;
  height: 100%;
}

.card:hover > img {
  border-radius: 3px;
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
}

.img-info {
  width: 70%;
  height: auto;
  padding: 10px;
  color: var(--light);
  font-size: 1.25rem;
  text-align: center;
  background: rgba(29, 29, 29, 0.95);
  border-radius: 5px;
  opacity: 0;
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.card:hover > .img-info {
  opacity: 1;
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
}

/* ! \`\`**Resume**\`\` */

.resume-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.res-anchor {
  height: 50%;
}

.res-pic {
  height: 100%;
  border-radius: 5px;
  transform: scale(1);
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
}

.res-pic:hover {
  border-radius: 50px 10px;
  transform: scale(1.1);
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
}

/* ! \`\`**Contact**\`\` */

.contact-container {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.contact-container img {
  width: 15vh;
  transform: scale(1);
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
}

.contact-container img:hover {
  transform: scale(1.1);
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
}

/* ! \`\`**Media Queries**\`\` */

@media (max-width: 630px) {
  .card {
    opacity: 1;
  }

  .card:hover {
    transform: scale(1);
  }

  .img-info {
    opacity: 1;
  }

  .card:hover > img {
    border-radius: inherit;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --background: #1d1d1d;\n  --dark-grey: rgb(107, 107, 107);\n  --light-grey: rgb(153, 153, 153);\n  --light: white;\n  --accent-color: rgb(8, 253, 216);\n}\n\n@font-face {\n  font-family: 'Allura';\n  src: url(./fonts/Allura/Allura-Regular.ttf);\n}\n\n*::before {\n  font-family: Allura;\n  color: var(--dark-grey);\n  font-size: 1.25rem;\n  font-weight: 100;\n  position: absolute;\n  left: -1rem;\n  top: -1.25rem;\n}\n\n*::after {\n  font-family: Allura;\n  color: var(--dark-grey);\n  font-size: 1.25rem;\n  font-weight: 100;\n  position: absolute;\n  left: -1rem;\n  bottom: -1.5rem;\n}\n\n.light-grey {\n  color: var(--light-grey);\n}\n\n.accent {\n  color: var(--accent-color);\n}\n\n/* TODO Use max width and text center or flex center when making larger responsive design. That way the content is only so big and not stretching the entire length of the screen */\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background: var(--background) url(./images/navy.png);\n  color: var(--light);\n  padding: 0px 30px;\n  position: relative;\n  font-size: 0.9rem;\n}\n\nbody > * {\n  height: 100vh;\n}\n\nbody::before {\n  content: '<body>';\n  top: 0.5rem;\n  left: 0.8rem;\n}\n\nbody::after {\n  content: '</body>';\n  bottom: 0.5rem;\n  left: 0.8rem;\n}\n\n/* ! ``**Hero**`` */\n\n.hero {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 50px;\n}\n\n#profile-img {\n  border-radius: 250px 750px 250px 750px / 750px 250px 750px 250px;\n  height: min(80vw, 300px);\n  min-width: 150px;\n  max-width: 300px;\n  object-fit: cover;\n  object-position: center 30%;\n  animation: border-slide 5s ease-in-out infinite alternate;\n}\n\n@keyframes border-slide {\n  50% {\n    border-radius: 750px 550px 350px 750px / 350px 750px 550px 450px;\n  }\n  100% {\n    border-radius: 750px 250px 750px 250px / 250px 750px 250px 750px;\n  }\n}\n\nh1 {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  font-size: 40px;\n  margin: 0;\n}\n\nh1::before {\n  content: '<h1>';\n}\n\nh1::after {\n  content: '</h1>';\n}\n\n/* ! ``**About**`` */\n\n.about {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  height: auto;\n  min-height: 100vh;\n  padding-bottom: 50px;\n}\n\nh2 {\n  color: var(--accent-color);\n  position: relative;\n  font-size: 40px;\n}\n\nh2::before {\n  content: '<h2>';\n}\n\nh2::after {\n  content: '</h2>';\n}\n\np {\n  position: relative;\n  line-height: 1.5rem;\n  letter-spacing: 0.3px;\n}\n\np:first-of-type:before {\n  content: '<p>';\n}\n\np:last-of-type:after {\n  content: '</p>';\n}\n\nh3 {\n  color: var(--accent-color);\n  position: relative;\n  font-size: 18px;\n}\n\na:link,\na:visited,\na:hover,\na:active {\n  color: inherit;\n  text-decoration: none;\n}\n\n.tech-list {\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 0.6rem;\n  column-gap: 2rem;\n  justify-content: center;\n}\n\n.tech-list li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n.tech-list img {\n  width: 50px;\n}\n\n.tech-name-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* ! ``**Projects**`` */\n\n.projects {\n  height: auto;\n  min-height: 100vh;\n  padding-bottom: 50px;\n}\n\n.container {\n  margin: 50px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n\n.card {\n  position: relative;\n  z-index: 0;\n  opacity: 0.5;\n  transform: scale(1);\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n}\n\n.card:hover {\n  z-index: 1;\n  opacity: 1;\n  transform: scale(1.1);\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n}\n\n.card > img {\n  width: 100%;\n  height: 100%;\n}\n\n.card:hover > img {\n  border-radius: 3px;\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n}\n\n.img-info {\n  width: 70%;\n  height: auto;\n  padding: 10px;\n  color: var(--light);\n  font-size: 1.25rem;\n  text-align: center;\n  background: rgba(29, 29, 29, 0.95);\n  border-radius: 5px;\n  opacity: 0;\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n.card:hover > .img-info {\n  opacity: 1;\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n}\n\n/* ! ``**Resume**`` */\n\n.resume-container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.res-anchor {\n  height: 50%;\n}\n\n.res-pic {\n  height: 100%;\n  border-radius: 5px;\n  transform: scale(1);\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n}\n\n.res-pic:hover {\n  border-radius: 50px 10px;\n  transform: scale(1.1);\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n}\n\n/* ! ``**Contact**`` */\n\n.contact-container {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.contact-container img {\n  width: 15vh;\n  transform: scale(1);\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n}\n\n.contact-container img:hover {\n  transform: scale(1.1);\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n}\n\n/* ! ``**Media Queries**`` */\n\n@media (max-width: 630px) {\n  .card {\n    opacity: 1;\n  }\n\n  .card:hover {\n    transform: scale(1);\n  }\n\n  .img-info {\n    opacity: 1;\n  }\n\n  .card:hover > img {\n    border-radius: inherit;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/files/My-Technical-Resume.pdf":
/*!*******************************************!*\
  !*** ./src/files/My-Technical-Resume.pdf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f3e349a16dd53a59538.pdf";

/***/ }),

/***/ "./src/fonts/Allura/Allura-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Allura/Allura-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8518735f3912e9d4ba3.ttf";

/***/ }),

/***/ "./src/icons/browser.png":
/*!*******************************!*\
  !*** ./src/icons/browser.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e4a7982fa74697c0c64.png";

/***/ }),

/***/ "./src/icons/css-3.png":
/*!*****************************!*\
  !*** ./src/icons/css-3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a6549b8c2b4cda8bb88.png";

/***/ }),

/***/ "./src/icons/email.png":
/*!*****************************!*\
  !*** ./src/icons/email.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a49e015815e3ac6d2bd3.png";

/***/ }),

/***/ "./src/icons/eslint.svg":
/*!******************************!*\
  !*** ./src/icons/eslint.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "458c3d82205fb94ffb23.svg";

/***/ }),

/***/ "./src/icons/github.png":
/*!******************************!*\
  !*** ./src/icons/github.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "553c66159c5672f25df6.png";

/***/ }),

/***/ "./src/icons/html-5.png":
/*!******************************!*\
  !*** ./src/icons/html-5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfb2ba4a6b1c3de295bc.png";

/***/ }),

/***/ "./src/icons/icons8-github.svg":
/*!*************************************!*\
  !*** ./src/icons/icons8-github.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b494e85d9e04dc12ddc.svg";

/***/ }),

/***/ "./src/icons/icons8-vs-code.svg":
/*!**************************************!*\
  !*** ./src/icons/icons8-vs-code.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c95ccce217b9216b7657.svg";

/***/ }),

/***/ "./src/icons/js.png":
/*!**************************!*\
  !*** ./src/icons/js.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dfb665e058d08c99f28.png";

/***/ }),

/***/ "./src/icons/linkedin.png":
/*!********************************!*\
  !*** ./src/icons/linkedin.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d21b834035baa551e886.png";

/***/ }),

/***/ "./src/icons/node-logo.svg":
/*!*********************************!*\
  !*** ./src/icons/node-logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dc364b8e9beb3561620.svg";

/***/ }),

/***/ "./src/icons/prettier.svg":
/*!********************************!*\
  !*** ./src/icons/prettier.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7109cf6b693b9fc89dda.svg";

/***/ }),

/***/ "./src/icons/webpack.svg":
/*!*******************************!*\
  !*** ./src/icons/webpack.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "971080fbe3b9b8190f45.svg";

/***/ }),

/***/ "./src/images/calculatron.png":
/*!************************************!*\
  !*** ./src/images/calculatron.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd98ef667e17b62fdbd2.png";

/***/ }),

/***/ "./src/images/conversion-bot.png":
/*!***************************************!*\
  !*** ./src/images/conversion-bot.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74cbe8058cff65f70f1d.png";

/***/ }),

/***/ "./src/images/library.png":
/*!********************************!*\
  !*** ./src/images/library.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1070bc6c2a99abdfd8df.png";

/***/ }),

/***/ "./src/images/navy.png":
/*!*****************************!*\
  !*** ./src/images/navy.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1ba6d1d0fea102ffc6c.png";

/***/ }),

/***/ "./src/images/restaurant-page.png":
/*!****************************************!*\
  !*** ./src/images/restaurant-page.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8c4b30031304600d05d.png";

/***/ }),

/***/ "./src/images/resume-pic.png":
/*!***********************************!*\
  !*** ./src/images/resume-pic.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71c1d6302c1242367810.png";

/***/ }),

/***/ "./src/images/rps.png":
/*!****************************!*\
  !*** ./src/images/rps.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f67d4567d8d2c8653ac9.png";

/***/ }),

/***/ "./src/images/stu.jpg":
/*!****************************!*\
  !*** ./src/images/stu.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51b1fca2647808a210d6.jpg";

/***/ }),

/***/ "./src/images/tictactoe.png":
/*!**********************************!*\
  !*** ./src/images/tictactoe.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44ca070e3225fa45137c.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_rps_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/rps.png */ "./src/images/rps.png");
/* harmony import */ var _images_calculatron_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/calculatron.png */ "./src/images/calculatron.png");
/* harmony import */ var _images_conversion_bot_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/conversion-bot.png */ "./src/images/conversion-bot.png");
/* harmony import */ var _images_library_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/library.png */ "./src/images/library.png");
/* harmony import */ var _images_restaurant_page_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/restaurant-page.png */ "./src/images/restaurant-page.png");
/* harmony import */ var _images_tictactoe_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/tictactoe.png */ "./src/images/tictactoe.png");
/* harmony import */ var _images_resume_pic_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/resume-pic.png */ "./src/images/resume-pic.png");
/* harmony import */ var _files_My_Technical_Resume_pdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./files/My-Technical-Resume.pdf */ "./src/files/My-Technical-Resume.pdf");
/* harmony import */ var _icons_github_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/github.png */ "./src/icons/github.png");
/* harmony import */ var _icons_email_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/email.png */ "./src/icons/email.png");
/* harmony import */ var _icons_linkedin_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/linkedin.png */ "./src/icons/linkedin.png");
/* harmony import */ var _icons_html_5_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/html-5.png */ "./src/icons/html-5.png");
/* harmony import */ var _icons_css_3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/css-3.png */ "./src/icons/css-3.png");
/* harmony import */ var _icons_js_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/js.png */ "./src/icons/js.png");
/* harmony import */ var _icons_node_logo_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/node-logo.svg */ "./src/icons/node-logo.svg");
/* harmony import */ var _icons_webpack_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/webpack.svg */ "./src/icons/webpack.svg");
/* harmony import */ var _icons_icons8_vs_code_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons/icons8-vs-code.svg */ "./src/icons/icons8-vs-code.svg");
/* harmony import */ var _icons_icons8_github_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./icons/icons8-github.svg */ "./src/icons/icons8-github.svg");
/* harmony import */ var _icons_browser_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icons/browser.png */ "./src/icons/browser.png");
/* harmony import */ var _icons_eslint_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./icons/eslint.svg */ "./src/icons/eslint.svg");
/* harmony import */ var _icons_prettier_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./icons/prettier.svg */ "./src/icons/prettier.svg");
/* harmony import */ var _images_stu_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/stu.jpg */ "./src/images/stu.jpg");

























// // Unused code gets this badass strikeout

// ! ``**Profile picture**``

const profileImg = document.querySelector('#profile-img');
profileImg.setAttribute('src', _images_stu_jpg__WEBPACK_IMPORTED_MODULE_23__);

// ! ``**Card pictures**``

const rpsImg = document.querySelector('.rpsImg');
rpsImg.setAttribute('src', _images_rps_png__WEBPACK_IMPORTED_MODULE_2__);

const calImg = document.querySelector('.calImg');
calImg.setAttribute('src', _images_calculatron_png__WEBPACK_IMPORTED_MODULE_3__);

const convImg = document.querySelector('.convImg');
convImg.setAttribute('src', _images_conversion_bot_png__WEBPACK_IMPORTED_MODULE_4__);

const libImg = document.querySelector('.libImg');
libImg.setAttribute('src', _images_library_png__WEBPACK_IMPORTED_MODULE_5__);

const restImg = document.querySelector('.restImg');
restImg.setAttribute('src', _images_restaurant_page_png__WEBPACK_IMPORTED_MODULE_6__);

const tttImg = document.querySelector('.tttImg');
tttImg.setAttribute('src', _images_tictactoe_png__WEBPACK_IMPORTED_MODULE_7__);

const resPic = document.querySelector('.res-pic');
resPic.setAttribute('src', _images_resume_pic_png__WEBPACK_IMPORTED_MODULE_8__);

// ! ``**PDF file**``

const pdfResume = document.querySelector('.res-anchor');
pdfResume.setAttribute('href', _files_My_Technical_Resume_pdf__WEBPACK_IMPORTED_MODULE_9__);

// ! ``**Icons**``

const github = document.querySelector('.github-icon');
github.setAttribute('src', _icons_github_png__WEBPACK_IMPORTED_MODULE_10__);

const email = document.querySelector('.email-icon');
email.setAttribute('src', _icons_email_png__WEBPACK_IMPORTED_MODULE_11__);

const linkedin = document.querySelector('.linkedin-icon');
linkedin.setAttribute('src', _icons_linkedin_png__WEBPACK_IMPORTED_MODULE_12__);

const theIconHtml = document.querySelector('#icon-html');
theIconHtml.setAttribute('src', _icons_html_5_png__WEBPACK_IMPORTED_MODULE_13__);

const theIconCss = document.querySelector('#icon-css');
theIconCss.setAttribute('src', _icons_css_3_png__WEBPACK_IMPORTED_MODULE_14__);

const theIconJs = document.querySelector('#icon-js');
theIconJs.setAttribute('src', _icons_js_png__WEBPACK_IMPORTED_MODULE_15__);

const theIconNode = document.querySelector('#icon-node');
theIconNode.setAttribute('src', _icons_node_logo_svg__WEBPACK_IMPORTED_MODULE_16__);

const theIconWebpack = document.querySelector('#icon-webpack');
theIconWebpack.setAttribute('src', _icons_webpack_svg__WEBPACK_IMPORTED_MODULE_17__);

const theIconVscode = document.querySelector('#icon-vscode');
theIconVscode.setAttribute('src', _icons_icons8_vs_code_svg__WEBPACK_IMPORTED_MODULE_18__);

const theIconGithub = document.querySelector('#icon-github');
theIconGithub.setAttribute('src', _icons_icons8_github_svg__WEBPACK_IMPORTED_MODULE_19__);

const theIconDevtools = document.querySelector('#icon-devtools');
theIconDevtools.setAttribute('src', _icons_browser_png__WEBPACK_IMPORTED_MODULE_20__);

const theIconEslint = document.querySelector('#icon-eslint');
theIconEslint.setAttribute('src', _icons_eslint_svg__WEBPACK_IMPORTED_MODULE_21__);

const theIconPrettier = document.querySelector('#icon-prettier');
theIconPrettier.setAttribute('src', _icons_prettier_svg__WEBPACK_IMPORTED_MODULE_22__);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map