(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["LazyAsset"] = factory(require("react"), require("prop-types"), require("react-dom"));
	else
		root["LazyAsset"] = factory(root["React"], root["PropTypes"], root["ReactDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVisibilitySensor = __webpack_require__(3);

var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TODO: video support
 * TODO: contain mode should work well with placeholders, extraContent and background
 * TODO: IE / Edge fallbacks
 * TODO: onLoad callbacks
 */
var styles = {
    LazyAsset: {
        position: 'relative'
    },
    LazyAsset__Wrapper: {
        position: "relative",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    LazyAsset__WrapperOverflow: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "hidden"
    },
    img: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        objectPosition: "50% 50%",

        // IE fallback
        backgroundPosition: "center center",
        backgroundSize: "cover"
    }
};

var LazyAsset = function (_React$Component) {
    _inherits(LazyAsset, _React$Component);

    function LazyAsset(props) {
        _classCallCheck(this, LazyAsset);

        // this.state.status explained
        // 0 - props.load = false. There was actually nothing done with image so far
        // 1 - props.load = true. Image is set to be downloaded but is not loading yet (when props.loadWhenInViewPort = true and image is not in viewport)
        // 2 - props.load = true. Image is being downloaded (srcset for <img> is set).
        // 3 - props.load = true. Image is downloaded.
        var _this = _possibleConstructorReturn(this, (LazyAsset.__proto__ || Object.getPrototypeOf(LazyAsset)).call(this, props));

        _this.state = {
            status: props.load === true ? 2 : 0,
            visible: false
        };
        _this.image = _react2.default.createRef();
        _this.wrapper = _react2.default.createRef();
        _this.handleImageLoaded = _this.handleImageLoaded.bind(_this);
        _this.handleVisibilityChange = _this.handleVisibilityChange.bind(_this);

        _this.randomId = btoa(Math.random()).substring(0, 12);
        return _this;
    }

    _createClass(LazyAsset, [{
        key: '_extractMediaFromInputParameters',
        value: function _extractMediaFromInputParameters() {
            var _this2 = this;

            if (this.props.media) {
                // We check if mode, images are set locally. If not, we take it from main options. If not there -> error.
                this.props.media.forEach(function (entry) {
                    if (!entry.images && !_this2.props.images) {
                        throw new Error('LazyAsset doesnt have "images" given');
                    } else if (!entry.images) {
                        entry.images = _this2.props.images;
                    }

                    if (!entry.mode && !_this2.props.mode) {
                        throw new Error('LazyAsset doesnt have "mode" given');
                    } else if (!entry.mode) {
                        entry.mode = _this2.props.mode;
                    }

                    if (!entry.media) {
                        throw new Error('LazyAsset doesnt have "media" given in "media" array');
                    }
                });

                return this.props.media;
            } else {
                return [{
                    media: "screen",
                    images: this.props.images,
                    mode: this.props.mode
                }];
            }
        }
    }, {
        key: '_getSrcset',
        value: function _getSrcset(images) {
            var result = "";
            images.forEach(function (image) {
                result += image.url + ' ' + image.w + 'w, ';
            });
            return result;
        }
    }, {
        key: 'handleImageLoaded',
        value: function handleImageLoaded() {
            this.setState({
                status: 3
            });
        }
    }, {
        key: 'handleVisibilityChange',
        value: function handleVisibilityChange(visible) {
            this.setState({
                visible: visible,
                status: this.state.status === 1 && visible && this.wrapper.current.clientWidth > 0 ? 2 : this.state.status
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            /* handle setting load*/
            if (this.props.load && this.state.status === 0) {
                this.setState({
                    status: (this.state.visible || !this.props.loadWhenInViewport) && this.wrapper.current.clientWidth > 0 ? 2 : 1
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // If image is loaded before onLoad event makes it to be registered
            if (this.image.current && this.image.current.complete && this.image.current.naturalWidth > 0 && this.state.status === 2) {
                this.setState({
                    status: 3
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            // different modes for different resolutions!
            var styleTag = null;
            var imgTag = null;
            var wrapperStyles = {};
            var imgStyles = {};

            // Extra styles like placeholder or backgroundColor


            // In case media parameter is given
            if (this.props.media) {
                var media = this._extractMediaFromInputParameters();

                var responsiveStyle = "";
                media.forEach(function (entry) {
                    responsiveStyle += '@media ' + entry.media + ' {\n                ' + ('.w-' + _this3.randomId + ' {') + '\n                    ' + (entry.mode === "natural" ? 'padding-bottom: ' + entry.images[0].h / entry.images[0].w * 100 + '%;' : 'padding-bottom: initial;') + '\n                    ' + (entry.mode === "natural" ? 'height: auto;' : 'height: 100%;') + '\n                    \n                    ' + (entry.mode !== "contain" && _this3.props.backgroundColor ? 'background-color: ' + _this3.props.backgroundColor : 'background-color: transparent;') + '\n                    ' + (entry.mode !== "contain" && _this3.props.placeholder ? 'background-image: ' + _this3.props.placeholder : 'background-image: none') + '\n\n                }\n                ' + ('.i-' + _this3.randomId) + ' {\n                    ' + (entry.mode === "contain" ? 'object-fit: contain;' : 'object-fit: cover') + '\n                }\n            }\n            ';
                });

                styleTag = _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: responsiveStyle } });

                imgTag = _react2.default.createElement(
                    'picture',
                    null,
                    [].concat(_toConsumableArray(media)).reverse().map(function (entry) {
                        return _react2.default.createElement('source', { srcSet: _this3.state.status >= 2 ? _this3._getSrcset(entry.images) : '', sizes: _this3.props.sizes, media: entry.media });
                    }),
                    _react2.default.createElement('img', { alt: this.props.alt,
                        src: this.props.fallbackSrc,
                        className: 'i-' + this.randomId,
                        style: styles.img,
                        ref: this.image,
                        onLoad: this.handleImageLoaded,
                        draggable: this.props.draggable })
                );
            } else {
                if (this.props.backgroundColor && this.props.mode !== "contain") {
                    wrapperStyles.backgroundColor = this.props.backgroundColor;
                }

                if (this.props.placeholder && this.props.mode !== "contain") {
                    wrapperStyles.backgroundImage = 'url(' + this.props.placeholder + ')';
                }

                if (this.props.mode === "natural") {
                    wrapperStyles.paddingBottom = this.props.images[0].h / this.props.images[0].w * 100 + '%';
                    wrapperStyles.height = "auto";
                    imgStyles.objectFit = "cover";
                } else if (this.props.mode === "cover") {
                    wrapperStyles.height = "100%";
                    imgStyles.objectFit = "cover";
                } else if (this.props.mode === "contain") {
                    wrapperStyles.height = "100%";
                    imgStyles.objectFit = "contain";
                }

                if (this.props.images.length > 0) {
                    imgTag = _react2.default.createElement('img', {
                        ref: this.image,
                        style: _extends({}, styles.img, imgStyles),
                        sizes: this.props.sizes,
                        alt: this.props.alt,
                        srcSet: this.state.status >= 2 ? this._getSrcset(this.props.images) : '',
                        onLoad: this.handleImageLoaded,
                        className: 'i-' + this.randomId,
                        draggable: this.props.draggable
                    });
                }
            }

            // Tag picking. Picture (for responsive image sets) or img

            return _react2.default.createElement(
                'div',
                { className: 'LazyAsset ' + this.props.className, style: _extends({}, styles.LazyAsset, this.props.style) },
                _react2.default.createElement(
                    _reactVisibilitySensor2.default,
                    { onChange: this.handleVisibilityChange, partialVisibility: true, offset: this.props.offset },
                    _react2.default.createElement(
                        'div',
                        { ref: this.wrapper, className: 'LazyAsset__Wrapper w-' + this.randomId,
                            style: _extends({}, styles.LazyAsset__Wrapper, wrapperStyles) },
                        _react2.default.createElement(
                            'div',
                            { className: "LazyAsset__WrapperOverflow",
                                style: _extends({}, styles.LazyAsset__WrapperOverflow, {
                                    transition: 'opacity ' + this.props.animationTime + 's',
                                    opacity: this.state.status === 3 ? 1 : 0
                                }) },
                            imgTag
                        ),
                        styleTag,
                        this.props.children
                    )
                )
            );
        }
    }]);

    return LazyAsset;
}(_react2.default.Component);

LazyAsset.propTypes = {
    mode: _propTypes2.default.oneOf(["cover", "natural"]),
    images: _propTypes2.default.arrayOf(_propTypes2.default.object),
    media: _propTypes2.default.arrayOf(_propTypes2.default.object),

    fallbackSrc: _propTypes2.default.string,

    className: _propTypes2.default.string,
    style: _propTypes2.default.object,

    animationTime: _propTypes2.default.number,
    placeholder: _propTypes2.default.string,
    loadWhenInViewport: _propTypes2.default.bool,
    sizes: _propTypes2.default.string,
    alt: _propTypes2.default.string,
    loaded: _propTypes2.default.bool,
    backgroundColor: _propTypes2.default.string,
    offset: _propTypes2.default.object,
    draggable: _propTypes2.default.bool
};

LazyAsset.defaultProps = {
    className: "",
    style: {},
    animationTime: 1,
    loadWhenInViewport: false,
    sizes: "100vw",
    images: [],
    load: false,
    backgroundColor: "lightgrey",
    offset: { top: 0, bottom: 0 },
    draggable: false
};

exports.default = LazyAsset;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(4));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["react-visibility-sensor"] = factory(require("react"), require("react-dom"));
	else
		root["react-visibility-sensor"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isVisibleWithOffset = __webpack_require__(6);

var _isVisibleWithOffset2 = _interopRequireDefault(_isVisibleWithOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function normalizeRect(rect) {
  if (rect.width === undefined) {
    rect.width = rect.right - rect.left;
  }

  if (rect.height === undefined) {
    rect.height = rect.bottom - rect.top;
  }

  return rect;
}

var VisibilitySensor = function (_React$Component) {
  _inherits(VisibilitySensor, _React$Component);

  function VisibilitySensor(props) {
    _classCallCheck(this, VisibilitySensor);

    var _this = _possibleConstructorReturn(this, (VisibilitySensor.__proto__ || Object.getPrototypeOf(VisibilitySensor)).call(this, props));

    _this.getContainer = function () {
      return _this.props.containment || window;
    };

    _this.addEventListener = function (target, event, delay, throttle) {
      if (!_this.debounceCheck) {
        _this.debounceCheck = {};
      }

      var timeout = void 0;
      var func = void 0;

      var later = function later() {
        timeout = null;
        _this.check();
      };

      if (throttle > -1) {
        func = function func() {
          if (!timeout) {
            timeout = setTimeout(later, throttle || 0);
          }
        };
      } else {
        func = function func() {
          clearTimeout(timeout);
          timeout = setTimeout(later, delay || 0);
        };
      }

      var info = {
        target: target,
        fn: func,
        getLastTimeout: function getLastTimeout() {
          return timeout;
        }
      };

      target.addEventListener(event, info.fn);
      _this.debounceCheck[event] = info;
    };

    _this.startWatching = function () {
      if (_this.debounceCheck || _this.interval) {
        return;
      }

      if (_this.props.intervalCheck) {
        _this.interval = setInterval(_this.check, _this.props.intervalDelay);
      }

      if (_this.props.scrollCheck) {
        _this.addEventListener(_this.getContainer(), "scroll", _this.props.scrollDelay, _this.props.scrollThrottle);
      }

      if (_this.props.resizeCheck) {
        _this.addEventListener(window, "resize", _this.props.resizeDelay, _this.props.resizeThrottle);
      }

      // if dont need delayed call, check on load ( before the first interval fires )
      !_this.props.delayedCall && _this.check();
    };

    _this.stopWatching = function () {
      if (_this.debounceCheck) {
        // clean up event listeners and their debounce callers
        for (var debounceEvent in _this.debounceCheck) {
          if (_this.debounceCheck.hasOwnProperty(debounceEvent)) {
            var debounceInfo = _this.debounceCheck[debounceEvent];

            clearTimeout(debounceInfo.getLastTimeout());
            debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);

            _this.debounceCheck[debounceEvent] = null;
          }
        }
      }
      _this.debounceCheck = null;

      if (_this.interval) {
        _this.interval = clearInterval(_this.interval);
      }
    };

    _this.check = function () {
      var el = _this.node;
      var rect = void 0;
      var containmentRect = void 0;

      // if the component has rendered to null, dont update visibility
      if (!el) {
        return _this.state;
      }

      rect = normalizeRect(_this.roundRectDown(el.getBoundingClientRect()));

      if (_this.props.containment) {
        var containmentDOMRect = _this.props.containment.getBoundingClientRect();
        containmentRect = {
          top: containmentDOMRect.top,
          left: containmentDOMRect.left,
          bottom: containmentDOMRect.bottom,
          right: containmentDOMRect.right
        };
      } else {
        containmentRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight || document.documentElement.clientHeight,
          right: window.innerWidth || document.documentElement.clientWidth
        };
      }

      // Check if visibility is wanted via offset?
      var offset = _this.props.offset || {};
      var hasValidOffset = (typeof offset === "undefined" ? "undefined" : _typeof(offset)) === "object";

      if (hasValidOffset) {
        containmentRect.top += offset.top || 0;
        containmentRect.left += offset.left || 0;
        containmentRect.bottom -= offset.bottom || 0;
        containmentRect.right -= offset.right || 0;
      }

      var visibilityRect = {
        top: rect.top >= containmentRect.top,
        left: rect.left >= containmentRect.left,
        bottom: rect.bottom <= containmentRect.bottom,
        right: rect.right <= containmentRect.right
      };

      // https://github.com/joshwnj/react-visibility-sensor/pull/114
      var hasSize = rect.height > 0 && rect.width > 0;

      var isVisible = hasSize && visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right;

      // check for partial visibility
      if (hasSize && _this.props.partialVisibility) {
        var partialVisible = rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top && rect.left <= containmentRect.right && rect.right >= containmentRect.left;

        // account for partial visibility on a single edge
        if (typeof _this.props.partialVisibility === "string") {
          partialVisible = visibilityRect[_this.props.partialVisibility];
        }

        // if we have minimum top visibility set by props, lets check, if it meets the passed value
        // so if for instance element is at least 200px in viewport, then show it.
        isVisible = _this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - _this.props.minTopValue : partialVisible;
      }

      // Deprecated options for calculating offset.
      if (typeof offset.direction === "string" && typeof offset.value === "number") {
        console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", offset.direction, offset.value);

        isVisible = (0, _isVisibleWithOffset2.default)(offset, rect, containmentRect);
      }

      var state = _this.state;
      // notify the parent when the value changes
      if (_this.state.isVisible !== isVisible) {
        state = {
          isVisible: isVisible,
          visibilityRect: visibilityRect
        };
        _this.setState(state);
        if (_this.props.onChange) _this.props.onChange(isVisible);
      }

      return state;
    };

    _this.state = {
      isVisible: null,
      visibilityRect: {}
    };
    return _this;
  }

  _createClass(VisibilitySensor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = _reactDom2.default.findDOMNode(this);
      if (this.props.active) {
        this.startWatching();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopWatching();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // re-register node in componentDidUpdate if children diffs [#103]
      this.node = _reactDom2.default.findDOMNode(this);

      if (this.props.active && !prevProps.active) {
        this.setState({
          isVisible: null,
          visibilityRect: {}
        });

        this.startWatching();
      } else if (!this.props.active) {
        this.stopWatching();
      }
    }
  }, {
    key: "roundRectDown",
    value: function roundRectDown(rect) {
      return {
        top: Math.floor(rect.top),
        left: Math.floor(rect.left),
        bottom: Math.floor(rect.bottom),
        right: Math.floor(rect.right)
      };
    }

    /**
     * Check if the element is within the visible viewport
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.children instanceof Function) {
        return this.props.children({
          isVisible: this.state.isVisible,
          visibilityRect: this.state.visibilityRect
        });
      }
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return VisibilitySensor;
}(_react2.default.Component);

VisibilitySensor.defaultProps = {
  active: true,
  partialVisibility: false,
  minTopValue: 0,
  scrollCheck: false,
  scrollDelay: 250,
  scrollThrottle: -1,
  resizeCheck: false,
  resizeDelay: 250,
  resizeThrottle: -1,
  intervalCheck: true,
  intervalDelay: 100,
  delayedCall: false,
  offset: {},
  containment: null,
  children: _react2.default.createElement("span", null)
};
VisibilitySensor.propTypes = {
  onChange: _propTypes2.default.func,
  active: _propTypes2.default.bool,
  partialVisibility: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(["top", "right", "bottom", "left"])]),
  delayedCall: _propTypes2.default.bool,
  offset: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    top: _propTypes2.default.number,
    left: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    right: _propTypes2.default.number
  }),
  // deprecated offset property
  _propTypes2.default.shape({
    direction: _propTypes2.default.oneOf(["top", "right", "bottom", "left"]),
    value: _propTypes2.default.number
  })]),
  scrollCheck: _propTypes2.default.bool,
  scrollDelay: _propTypes2.default.number,
  scrollThrottle: _propTypes2.default.number,
  resizeCheck: _propTypes2.default.bool,
  resizeDelay: _propTypes2.default.number,
  resizeThrottle: _propTypes2.default.number,
  intervalCheck: _propTypes2.default.bool,
  intervalDelay: _propTypes2.default.number,
  containment: typeof window !== "undefined" ? _propTypes2.default.instanceOf(window.Element) : _propTypes2.default.any,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  minTopValue: _propTypes2.default.number
};
exports.default = VisibilitySensor;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4)();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(5);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Tell whether the rect is visible, given an offset
//
// return: boolean
module.exports = function (offset, rect, containmentRect) {
  var offsetDir = offset.direction;
  var offsetVal = offset.value;

  // Rules for checking different kind of offsets. In example if the element is
  // 90px below viewport and offsetTop is 100, it is considered visible.
  switch (offsetDir) {
    case 'top':
      return containmentRect.top + offsetVal < rect.top && containmentRect.bottom > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right;

    case 'left':
      return containmentRect.left + offsetVal < rect.left && containmentRect.bottom > rect.bottom && containmentRect.top < rect.top && containmentRect.right > rect.right;

    case 'bottom':
      return containmentRect.bottom - offsetVal > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right && containmentRect.top < rect.top;

    case 'right':
      return containmentRect.right - offsetVal > rect.right && containmentRect.left < rect.left && containmentRect.top < rect.top && containmentRect.bottom > rect.bottom;
  }
};

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});