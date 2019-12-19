/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = exports.debounce = exports.randomString = exports.css = exports.Resp = exports.checkClosest = exports.isScrolledIntoView = exports.toggleClass = exports.currentPage = exports.winWidth = exports.$scrolledElements = exports.$footer = exports.$header = exports.$window = exports.$document = exports.$body = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Commonly used constants and functions.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module Helpers
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _jquery = __webpack_require__(6);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.jQuery = window.$ = _jquery2.default;
/**
 * Cache body DOM element.
 *
 * @constant
 * @type {jQuery}
 */
var $body = exports.$body = (0, _jquery2.default)('body');

/**
 * Cache document.
 *
 * @constant
 * @type {jQuery}
 */
var $document = exports.$document = (0, _jquery2.default)(document);

/**
 * Cache window.
 *
 * @constant
 * @type {jQuery}
 */
var $window = exports.$window = (0, _jquery2.default)(window);

/**
 * Cache header.
 *
 * @constant
 * @type {jQuery}
 */
var $header = exports.$header = (0, _jquery2.default)('header');

/**
 * Cache footer.
 *
 * @constant
 * @type {jQuery}
 */
var $footer = exports.$footer = (0, _jquery2.default)('footer');

/**
 * Elements for cross-browser window scroll.
 *
 * @constant
 * @type {jQuery}
 */
var $scrolledElements = exports.$scrolledElements = (0, _jquery2.default)('html, body');

/**
 * Window width.
 *
 * @constant
 * @type {Number}
 */
var winWidth = exports.winWidth = $window.width();

/**
 * Detect current page.
 *
 * @constant
 * @type {String}
 */
var currentPage = exports.currentPage = $body.find('main').data('page');

/**
 * Toggle class on specified element on click.
 *
 * @param {jQuery} clickHandler
 * @param {jQuery} element
 * @param {String} [className='active']
 */
var toggleClass = exports.toggleClass = function toggleClass(clickHandler, element) {
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : css.active;

  clickHandler.on('click tap', function () {
    return element.toggleClass(className);
  });
};

/**
 * Check if element is in viewport.
 *
 * @param {jQuery} $element
 * @param {Boolean} [fullyInView = false] - element should be fully in viewport?
 * @param {Number} [offsetTop = 0]
 * @returns {Boolean}
 */
var isScrolledIntoView = exports.isScrolledIntoView = function isScrolledIntoView($element) {
  var offsetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var fullyInView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var pageTop = $window.scrollTop();
  var pageBottom = pageTop + $window.height();
  var elementTop = $element.offset().top;
  var elementBottom = elementTop + $element.height();

  if (fullyInView) return pageTop < elementTop && pageBottom > elementBottom;

  return elementTop + offsetTop <= pageBottom && elementBottom >= pageTop;
};

/**
 * Check specified item to be target of the event.
 *
 * @param {Object} e - Event object.
 * @param {jQuery} item - Item to compare with.
 * @returns {Boolean} - Indicate whether clicked target is the specified item or not.
 */
var checkClosest = exports.checkClosest = function checkClosest(e, item) {
  return (0, _jquery2.default)(e.target).closest(item).length > 0;
};

/**
 * Match media device indicator.
 */

var Resp = exports.Resp = function () {
  function Resp() {
    _classCallCheck(this, Resp);
  }

  _createClass(Resp, null, [{
    key: 'currWidth',

    /**
     * Get window's current width.
     *
     * @get
     * @static
     * @return {Number}
     */
    get: function get() {
      return window.innerWidth;
    }

    /**
     * Detect touch events.
     *
     * @get
     * @static
     * @return {Boolean}
     */

  }, {
    key: 'isTouch',
    get: function get() {
      return 'ontouchstart' in window;
    }

    /**
     * Detect desktop device.
     *
     * @get
     * @static
     * @return {Boolean}
     */

  }, {
    key: 'isDesk',
    get: function get() {
      return window.matchMedia('(min-width: 1280px)').matches;
    }

    /**
     * Detect tablet device.
     *
     * @get
     * @static
     * @return {Boolean}
     */

  }, {
    key: 'isTablet',
    get: function get() {
      return window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches;
    }

    /**
     * Detect mobile device.
     *
     * @get
     * @static
     * @return {Boolean}
     */

  }, {
    key: 'isMobile',
    get: function get() {
      return window.matchMedia('(max-width: 767px)').matches;
    }
    /**
     * Detect small mobile device.
     *
     * @get
     * @static
     * @return {Boolean}
     */

  }, {
    key: 'isSmallMobile',
    get: function get() {
      return window.matchMedia('(max-width: 400px)').matches;
    }
  }]);

  return Resp;
}();

/**
 * Css class names.
 *
 * @constant
 * @type {Object}
 */


var css = exports.css = {
  active: 'active'
};

/**
 * Generate string of random letters.
 *
 * @param {Number} length
 */
var randomString = exports.randomString = function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return Math.random().toString(36).substr(2, length > 10 ? length : 10);
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered.
 *
 * @param {Function} func
 * @param {Object} context
 * @param {Number} wait
 * @param {Boolean} [immediate]
 * @returns {Function}
 */
var debounce = exports.debounce = function debounce(func, context, wait, immediate) {
  var timeout = void 0;

  return function () {
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

/**
 * Throttle function.
 *
 * @param {Function} fn
 * @param {Number} [threshold]
 * @param {Object} [scope]
 * @returns {Function}
 */
var throttle = exports.throttle = function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var scope = arguments[2];

  var last = void 0,
      deferTimer = void 0;

  return function () {
    var context = scope || this;
    var now = +new Date();
    var args = arguments;

    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * App entry point.
 *
 * @module App
 */

/** Import initialized-by-default modules/libs */

__webpack_require__(2);

__webpack_require__(3);

var _Home = __webpack_require__(5);

var _Home2 = _interopRequireDefault(_Home);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Run appropriate scripts for each page.
 **/


/** Import page controllers */
switch (_helpers.currentPage) {
  /** Home page */
  case 'home':
    new _Home2.default();break;

  /** No page found */
  default:
    console.warn('Undefined page');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Website's common scripts (example).
 *
 * @module Common
 */

var Common = exports.Common = function () {
  /**
   * Cache data, make preparations and initialize common scripts.
   */
  function Common() {
    _classCallCheck(this, Common);

    this.messages = {
      constructor: 'Common.js: constructor()...',
      init: 'Common.js: init()...',
      example: 'Common.js: example()...'
    };

    console.log(this.messages.constructor);

    // initialize after construction
    this.init();
  }

  /**
   * Example method.
   */


  _createClass(Common, [{
    key: 'example',
    value: function example() {
      console.log(this.messages.example);
    }
  }, {
    key: 'init',


    /**
     * Initialize common scripts.
     */
    value: function init() {
      console.log(this.messages.init);

      this.example();
    }
  }]);

  return Common;
}();

/** Export initialized common scripts by default */


exports.default = new Common();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicAPI = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Website's public API (example).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Make some functions and methods accessible in global scope.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module PublicAPI
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Timer = __webpack_require__(4);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PublicAPI = exports.PublicAPI = function () {
  function PublicAPI() {
    _classCallCheck(this, PublicAPI);
  }

  _createClass(PublicAPI, null, [{
    key: 'Timer',

    /**
     * Some of 'Timer' module public methods.
     *
     * PublicAPI.timer.init() - initialize timer
     * PublicAPI.timer.stop() - stop timer
     *
     * @return {{init: Function, stop: Function}}
     */
    get: function get() {
      return {
        init: _Timer2.default.startTimer.bind(_Timer2.default),
        stop: _Timer2.default.stopTimer.bind(_Timer2.default)
      };
    }
  }]);

  return PublicAPI;
}();

/** Expose Public API */


exports.default = window.PublicAPI = PublicAPI;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Example component (delete on prod)
 *
 * @module Timer
 */

var Timer = exports.Timer = function Timer() {
  var _this = this;

  _classCallCheck(this, Timer);

  this._counter = 1;
  this._timerInterval = null;

  this.setTimer = function (time) {
    _this._counter = time;
  };

  this.startTimer = function () {
    _this._timerInterval = setInterval(function () {
      return console.log("Timer: " + _this._counter++);
    }, 1000);
  };

  this.stopTimer = function () {
    clearInterval(_this._timerInterval);
  };
}
/**
 * @private
 * @type {Number}
 */


/**
 * @private
 * @type {Null|Number}
 */


/**
 * Set current time
 *
 * @public
 * @this Timer
 * @param {Number} time
 */


/**
 * Start countdown
 *
 * @public
 * @this Timer
 */


/**
 * Stop countdown
 *
 * @public
 * @this Timer
 */
;

exports.default = new Timer();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Home page scripts.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module Home
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _helpers = __webpack_require__(0);

var _gsap = __webpack_require__(7);

var _gsap2 = _interopRequireDefault(_gsap);

var _CSSRulePlugin = __webpack_require__(8);

var _MorphSVGPlugin = __webpack_require__(9);

var _CustomEase = __webpack_require__(10);

var _swiper = __webpack_require__(11);

var _swiper2 = _interopRequireDefault(_swiper);

var _jqueryFancybox = __webpack_require__(12);

var _jqueryFancybox2 = _interopRequireDefault(_jqueryFancybox);

var _ScrollMagic = __webpack_require__(13);

var _ScrollMagic2 = _interopRequireDefault(_ScrollMagic);

var _rellax = __webpack_require__(14);

var _rellax2 = _interopRequireDefault(_rellax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function () {
  /**
   * Cache data, make preparations and initialize page scripts.
   */
  function Home() {
    _classCallCheck(this, Home);

    this.init();
  }

  _createClass(Home, [{
    key: "initPreloader",
    value: function initPreloader(preloaderElement) {
      var preloaderEl = document.querySelector(preloaderElement);
      _helpers.$scrolledElements.addClass("active");
      window.addEventListener("load", function () {
        preloaderEl.classList.add("hidden");
        setTimeout(function () {
          window.requestAnimationFrame(function () {
            preloaderEl.parentNode.removeChild(preloaderEl);
            _helpers.$scrolledElements.removeClass("active");
          });
        }, 500);
      });
    }
  }, {
    key: "initRellaxParallax",
    value: function initRellaxParallax(el, opts) {
      new _rellax2.default(el, opts);
    }
  }, {
    key: "initModal",
    value: function initModal(modalTrigger) {
      modalTrigger.click(function () {
        var modalTriggerDataAttr = $(this).attr("data-modal");
        $("#modal-container").removeAttr("class").addClass(modalTriggerDataAttr);
        _helpers.$scrolledElements.addClass("active");
      });

      $("#modal-container, .js-close-modal").click(function (e) {
        var target = e.target;

        if (!$(target).closest(".modal").length || $(target).hasClass("js-close-modal")) {
          $(this).addClass("out");
          _helpers.$scrolledElements.removeClass("active");
        }
      });
    }
  }, {
    key: "initHeaderActions",
    value: function initHeaderActions() {
      var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop,
          isVisible = true;
      var headerTween = _gsap2.default.to(".header", 0.5, { y: "-100%", ease: Power1.easeInOut }).reverse().pause();
      var show = function show() {
        if (!isVisible) {
          headerTween.reverse();
          isVisible = true;
        }
      };
      var hide = function hide() {
        if (isVisible) {
          headerTween.play();
          isVisible = false;
        }
      };

      if (_helpers.Resp.isMobile) {
        var cEase = _CustomEase.CustomEase.create("custom", "M0,0,C0.033,0,0.026,0.204,0.146,0.216,0.294,0.23,0.294,-0.178,0.464,-0.178,0.616,-0.178,0.832,0.19,1,1");
        var burgertl = _gsap2.default.timeline({ paused: true, reversed: true }).set(".mobile-menu-info li", { x: -300 }).to(".stage-one", 0.4, { morphSVG: ".middle-one", ease: cEase }, "start").to(".stage-two", 0.4, { morphSVG: ".middle-two", ease: cEase }, "start").to(".stage-line", 0.4, { scaleX: 0, transformOrigin: "50% 50%", ease: Back.easeIn }, "start").to(".stage-one", 0.1, { morphSVG: ".end-one" }, "end").to(".stage-two", 0.1, { morphSVG: ".end-two" }, "end").from(".mobile-menu-info", 0.4, {
          height: 0
        }).to(".mobile-menu-info li", 0.15, {
          x: 0,
          ease: Sine.easeOut,
          stagger: 0.1
        }).to(".mobile-menu-info li", 0.2, {
          marginBottom: "15px",
          ease: Power1.easeOut
        });
        var isReversed = function isReversed() {
          if (burgertl.reversed()) {
            burgertl.play();
            _helpers.$scrolledElements.addClass("active");
          } else {
            burgertl.reverse();
            _helpers.$scrolledElements.removeClass("active");
          }
        };

        var time = void 0;
        document.querySelector(".mobile-menu").addEventListener("click", function () {
          if (time) {
            clearTimeout(time);
          }
          time = setTimeout(function () {
            return isReversed();
          }, 500);
        });
      }
      // go to anchors
      $("[data-scroll]").click(function (e) {
        e.preventDefault();
        var target = "#" + $(this).data("scroll");
        var $target = $(target);
        if (!(typeof burgertl === "undefined" || burgertl === null) && !burgertl.reversed()) {
          isReversed();
        }
        var scrollTo = function scrollTo() {
          _helpers.$scrolledElements.animate({
            scrollTop: $target.offset().top
          }, 1000);
        };
        if (_helpers.Resp.isMobile) {
          setTimeout(function () {
            scrollTo();
          }, 2000);
          return false;
        } else {
          scrollTo();
        }
      });
      // toggle header visibility on scroll
      var refresh = function refresh() {
        var newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (newScrollTop > 0 && newScrollTop > currentScrollTop) {
          hide();
          if (!(typeof burgertl === "undefined" || burgertl === null) && !burgertl.reversed()) {
            burgertl.reverse();
          }
        } else if (newScrollTop < currentScrollTop) {
          show();
        }
        currentScrollTop = newScrollTop;
      };
      window.addEventListener("scroll", refresh, {
        passive: true
      });
    }
  }, {
    key: "initOnEnterAboutCounters",
    value: function initOnEnterAboutCounters() {
      var numberWithCommas = function numberWithCommas(n) {
        var parts = n.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      var endingCounterVar = [147, 6, 72, 150, 4, 69];

      var _loop = function _loop(i) {
        var counter = { var: 0 };
        var tal = document.getElementById("tal-" + i);
        var aboutCounterController = new _ScrollMagic2.default.Controller();
        var aboutCounterTween = _gsap2.default.timeline().from(tal, { opacity: 0 }).to(counter, 2, {
          var: endingCounterVar[i],
          onUpdate: function onUpdate() {
            var nwc = numberWithCommas(counter.var);
            tal.innerHTML = nwc;
          },
          ease: Circ.easeOut
        });
        aboutCounterTween.pause();
        new _ScrollMagic2.default.Scene({
          triggerElement: ".about__wrapper"
        }).on("enter", function () {
          aboutCounterTween.play();
        }).addTo(aboutCounterController);
      };

      for (var i = 0; i <= 5; i++) {
        _loop(i);
      }
    }
  }, {
    key: "initElemAppearence",
    value: function initElemAppearence() {
      var elemController = new _ScrollMagic2.default.Controller();
      $(".animate-el").each(function () {
        var elemAppearanceTween = _gsap2.default.timeline().from(this, { opacity: 0, duration: 0.8, y: 50, stagger: 0.2 });
        elemAppearanceTween.pause();
        new _ScrollMagic2.default.Scene({
          triggerElement: this,
          offset: -150
        }).on("enter", function () {
          elemAppearanceTween.play();
        }).addTo(elemController);
      });
    }
  }, {
    key: "initAccordAppearence",
    value: function initAccordAppearence() {
      var accordController = new _ScrollMagic2.default.Controller();
      var rule = _CSSRulePlugin.CSSRulePlugin.getRule(".accord:after");
      var elemAppearanceTween = _gsap2.default.timeline({ defaults: { duration: 0.6, stagger: .6 } });
      elemAppearanceTween.from(".animate-el-1", { opacity: 0, y: 50 }).to(rule, { cssRule: { scaleY: 0 } }, "-=1.2");
      elemAppearanceTween.pause();
      new _ScrollMagic2.default.Scene({
        triggerElement: "#gallery",
        offset: -50
      }).on("enter", function () {
        elemAppearanceTween.play();
      }).addTo(accordController);
    }
  }, {
    key: "initOnMouseMoveParallax",
    value: function initOnMouseMoveParallax() {
      $("#gallery").mousemove(function (e) {
        parallaxIt(e, ".gallery__wrapper-left--img", -100);
        parallaxIt(e, ".center-img", 100);
        parallaxIt(e, ".gallery__wrapper-right--img", -100);
        parallaxIt(e, ".gallery__wrapper-desc", -30);
      });

      function parallaxIt(e, target, movement) {
        var $this = $("#gallery");
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        _gsap2.default.to(target, 3, {
          x: (relX - $this.width() / 2) / $this.width() * movement,
          y: (relY - $this.height() / 2) / $this.height() * movement
        });
      }
    }
  }, {
    key: "initFancyGallery",
    value: function initFancyGallery() {
      $('[data-fancybox="gallery"]').fancybox({
        buttons: ['fullScreen', 'close'],
        animationEffect: "zoom-in-out",
        animationDuration: 500,
        transitionEffect: "circular",
        transitionDuration: 500
      });
    }
  }, {
    key: "initFancyPlanning",
    value: function initFancyPlanning() {
      $('[data-fancybox="planning"]').fancybox({
        buttons: ['fullScreen', 'close'],
        animationEffect: "zoom-in-out",
        animationDuration: 500,
        transitionEffect: "circular",
        transitionDuration: 500
      });
    }
  }, {
    key: "initSlider",
    value: function initSlider(el, opts) {
      new _swiper2.default(el, opts);
    }
  }, {
    key: "initScrollToTop",
    value: function initScrollToTop(anyScrollButton) {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 2400 || $(window).scrollTop() > 2000 && _helpers.Resp.isSmallMobile) {
          anyScrollButton.addClass("show");
        } else {
          anyScrollButton.removeClass("show");
        }
      });
      anyScrollButton.on("click", function (e) {
        e.preventDefault();
        _helpers.$scrolledElements.animate({ scrollTop: 0 }, 1200);
      });
    }
    /**
     * Initialize Home page scripts.
     */

  }, {
    key: "init",
    value: function init() {
      this.initPreloader(".preloader");
      this.initHeaderActions();
      this.initModal($(".header__wrapper__callback"));
      this.initElemAppearence();
      this.initAccordAppearence();
      this.initFancyPlanning();
      this.initSlider(".first-screen__container", {
        speed: 1000,
        parallax: true,
        autoplay: true,
        pagination: {
          el: ".first-screen__controls-pagination"
        },
        navigation: {
          nextEl: ".first-screen__controls-next",
          prevEl: ".first-screen__controls-prev"
        }
      });
      if (_helpers.Resp.isDesk) {
        this.initRellaxParallax('.rellax', {
          speed: 1,
          vertical: true,
          horizontal: false
        });
      }
      if (_helpers.Resp.isMobile) {
        this.initSlider(".gallery-slider", {
          // Enable lazy loading
          lazy: true,
          pagination: {
            el: ".gallery-slider-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".gallery-slider-next",
            prevEl: ".gallery-slider-prev"
          }
        });
      }
      this.initSlider(".planning-container", {
        speed: 600,
        parallax: true,
        effect: "fade",
        pagination: {
          el: ".planning__controls-pagination"
        },
        navigation: {
          nextEl: ".planning__controls-next",
          prevEl: ".planning__controls-prev"
        }
      });
      this.initOnEnterAboutCounters();
      if (!_helpers.Resp.isMobile) {
        this.initFancyGallery();
        this.initOnMouseMoveParallax();
      }
      this.initScrollToTop($(".scroll-to-top-button"));
    }
  }]);

  return Home;
}();

exports.default = Home;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
   "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e((t = t || self).window = t.window || {});
}(undefined, function (e) {
   "use strict";
   function _inheritsLoose(t, e) {
      t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
   }function _assertThisInitialized(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;
   }
   /*!
      * GSAP 3.0.1
      * https://greensock.com
      *
      * @license Copyright 2008-2019, GreenSock. All rights reserved.
      * Subject to the terms at https://greensock.com/standard-license or for
      * Club GreenSock members, the agreement issued with that membership.
      * @author: Jack Doyle, jack@greensock.com
     */function n(t) {
      return "string" == typeof t;
   }function o(t) {
      return "function" == typeof t;
   }function p(t) {
      return "number" == typeof t;
   }function q(t) {
      return void 0 === t;
   }function r(t) {
      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
   }function s(t) {
      return !1 !== t;
   }function t() {
      return "undefined" != typeof window;
   }function u(t) {
      return o(t) || n(t);
   }function J(t) {
      return (l = dt(t, at)) && ee;
   }function K(t, e) {
      return console.warn("Invalid", t, "tween of", e, "Missing plugin? gsap.registerPlugin()");
   }function L(t, e) {
      return !e && console.warn(t);
   }function M(t, e) {
      return t && (at[t] = e) && l && (l[t] = e) || at;
   }function N() {
      return 0;
   }function W(t) {
      var e,
          n,
          i = t[0];if (!r(i) && !o(i)) return G(t) ? t : [t];if (!(e = (i._gsap || {}).harness)) {
         for (n = ct.length; n-- && !ct[n].targetTest(i);) {}e = ct[n];
      }for (n = t.length; n--;) {
         t[n]._gsap || (t[n]._gsap = new Ft(t[n], e));
      }return t;
   }function X(t) {
      return t._gsap || W(vt(t))[0]._gsap;
   }function Y(t, e) {
      var r = t[e];return o(r) ? t[e]() : q(r) && t.getAttribute(e) || r;
   }function Z(t, e) {
      return (t = t.split(",")).forEach(e) || t;
   }function $(t) {
      return Math.round(1e4 * t) / 1e4;
   }function _(t, e) {
      for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;) {}return n < r;
   }function aa(t, e, r) {
      var n,
          i = p(t[1]),
          a = (i ? 2 : 1) + (e < 2 ? 0 : 1),
          o = t[a];return i && (o.duration = t[1]), 1 === e ? (o.runBackwards = 1, o.immediateRender = s(o.immediateRender)) : 2 === e && (n = t[a - 1], o.startAt = n, o.immediateRender = s(o.immediateRender)), o.parent = r, o;
   }function ba() {
      var t,
          e,
          r = ot.length,
          n = ot.slice(0);for (ut = {}, t = ot.length = 0; t < r; t++) {
         (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      }
   }function ca(t, e, r, n) {
      ot.length && ba(), t.render(e, r, n), ot.length && ba();
   }function da(t) {
      var e = parseFloat(t);return e || 0 === e ? e : t;
   }function ea(t) {
      return t;
   }function fa(t, e) {
      for (var r in e) {
         r in t || (t[r] = e[r]);
      }return t;
   }function ga(t, e) {
      for (var r in e) {
         r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
      }
   }function ia(t, e) {
      for (var n in e) {
         t[n] = r(e[n]) ? ia(t[n] || (t[n] = {}), e[n]) : e[n];
      }return t;
   }function ja(t, e) {
      var r,
          n = {};for (r in t) {
         r in e || (n[r] = t[r]);
      }return n;
   }function na(t, e, r, n) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");var i = e._prev,
          a = e._next;i ? i._next = a : t[r] === e && (t[r] = a), a ? a._prev = i : t[n] === e && (t[n] = i), e._dp = t, e._next = e._prev = e.parent = null;
   }function oa(t, e) {
      !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
   }function pa(t) {
      for (var e = t; e;) {
         e._dirty = 1, e = e.parent;
      }return t;
   }function sa(t) {
      var e;return t._repeat ? (e = t.duration() + t._rDelay) * ~~(t._tTime / e) : 0;
   }function ta(t, e) {
      return 0 < e._ts ? (t - e._start) * e._ts : (e._dirty ? e.totalDuration() : e._tDur) + (t - e._start) * e._ts;
   }function ua(t, e, r) {
      if (e.parent && oa(e), e._start = r + e._delay, e._end = e._start + (e.totalDuration() / e._ts || 0), function _addLinkedListItem(t, e, r, n, i) {
         void 0 === r && (r = "_first"), void 0 === n && (n = "_last");var a,
             s = t[n];if (i) for (a = e[i]; s && s[i] > a;) {
            s = s._prev;
         }s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = t;
      }(t, e, "_first", "_last", t._sort ? "_start" : 0), (t._recent = e)._time || !e._dur && e._initted) {
         var n = (t.rawTime() - e._start) * e._ts;(!e._dur || mt(0, e.totalDuration(), n) - e._tTime > B) && e.render(n, !0);
      }if (pa(t), t._dp && t._time >= t._dur && t._ts && t._dur < t.duration()) for (var i = t; i._dp;) {
         i.totalTime(i._tTime, !0), i = i._dp;
      }return t;
   }function va(t, e, r, n) {
      return It(t, e), t._initted ? !r && t._pt && t.vars.lazy ? (ot.push(t), t._lazy = [e, n], 1) : void 0 : 1;
   }function ya(t) {
      if (t instanceof Et) return pa(t);var e = t._repeat;return t._tDur = e ? e < 0 ? 1e20 : $(t._dur * (e + 1) + t._rDelay * e) : t._dur, pa(t.parent), t;
   }function Aa(t, e) {
      var r,
          i,
          a = t.labels,
          s = t._recent || _t,
          o = t.duration() >= D ? s.endTime(!1) : t._dur;return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? Aa(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e;
   }function Ba(t, e) {
      return t || 0 === t ? e(t) : e;
   }function Da(t) {
      return (t + "").substr((parseFloat(t) + "").length);
   }function Ga(t) {
      return r(t) && "length" in t && t.length - 1 in t && r(t[0]) && t !== i;
   }function Ja(t) {
      if (o(t)) return t;var d = r(t) ? t : { each: t },
          _ = Dt(d.ease),
          m = d.from || 0,
          g = parseFloat(d.base) || 0,
          v = {},
          e = 0 < m && m < 1,
          y = isNaN(m) || e,
          b = d.axis,
          w = m,
          T = m;return n(m) ? w = T = { center: .5, edges: .5, end: 1 }[m] || 0 : !e && y && (w = m[0], T = m[1]), function (t, e, r) {
         var n,
             i,
             a,
             s,
             o,
             u,
             h,
             l,
             f,
             c = (r || d).length,
             p = v[c];if (!p) {
            if (!(f = "auto" === d.grid ? 0 : (d.grid || [1, D])[1])) {
               for (h = -D; h < (h = r[f++].getBoundingClientRect().left) && f < c;) {}f--;
            }for (p = v[c] = [], n = y ? Math.min(f, c) * w - .5 : m % f, i = y ? c * T / f - .5 : m / f | 0, l = D, u = h = 0; u < c; u++) {
               a = u % f - n, s = i - (u / f | 0), p[u] = o = b ? Math.abs("y" === b ? s : a) : j(a * a + s * s), h < o && (h = o), o < l && (l = o);
            }p.max = h - l, p.min = l, p.v = c = (parseFloat(d.amount) || parseFloat(d.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), p.b = c < 0 ? g - c : g, p.u = Da(d.amount || d.each) || 0, _ = _ && c < 0 ? Ct(_) : _;
         }return c = (p[t] - p.min) / p.max || 0, $(p.b + (_ ? _(c) : c) * p.v) + p.u;
      };
   }function Ka(e) {
      var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;return function (t) {
         return ~~(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Da(t));
      };
   }function La(u, t) {
      var h,
          l,
          e = G(u);return !e && r(u) && (h = e = u.radius || D, u = vt(u.values), (l = !p(u[0])) && (h *= h)), Ba(t, e ? function (t) {
         for (var e, r, n = parseFloat(l ? t.x : t), i = parseFloat(l ? t.y : 0), a = D, s = 0, o = u.length; o--;) {
            (e = l ? (e = u[o].x - n) * e + (r = u[o].y - i) * r : Math.abs(u[o] - n)) < a && (a = e, s = o);
         }return s = !h || a <= h ? u[s] : t, l || s === t || p(t) ? s : s + Da(t);
      } : Ka(u));
   }function Ma(t, e, r, n) {
      return Ba(G(t) ? !e : !n, function () {
         return G(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / r) * r * n) / n;
      });
   }function Qa(e, r, t) {
      return Ba(t, function (t) {
         return e[~~r(t)];
      });
   }function Ta(t) {
      for (var e, r, n, i, a = 0, s = ""; ~(e = t.indexOf("random(", a));) {
         n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? it : H), s += t.substr(a, e - a) + Ma(i ? r : +r[0], +r[1], +r[2] || 1e-5), a = n + 1;
      }return s + t.substr(a, t.length - a);
   }function Wa(t, e, r) {
      var n,
          i,
          a,
          s = t.labels,
          o = D;for (n in s) {
         (i = s[n] - e) < 0 == !!r && i && o > (i = Math.abs(i)) && (a = n, o = i);
      }return a;
   }function Ya(t) {
      return oa(t), t.progress() < 1 && bt(t, "onInterrupt"), t;
   }function bb(t, e, r) {
      return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * wt + .5 | 0;
   }function cb(t, e) {
      var r,
          n,
          i,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c = t ? p(t) ? [t >> 16, t >> 8 & wt, t & wt] : 0 : Tt.black;if (!c) {
         if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Tt[t]) c = Tt[t];else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (r = t.charAt(1)) + r + (n = t.charAt(2)) + n + (i = t.charAt(3)) + i), c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & wt, t & wt];else if ("hsl" === t.substr(0, 3)) {
            if (c = f = t.match(H), e) {
               if (~t.indexOf("=")) return t.match(tt);
            } else a = +c[0] % 360 / 360, s = +c[1] / 100, r = 2 * (o = +c[2] / 100) - (n = o <= .5 ? o * (s + 1) : o + s - o * s), 3 < c.length && (c[3] *= 1), c[0] = bb(a + 1 / 3, r, n), c[1] = bb(a, r, n), c[2] = bb(a - 1 / 3, r, n);
         } else c = t.match(H) || Tt.transparent;c = c.map(Number);
      }return e && !f && (r = c[0] / wt, n = c[1] / wt, i = c[2] / wt, o = ((u = Math.max(r, n, i)) + (h = Math.min(r, n, i))) / 2, u === h ? a = s = 0 : (l = u - h, s = .5 < o ? l / (2 - u - h) : l / (u + h), a = u === r ? (n - i) / l + (n < i ? 6 : 0) : u === n ? (i - r) / l + 2 : (r - n) / l + 4, a *= 60), c[0] = a + .5 | 0, c[1] = 100 * s + .5 | 0, c[2] = 100 * o + .5 | 0), c;
   }function db(t, e) {
      var r,
          n,
          i,
          a = (t + "").match(xt),
          s = 0,
          o = "";if (!a) return t;for (r = 0; r < a.length; r++) {
         n = a[r], s += (i = t.substr(s, t.indexOf(n, s) - s)).length + n.length, 3 === (n = cb(n, e)).length && n.push(1), o += i + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
      }return o + t.substr(s);
   }function gb(t) {
      var e,
          r = t.join(" ");xt.lastIndex = 0, xt.test(r) && (e = kt.test(r), t[0] = db(t[0], e), t[1] = db(t[1], e));
   }function ob(t) {
      var e = (t + "").split("("),
          r = Ot[e[0]];return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
         for (var e, r, n, i = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) {
            r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(St, "").trim() : +n, s = r.substr(e + 1).trim();
         }return i;
      }(e[1])] : rt.exec(t)[1].split(",").map(da)) : Ot._CE && Pt.test(t) ? Ot._CE("", t) : r;
   }function rb(t, e, r, n) {
      void 0 === r && (r = function easeOut(t) {
         return 1 - e(1 - t);
      }), void 0 === n && (n = function easeInOut(t) {
         return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
      });var i,
          a = { easeIn: e, easeOut: r, easeInOut: n };return Z(t, function (t) {
         for (var e in Ot[t] = at[t] = a, Ot[i = t.toLowerCase()] = r, a) {
            Ot[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ot[t + "." + e] = a[e];
         }
      }), a;
   }function sb(e) {
      return function (t) {
         return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
      };
   }function tb(r, t, e) {
      function sk(t) {
         return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Q((t - a) * i) + 1;
      }var n = 1 <= t ? t : 1,
          i = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
          a = i / F * (Math.asin(1 / n) || 0),
          s = "out" === r ? sk : "in" === r ? function (t) {
         return 1 - sk(1 - t);
      } : sb(sk);return i = F / i, s.config = function (t, e) {
         return tb(r, t, e);
      }, s;
   }function ub(e, r) {
      function Ak(t) {
         return --t * t * ((r + 1) * t + r) + 1;
      }void 0 === r && (r = 1.70158);var t = "out" === e ? Ak : "in" === e ? function (t) {
         return 1 - Ak(1 - t);
      } : sb(Ak);return t.config = function (t) {
         return ub(e, t);
      }, t;
   }var R,
       i,
       a,
       h,
       l,
       f,
       d,
       c,
       m,
       g,
       v,
       y,
       b,
       w,
       T,
       x,
       k,
       A,
       O,
       P,
       S,
       C,
       U = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
       E = { duration: .5, overwrite: !1, delay: 0 },
       D = 1e8,
       B = 1 / D,
       F = 2 * Math.PI,
       z = F / 4,
       I = 0,
       j = Math.sqrt,
       V = Math.cos,
       Q = Math.sin,
       G = Array.isArray,
       H = /(?:-?\.?\d|\.)+/gi,
       tt = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
       et = /[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,
       rt = /\(([^()]+)\)/i,
       nt = /[\+-]=-?[\.\d]+/,
       it = /[#\-+\.]*\b[a-z\d-=+%.]+/gi,
       at = {},
       st = {},
       ot = [],
       ut = {},
       ht = {},
       lt = {},
       ft = 30,
       ct = [],
       pt = "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
       dt = function _merge(t, e) {
      for (var r in e) {
         t[r] = e[r];
      }return t;
   },
       _t = { _start: 0, endTime: N },
       mt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
   },
       gt = [].slice,
       vt = function toArray(t, e) {
      return !n(t) || e || !a && Mt() ? G(t) ? function _flatten(t, r, i) {
         return void 0 === i && (i = []), t.forEach(function (t) {
            var e;return n(t) && !r || Ga(t) ? (e = i).push.apply(e, vt(t)) : i.push(t);
         }) || i;
      }(t, e) : Ga(t) ? gt.call(t, 0) : t ? [t] : [] : gt.call(h.querySelectorAll(t), 0);
   },
       yt = function mapRange(e, t, r, n, i) {
      var a = t - e,
          s = n - r;return Ba(i, function (t) {
         return r + (t - e) / a * s;
      });
   },
       bt = function _callback(t, e, r) {
      var n,
          i,
          a = t.vars,
          s = a[e];if (s) return n = a[e + "Params"], i = a.callbackScope || t, r && ot.length && ba(), n ? s.apply(i, n) : s.call(i, t);
   },
       wt = 255,
       Tt = { aqua: [0, wt, wt], lime: [0, wt, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, wt], navy: [0, 0, 128], white: [wt, wt, wt], olive: [128, 128, 0], yellow: [wt, wt, 0], orange: [wt, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [wt, 0, 0], pink: [wt, 192, 203], cyan: [0, wt, wt], transparent: [wt, wt, wt, 0] },
       xt = function () {
      var t,
          e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for (t in Tt) {
         e += "|" + t + "\\b";
      }return new RegExp(e + ")", "gi");
   }(),
       kt = /hsl[a]?\(/,
       At = (b = Date.now, w = 500, T = 33, x = b(), k = x, O = A = 1 / 60, y = { time: 0, frame: 0, tick: function tick() {
         yj(!0);
      }, wake: function wake() {
         f && (!a && t() && (i = a = window, h = i.document || {}, at.gsap = ee, (i.gsapVersions || (i.gsapVersions = [])).push(ee.version), J(l || i.GreenSockGlobals || !i.gsap && i || {}), v = i.requestAnimationFrame), m && y.sleep(), g = v || function (t) {
            return setTimeout(t, 1e3 * (O - y.time) + 1 | 0);
         }, c = 1, yj(2));
      }, sleep: function sleep() {
         (v ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = N;
      }, lagSmoothing: function lagSmoothing(t, e) {
         w = t || 1e8, T = Math.min(e, w, 0);
      }, fps: function fps(t) {
         A = 1 / (t || 60), O = y.time + A;
      }, add: function add(t) {
         P.indexOf(t) < 0 && P.push(t), Mt();
      }, remove: function remove(t) {
         var e;~(e = P.indexOf(t)) && P.splice(e, 1);
      }, _listeners: P = [] }),
       Mt = function _wake() {
      return !c && At.wake();
   },
       Ot = {},
       Pt = /^[\d.\-M][\d.\-,\s]/,
       St = /["']/g,
       Ct = function _invertEase(e) {
      return function (t) {
         return 1 - e(1 - t);
      };
   },
       Dt = function _parseEase(t, e) {
      return t && (o(t) ? t : Ot[t] || ob(t)) || e;
   };function yj(e) {
      var t,
          r,
          n = b() - k,
          i = !0 === e;w < n && (x += n - T), k += n, y.time = (k - x) / 1e3, (0 < (t = y.time - O) || i) && (y.frame++, O += t + (A <= t ? .004 : A - t), r = 1), i || (m = g(yj)), r && P.forEach(function (t) {
         return t(y.time, n, y.frame, e);
      });
   }function Rk(t) {
      return t < C ? S * t * t : t < .7272727272727273 ? S * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? S * (t -= 2.25 / 2.75) * t + .9375 : S * Math.pow(t - 2.625 / 2.75, 2) + .984375;
   }Z("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var r = e < 5 ? e + 1 : e;rb(t + ",Power" + (r - 1), e ? function (t) {
         return Math.pow(t, r);
      } : function (t) {
         return t;
      }, function (t) {
         return 1 - Math.pow(1 - t, r);
      }, function (t) {
         return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
      });
   }), Ot.Linear.easeNone = Ot.none = Ot.Linear.easeIn, rb("Elastic", tb("in"), tb("out"), tb()), S = 7.5625, C = 1 / 2.75, rb("Bounce", function (t) {
      return 1 - Rk(1 - t);
   }, Rk), rb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
   }), rb("Circ", function (t) {
      return -(j(1 - t * t) - 1);
   }), rb("Sine", function (t) {
      return 1 - V(t * z);
   }), rb("Back", ub("in"), ub("out"), ub()), Ot.SteppedEase = Ot.steps = at.SteppedEase = { config: function config(t, e) {
         void 0 === t && (t = 1);var r = 1 / t,
             n = t + (e ? 0 : 1),
             i = e ? 1 : 0;return function (t) {
            return ((n * mt(0, .99999999, t) | 0) + i) * r;
         };
      } }, E.ease = Ot["quad.out"];var Bt,
       Ft = function GSCache(t, e) {
      this.id = I++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : Y, this.set = e ? e.getSetter : jt;
   },
       Rt = ((Bt = Animation.prototype).delay = function delay(t) {
      return t || 0 === t ? (this._delay = t, this) : this._delay;
   }, Bt.duration = function duration(t) {
      var e = arguments.length,
          r = this._repeat,
          n = 0 < r ? r * ((e ? t : this._dur) + this._rDelay) : 0;return e ? this.totalDuration(r < 0 ? t : t + n) : this.totalDuration() && this._dur;
   }, Bt.totalDuration = function totalDuration(t) {
      if (!arguments.length) return this._tDur;var e = this._repeat,
          r = (t || this._rDelay) && e < 0;return this._tDur = r ? 1e20 : t, this._dur = r ? t : (t - e * this._rDelay) / (e + 1), this._dirty = 0, pa(this.parent), this;
   }, Bt.totalTime = function totalTime(t, e) {
      if (Mt(), !arguments.length) return this._tTime;var r,
          n = this.parent || this._dp;if (n && n.smoothChildTiming && this._ts) {
         for (r = this._start, this._start = n._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts), this._end += this._start - r, n._dirty || pa(n); n.parent;) {
            n.parent._time !== n._start + (0 < n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
         }this.parent || ua(this._dp, this, this._start - this._delay);
      }return this._tTime === t && this._dur || ca(this, t, e), this;
   }, Bt.time = function time(t, e) {
      return arguments.length ? this.totalTime(t + sa(this), e) : this._time;
   }, Bt.totalProgress = function totalProgress(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._tTime / this.totalDuration();
   }, Bt.progress = function progress(t, e) {
      return arguments.length ? this.totalTime(this.duration() * t + sa(this), e) : this.duration() ? this._time / this._dur : this.ratio;
   }, Bt.iteration = function iteration(t, e) {
      var r = this.duration() + this._rDelay;return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? 1 + ~~(this._tTime / r) : 1;
   }, Bt.timeScale = function timeScale(t) {
      var e = this._ts;return arguments.length ? e ? (this._end = this._start + this._tDur / (this._ts = t || B), function _recacheAncestors(t) {
         for (var e = t.parent; e && e.parent;) {
            e._dirty = 1, e.totalDuration(), e = e.parent;
         }return t;
      }(this).totalTime(this._tTime, !0)) : (this._pauseTS = t, this) : e || this._pauseTS;
   }, Bt.paused = function paused(t) {
      var e = !this._ts;return arguments.length ? (e !== t && (t ? (this._pauseTS = this._ts, this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (this._ts = this._pauseTS, t = this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B), this.totalTime(t, !0))), this) : e;
   }, Bt.startTime = function startTime(t) {
      return arguments.length ? (this.parent && this.parent._sort && ua(this.parent, this, t - this._delay), this) : this._start;
   }, Bt.endTime = function endTime(t) {
      return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
   }, Bt.rawTime = function rawTime(t) {
      var e = this.parent || this._dp;return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ta(e.rawTime(t), this) : this._tTime : this._tTime;
   }, Bt.repeat = function repeat(t) {
      return arguments.length ? (this._repeat = t, ya(this)) : this._repeat;
   }, Bt.repeatDelay = function repeatDelay(t) {
      return arguments.length ? (this._rDelay = t, ya(this)) : this._rDelay;
   }, Bt.yoyo = function yoyo(t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
   }, Bt.seek = function seek(t, e) {
      return this.totalTime(Aa(this, t), s(e));
   }, Bt.restart = function restart(t, e) {
      return this.play().totalTime(t ? -this._delay : 0, s(e));
   }, Bt.play = function play(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
   }, Bt.reverse = function reverse(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
   }, Bt.pause = function pause(t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
   }, Bt.resume = function resume() {
      return this.paused(!1);
   }, Bt.reversed = function reversed(t) {
      var e = this._ts || this._pauseTS;return arguments.length ? (t !== this.reversed() && (this[this._ts ? "_ts" : "_pauseTS"] = Math.abs(e) * (t ? -1 : 1), this.totalTime(this._tTime, !0)), this) : e < 0;
   }, Bt.invalidate = function invalidate() {
      return this._initted = 0, this;
   }, Bt.isActive = function isActive() {
      var t,
          e = this.parent || this._dp,
          r = this._start;return !e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - B;
   }, Bt.eventCallback = function eventCallback(t, e, r) {
      var n = this.vars;return 1 < arguments.length ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t];
   }, Bt.then = function then(e) {
      var r = this;return void 0 === e && (e = N), new Promise(function (t) {
         r._prom = function () {
            e(r), t();
         };
      });
   }, Bt.kill = function kill() {
      Ya(this);
   }, Animation);function Animation(t, e) {
      var r = t.parent || R;this.vars = t, this._dur = this._tDur = +t.duration || 0, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase, ya(this)), this._ts = 1, this.data = t.data, c || At.wake(), r && ua(r, this, e || 0 === e ? e : r._time), t.reversed && this.reversed(!0), t.paused && this.paused(!0);
   }fa(Rt.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: 0, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -B, _prom: 0 });var Et = function (i) {
      function Timeline(t, e) {
         var r;return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = s(t.smoothChildTiming), r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r;
      }_inheritsLoose(Timeline, i);var t = Timeline.prototype;return t.to = function to(t, e, r, n) {
         return new Xt(t, aa(arguments, 0, this), Aa(this, p(e) ? n : r)), this;
      }, t.from = function from(t, e, r, n) {
         return new Xt(t, aa(arguments, 1, this), Aa(this, p(e) ? n : r)), this;
      }, t.fromTo = function fromTo(t, e, r, n, i) {
         return new Xt(t, aa(arguments, 2, this), Aa(this, p(e) ? i : n)), this;
      }, t.set = function set(t, e, r) {
         return e.duration = 0, e.parent = this, e.repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Xt(t, e, Aa(this, r)), this;
      }, t.call = function call(t, e, r) {
         return ua(this, Xt.delayedCall(0, t, e), Aa(this, r));
      }, t.staggerTo = function staggerTo(t, e, r, n, i, a, s) {
         return r.duration = e, r.stagger = r.stagger || n, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Xt(t, r, Aa(this, i)), this;
      }, t.staggerFrom = function staggerFrom(t, e, r, n, i, a, o) {
         return r.runBackwards = 1, r.immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, n, i, a, o);
      }, t.staggerFromTo = function staggerFromTo(t, e, r, n, i, a, o, u) {
         return n.startAt = r, n.immediateRender = s(n.immediateRender), this.staggerTo(t, e, n, i, a, o, u);
      }, t.render = function render(t, e, r) {
         var n,
             i,
             a,
             s,
             o,
             u,
             h,
             l,
             f,
             c,
             p,
             d = this._time,
             _ = this._dirty ? this.totalDuration() : this._tDur,
             m = this._dur,
             g = _ - B < t && 0 <= t && this !== R ? _ : t < B ? 0 : t,
             v = this._zTime < 0 != t < 0 && this._initted;if (g !== this._tTime || r || v) {
            if (v && (m || (d = this._zTime), !t && e || (this._zTime = t)), n = g, f = this._start, u = 0 === (l = this._ts), d !== this._time && m && (n += this._time - d), this._repeat && (p = this._yoyo, o = m + this._rDelay, (m < (n = $(g % o)) || _ === g) && (n = m), (s = ~~(g / o)) && s === g / o && (n = m, s--), (c = ~~(this._tTime / o)) && c === this._tTime / o && c--, p && 1 & s && (n = m - n), s !== c && !this._lock)) {
               var y = p && 1 & c,
                   b = y === (p && 1 & s);if (s < c && (y = !y), d = y ? 0 : m, this._lock = 1, this.render(d, e, !m)._lock = 0, !e && this.parent && bt(this, "onRepeat"), d !== this._time || u != !this._ts) return this;if (b && (this._lock = 2, d = y ? m + 1e-4 : -1e-4, this.render(d, !0)), this._lock = 0, !this._ts && !u) return this;
            }if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
               var n;if (e < r) for (n = t._first; n && n._start <= r;) {
                  if (!n._dur && "isPause" === n.data && n._start > e) return n;n = n._next;
               } else for (n = t._last; n && n._start >= r;) {
                  if (!n._dur && "isPause" === n.data && n._start < e) return n;n = n._prev;
               }
            }(this, $(d), $(n))) && (g -= n - (n = h._start)), this._tTime = g, this._time = n, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1), d || !n || e || bt(this, "onStart"), d <= n && 0 <= t) for (i = this._first; i;) {
               if (a = i._next, (i._act || n >= i._start) && i._ts && h !== i) {
                  if (i.parent !== this) return this.render(t, e, r);if (i.render(0 < i._ts ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !u) {
                     h = 0;break;
                  }
               }i = a;
            } else {
               i = this._last;for (var w = t < 0 ? t : n; i;) {
                  if (a = i._prev, (i._act || w <= i._end) && i._ts && h !== i) {
                     if (i.parent !== this) return this.render(t, e, r);if (i.render(0 < i._ts ? (w - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (w - i._start) * i._ts, e, r), n !== this._time || !this._ts && !u) {
                        h = 0;break;
                     }
                  }i = a;
               }
            }if (h && !e && (this.pause(), h.render(d <= n ? 0 : -B)._zTime = d <= n ? 1 : -1, this._ts)) return this._start = f, this.render(t, e, r);this._onUpdate && !e && bt(this, "onUpdate", !0), (g === _ || !g && this._ts < 0) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || (!n || _ >= this.totalDuration()) && (!t && m || oa(this, 1), e || t < 0 && !d || (bt(this, g === _ ? "onComplete" : "onReverseComplete", !0), this._prom && g === _ && this._prom())));
         }return this;
      }, t.add = function add(t, e) {
         var r = this;if (p(e) || (e = Aa(this, e)), !(t instanceof Rt)) {
            if (G(t)) return t.forEach(function (t) {
               return r.add(t, e);
            }), pa(this);if (n(t)) return this.addLabel(t, e);if (!o(t)) return this;t = Xt.delayedCall(0, t);
         }return this !== t ? ua(this, t, e) : this;
      }, t.getChildren = function getChildren(t, e, r, n) {
         void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -D);for (var i = [], a = this._first; a;) {
            a._start >= n && (a instanceof Xt ? e && i.push(a) : (r && i.push(a), t && i.push.apply(i, a.getChildren(!0, e, r)))), a = a._next;
         }return i;
      }, t.getById = function getById(t) {
         for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) {
            if (e[r].vars.id === t) return e[r];
         }
      }, t.remove = function remove(t) {
         return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (na(this, t), t === this._recent && (this._recent = this._last), pa(this));
      }, t.totalTime = function totalTime(t, e) {
         return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = At.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts)), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
      }, t.addLabel = function addLabel(t, e) {
         return this.labels[t] = Aa(this, e), this;
      }, t.removeLabel = function removeLabel(t) {
         return delete this.labels[t], this;
      }, t.addPause = function addPause(t, e, r) {
         var n = Xt.delayedCall(0, e || N, r);return n.data = "isPause", this._hasPause = 1, ua(this, n, Aa(this, t));
      }, t.removePause = function removePause(t) {
         var e = this._first;for (t = Aa(this, t); e;) {
            e._start === t && "isPause" === e.data && oa(e), e = e._next;
         }
      }, t.killTweensOf = function killTweensOf(t, e, r) {
         for (var n = this.getTweensOf(t, r), i = n.length; i--;) {
            n[i].kill(t, e);
         }return this;
      }, t.getTweensOf = function getTweensOf(t, e) {
         for (var r, n = [], i = vt(t), a = this._first; a;) {
            a instanceof Xt ? !_(a._targets, i) || e && !a.isActive() || n.push(a) : (r = a.getTweensOf(i, e)).length && n.push.apply(n, r), a = a._next;
         }return n;
      }, t.tweenTo = function tweenTo(t, e) {
         var r = this,
             n = Aa(r, t),
             i = e && e.startAt,
             a = Xt.to(r, fa({ ease: "none", lazy: !1, time: n, duration: Math.abs(n - (i && "time" in i ? i.time : r._time)) / r.timeScale() || B, onStart: function onStart() {
               r.pause();var t = Math.abs(n - r._time) / r.timeScale();a._dur !== t && (a._dur = t, a.render(a._time, !0, !0)), e && e.onStart && e.onStart.apply(a, e.onStartParams || []);
            } }, e));return a;
      }, t.tweenFromTo = function tweenFromTo(t, e, r) {
         return this.tweenTo(e, fa({ startAt: { time: Aa(this, t) } }, r));
      }, t.recent = function recent() {
         return this._recent;
      }, t.nextLabel = function nextLabel(t) {
         return void 0 === t && (t = this._time), Wa(this, Aa(this, t));
      }, t.previousLabel = function previousLabel(t) {
         return void 0 === t && (t = this._time), Wa(this, Aa(this, t), 1);
      }, t.currentLabel = function currentLabel(t) {
         return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B);
      }, t.shiftChildren = function shiftChildren(t, e, r) {
         void 0 === r && (r = 0);for (var n, i = this._first, a = this.labels; i;) {
            i._start >= r && (i._start += t), i = i._next;
         }if (e) for (n in a) {
            a[n] >= r && (a[n] += t);
         }return pa(this);
      }, t.invalidate = function invalidate() {
         var t = this._first;for (this._lock = 0; t;) {
            t.invalidate(), t = t._next;
         }return i.prototype.invalidate.call(this);
      }, t.clear = function clear(t) {
         void 0 === t && (t = !0);for (var e, r = this._first; r;) {
            e = r._next, this.remove(r), r = e;
         }return this._time = this._tTime = 0, t && (this.labels = {}), pa(this);
      }, t.totalDuration = function totalDuration(t) {
         var e,
             r,
             n = 0,
             i = this,
             a = i._last,
             s = D,
             o = i._repeat,
             u = o * i._rDelay || 0,
             h = o < 0;if (arguments.length) return h ? i : i.timeScale(i.totalDuration() / t);if (i._dirty) {
            for (; a;) {
               e = a._prev, a._dirty && a.totalDuration(), a._start > s && i._sort && a._ts && !i._lock ? (i._lock = 1, ua(i, a, a._start - a._delay), i._lock = 0) : s = a._start, a._start < 0 && a._ts && (n -= a._start, (!i.parent && !i._dp || i.parent && i.parent.smoothChildTiming) && (i._start += a._start / i._ts, i._time -= a._start, i._tTime -= a._start), i.shiftChildren(-a._start, !1, -D), s = 0), n < (r = a._end = a._start + a._tDur / Math.abs(a._ts || a._pauseTS)) && a._ts && (n = $(r)), a = e;
            }i._dur = i === R && i._time > n ? i._time : Math.min(D, n), i._tDur = h && (i._dur || u) ? 1e20 : Math.min(D, n * (o + 1) + u), i._end = i._start + (i._tDur / Math.abs(i._ts || i._pauseTS) || 0), i._dirty = 0;
         }return i._tDur;
      }, Timeline.updateRoot = function updateRoot(t) {
         if (R._ts && ca(R, ta(t, R)), At.frame >= ft) {
            ft += U.autoSleep || 120;var e = R._first;if ((!e || !e._ts) && U.autoSleep && At._listeners.length < 2) {
               for (; e && !e._ts;) {
                  e = e._next;
               }e || At.sleep();
            }
         }
      }, Timeline;
   }(Rt);fa(Et.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });function Bb(t, e, i, a, s, u) {
      var h, l, f, c;if (ht[t] && !1 !== (h = new ht[t]()).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
         if (o(t) && (t = Yt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || G(t)) return n(t) ? Yt(t, s, e, i, a) : t;var u,
             h = {};for (u in t) {
            h[u] = Yt(t[u], s, e, i, a);
         }return h;
      }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new te(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), i !== d)) for (f = i._ptLookup[i._targets.indexOf(s)], c = h._props.length; c--;) {
         f[h._props[c]] = l;
      }return h;
   }var zt,
       Lt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));var f,
          c = t[e],
          p = "get" !== r ? r : o(c) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
          d = o(c) ? l ? qt : Ut : Zt;if (n(i) && (~i.indexOf("random(") && (i = Ta(i)), "=" === i.charAt(1) && (i = parseFloat(p) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + Da(p))), p !== i) return isNaN(p + i) ? (c || e in t || K(e, i), function _addComplexStringPropTween(t, e, r, n, i, a, s) {
         var o,
             u,
             h,
             l,
             f,
             c,
             p,
             d,
             _ = new te(this._pt, t, e, 0, 1, Wt, null, i),
             m = 0,
             g = 0;for (_.b = r, _.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = Ta(n)), a && (a(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(et) || []; o = et.exec(n);) {
            l = o[0], f = n.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]), _._pt = { _next: _._pt, p: f || 1 === g ? f : ",", s: c, c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - c, m: h && h < 4 ? Math.round : 0 }, m = et.lastIndex);
         }return _.c = m < n.length ? n.substring(m, n.length) : "", _.fp = s, (nt.test(n) || p) && (_.e = 0), this._pt = _;
      }.call(this, t, e, p, i, d, h || U.stringFilter, l)) : (f = new te(this._pt, t, e, +p || 0, i - (p || 0), "boolean" == typeof c ? Qt : Vt, 0, d), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f);
   },
       It = function _initTween(t, e) {
      var r,
          n,
          i,
          a,
          o,
          u,
          h,
          l,
          f,
          c,
          p,
          d,
          _ = t.vars,
          m = _.ease,
          g = _.startAt,
          v = _.immediateRender,
          y = _.lazy,
          b = _.onUpdate,
          w = _.onUpdateParams,
          T = _.callbackScope,
          x = _.runBackwards,
          k = _.yoyoEase,
          A = _.keyframes,
          M = _.autoRevert,
          O = t._dur,
          P = t._startAt,
          S = t._targets,
          C = t.parent,
          D = C && "nested" === C.data ? C.parent._targets : S,
          B = "auto" === t._overwrite,
          F = t.timeline;if (!F || A && m || (m = "none"), t._ease = Dt(m, E.ease), t._yEase = k ? Ct(Dt(!0 === k ? m : k, E.ease)) : 0, k && t._yoyo && !t._repeat && (k = t._yEase, t._yEase = t._ease, t._ease = k), !F) {
         if (P && P.render(-1, !0).kill(), g) {
            if (oa(t._startAt = Xt.set(S, fa({ data: "isStart", overwrite: !1, parent: C, immediateRender: !0, lazy: s(y), startAt: null, delay: 0, onUpdate: b, onUpdateParams: w, callbackScope: T, stagger: 0 }, g))), v) if (0 < e) M || (t._startAt = 0);else if (O) return;
         } else if (x && O) if (P) M || (t._startAt = 0);else if (e && (v = !1), oa(t._startAt = Xt.set(S, dt(ja(_, st), { overwrite: !1, data: "isFromStart", lazy: v && s(y), immediateRender: v, stagger: 0, parent: C }))), v) {
            if (!e) return;
         } else _initTween(t._startAt, e), v && (M || (t._startAt = 0));for (r = ja(_, st), d = (l = S[t._pt = 0] ? X(S[0]).harness : 0) && _[l.prop], n = 0; n < S.length; n++) {
            if (h = (o = S[n])._gsap || W(S)[n]._gsap, t._ptLookup[n] = c = {}, ut[h.id] && ba(), p = D === S ? n : D.indexOf(o), l && !1 !== (f = new l()).init(o, d || r, t, p, D) && (t._pt = a = new te(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
               c[t] = a;
            }), f.priority && (u = 1)), !l || d) for (i in r) {
               ht[i] && (f = Bb(i, r, t, p, o, D)) ? f.priority && (u = 1) : c[i] = a = Lt.call(t, o, i, "get", r[i], p, D, 0, _.stringFilter);
            }t._op && t._op[n] && t.kill(o, t._op[n]), B && (zt = t, R.killTweensOf(o, c, !0), zt = 0), t._pt && (s(y) && O || y && !O) && (ut[h.id] = 1);
         }u && Ht(t), t._onInit && t._onInit(t);
      }t._from = !F && !!_.runBackwards, t._onUpdate = b, t._initted = 1;
   },
       Yt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? Ta(t) : t;
   },
       Nt = pt + ",repeat,repeatDelay,yoyo,yoyoEase",
       $t = (Nt + ",id,stagger,delay,duration").split(","),
       Xt = function (k) {
      function Tween(t, e, n) {
         var i;"number" == typeof e && (n.duration = e, e = n, n = null);var a,
             o,
             h,
             l,
             f,
             c,
             p,
             d,
             _ = (i = k.call(this, function _inheritDefaults(t) {
            var e = t.parent || R,
                r = t.keyframes ? ga : fa;if (s(t.inherit)) for (; e;) {
               r(t, e.vars.defaults), e = e.parent;
            }return t;
         }(e), n) || this).vars,
             m = _.duration,
             g = _.delay,
             v = _.immediateRender,
             y = _.stagger,
             b = _.overwrite,
             w = _.keyframes,
             T = _.defaults,
             x = vt(t);if (i._targets = x.length ? W(x) : L("GSAP target " + t + " not found. https://greensock.com", !U.nullTargetWarn) || [{}], i._ptLookup = [], i._overwrite = b, w || y || u(m) || u(g)) {
            if (e = i.vars, (a = i.timeline = new Et({ data: "nested", defaults: T || {} })).kill(), a.parent = _assertThisInitialized(i), w) fa(a.vars.defaults, { ease: "none" }), w.forEach(function (t) {
               return a.to(x, t, ">");
            });else {
               if (l = x.length, p = y ? Ja(y) : N, r(y)) for (f in y) {
                  ~Nt.indexOf(f) && ((d = d || {})[f] = y[f]);
               }for (o = 0; o < l; o++) {
                  for (f in h = {}, e) {
                     $t.indexOf(f) < 0 && (h[f] = e[f]);
                  }h.stagger = 0, d && dt(h, d), e.yoyoEase && !e.repeat && (h.yoyoEase = e.yoyoEase), c = x[o], h.duration = +Yt(m, _assertThisInitialized(i), o, c, x), h.delay = (+Yt(g, _assertThisInitialized(i), o, c, x) || 0) - i._delay, !y && 1 === l && h.delay && (i._delay = g = h.delay, i._start += g, h.delay = 0), a.to(c, h, p(o, c, x));
               }m = g = 0;
            }m || i.duration(m = a.duration());
         } else i.timeline = 0;return !0 === b && (zt = _assertThisInitialized(i), R.killTweensOf(x), zt = 0), (v || !m && !w && i._start === i.parent._time && s(v) && function _hasNoPausedAncestors(t) {
            return !t || t._ts && _hasNoPausedAncestors(t.parent);
         }(_assertThisInitialized(i)) && "nested" !== i.parent.data) && (i._tTime = -B, i.render(Math.max(0, -g))), i;
      }_inheritsLoose(Tween, k);var t = Tween.prototype;return t.render = function render(t, e, r) {
         var n,
             i,
             a,
             s,
             o,
             u,
             h,
             l,
             f,
             c = this._time,
             p = this._tDur,
             d = this._dur,
             _ = p - B < t && 0 <= t ? p : t < B ? 0 : t;if (d) {
            if (_ !== this._tTime || r || this._startAt && this._zTime < 0 != t < 0) {
               if (n = _, l = this.timeline, this._repeat) {
                  if (s = d + this._rDelay, d < (n = $(_ % s)) && (n = d), (a = ~~(_ / s)) && a === _ / s && (n = d, a--), (u = this._yoyo && 1 & a) && (f = this._yEase, n = d - n), (o = ~~(this._tTime / s)) && o === this._tTime / s && o--, n === c && !r) return this;a !== o && this.vars.repeatRefresh && !this._lock && (this._lock = 1, this.render(s * a, !0).invalidate()._lock = 0);
               }if (!this._initted && va(this, n, r, e)) return this;for (this._tTime = _, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(n / d), this._from && (this.ratio = h = 1 - h), c || !n || e || bt(this, "onStart"), i = this._pt; i;) {
                  i.r(h, i.d), i = i._next;
               }l && l.render(t < 0 ? t : !n && u ? -B : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), bt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"), _ !== p && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, r), !t && d || !(_ || this._ts < 0) || oa(this, 1), e || t < 0 && !c || (bt(this, _ === p ? "onComplete" : "onReverseComplete", !0), this._prom && _ === p && this._prom()));
            }
         } else !function _renderZeroDurationTween(t, e, r, n) {
            var i,
                a,
                s,
                o = t._zTime < 0 ? 0 : 1,
                u = e < 0 ? 0 : 1,
                h = t._rDelay,
                l = 0;if (h && t._repeat && ((a = ~~((l = mt(0, t._tDur, e)) / h)) && a === l / h && a--, (s = ~~(t._tTime / h)) && s === t._tTime / h && s--, a !== s && (o = 1 - u, t.vars.repeatRefresh && t.invalidate())), (t._initted || !va(t, e, n, r)) && (u !== o || n)) {
               for (r && !e || (t._zTime = e), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, r || bt(t, "onStart"), i = t._pt; i;) {
                  i.r(u, i.d), i = i._next;
               }!u && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, n), t._onUpdate && !r && bt(t, "onUpdate"), l && t._repeat && !r && t.parent && bt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (t.ratio && oa(t, 1), r || (bt(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t.ratio && t._prom()));
            }
         }(this, t, e, r);return this;
      }, t.targets = function targets() {
         return this._targets;
      }, t.invalidate = function invalidate() {
         return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), k.prototype.invalidate.call(this);
      }, t.kill = function kill(t, e) {
         if (void 0 === e && (e = "all"), zt === this) return zt;if (!(t || e && "all" !== e) && this.parent) return this._lazy = 0, Ya(this);if (this.timeline) return this.timeline.killTweensOf(t, e), this;var r,
             i,
             a,
             s,
             o,
             u,
             h,
             l = this._targets,
             f = t ? vt(t) : l,
             c = this._ptLookup,
             p = this._pt;if ((!e || "all" === e) && function _arraysMatch(t, e) {
            for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];) {}return r < 0;
         }(l, f)) return Ya(this);for (r = this._op = this._op || [], "all" !== e && (n(e) && (o = {}, Z(e, function (t) {
            return o[t] = 1;
         }), e = o), e = function _addAliasesToVars(t, e) {
            var r,
                n,
                i,
                a,
                s = t[0] ? X(t[0]).harness : 0,
                o = s && s.aliases;if (!o) return e;for (n in r = dt({}, e), o) {
               if ((n in r)) for (i = (a = o[n].split(",")).length; i--;) {
                  r[a[i]] = r[n];
               }
            }return r;
         }(l, e)), h = l.length; h--;) {
            if (~f.indexOf(l[h])) for (o in i = c[h], "all" === e ? (r[h] = e, s = i, a = {}) : (a = r[h] = r[h] || {}, s = e), s) {
               (u = i && i[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || (na(this, u, "_pt"), delete i[o])), "all" !== a && (a[o] = 1);
            }
         }return this._initted && !this._pt && p && Ya(this), this;
      }, Tween.to = function to(t, e, r) {
         return new Tween(t, e, r);
      }, Tween.from = function from(t, e) {
         return new Tween(t, aa(arguments, 1));
      }, Tween.delayedCall = function delayedCall(t, e, r, n) {
         return new Tween(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: n });
      }, Tween.fromTo = function fromTo(t, e, r) {
         return new Tween(t, aa(arguments, 2));
      }, Tween.set = function set(t, e) {
         return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
      }, Tween.killTweensOf = function killTweensOf(t, e, r) {
         return R.killTweensOf(t, e, r);
      }, Tween;
   }(Rt);fa(Xt.prototype, { _targets: [], _initted: 0, _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), Z("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Xt[r] = function () {
         var t = new Et(),
             e = vt(arguments);return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
   });function Mb(t, e, r) {
      return t.setAttribute(e, r);
   }function Ub(t, e, r, n) {
      n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
   }var Zt = function _setterPlain(t, e, r) {
      return t[e] = r;
   },
       Ut = function _setterFunc(t, e, r) {
      return t[e](r);
   },
       qt = function _setterFuncWithParam(t, e, r, n) {
      return t[e](n.fp, r);
   },
       jt = function _getSetter(t, e) {
      return o(t[e]) ? Ut : q(t[e]) && t.setAttribute ? Mb : Zt;
   },
       Vt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, ~~(1e4 * (e.s + e.c * t)) / 1e4, e);
   },
       Qt = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
   },
       Wt = function _renderComplexString(t, e) {
      var r = e._pt,
          n = "";if (!t && e.b) n = e.b;else if (1 === t && e.e) n = e.e;else {
         for (; r;) {
            n = r.p + (r.m ? r.m(r.s + r.c * t) : ~~(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
         }n += e.c;
      }e.set(e.t, e.p, n, e);
   },
       Gt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r;) {
         r.r(t, r.d), r = r._next;
      }
   },
       Jt = function _addPluginModifier(t, e, r, n) {
      for (var i, a = this._pt; a;) {
         i = a._next, a.p === n && a.modifier(t, e, r), a = i;
      }
   },
       Kt = function _killPropTweensOf(t) {
      for (var e, r, n = this._pt; n;) {
         r = n._next, n.p === t && !n.op || n.op === t ? na(this, n, "_pt") : n.dep || (e = 1), n = r;
      }return !e;
   },
       Ht = function _sortPropTweensByPriority(t) {
      for (var e, r, n, i, a = t._pt; a;) {
         for (e = a._next, r = n; r && r.pr > a.pr;) {
            r = r._next;
         }(a._prev = r ? r._prev : i) ? a._prev._next = a : n = a, (a._next = r) ? r._prev = a : i = a, a = e;
      }t._pt = n;
   },
       te = (PropTween.prototype.modifier = function modifier(t, e, r) {
      this.mSet = this.mSet || this.set, this.set = Ub, this.m = t, this.mt = r, this.tween = e;
   }, PropTween);function PropTween(t, e, r, n, i, a, s, o, u) {
      this.t = e, this.s = n, this.c = i, this.p = r, this.r = a || Vt, this.d = s || this, this.set = o || Zt, this.pr = u || 0, (this._next = t) && (t._prev = this);
   }Z(pt + ",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", function (t) {
      st[t] = 1, "on" === t.substr(0, 2) && (st[t + "Params"] = 1);
   }), at.TweenMax = at.TweenLite = Xt, at.TimelineLite = at.TimelineMax = Et, R = new Et({ sortChildren: !1, defaults: E, autoRemoveChildren: !0, id: "root" }), U.stringFilter = gb;var ee = { registerPlugin: function registerPlugin() {
         for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
            e[r] = arguments[r];
         }e.forEach(function (t) {
            return function _createPlugin(t) {
               var e = (t = !t.name && t.default || t).name,
                   r = o(t),
                   n = e && !r && t.init ? function () {
                  this._props = [];
               } : t,
                   i = { init: N, render: Gt, add: Lt, kill: Kt, modifier: Jt, rawVars: 0 },
                   a = { targetTest: 0, get: 0, getSetter: jt, aliases: {}, register: 0 };if (Mt(), t !== n) {
                  if (ht[e]) return;fa(n, fa(ja(t, i), a)), dt(n.prototype, dt(i, ja(t, a))), ht[n.prop = e] = n, t.targetTest && (ct.push(n), st[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
               }M(e, n), t.register && t.register(ee, n, te);
            }(t);
         });
      }, timeline: function timeline(t) {
         return new Et(t);
      }, getTweensOf: function getTweensOf(t, e) {
         return R.getTweensOf(t, e);
      }, getProperty: function getProperty(i, t, e, r) {
         n(i) && (i = vt(i)[0]);var a = X(i || {}).get,
             s = e ? ea : da;return "native" === e && (e = ""), i ? t ? s((ht[t] && ht[t].get || a)(i, t, e, r)) : function (t, e, r) {
            return s((ht[t] && ht[t].get || a)(i, t, e, r));
         } : i;
      }, quickSetter: function quickSetter(r, e, n) {
         if (1 < (r = vt(r)).length) {
            var i = r.map(function (t) {
               return ee.quickSetter(t, e, n);
            }),
                a = i.length;return function (t) {
               for (var e = a; e--;) {
                  i[e](t);
               }
            };
         }r = r[0] || {};var s = ht[e],
             o = X(r),
             u = s ? function (t) {
            var e = new s();d._pt = 0, e.init(r, n ? t + n : t, d, 0, [r]), e.render(1, e), d._pt && Gt(1, d);
         } : o.set(r, e);return s ? u : function (t) {
            return u(r, e, n ? t + n : t, o, 1);
         };
      }, isTweening: function isTweening(t) {
         return 0 < R.getTweensOf(t, !0).length;
      }, defaults: function defaults(t) {
         return t && t.ease && (t.ease = Dt(t.ease, E.ease)), ia(E, t || {});
      }, config: function config(t) {
         return ia(U, t || {});
      }, registerEffect: function registerEffect(t) {
         var i = t.name,
             n = t.effect,
             e = t.plugins,
             a = t.defaults,
             s = t.extendTimeline;(e || "").split(",").forEach(function (t) {
            return t && !ht[t] && !at[t] && L(i + " effect requires " + t + " plugin.");
         }), lt[i] = function (t, e) {
            return n(vt(t), fa(e || {}, a));
         }, s && (Et.prototype[i] = function (t, e, n) {
            return this.add(lt[i](t, r(e) ? e : (n = e) && {}), n);
         });
      }, registerEase: function registerEase(t, e) {
         Ot[t] = Dt(e);
      }, parseEase: function parseEase(t, e) {
         return arguments.length ? Dt(t, e) : Ot;
      }, getById: function getById(t) {
         return R.getById(t);
      }, exportRoot: function exportRoot(t, e) {
         void 0 === t && (t = {});var r,
             n,
             i = new Et(t);for (i.smoothChildTiming = s(t.smoothChildTiming), R.remove(i), i._dp = 0, i._time = i._tTime = R._time, r = R._first; r;) {
            n = r._next, !e && !r._dur && r instanceof Xt && r.vars.onComplete === r._targets[0] || ua(i, r, r._start - r._delay), r = n;
         }return ua(R, i, 0), i;
      }, utils: { wrap: function wrap(e, t, r) {
            var n = t - e;return G(e) ? Qa(e, wrap(0, e.length), t) : Ba(r, function (t) {
               return (n + (t - e) % n) % n + e;
            });
         }, wrapYoyo: function wrapYoyo(e, t, r) {
            var n = t - e,
                i = 2 * n;return G(e) ? Qa(e, wrapYoyo(0, e.length - 1), t) : Ba(r, function (t) {
               return e + (n < (t = (i + (t - e) % i) % i) ? i - t : t);
            });
         }, distribute: Ja, random: Ma, snap: La, normalize: function normalize(t, e, r) {
            return yt(t, e, 0, 1, r);
         }, getUnit: Da, clamp: function clamp(e, r, t) {
            return Ba(t, function (t) {
               return mt(e, r, t);
            });
         }, splitColor: cb, toArray: vt, mapRange: yt, pipe: function pipe() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
               e[r] = arguments[r];
            }return function (t) {
               return e.reduce(function (t, e) {
                  return e(t);
               }, t);
            };
         }, unitize: function unitize(e, r) {
            return function (t) {
               return e(parseFloat(t)) + (r || Da(t));
            };
         }, interpolate: function interpolate(e, r, t, i) {
            var a = isNaN(e + r) ? 0 : function (t) {
               return (1 - t) * e + t * r;
            };if (!a) {
               var s,
                   o,
                   u,
                   h,
                   l,
                   f = n(e),
                   c = {};if (!0 === t && (i = 1) && (t = null), f) e = { p: e }, r = { p: r };else if (G(e) && !G(r)) {
                  for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) {
                     u.push(interpolate(e[o - 1], e[o]));
                  }h--, a = function func(t) {
                     t *= h;var e = Math.min(l, ~~t);return u[e](t - e);
                  }, t = r;
               } else i || (e = dt(G(e) ? [] : {}, e));if (!u) {
                  for (s in r) {
                     Lt.call(c, e, s, "get", r[s]);
                  }a = function func(t) {
                     return Gt(t, c) || (f ? e.p : e);
                  };
               }
            }return Ba(t, a);
         } }, install: J, effects: lt, ticker: At, updateRoot: Et.updateRoot, plugins: ht, globalTimeline: R, core: { PropTween: te, globals: M, Tween: Xt, Timeline: Et, Animation: Rt, getCache: X } };Z("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return ee[t] = Xt[t];
   }), At.add(Et.updateRoot), d = ee.to({}, { duration: 0 });function Zb(t, a) {
      return { name: t, rawVars: 1, init: function init(t, i, e) {
            e._onInit = function (t) {
               var e, r;if (n(i) && (e = {}, Z(i, function (t) {
                  return e[t] = 1;
               }), i = e), a) {
                  for (r in e = {}, i) {
                     e[r] = a(i[r]);
                  }i = e;
               }!function _addModifiers(t, e) {
                  var r,
                      n,
                      i,
                      a = t._targets;for (r in e) {
                     for (n = a.length; n--;) {
                        (i = t._ptLookup[n][r]) && i.d.modifier && i.d.modifier(e[r], t, a[n], r);
                     }
                  }
               }(t, i);
            };
         } };
   }ee.registerPlugin({ name: "attr", init: function init(t, e, r, n, i) {
         for (var a in e) {
            this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], n, i, 0, 0, a), this._props.push(a);
         }
      } }, { name: "endArray", init: function init(t, e) {
         for (var r = e.length; r--;) {
            this.add(t, r, t[r], e[r]);
         }
      } }, Zb("roundProps", Ka), Zb("modifiers"), Zb("snap", La)), Xt.version = Et.version = ee.version = "3.0.1", f = 1, t() && Mt();function Ic(t, e) {
      return e.set(e.t, e.p, ~~(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
   }function Jc(t, e) {
      return e.set(e.t, e.p, 1 === t ? e.e : ~~(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
   }function Kc(t, e) {
      return e.set(e.t, e.p, t ? ~~(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
   }function Lc(t, e) {
      var r = e.s + e.c * t;e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
   }function Mc(t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
   }function Nc(t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
   }function Oc(t, e, r) {
      return t.style[e] = r;
   }function Pc(t, e, r) {
      return t.style.setProperty(e, r);
   }function Qc(t, e, r) {
      return t._gsap[e] = r;
   }function Rc(t, e, r) {
      return t._gsap.scaleX = t._gsap.scaleY = r;
   }function Sc(t, e, r, n, i) {
      var a = t._gsap;a.scaleX = a.scaleY = r, a.renderTransform(i, a);
   }function Tc(t, e, r, n, i) {
      var a = t._gsap;a[e] = r, a.renderTransform(i, a);
   }function Xc(t, e) {
      var r = ne.createElementNS ? ne.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ne.createElement(t);return r.style ? r : ne.createElement(t);
   }function Yc(t, e) {
      var r = getComputedStyle(t);return r[e] || r.getPropertyValue(e.replace(Ee, "-$1").toLowerCase()) || r.getPropertyValue(e);
   }function Zc(t, e) {
      var r = (e || se).style,
          n = 5,
          i = "O,Moz,ms,Ms,Webkit".split(",");if (t in r) return t;for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(i[n] + t in r);) {}return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? i[n] : "") + t;
   }function $c() {
      !function _windowExists() {
         return "undefined" != typeof window;
      }() || (re = window, ne = re.document, ie = ne.documentElement, se = Xc("div") || { style: {} }, oe = Xc("div"), Ne = Zc(Ne), $e = Zc($e), se.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", he = !!Zc("perspective"), ae = 1);
   }function ad(t, e) {
      for (var r = e.length; r--;) {
         if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      }
   }function bd(e) {
      var r;try {
         r = e.getBBox();
      } catch (t) {
         r = function _getBBoxHack(t) {
            var e,
                r = Xc("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                n = this.parentNode,
                i = this.nextSibling,
                a = this.style.cssText;if (ie.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
               e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = _getBBoxHack;
            } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());return i ? n.insertBefore(this, i) : n.appendChild(this), ie.removeChild(r), this.style.cssText = a, e;
         }.call(e, !0);
      }return !r || r.width || r.x || r.y ? r : { x: +ad(e, ["x", "cx", "x1"]), y: +ad(e, ["y", "cy", "y1"]), width: 0, height: 0 };
   }function cd(t) {
      return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !bd(t));
   }function dd(t, e) {
      if (e) {
         var r = t.style;e in De && (e = Ne), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ee, "-$1").toLowerCase())) : r.removeAttribute(e);
      }
   }function ed(t, e, r, n, i, a) {
      var s = new te(t._pt, e, r, 0, 1, a ? Nc : Mc);return (t._pt = s).b = n, s.e = i, t._props.push(r), s;
   }function gd(t, e, r, n) {
      var i,
          a,
          s,
          o,
          u = parseFloat(r),
          h = (r + "").substr((u + "").length) || "px",
          l = se.style,
          f = Le.test(e),
          c = "svg" === t.tagName.toLowerCase(),
          p = (c ? "client" : "offset") + (f ? "Width" : "Height"),
          d = "px" === n;return n === h || Xe[n] || Xe[h] ? u : (o = t.getCTM && cd(t), "%" === n && De[e] ? $(u / (o ? t.getBBox()[f ? "width" : "height"] : t[p]) * 100) : (l[f ? "width" : "height"] = 100 + (d ? h : n), a = "em" === n && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== ne && a.appendChild || (a = ne.body), (s = a._gsap) && "%" === n && s.width && f && s.time === At.time ? i = s.width * u / 100 : (a.appendChild(se), i = se[p], a.removeChild(se), f && "%" === n && ((s = X(a)).time = At.time, s.width = i / u * 100)), $(d ? i * u / 100 : 100 / i * u)));
   }function hd(t, e, r, n) {
      var i;return ae || $c(), e in Ye && ~(e = Ye[e]).indexOf(",") && (e = e.split(",")[0]), De[e] ? (i = Ve(t, n), i = "transformOrigin" !== e ? i[e] : Qe(Yc(t, $e)) + i.zOrigin + "px") : (i = t.style[e]) && "auto" !== i && !n || (i = Yc(t, e) || Y(t, e)), r ? gd(t, e, i, r) + r : i;
   }function id(t, e, r, n) {
      var i,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c,
          p,
          d,
          _,
          m = new te(this._pt, t.style, e, 0, 1, Wt),
          g = 0,
          v = 0;if (m.b = r, m.e = n, r += "", "auto" === (n += "") && (t.style[e] = n, n = Yc(t, e) || n, t.style[e] = r), gb(i = [r, n]), n = i[1], s = (r = i[0]).match(ze) || [], (n.match(ze) || []).length) {
         for (; a = ze.exec(n);) {
            l = a[0], c = n.substring(g, a.index), u ? u = (u + 1) % 5 : "rgba(" === c.substr(-5) && (u = 1), l !== (h = s[v++] || "") && (o = parseFloat(h) || 0, d = h.substr((o + "").length), (_ = "=" === l.charAt(1) ? +(l.charAt(0) + "1") : 0) && (l = l.substr(2)), f = parseFloat(l), p = l.substr((f + "").length), g = ze.lastIndex - p.length, p || (p = p || U.units[e] || d, g === n.length && (n += p, m.e += p)), d !== p && (o = gd(t, e, h, p)), m._pt = { _next: m._pt, p: c || 1 === v ? c : ",", s: o, c: _ ? _ * f : f - o, m: u && u < 4 ? Math.round : 0 });
         }m.c = g < n.length ? n.substring(g, n.length) : "";
      } else m.r = "display" === e ? Nc : Mc;return nt.test(n) && (m.e = 0), this._pt = m;
   }function kd(t) {
      var e = t.split(" "),
          r = e[0],
          n = e[1] || "50%";return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (e = r, r = n, n = e), e[0] = Ze[r] || r, e[1] = Ze[n] || n, e.join(" ");
   }function ld(t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
         var r,
             n,
             i,
             a = e.t,
             s = a.style,
             o = e.u;if ("all" === o || !0 === o) s.cssText = "", n = 1;else for (i = (o = o.split(",")).length; -1 < --i;) {
            r = o[i], De[r] && (n = 1, r = "transformOrigin" === r ? $e : Ne), dd(a, r);
         }n && (dd(a, Ne), (n = a._gsap) && (n.svg && a.removeAttribute("transform"), delete n.x));
      }
   }function pd(t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
   }function qd(t) {
      var e = Yc(t, Ne);return pd(e) ? qe : e.substr(7).match(tt).map($);
   }function rd(t, e) {
      var r,
          n,
          i,
          a,
          s = t._gsap,
          o = t.style,
          u = qd(t);return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? qe : u : (u !== qe || t.offsetParent || t === ie || s.svg || (i = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, n = t.nextSibling, ie.appendChild(t)), u = qd(t), i ? o.display = i : dd(t, "display"), a && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : ie.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
   }function sd(t, e, r, n, i, a) {
      var s,
          o,
          u,
          h = t._gsap,
          l = i || rd(t, !0),
          f = h.xOrigin || 0,
          c = h.yOrigin || 0,
          p = h.xOffset || 0,
          d = h.yOffset || 0,
          _ = l[0],
          m = l[1],
          g = l[2],
          v = l[3],
          y = l[4],
          b = l[5],
          w = e.split(" "),
          T = parseFloat(w[0]) || 0,
          x = parseFloat(w[1]) || 0;r ? l !== qe && (o = _ * v - m * g) && (u = T * (-m / o) + x * (_ / o) - (_ * b - m * y) / o, T = T * (v / o) + x * (-g / o) + (g * b - v * y) / o, x = u) : (T = (s = bd(t)).x + (~w[0].indexOf("%") ? T / 100 * s.width : T), x = s.y + (~(w[1] || w[0]).indexOf("%") ? x / 100 * s.height : x)), n || !1 !== n && h.smooth ? (y = T - f, b = x - c, h.xOffset += y * _ + b * g - y, h.yOffset += y * m + b * v - b) : h.xOffset = h.yOffset = 0, h.xOrigin = T, h.yOrigin = x, h.smooth = !!n, h.origin = e, h.originIsAbsolute = !!r, a && (ed(a, h, "xOrigin", f, T), ed(a, h, "yOrigin", c, x), ed(a, h, "xOffset", p, h.xOffset), ed(a, h, "yOffset", d, h.yOffset));
   }function vd(t, e, r) {
      var n = Da(e);return $(parseFloat(e) + parseFloat(gd(t, "x", r + "px", n))) + n;
   }function Cd(t, e, r, i, a, s) {
      var o,
          u,
          h = 360,
          l = n(a),
          f = parseFloat(a) * (l && ~a.indexOf("rad") ? Be : 1),
          c = s ? f * s : f - i,
          p = i + c + "deg";return l && ("short" === (o = a.split("_")[1]) && (c %= h) !== c % 180 && (c += c < 0 ? h : -h), "cw" === o && c < 0 ? c = (c + 36e9) % h - ~~(c / h) * h : "ccw" === o && 0 < c && (c = (c - 36e9) % h - ~~(c / h) * h)), t._pt = u = new te(t._pt, e, r, i, c, Jc), u.e = p, u.u = "deg", t._props.push(r), u;
   }function Dd(t, e, r) {
      var n,
          i,
          a,
          s,
          o,
          u,
          h,
          l = oe.style,
          f = r._gsap;for (i in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Ne] = e, ne.body.appendChild(oe), n = Ve(oe, 1), De) {
         (a = f[i]) !== (s = n[i]) && "perspective" !== i && (o = Da(a) !== (h = Da(s)) ? gd(r, i, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new te(t._pt, f, i, o, u - o, Ic), t._pt.u = h, t._props.push(i));
      }ne.body.removeChild(oe);
   }var re,
       ne,
       ie,
       ae,
       se,
       oe,
       ue,
       he,
       le,
       fe,
       ce,
       pe = Ot.Power0,
       de = Ot.Power1,
       _e = Ot.Power2,
       me = Ot.Power3,
       ge = Ot.Power4,
       ve = Ot.Linear,
       ye = Ot.Quad,
       be = Ot.Cubic,
       we = Ot.Quart,
       Te = Ot.Quint,
       xe = Ot.Strong,
       ke = Ot.Elastic,
       Ae = Ot.Back,
       Me = Ot.SteppedEase,
       Oe = Ot.Bounce,
       Pe = Ot.Sine,
       Se = Ot.Expo,
       Ce = Ot.Circ,
       De = {},
       Be = 180 / Math.PI,
       Fe = Math.PI / 180,
       Re = Math.atan2,
       Ee = /([A-Z])/g,
       ze = /[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,
       Le = /(?:left|right|width|margin|padding|x)/i,
       Ie = /[\s,\(]\S/,
       Ye = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
       Ne = "transform",
       $e = Ne + "Origin",
       Xe = { deg: 1, rad: 1, turn: 1 },
       Ze = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
       Ue = { clearProps: function clearProps(t, e, r, n, i) {
         var a = t._pt = new te(t._pt, e, r, 0, 0, ld);return a.u = n, a.pr = -10, a.tween = i, t._props.push(r), 1;
      } },
       qe = [1, 0, 0, 1, 0, 0],
       je = {},
       Ve = function _parseTransform(t, e) {
      var r = t._gsap || new Ft(t);if ("x" in r && !e) return r;var n,
          i,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c,
          p,
          d,
          _,
          m,
          g,
          v,
          y,
          b,
          w,
          T,
          x,
          k,
          A,
          M,
          O,
          P,
          S,
          C,
          D,
          B,
          F = t.style,
          R = r.scaleX < 0,
          E = r.xOrigin || 0,
          z = r.yOrigin || 0,
          L = "deg",
          I = Yc(t, $e) || "0";return n = i = a = u = h = l = f = c = p = 0, s = o = 1, r.svg = !(!t.getCTM || !cd(t)), d = rd(t, r.svg), r.svg && sd(t, I, r.originIsAbsolute, !1 !== r.smooth, d), d !== qe && (v = d[0], y = d[1], b = d[2], w = d[3], n = T = d[4], i = x = d[5], 6 === d.length ? (s = Math.sqrt(v * v + y * y), o = Math.sqrt(w * w + b * b), u = v || y ? Re(y, v) * Be : r.rotation || 0, f = b || w ? Re(b, w) * Be + u : r.skewX || 0, r.svg && (n -= E - (E * v + z * b), i -= z - (E * y + z * w))) : (B = d[6], C = d[7], O = d[8], P = d[9], S = d[10], D = d[11], n = d[12], i = d[13], a = d[14], h = (_ = Re(B, S)) * Be, _ && (k = T * (m = Math.cos(-_)) + O * (g = Math.sin(-_)), A = x * m + P * g, M = B * m + S * g, O = T * -g + O * m, P = x * -g + P * m, S = B * -g + S * m, D = C * -g + D * m, T = k, x = A, B = M), l = (_ = Re(-b, S)) * Be, _ && (m = Math.cos(-_), D = w * (g = Math.sin(-_)) + D * m, v = k = v * m - O * g, y = A = y * m - P * g, b = M = b * m - S * g), u = (_ = Re(y, v)) * Be, _ && (k = v * (m = Math.cos(_)) + y * (g = Math.sin(_)), A = T * m + x * g, y = y * m - v * g, x = x * m - T * g, v = k, T = A), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = $(Math.sqrt(v * v + y * y + b * b)), o = $(Math.sqrt(x * x + B * B)), _ = Re(T, x), f = 2e-4 < Math.abs(_) ? _ * Be : 0, p = D ? 1 / (D < 0 ? -D : D) : 0), r.svg && (d = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !pd(Yc(t, Ne)), d && t.setAttribute("transform", d))), 90 < Math.abs(f) && Math.abs(f) < 270 && (R ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = ((r.xPercent = n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.y = ((r.yPercent = i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.z = a + "px", r.scaleX = $(s), r.scaleY = $(o), r.rotation = $(u) + L, r.rotationX = $(h) + L, r.rotationY = $(l) + L, r.skewX = f + L, r.skewY = c + L, r.transformPerspective = p + "px", (r.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (F[$e] = Qe(I)), r.xOffset = r.yOffset = 0, r.force3D = U.force3D, r.renderTransform = r.svg ? tr : he ? He : We, r;
   },
       Qe = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
   },
       We = function _renderNon3DTransforms(t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, He(t, e);
   },
       Ge = "0deg",
       Je = "0px",
       Ke = ") ",
       He = function _renderCSSTransforms(t, e) {
      var r = e || this,
          n = r.xPercent,
          i = r.yPercent,
          a = r.x,
          s = r.y,
          o = r.z,
          u = r.rotation,
          h = r.rotationY,
          l = r.rotationX,
          f = r.skewX,
          c = r.skewY,
          p = r.scaleX,
          d = r.scaleY,
          _ = r.transformPerspective,
          m = r.force3D,
          g = r.target,
          v = r.zOrigin,
          y = "",
          b = "auto" === m && t && 1 !== t || !0 === m;if (v && (l !== Ge || h !== Ge)) {
         var w,
             T = parseFloat(h) * Fe,
             x = Math.sin(T),
             k = Math.cos(T);T = parseFloat(l) * Fe, w = Math.cos(T), a = vd(g, a, x * w * -v), s = vd(g, s, -Math.sin(T) * -v), o = vd(g, o, k * w * -v + v);
      }(n || i) && (y = "translate(" + n + "%, " + i + "%) "), !b && a === Je && s === Je && o === Je || (y += o !== Je || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Ke), _ !== Je && (y += "perspective(" + _ + Ke), u !== Ge && (y += "rotate(" + u + Ke), h !== Ge && (y += "rotateY(" + h + Ke), l !== Ge && (y += "rotateX(" + l + Ke), f === Ge && c === Ge || (y += "skew(" + f + ", " + c + Ke), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + Ke), g.style[Ne] = y || "translate(0, 0)";
   },
       tr = function _renderSVGTransforms(t, e) {
      var r,
          n,
          i,
          a,
          s,
          o = e || this,
          u = o.xPercent,
          h = o.yPercent,
          l = o.x,
          f = o.y,
          c = o.rotation,
          p = o.skewX,
          d = o.skewY,
          _ = o.scaleX,
          m = o.scaleY,
          g = o.target,
          v = o.xOrigin,
          y = o.yOrigin,
          b = o.xOffset,
          w = o.yOffset,
          T = o.forceCSS,
          x = parseFloat(l),
          k = parseFloat(f);c = parseFloat(c), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), c += d), c || p ? (c *= Fe, p *= Fe, r = Math.cos(c) * _, n = Math.sin(c) * _, i = Math.sin(c - p) * -m, a = Math.cos(c - p) * m, p && (d *= Fe, s = Math.tan(p - d), i *= s = Math.sqrt(1 + s * s), a *= s, d && (s = Math.tan(d), r *= s = Math.sqrt(1 + s * s), n *= s)), r = $(r), n = $(n), i = $(i), a = $(a)) : (r = _, a = m, n = i = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = gd(g, "x", l, "px"), k = gd(g, "y", f, "px")), (v || y || b || w) && (x = $(x + v - (v * r + y * i) + b), k = $(k + y - (v * n + y * a) + w)), (u || h) && (s = g.getBBox(), x = $(x + u / 100 * s.width), k = $(k + h / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), T && (g.style[Ne] = s);
   },
       er = { name: "css", register: $c, targetTest: function targetTest(t) {
         return t.style && t.nodeType;
      }, init: function init(t, e, r, n, i) {
         var a,
             s,
             o,
             u,
             h,
             l,
             f,
             c,
             p,
             d,
             _,
             m,
             g,
             v,
             y,
             b = this._props,
             w = t.style;for (f in ae || $c(), e) {
            if ("autoRound" !== f && (s = e[f], !ht[f] || !Bb(f, e, r, n, t, i))) if (l = Ue[f], "function" === (h = typeof s === "undefined" ? "undefined" : _typeof(s)) && (h = _typeof(s = s.call(r, n, t, i))), "string" === h && ~s.indexOf("random(") && (s = Ta(s)), l) l(this, t, f, s, r) && (y = 1);else if ("--" === f.substr(0, 2)) this.add(w, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", n, i, 0, 0, f);else {
               if (a = hd(t, f), u = parseFloat(a), (d = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Ye && ("autoAlpha" === f && (1 === u && "hidden" === hd(t, "visibility") && o && (u = 0), ed(this, w, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && ~(f = Ye[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in De) {
                  if (m || (g = t._gsap, v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new te(this._pt, w, Ne, 0, 1, g.renderTransform, g)).dep = 1), "scale" === f) {
                     this._pt = new te(this._pt, t, "scale", u, d ? d * o : o - u, 0, 0, Rc), b.push("scale");continue;
                  }if ("transformOrigin" === f) {
                     s = kd(s), g.svg ? sd(t, s, 0, v, 0, this) : ((p = parseFloat(s.split(" ")[2])) !== g.zOrigin && ed(this, g, "zOrigin", g.zOrigin, p), ed(this, w, f, Qe(a), Qe(s)));continue;
                  }if ("svgOrigin" === f) {
                     sd(t, s, 1, v, 0, this);continue;
                  }if (f in je) {
                     Cd(this, g, f, u, s, d);continue;
                  }if ("smoothOrigin" === f) {
                     ed(this, g, "smooth", g.smooth, s);continue;
                  }if ("force3D" === f) {
                     g[f] = s;continue;
                  }if ("transform" === f) {
                     Dd(this, s, t);continue;
                  }
               }if (_ || (o || 0 === o) && (u || 0 === u) && !Ie.test(s) && f in w) (c = (a + "").substr((u + "").length)) !== (p = (s + "").substr((o + "").length) || (f in U.units ? U.units[f] : c)) && (u = gd(t, f, a, p)), this._pt = new te(this._pt, _ ? g : w, f, u, d ? d * o : o - u, "px" !== p || !1 === e.autoRound || _ ? Ic : Lc), this._pt.u = p || 0, c !== p && (this._pt.b = a, this._pt.r = Kc);else if (f in w) id.call(this, t, f, a, s);else {
                  if (!(f in t)) {
                     K("Invalid " + f + " tween " + s + ". Missing plugin? gsap.registerPlugin()");continue;
                  }this.add(t, f, t[f], s, n, i);
               }b.push(f);
            }
         }y && Ht(this);
      }, get: hd, aliases: Ye, getSetter: function getSetter(t, e, r) {
         return e in De && e !== $e && (t._gsap.x || hd(t, "x")) ? r && ue === r ? "scale" === e ? Rc : Qc : (ue = r || {}) && ("scale" === e ? Sc : Tc) : t.style && !q(t.style[e]) ? Oc : ~e.indexOf("-") ? Pc : jt(t, e);
      } };ee.utils.checkPrefix = Zc, ce = Z((le = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (fe = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
      De[t] = 1;
   }), Z(fe, function (t) {
      U.units[t] = "deg", je[t] = 1;
   }), Ye[ce[13]] = le + "," + fe, Z("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY", function (t) {
      var e = t.split(":");Ye[e[1]] = ce[e[0]];
   }), Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
      U.units[t] = "px";
   }), ee.registerPlugin(er);var rr = ee.registerPlugin(er) || ee;e.Back = Ae, e.Bounce = Oe, e.CSSPlugin = er, e.Circ = Ce, e.Cubic = be, e.Elastic = ke, e.Expo = Se, e.Linear = ve, e.Power0 = pe, e.Power1 = de, e.Power2 = _e, e.Power3 = me, e.Power4 = ge, e.Quad = ye, e.Quart = we, e.Quint = Te, e.Sine = Pe, e.SteppedEase = Me, e.Strong = xe, e.TimelineLite = Et, e.TimelineMax = Et, e.TweenLite = Xt, e.TweenMax = Xt, e.default = rr, e.gsap = rr, Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=gsap.min.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
	"object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t((e = e || self).window = e.window || {});
}(undefined, function (e) {
	"use strict";
	/*!
 	 * CSSRulePlugin 3.0.0
 	 * https://greensock.com
 	 *
 	 * @license Copyright 2008-2019, GreenSock. All rights reserved.
 	 * Subject to the terms at https://greensock.com/standard-license or for
 	 * Club GreenSock members, the agreement issued with that membership.
 	 * @author: Jack Doyle, jack@greensock.com
 	*/
	function h() {
		return "undefined" != typeof window;
	}function i() {
		return t || h() && (t = window.gsap) && t.registerPlugin && t;
	}function j() {
		return n || (s(), o || console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")), n;
	}var t,
	    n,
	    c,
	    o,
	    s = function _initCore(e) {
		t = e || i(), h() && (c = document), t && (o = t.plugins.css) && (n = 1);
	},
	    r = { version: "3.0.0", name: "cssRule", init: function init(e, t, n, i, s) {
			if (!j() || void 0 === e.cssText) return !1;var r = e._gsProxy = e._gsProxy || c.createElement("div");this.ss = e, this.style = r.style, r.style.cssText = e.cssText, o.prototype.init.call(this, r, t, n, i, s);
		}, render: function render(e, t) {
			for (var n = t._pt, i = t.style, s = t.ss, r = i.length; n;) {
				n.r(e, n.d), n = n._next;
			}for (; -1 < --r;) {
				s[i[r]] = i[i[r]];
			}
		}, getRule: function getRule(e) {
			j();var t,
			    n,
			    i,
			    s,
			    r = c.all ? "rules" : "cssRules",
			    o = c.styleSheets,
			    l = o.length,
			    u = ":" === e.charAt(0);for (e = (u ? "" : ",") + e.split("::").join(":").toLowerCase() + ",", u && (s = []); l--;) {
				try {
					if (!(n = o[l][r])) continue;t = n.length;
				} catch (e) {
					console.warn(e);continue;
				}for (; -1 < --t;) {
					if ((i = n[t]).selectorText && -1 !== ("," + i.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(e)) {
						if (!u) return i.style;s.push(i.style);
					}
				}
			}return s;
		}, register: s };i() && t.registerPlugin(r), e.CSSRulePlugin = r, e.default = r, Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=CSSRulePlugin.min.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
	"object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e((t = t || self).window = t.window || {});
}(undefined, function (t) {
	"use strict";
	function n(t) {
		return "string" == typeof t;
	}var w = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
	    N = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
	    x = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
	    o = /(^[#\.][a-z]|[a-y][a-z])/i,
	    B = Math.PI / 180,
	    D = (Math.PI, Math.sin),
	    E = Math.cos,
	    $ = Math.abs,
	    k = Math.sqrt,
	    s = function _isNumber(t) {
		return "number" == typeof t;
	},
	    h = function _round(t) {
		return ~~(1e5 * t + (t < 0 ? -.5 : .5)) / 1e5;
	};function reverseSegment(t) {
		var e,
		    r = 0;for (t.reverse(); r < t.length; r += 2) {
			e = t[r], t[r] = t[r + 1], t[r + 1] = e;
		}t.reversed = !t.reversed;
	}var A = { rect: "rx,ry,x,y,width,height", circle: "r,cx,cy", ellipse: "rx,ry,cx,cy", line: "x1,x2,y1,y2" };function convertToPath(t, e) {
		var r,
		    n,
		    o,
		    a,
		    i,
		    s,
		    h,
		    l,
		    g,
		    c,
		    p,
		    f,
		    u,
		    d,
		    P,
		    _,
		    v,
		    m,
		    y,
		    w,
		    M,
		    x,
		    T = t.tagName.toLowerCase(),
		    b = .552284749831;return "path" !== T && t.getBBox ? (s = function _createPath(t, e) {
			var r,
			    n = document.createElementNS("http://www.w3.org/2000/svg", "path"),
			    o = [].slice.call(t.attributes),
			    a = o.length;for (e = "," + e + ","; -1 < --a;) {
				r = o[a].nodeName.toLowerCase(), e.indexOf("," + r + ",") < 0 && n.setAttributeNS(null, r, o[a].nodeValue);
			}return n;
		}(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), x = function _attrToObj(t, e) {
			for (var r = e ? e.split(",") : [], n = {}, o = r.length; -1 < --o;) {
				n[r[o]] = +t.getAttribute(r[o]) || 0;
			}return n;
		}(t, A[T]), "rect" === T ? (a = x.rx, i = x.ry, n = x.x, o = x.y, c = x.width - 2 * a, p = x.height - 2 * i, r = a || i ? "M" + (_ = (d = (u = n + a) + c) + a) + "," + (m = o + i) + " V" + (y = m + p) + " C" + [_, w = y + i * b, P = d + a * b, M = y + i, d, M, d - (d - u) / 3, M, u + (d - u) / 3, M, u, M, f = n + a * (1 - b), M, n, w, n, y, n, y - (y - m) / 3, n, m + (y - m) / 3, n, m, n, v = o + i * (1 - b), f, o, u, o, u + (d - u) / 3, o, d - (d - u) / 3, o, d, o, P, o, _, v, _, m].join(",") + "z" : "M" + (n + c) + "," + o + " v" + p + " h" + -c + " v" + -p + " h" + c + "z") : "circle" === T || "ellipse" === T ? (l = "circle" === T ? (a = i = x.r) * b : (a = x.rx, (i = x.ry) * b), r = "M" + ((n = x.cx) + a) + "," + (o = x.cy) + " C" + [n + a, o + l, n + (h = a * b), o + i, n, o + i, n - h, o + i, n - a, o + l, n - a, o, n - a, o - l, n - h, o - i, n, o - i, n + h, o - i, n + a, o - l, n + a, o].join(",") + "z") : "line" === T ? r = "M" + x.x1 + "," + x.y1 + " L" + x.x2 + "," + x.y2 : "polyline" !== T && "polygon" !== T || (r = "M" + (n = (g = (t.getAttribute("points") + "").match(N) || []).shift()) + "," + (o = g.shift()) + " L" + g.join(","), "polygon" === T && (r += "," + n + "," + o + "z")), s.setAttribute("d", rawPathToString(s._gsRawPath = stringToRawPath(r))), e && t.parentNode && (t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t)), s) : t;
	}function arcToSegment(t, e, r, n, o, a, i, s, h) {
		if (t !== s || e !== h) {
			r = $(r), n = $(n);var l = o % 360 * B,
			    g = E(l),
			    c = D(l),
			    p = Math.PI,
			    f = 2 * p,
			    u = (t - s) / 2,
			    d = (e - h) / 2,
			    P = g * u + c * d,
			    _ = -c * u + g * d,
			    v = P * P,
			    m = _ * _,
			    y = v / (r * r) + m / (n * n);1 < y && (r = k(y) * r, n = k(y) * n);var w = r * r,
			    M = n * n,
			    x = (w * M - w * m - M * v) / (w * m + M * v);x < 0 && (x = 0);var T = (a === i ? -1 : 1) * k(x),
			    b = r * _ / n * T,
			    S = -n * P / r * T,
			    N = g * b - c * S + (t + s) / 2,
			    z = c * b + g * S + (e + h) / 2,
			    R = (P - b) / r,
			    A = (_ - S) / n,
			    O = (-P - b) / r,
			    Y = (-_ - S) / n,
			    j = R * R + A * A,
			    C = (A < 0 ? -1 : 1) * Math.acos(R / k(j)),
			    F = (R * Y - A * O < 0 ? -1 : 1) * Math.acos((R * O + A * Y) / k(j * (O * O + Y * Y)));isNaN(F) && (F = p), !i && 0 < F ? F -= f : i && F < 0 && (F += f), C %= f, F %= f;var I,
			    V = Math.ceil($(F) / (f / 4)),
			    L = [],
			    X = F / V,
			    U = 4 / 3 * D(X / 2) / (1 + E(X / 2)),
			    G = g * r,
			    Q = c * r,
			    H = c * -n,
			    q = g * n;for (I = 0; I < V; I++) {
				P = E(o = C + I * X), _ = D(o), R = E(o += X), A = D(o), L.push(P - U * _, _ + U * P, R + U * A, A - U * R, R, A);
			}for (I = 0; I < L.length; I += 2) {
				P = L[I], _ = L[I + 1], L[I] = P * G + _ * H + N, L[I + 1] = P * Q + _ * q + z;
			}return L[I - 2] = s, L[I - 1] = h, L;
		}
	}function stringToRawPath(t) {
		function sc(t, e, r, n) {
			g = (r - t) / 3, c = (n - e) / 3, s.push(t + g, e + c, r - g, n - c, r, n);
		}var e,
		    r,
		    n,
		    o,
		    a,
		    i,
		    s,
		    h,
		    l,
		    g,
		    c,
		    p,
		    f,
		    u = (t + "").replace(x, function (t) {
			var e = +t;return e < 1e-4 && -1e-4 < e ? 0 : e;
		}).match(w) || [],
		    d = [],
		    P = 0,
		    _ = 0,
		    v = u.length,
		    m = 0,
		    y = "ERROR: malformed path: " + t;if (!t || !isNaN(u[0]) || isNaN(u[1])) return console.log(y), d;for (e = 0; e < v; e++) {
			if (f = a, isNaN(u[e]) ? i = (a = u[e].toUpperCase()) !== u[e] : e--, n = +u[e + 1], o = +u[e + 2], i && (n += P, o += _), e || (h = n, l = o), "M" === a) s && (s.length < 8 ? d.length -= 1 : m += s.length), P = h = n, _ = l = o, s = [n, o], d.push(s), e += 2, a = "L";else if ("C" === a) i || (P = _ = 0), (s = s || [0, 0]).push(n, o, P + 1 * u[e + 3], _ + 1 * u[e + 4], P += 1 * u[e + 5], _ += 1 * u[e + 6]), e += 6;else if ("S" === a) g = P, c = _, "C" !== f && "S" !== f || (g += P - s[s.length - 4], c += _ - s[s.length - 3]), i || (P = _ = 0), s.push(g, c, n, o, P += 1 * u[e + 3], _ += 1 * u[e + 4]), e += 4;else if ("Q" === a) g = P + 2 / 3 * (n - P), c = _ + 2 / 3 * (o - _), i || (P = _ = 0), P += 1 * u[e + 3], _ += 1 * u[e + 4], s.push(g, c, P + 2 / 3 * (n - P), _ + 2 / 3 * (o - _), P, _), e += 4;else if ("T" === a) g = P - s[s.length - 4], c = _ - s[s.length - 3], s.push(P + g, _ + c, n + 2 / 3 * (P + 1.5 * g - n), o + 2 / 3 * (_ + 1.5 * c - o), P = n, _ = o), e += 2;else if ("H" === a) sc(P, _, P = n, _), e += 1;else if ("V" === a) sc(P, _, P, _ = n + (i ? _ - P : 0)), e += 1;else if ("L" === a || "Z" === a) "Z" === a && (n = h, o = l, s.closed = !0), ("L" === a || .5 < $(P - n) || .5 < $(_ - o)) && (sc(P, _, n, o), "L" === a && (e += 2)), P = n, _ = o;else if ("A" === a) {
				if (p = arcToSegment(P, _, +u[e + 1], +u[e + 2], +u[e + 3], +u[e + 4], +u[e + 5], (i ? P : 0) + 1 * u[e + 6], (i ? _ : 0) + 1 * u[e + 7])) for (r = 0; r < p.length; r++) {
					s.push(p[r]);
				}P = s[s.length - 2], _ = s[s.length - 1], e += 7;
			} else console.log(y);
		}return (e = s.length) < 6 ? (d.pop(), e = 0) : s[0] === s[e - 2] && s[1] === s[e - 1] && (s.closed = !0), d.totalPoints = m + e, d;
	}function rawPathToString(t) {
		s(t[0]) && (t = [t]);var e,
		    r,
		    n,
		    o,
		    a = "",
		    i = t.length;for (r = 0; r < i; r++) {
			for (o = t[r], a += "M" + h(o[0]) + "," + h(o[1]) + " C", e = o.length, n = 2; n < e; n++) {
				a += h(o[n++]) + "," + h(o[n++]) + " " + h(o[n++]) + "," + h(o[n++]) + " " + h(o[n++]) + "," + h(o[n]) + " ";
			}o.closed && (a += "z");
		}return a;
	}
	/*!
 	 * MorphSVGPlugin 3.0.0
 	 * https://greensock.com
 	 *
 	 * @license Copyright 2008-2019, GreenSock. All rights reserved.
 	 * Subject to the terms at https://greensock.com/standard-license or for
 	 * Club GreenSock members, the agreement issued with that membership.
 	 * @author: Jack Doyle, jack@greensock.com
 	*/function z() {
		return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r;
	}function M(t) {
		return console && console.warn(t);
	}function O(t) {
		var e,
		    r = t.length,
		    n = 0,
		    o = 0;for (e = 0; e < r; e++) {
			n += t[e++], o += t[e];
		}return [n / (r / 2), o / (r / 2)];
	}function P(t) {
		var e,
		    r,
		    n,
		    o = t.length,
		    a = t[0],
		    i = a,
		    s = t[1],
		    h = s;for (n = 6; n < o; n += 6) {
			a < (e = t[n]) ? a = e : e < i && (i = e), s < (r = t[n + 1]) ? s = r : r < h && (h = r);
		}return t.centerX = (a + i) / 2, t.centerY = (s + h) / 2, t.size = (a - i) * (s - h);
	}function Q(t, e) {
		void 0 === e && (e = 3);for (var r, n, o, a, i, s, h, l, g, c, p, f, u, d, P, _, v = t.length, m = t[0][0], y = m, w = t[0][1], M = w, x = 1 / e; -1 < --v;) {
			for (r = (i = t[v]).length, a = 6; a < r; a += 6) {
				for (g = i[a], c = i[a + 1], p = i[a + 2] - g, d = i[a + 3] - c, f = i[a + 4] - g, P = i[a + 5] - c, u = i[a + 6] - g, _ = i[a + 7] - c, s = e; -1 < --s;) {
					m < (n = ((h = x * s) * h * u + 3 * (l = 1 - h) * (h * f + l * p)) * h + g) ? m = n : n < y && (y = n), w < (o = (h * h * _ + 3 * l * (h * P + l * d)) * h + c) ? w = o : o < M && (M = o);
				}
			}
		}return t.centerX = (m + y) / 2, t.centerY = (w + M) / 2, t.left = y, t.width = m - y, t.top = M, t.height = w - M, t.size = (m - y) * (w - M);
	}function R(t, e) {
		return e.length - t.length;
	}function S(t, e) {
		var r = t.size || P(t),
		    n = e.size || P(e);return Math.abs(n - r) < (r + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - r;
	}function T(t, e) {
		var r,
		    n,
		    o = t.slice(0),
		    a = t.length,
		    i = a - 2;for (e |= 0, r = 0; r < a; r++) {
			n = (r + e) % i, t[r++] = o[n], t[r] = o[1 + n];
		}
	}function U(t, e, r, n, o) {
		var a,
		    i,
		    s,
		    h,
		    l = t.length,
		    g = 0,
		    c = l - 2;for (r *= 6, i = 0; i < l; i += 6) {
			h = t[a = (i + r) % c] - (e[i] - n), s = t[1 + a] - (e[i + 1] - o), g += _(s * s + h * h);
		}return g;
	}function V(t, e, r) {
		var n,
		    o,
		    a,
		    i = t.length,
		    s = O(t),
		    h = O(e),
		    l = h[0] - s[0],
		    g = h[1] - s[1],
		    c = U(t, e, 0, l, g),
		    p = 0;for (a = 6; a < i; a += 6) {
			(o = U(t, e, a / 6, l, g)) < c && (c = o, p = a);
		}if (r) for (reverseSegment(n = t.slice(0)), a = 6; a < i; a += 6) {
			(o = U(n, e, a / 6, l, g)) < c && (c = o, p = -a);
		}return p / 6;
	}function W(t, e, r) {
		for (var n, o, a, i, s, h, l = t.length, g = 1e20, c = 0, p = 0; -1 < --l;) {
			for (h = (n = t[l]).length, s = 0; s < h; s += 6) {
				o = n[s] - e, a = n[s + 1] - r, (i = _(o * o + a * a)) < g && (g = i, c = n[s], p = n[s + 1]);
			}
		}return [c, p];
	}function X(t, e, r, n, o, a) {
		var i,
		    s,
		    h,
		    l,
		    g = e.length,
		    c = 0,
		    p = Math.min(t.size || P(t), e[r].size || P(e[r])) * n,
		    f = 1e20,
		    u = t.centerX + o,
		    d = t.centerY + a;for (i = r; i < g && !((e[i].size || P(e[i])) < p); i++) {
			s = e[i].centerX - u, h = e[i].centerY - d, (l = _(s * s + h * h)) < f && (c = i, f = l);
		}return l = e[c], e.splice(c, 1), l;
	}function Y(t, e) {
		var r,
		    n,
		    o,
		    a,
		    i,
		    s,
		    h,
		    l,
		    g,
		    c,
		    p,
		    f,
		    u,
		    d,
		    P = 0,
		    _ = t.length,
		    v = e / ((_ - 2) / 6);for (u = 2; u < _; u += 6) {
			for (P += v; .999999 < P;) {
				r = t[u - 2], n = t[u - 1], o = t[u], a = t[u + 1], i = t[u + 2], s = t[u + 3], h = t[u + 4], l = t[u + 5], g = r + (o - r) * (d = 1 / ((Math.floor(P) || 1) + 1)), g += ((p = o + (i - o) * d) - g) * d, p += (i + (h - i) * d - p) * d, c = n + (a - n) * d, c += ((f = a + (s - a) * d) - c) * d, f += (s + (l - s) * d - f) * d, t.splice(u, 4, r + (o - r) * d, n + (a - n) * d, g, c, g + (p - g) * d, c + (f - c) * d, p, f, i + (h - i) * d, s + (l - s) * d), u += 6, _ += 6, P--;
			}
		}return t;
	}function Z(t, e, r, n, o) {
		var a,
		    i,
		    s,
		    h,
		    l,
		    g,
		    c,
		    p = e.length - t.length,
		    f = 0 < p ? e : t,
		    u = 0 < p ? t : e,
		    d = 0,
		    _ = "complexity" === n ? R : S,
		    v = "position" === n ? 0 : "number" == typeof n ? n : .8,
		    m = u.length,
		    y = "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && r.push ? r.slice(0) : [r],
		    w = "reverse" === y[0] || y[0] < 0,
		    x = "log" === r;if (u[0]) {
			if (1 < f.length && (t.sort(_), e.sort(_), f.size || Q(f), u.size || Q(u), g = f.centerX - u.centerX, c = f.centerY - u.centerY, _ === S)) for (m = 0; m < u.length; m++) {
				f.splice(m, 0, X(u[m], f, m, v, g, c));
			}if (p) for (p < 0 && (p = -p), f[0].length > u[0].length && Y(u[0], (f[0].length - u[0].length) / 6 | 0), m = u.length; d < p;) {
				f[m].size || P(f[m]), h = (s = W(u, f[m].centerX, f[m].centerY))[0], l = s[1], u[m++] = [h, l, h, l, h, l, h, l], u.totalPoints += 8, d++;
			}for (m = 0; m < t.length; m++) {
				a = e[m], i = t[m], (p = a.length - i.length) < 0 ? Y(a, -p / 6 | 0) : 0 < p && Y(i, p / 6 | 0), w && !1 !== o && !i.reversed && reverseSegment(i), (r = y[m] || 0 === y[m] ? y[m] : "auto") && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === r || "log" === r ? (y[m] = r = V(i, a, !m || !1 === o), r < 0 && (w = !0, reverseSegment(i), r = -r), T(i, 6 * r)) : "reverse" !== r && (m && r < 0 && reverseSegment(i), T(i, 6 * (r < 0 ? -r : r))) : !w && ("auto" === r && Math.abs(a[0] - i[0]) + Math.abs(a[1] - i[1]) + Math.abs(a[a.length - 2] - i[i.length - 2]) + Math.abs(a[a.length - 1] - i[i.length - 1]) > Math.abs(a[0] - i[i.length - 2]) + Math.abs(a[1] - i[i.length - 1]) + Math.abs(a[a.length - 2] - i[0]) + Math.abs(a[a.length - 1] - i[1]) || r % 2) ? (reverseSegment(i), y[m] = -1, w = !0) : "auto" === r ? y[m] = 0 : "reverse" === r && (y[m] = -1), i.closed !== a.closed && (i.closed = a.closed = !1));
			}return x && M("shapeIndex:[" + y.join(",") + "]"), t.shapeIndex = y;
		}
	}function aa(t, e) {
		var r,
		    n,
		    o,
		    a,
		    i,
		    s,
		    h,
		    l = 0,
		    g = parseFloat(t[0]),
		    c = parseFloat(t[1]),
		    p = g + "," + c + " ";for (r = .5 * e / (.5 * (o = t.length) - 1), n = 0; n < o - 2; n += 2) {
			if (l += r, s = parseFloat(t[n + 2]), h = parseFloat(t[n + 3]), .999999 < l) for (i = 1 / (Math.floor(l) + 1), a = 1; .999999 < l;) {
				p += (g + (s - g) * i * a).toFixed(2) + "," + (c + (h - c) * i * a).toFixed(2) + " ", l--, a++;
			}p += s + "," + h + " ", g = s, c = h;
		}return p;
	}function ba(t) {
		var e = t[0].match(L) || [],
		    r = t[1].match(L) || [],
		    n = r.length - e.length;0 < n ? t[0] = aa(e, n) : t[1] = aa(r, -n);
	}function ca(e) {
		return isNaN(e) ? ba : function (t) {
			ba(t), t[1] = function _offsetPoints(t, e) {
				if (!e) return t;var r,
				    n,
				    o,
				    a = t.match(L) || [],
				    i = a.length,
				    s = "";for (r = "reverse" === e ? (n = i - 1, -2) : (n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * i) % i, 2), o = 0; o < i; o += 2) {
					s += a[n - 1] + "," + a[n] + " ", n = (n + r) % i;
				}return s;
			}(t[1], parseInt(e, 10));
		};
	}function ea(t, e) {
		for (var r, n, o, a, i, s, h, l, g, c, p, f, u = t.length, d = .2 * (e || 1); -1 < --u;) {
			for (p = (n = t[u]).isSmooth = n.isSmooth || [0, 0, 0, 0], f = n.smoothData = n.smoothData || [0, 0, 0, 0], p.length = 4, l = n.length - 2, h = 6; h < l; h += 6) {
				o = n[h] - n[h - 2], a = n[h + 1] - n[h - 1], i = n[h + 2] - n[h], s = n[h + 3] - n[h + 1], g = y(a, o), c = y(s, i), (r = Math.abs(g - c) < d) && (f[h - 2] = g, f[h + 2] = c, f[h - 1] = _(o * o + a * a), f[h + 3] = _(i * i + s * s)), p.push(r, r, 0, 0, r, r);
			}n[l] === n[0] && n[1 + l] === n[1] && (o = n[0] - n[l - 2], a = n[1] - n[l - 1], i = n[2] - n[0], s = n[3] - n[1], g = y(a, o), c = y(s, i), Math.abs(g - c) < d && (f[l - 2] = g, f[2] = c, f[l - 1] = _(o * o + a * a), f[3] = _(i * i + s * s), p[l - 2] = p[l - 1] = !0));
		}return t;
	}function fa(t) {
		var e = t.trim().split(" ");return { x: (~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0])) / 100, y: (~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1])) / 100 };
	}function ia(t, e, r, n) {
		var o,
		    a,
		    i = this._origin,
		    s = this._eOrigin,
		    h = t[r] - i.x,
		    l = t[r + 1] - i.y,
		    g = _(h * h + l * l),
		    c = y(l, h);return h = e[r] - s.x, l = e[r + 1] - s.y, a = function _shortAngle(t) {
			return t !== t % p ? t + (t < 0 ? f : -f) : t;
		}(o = y(l, h) - c), !n && C && Math.abs(a + C.ca) < u && (n = C), this._anchorPT = C = { _next: this._anchorPT, t: t, sa: c, ca: n && a * n.ca < 0 && Math.abs(a) > d ? o : a, sl: g, cl: _(h * h + l * l) - g, i: r };
	}function ja(t) {
		r = z(), a = a || r && r.plugins.morphSVG, r && a ? (j = r.utils.toArray, a.prototype._tweenRotation = ia, F = 1) : t && M("Please gsap.registerPlugin(MorphSVGPlugin)");
	}var r,
	    j,
	    C,
	    F,
	    a,
	    y = Math.atan2,
	    b = Math.cos,
	    I = Math.sin,
	    _ = Math.sqrt,
	    p = Math.PI,
	    f = 2 * p,
	    u = .3 * p,
	    d = .7 * p,
	    L = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
	    G = /(^[#\.][a-z]|[a-y][a-z])/gi,
	    H = /[achlmqstvz]/gi,
	    q = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
	    J = { version: "3.0.0", name: "morphSVG", register: function register(t, e) {
			r = t, a = e, ja();
		}, init: function init(t, e, r, n, o) {
			var a,
			    i,
			    s,
			    h,
			    l,
			    g,
			    c,
			    p,
			    f,
			    u,
			    d,
			    P,
			    _,
			    v,
			    m,
			    y,
			    w,
			    x,
			    T,
			    b,
			    S,
			    N,
			    z = t.nodeType ? window.getComputedStyle(t) : {},
			    R = z.fill + "",
			    A = !("none" === R || "0" === (R.match(L) || [])[3] || "evenodd" === z.fillRule),
			    O = (e.origin || "50 50").split(",");if (F || ja(1), l = "POLYLINE" === (a = (t.nodeName + "").toUpperCase()) || "POLYGON" === a, "PATH" !== a && !l && !e.prop) return M("Cannot morph a <" + a + "> element. " + q), !1;if (i = "PATH" === a ? "d" : "points", ("string" == typeof e || e.getBBox || e[0]) && (e = { shape: e }), !e.prop && "function" != typeof t.setAttribute) return !1;if (h = function _parseShape(t, e, r) {
				var n, o;return (!("string" == typeof t) || G.test(t) || (t.match(L) || []).length < 3) && ((n = j(t)[0]) ? (o = (n.nodeName + "").toUpperCase(), e && "PATH" !== o && (n = convertToPath(n, !1), o = "PATH"), t = n.getAttribute("PATH" === o ? "d" : "points") || "", n === r && (t = n.getAttributeNS(null, "data-original") || t)) : (M("WARNING: invalid morph to: " + t), t = !1)), t;
			}(e.shape || e.d || e.points || "", "d" == i, t), l && H.test(h)) return M("A <" + a + "> cannot accept path data. " + q), !1;if (g = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto", c = e.map || J.defaultMap, this._prop = e.prop, this._render = e.render || J.defaultRender, this._apply = "updateTarget" in e ? e.updateTarget : J.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision), this._tween = r, h) {
				if (this._target = t, w = "object" == _typeof(e.precompile), u = this._prop ? t[this._prop] : t.getAttribute(i), this._prop || t.getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", u), "d" == i || this._prop) {
					if (u = stringToRawPath(w ? e.precompile[0] : u), d = stringToRawPath(w ? e.precompile[1] : h), !w && !Z(u, d, g, c, A)) return !1;for ("log" !== e.precompile && !0 !== e.precompile || M('precompile:["' + rawPathToString(u) + '","' + rawPathToString(d) + '"]'), (S = "linear" !== (e.type || J.defaultType)) && (u = ea(u, e.smoothTolerance), d = ea(d, e.smoothTolerance), u.size || Q(u), d.size || Q(d), b = fa(O[0]), this._origin = u.origin = { x: u.left + b.x * u.width, y: u.top + b.y * u.height }, O[1] && (b = fa(O[1])), this._eOrigin = { x: d.left + b.x * d.width, y: d.top + b.y * d.height }), this._rawPath = t._gsRawPath = u, _ = u.length; -1 < --_;) {
						for (m = u[_], y = d[_], p = m.isSmooth || [], f = y.isSmooth || [], v = m.length, P = C = 0; P < v; P += 2) {
							y[P] === m[P] && y[P + 1] === m[P + 1] || (S ? p[P] && f[P] ? (x = m.smoothData, T = y.smoothData, N = P + (P === v - 4 ? 7 - v : 5), this._controlPT = { _next: this._controlPT, i: P, j: _, l1s: x[P + 1], l1c: T[P + 1] - x[P + 1], l2s: x[N], l2c: T[N] - x[N] }, s = this._tweenRotation(m, y, P + 2), this._tweenRotation(m, y, P, s), this._tweenRotation(m, y, N - 1, s), P += 4) : this._tweenRotation(m, y, P) : (s = this.add(m, P, m[P], y[P]), s = this.add(m, P + 1, m[P + 1], y[P + 1]) || s));
						}
					}
				} else s = this.add(t, "setAttribute", t.getAttribute(i) + "", h + "", n, o, 0, ca(g), i);S && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x), s = this.add(this._origin, "y", this._origin.y, this._eOrigin.y)), s && (this._props.push("morphSVG"), s.end = h, s.endProp = i);
			}return 1;
		}, render: function render(t, e) {
			for (var r, n, o, a, i, s, h, l, g, c, p, f, u = e._rawPath, d = e._controlPT, P = e._anchorPT, _ = e._rnd, v = e._target, m = e._pt; m;) {
				m.r(t, m.d), m = m._next;
			}if (1 === t && e._apply) for (m = e._pt; m;) {
				m.end && (e._prop ? v[e._prop] = m.end : v.setAttribute(m.endProp, m.end)), m = m._next;
			} else if (u) {
				for (; P;) {
					i = P.sa + t * P.ca, a = P.sl + t * P.cl, P.t[P.i] = e._origin.x + b(i) * a, P.t[P.i + 1] = e._origin.y + I(i) * a, P = P._next;
				}for (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1; d;) {
					f = (s = d.i) + (s === (o = u[d.j]).length - 4 ? 7 - o.length : 5), i = y(o[f] - o[s + 1], o[f - 1] - o[s]), c = I(i), p = b(i), l = o[s + 2], g = o[s + 3], a = d.l1s + n * d.l1c, o[s] = l - p * a, o[s + 1] = g - c * a, a = d.l2s + n * d.l2c, o[f - 1] = l + p * a, o[f] = g + c * a, d = d._next;
				}if (v._gsRawPath = u, e._apply) {
					for (r = "", " ", h = 0; h < u.length; h++) {
						for (a = (o = u[h]).length, r += "M" + (o[0] * _ | 0) / _ + " " + (o[1] * _ | 0) / _ + " C", s = 2; s < a; s++) {
							r += (o[s] * _ | 0) / _ + " ";
						}
					}e._prop ? v[e._prop] = r : v.setAttribute("d", r);
				}
			}e._render && u && e._render.call(e._tween, u, v);
		}, getRawPath: function getRawPath(t) {
			var e,
			    r = (t = n(t) && o.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;return r && (t = t.getAttribute("d")) ? (r._gsPath || (r._gsPath = {}), (e = r._gsPath[t]) && !e._dirty ? e : r._gsPath[t] = stringToRawPath(t)) : t ? n(t) ? stringToRawPath(t) : s(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string");
		}, stringToRawPath: stringToRawPath, rawPathToString: rawPathToString, pathFilter: function _pathFilter(t, e, r, n, o) {
			var a = stringToRawPath(t[0]),
			    i = stringToRawPath(t[1]);Z(a, i, e || 0 === e ? e : "auto", r, o) && (t[0] = rawPathToString(a), t[1] = rawPathToString(i), "log" !== n && !0 !== n || M('precompile:["' + t[0] + '","' + t[1] + '"]'));
		}, pointsFilter: ba, getTotalSize: Q, convertToPath: function convertToPath$1(t, e) {
			return j(t).map(function (t) {
				return convertToPath(t, !1 !== e);
			});
		}, defaultType: "linear", defaultUpdateTarget: !0, defaultMap: "size" };z() && r.registerPlugin(J), t.MorphSVGPlugin = J, t.default = J, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=MorphSVGPlugin.min.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
	"object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t((e = e || self).window = e.window || {});
}(undefined, function (e) {
	"use strict";
	function n(e) {
		return ~~(1e5 * e + (e < 0 ? -.5 : .5)) / 1e5;
	}var C = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
	    E = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
	    Y = Math.PI / 180,
	    k = (Math.PI, Math.sin),
	    B = Math.cos,
	    F = Math.abs,
	    J = Math.sqrt;function arcToSegment(e, t, n, s, a, r, i, o, h) {
		if (e !== o || t !== h) {
			n = F(n), s = F(s);var u = a % 360 * Y,
			    c = B(u),
			    f = k(u),
			    l = Math.PI,
			    g = 2 * l,
			    x = (e - o) / 2,
			    d = (t - h) / 2,
			    y = c * x + f * d,
			    p = -f * x + c * d,
			    m = y * y,
			    M = p * p,
			    v = m / (n * n) + M / (s * s);1 < v && (n = J(v) * n, s = J(v) * s);var C = n * n,
			    E = s * s,
			    b = (C * E - C * M - E * m) / (C * M + E * m);b < 0 && (b = 0);var w = (r === i ? -1 : 1) * J(b),
			    P = n * p / s * w,
			    S = -s * y / n * w,
			    N = c * P - f * S + (e + o) / 2,
			    D = f * P + c * S + (t + h) / 2,
			    V = (y - P) / n,
			    _ = (p - S) / s,
			    q = (-y - P) / n,
			    T = (-p - S) / s,
			    G = V * V + _ * _,
			    L = (_ < 0 ? -1 : 1) * Math.acos(V / J(G)),
			    R = (V * T - _ * q < 0 ? -1 : 1) * Math.acos((V * q + _ * T) / J(G * (q * q + T * T)));isNaN(R) && (R = l), !i && 0 < R ? R -= g : i && R < 0 && (R += g), L %= g, R %= g;var A,
			    I = Math.ceil(F(R) / (g / 4)),
			    O = [],
			    j = R / I,
			    z = 4 / 3 * k(j / 2) / (1 + B(j / 2)),
			    H = c * n,
			    Q = f * n,
			    Z = f * -s,
			    U = c * s;for (A = 0; A < I; A++) {
				y = B(a = L + A * j), p = k(a), V = B(a += j), _ = k(a), O.push(y - z * p, p + z * y, V + z * _, _ - z * V, V, _);
			}for (A = 0; A < O.length; A += 2) {
				y = O[A], p = O[A + 1], O[A] = y * H + p * Z + N, O[A + 1] = y * Q + p * U + D;
			}return O[A - 2] = o, O[A - 1] = h, O;
		}
	}function q() {
		return M || "undefined" != typeof window && (M = window.gsap) && M.registerPlugin && M;
	}function r() {
		(M = q()) ? (M.registerEase("_CE", i.create), s = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
	}function t(e) {
		return ~~(1e3 * e + (e < 0 ? -.5 : .5)) / 1e3;
	}function y(e, t, n, s, a, r, i, o, h, u, c) {
		var f,
		    l = (e + n) / 2,
		    g = (t + s) / 2,
		    x = (n + a) / 2,
		    d = (s + r) / 2,
		    p = (a + i) / 2,
		    m = (r + o) / 2,
		    M = (l + x) / 2,
		    v = (g + d) / 2,
		    C = (x + p) / 2,
		    E = (d + m) / 2,
		    b = (M + C) / 2,
		    w = (v + E) / 2,
		    P = i - e,
		    S = o - t,
		    N = Math.abs((n - i) * S - (s - o) * P),
		    D = Math.abs((a - i) * S - (r - o) * P);return u || (u = [{ x: e, y: t }, { x: i, y: o }], c = 1), u.splice(c || u.length - 1, 0, { x: b, y: w }), h * (P * P + S * S) < (N + D) * (N + D) && (f = u.length, y(e, t, l, g, M, v, b, w, h, u, c), y(b, w, C, E, p, m, i, o, h, u, c + 1 + (u.length - f))), u;
	}
	/*!
 	 * CustomEase 3.0.0
 	 * https://greensock.com
 	 *
 	 * @license Copyright 2008-2019, GreenSock. All rights reserved.
 	 * Subject to the terms at https://greensock.com/standard-license or for
 	 * Club GreenSock members, the agreement issued with that membership.
 	 * @author: Jack Doyle, jack@greensock.com
 	*/
	var M,
	    s,
	    a,
	    m = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
	    v = /[cLlsSaAhHvVtTqQ]/g,
	    i = ((a = CustomEase.prototype).setData = function setData(e, t) {
		t = t || {};var n,
		    s,
		    a,
		    r,
		    i,
		    o,
		    h,
		    u,
		    c,
		    f = (e = e || "0,0,1,1").match(m),
		    l = 1,
		    g = [],
		    x = [],
		    d = t.precision || 1,
		    p = d <= 1;if (this.data = e, (v.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (f = function stringToRawPath(e) {
			function cb(e, t, n, s) {
				c = (n - e) / 3, f = (s - t) / 3, o.push(e + c, t + f, n - c, s - f, n, s);
			}var t,
			    n,
			    s,
			    a,
			    r,
			    i,
			    o,
			    h,
			    u,
			    c,
			    f,
			    l,
			    g,
			    x = (e + "").replace(E, function (e) {
				var t = +e;return t < 1e-4 && -1e-4 < t ? 0 : t;
			}).match(C) || [],
			    d = [],
			    y = 0,
			    p = 0,
			    m = x.length,
			    M = 0,
			    v = "ERROR: malformed path: " + e;if (!e || !isNaN(x[0]) || isNaN(x[1])) return console.log(v), d;for (t = 0; t < m; t++) {
				if (g = r, isNaN(x[t]) ? i = (r = x[t].toUpperCase()) !== x[t] : t--, s = +x[t + 1], a = +x[t + 2], i && (s += y, a += p), t || (h = s, u = a), "M" === r) o && (o.length < 8 ? d.length -= 1 : M += o.length), y = h = s, p = u = a, o = [s, a], d.push(o), t += 2, r = "L";else if ("C" === r) i || (y = p = 0), (o = o || [0, 0]).push(s, a, y + 1 * x[t + 3], p + 1 * x[t + 4], y += 1 * x[t + 5], p += 1 * x[t + 6]), t += 6;else if ("S" === r) c = y, f = p, "C" !== g && "S" !== g || (c += y - o[o.length - 4], f += p - o[o.length - 3]), i || (y = p = 0), o.push(c, f, s, a, y += 1 * x[t + 3], p += 1 * x[t + 4]), t += 4;else if ("Q" === r) c = y + 2 / 3 * (s - y), f = p + 2 / 3 * (a - p), i || (y = p = 0), y += 1 * x[t + 3], p += 1 * x[t + 4], o.push(c, f, y + 2 / 3 * (s - y), p + 2 / 3 * (a - p), y, p), t += 4;else if ("T" === r) c = y - o[o.length - 4], f = p - o[o.length - 3], o.push(y + c, p + f, s + 2 / 3 * (y + 1.5 * c - s), a + 2 / 3 * (p + 1.5 * f - a), y = s, p = a), t += 2;else if ("H" === r) cb(y, p, y = s, p), t += 1;else if ("V" === r) cb(y, p, y, p = s + (i ? p - y : 0)), t += 1;else if ("L" === r || "Z" === r) "Z" === r && (s = h, a = u, o.closed = !0), ("L" === r || .5 < F(y - s) || .5 < F(p - a)) && (cb(y, p, s, a), "L" === r && (t += 2)), y = s, p = a;else if ("A" === r) {
					if (l = arcToSegment(y, p, +x[t + 1], +x[t + 2], +x[t + 3], +x[t + 4], +x[t + 5], (i ? y : 0) + 1 * x[t + 6], (i ? p : 0) + 1 * x[t + 7])) for (n = 0; n < l.length; n++) {
						o.push(l[n]);
					}y = o[o.length - 2], p = o[o.length - 1], t += 7;
				} else console.log(v);
			}return (t = o.length) < 6 ? (d.pop(), t = 0) : o[0] === o[t - 2] && o[1] === o[t - 1] && (o.closed = !0), d.totalPoints = M + t, d;
		}(e)[0]), 4 === (n = f.length)) f.unshift(0, 0), f.push(1, 1), n = 8;else if ((n - 2) % 6) throw "Invalid CustomEase";for (0 == +f[0] && 1 == +f[n - 2] || function _normalize(e, t, n) {
			n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));var s,
			    a = -1 * +e[0],
			    r = -n,
			    i = e.length,
			    o = 1 / (+e[i - 2] + a),
			    h = -t || (Math.abs(+e[i - 1] - +e[1]) < .01 * (+e[i - 2] - +e[0]) ? function _findMinimum(e) {
				var t,
				    n = e.length,
				    s = 1e20;for (t = 1; t < n; t += 6) {
					+e[t] < s && (s = +e[t]);
				}return s;
			}(e) + r : +e[i - 1] + r);for (h = h ? 1 / h : -o, s = 0; s < i; s += 2) {
				e[s] = (+e[s] + a) * o, e[s + 1] = (+e[s + 1] + r) * h;
			}
		}(f, t.height, t.originY), this.segment = f, r = 2; r < n; r += 6) {
			s = { x: +f[r - 2], y: +f[r - 1] }, a = { x: +f[r + 4], y: +f[r + 5] }, g.push(s, a), y(s.x, s.y, +f[r], +f[r + 1], +f[r + 2], +f[r + 3], a.x, a.y, 1 / (2e5 * d), g, g.length - 1);
		}for (n = g.length, r = 0; r < n; r++) {
			h = g[r], u = g[r - 1] || h, h.x > u.x || u.y !== h.y && u.x === h.x || h === u ? (u.cx = h.x - u.x, u.cy = h.y - u.y, u.n = h, u.nx = h.x, p && 1 < r && 2 < Math.abs(u.cy / u.cx - g[r - 2].cy / g[r - 2].cx) && (p = 0), u.cx < l && (u.cx ? l = u.cx : (u.cx = .001, r === n - 1 && (u.x -= .001, l = Math.min(l, .001), p = 0)))) : (g.splice(r--, 1), n--);
		}if (i = 1 / (n = 1 / l + 1 | 0), h = g[o = 0], p) {
			for (r = 0; r < n; r++) {
				c = r * i, h.nx < c && (h = g[++o]), s = h.y + (c - h.x) / h.cx * h.cy, x[r] = { x: c, cx: i, y: s, cy: 0, nx: 9 }, r && (x[r - 1].cy = s - x[r - 1].y);
			}x[n - 1].cy = g[g.length - 1].y - s;
		} else {
			for (r = 0; r < n; r++) {
				h.nx < r * i && (h = g[++o]), x[r] = h;
			}o < g.length - 1 && (x[r - 1] = g[g.length - 2]);
		}return this.ease = function (e) {
			var t = x[e * n | 0] || x[n - 1];return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy;
		}, (this.ease.custom = this).id && M.registerEase(this.id, this.ease), this;
	}, a.getSVGData = function getSVGData(e) {
		return CustomEase.getSVGData(this, e);
	}, CustomEase.create = function create(e, t, n) {
		return new CustomEase(e, t, n).ease;
	}, CustomEase.register = function register(e) {
		M = e, r();
	}, CustomEase.get = function get(e) {
		return M.parseEase(e);
	}, CustomEase.getSVGData = function getSVGData(e, s) {
		var a,
		    r,
		    i,
		    o,
		    h,
		    u,
		    c,
		    f,
		    l,
		    g,
		    x = (s = s || {}).width || 100,
		    d = s.height || 100,
		    y = s.x || 0,
		    p = (s.y || 0) + d,
		    m = M.utils.toArray(s.path)[0];if (s.invert && (d = -d, p = 0), "string" == typeof e && (e = M.parseEase(e)), e.custom && (e = e.custom), e instanceof CustomEase) a = function rawPathToString(e) {
			!function _isNumber(e) {
				return "number" == typeof e;
			}(e[0]) || (e = [e]);var t,
			    s,
			    a,
			    r,
			    i = "",
			    o = e.length;for (s = 0; s < o; s++) {
				for (r = e[s], i += "M" + n(r[0]) + "," + n(r[1]) + " C", t = r.length, a = 2; a < t; a++) {
					i += n(r[a++]) + "," + n(r[a++]) + " " + n(r[a++]) + "," + n(r[a++]) + " " + n(r[a++]) + "," + n(r[a]) + " ";
				}r.closed && (i += "z");
			}return i;
		}(function transformRawPath(e, t, n, s, a, r, i) {
			for (var o, h, u, c, f, l = e.length; -1 < --l;) {
				for (h = (o = e[l]).length, u = 0; u < h; u += 2) {
					c = o[u], f = o[u + 1], o[u] = c * t + f * s + r, o[u + 1] = c * n + f * a + i;
				}
			}return e._dirty = 1, e;
		}([e.segment], x, 0, 0, -d, y, p));else {
			for (a = [y, p], o = 1 / (c = Math.max(5, 200 * (s.precision || 1))), f = 5 / (c += 2), l = t(y + o * x), r = ((g = t(p + e(o) * -d)) - p) / (l - y), i = 2; i < c; i++) {
				h = t(y + i * o * x), u = t(p + e(i * o) * -d), (Math.abs((u - g) / (h - l) - r) > f || i === c - 1) && (a.push(l, g), r = (u - g) / (h - l)), l = h, g = u;
			}a = "M" + a.join(",");
		}return m && m.setAttribute("d", a), a;
	}, CustomEase);function CustomEase(e, t, n) {
		s || r(), this.id = e, this.setData(t, n);
	}q() && M.registerPlugin(i), i.version = "3.0.0", e.CustomEase = i, e.default = i, Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=CustomEase.min.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Swiper 5.2.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 16, 2019
 */

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (e = e || self).Swiper = t();
}(undefined, function () {
  "use strict";
  var e = "undefined" == typeof document ? { body: {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, activeElement: { blur: function blur() {}, nodeName: "" }, querySelector: function querySelector() {
      return null;
    }, querySelectorAll: function querySelectorAll() {
      return [];
    }, getElementById: function getElementById() {
      return null;
    }, createEvent: function createEvent() {
      return { initEvent: function initEvent() {} };
    }, createElement: function createElement() {
      return { children: [], childNodes: [], style: {}, setAttribute: function setAttribute() {}, getElementsByTagName: function getElementsByTagName() {
          return [];
        } };
    }, location: { hash: "" } } : document,
      t = "undefined" == typeof window ? { document: e, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function CustomEvent() {
      return this;
    }, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, getComputedStyle: function getComputedStyle() {
      return { getPropertyValue: function getPropertyValue() {
          return "";
        } };
    }, Image: function Image() {}, Date: function Date() {}, screen: {}, setTimeout: function setTimeout() {}, clearTimeout: function clearTimeout() {} } : window,
      i = function i(e) {
    for (var t = 0; t < e.length; t += 1) {
      this[t] = e[t];
    }return this.length = e.length, this;
  };function s(s, a) {
    var r = [],
        n = 0;if (s && !a && s instanceof i) return s;if (s) if ("string" == typeof s) {
      var o,
          l,
          d = s.trim();if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
        var h = "div";for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) {
          r.push(l.childNodes[n]);
        }
      } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) {
        o[n] && r.push(o[n]);
      }
    } else if (s.nodeType || s === t || s === e) r.push(s);else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) {
      r.push(s[n]);
    }return new i(r);
  }function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1) {
      -1 === t.indexOf(e[i]) && t.push(e[i]);
    }return t;
  }s.fn = i.prototype, s.Class = i, s.Dom7 = i;var r = { addClass: function addClass(e) {
      if (void 0 === e) return this;for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
        }
      }return this;
    }, hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    }, toggleClass: function toggleClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
        }
      }return this;
    }, attr: function attr(e, t) {
      var i = arguments;if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var s = 0; s < this.length; s += 1) {
        if (2 === i.length) this[s].setAttribute(e, t);else for (var a in e) {
          this[s][a] = e[a], this[s].setAttribute(a, e[a]);
        }
      }return this;
    }, removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }return this;
    }, data: function data(e, t) {
      var i;if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1) {
          (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
        }return this;
      }if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];var a = i.getAttribute("data-" + e);return a || void 0;
      }
    }, transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;i.webkitTransform = e, i.transform = e;
      }return this;
    }, transition: function transition(e) {
      "string" != typeof e && (e += "ms");for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;i.webkitTransitionDuration = e, i.transitionDuration = e;
      }return this;
    }, on: function on() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }var a = t[0],
          r = t[1],
          n = t[2],
          o = t[3];function l(e) {
        var t = e.target;if (t) {
          var i = e.target.dom7EventData || [];if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) {
            s(a[o]).is(r) && n.apply(a[o], i);
          }
        }
      }function d(e) {
        var t = e && e.target && e.target.dom7EventData || [];t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }"function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];if (r) for (h = 0; h < p.length; h += 1) {
          var v = p[h];u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, o);
        } else for (h = 0; h < p.length; h += 1) {
          var f = p[h];u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({ listener: n, proxyListener: d }), u.addEventListener(f, d, o);
        }
      }return this;
    }, off: function off() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];"function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);for (var o = s.split(" "), l = 0; l < o.length; l += 1) {
        for (var d = o[l], h = 0; h < this.length; h += 1) {
          var p = this[h],
              c = void 0;if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
            var v = c[u];r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
          }
        }
      }return this;
    }, trigger: function trigger() {
      for (var i = [], s = arguments.length; s--;) {
        i[s] = arguments[s];
      }for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) {
        for (var o = a[n], l = 0; l < this.length; l += 1) {
          var d = this[l],
              h = void 0;try {
            h = new t.CustomEvent(o, { detail: r, bubbles: !0, cancelable: !0 });
          } catch (t) {
            (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
          }d.dom7EventData = i.filter(function (e, t) {
            return t > 0;
          }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
        }
      }return this;
    }, transitionEnd: function transitionEnd(e) {
      var t,
          i = ["webkitTransitionEnd", "transitionend"],
          s = this;function a(r) {
        if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) {
          s.off(i[t], a);
        }
      }if (e) for (t = 0; t < i.length; t += 1) {
        s.on(i[t], a);
      }return this;
    }, outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }return this[0].offsetWidth;
      }return null;
    }, outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }return this[0].offsetHeight;
      }return null;
    }, offset: function offset() {
      if (this.length > 0) {
        var i = this[0],
            s = i.getBoundingClientRect(),
            a = e.body,
            r = i.clientTop || a.clientTop || 0,
            n = i.clientLeft || a.clientLeft || 0,
            o = i === t ? t.scrollY : i.scrollTop,
            l = i === t ? t.scrollX : i.scrollLeft;return { top: s.top + o - r, left: s.left + l - n };
      }return null;
    }, css: function css(e, i) {
      var s;if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1) {
            for (var a in e) {
              this[s].style[a] = e[a];
            }
          }return this;
        }if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
      }if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) {
          this[s].style[e] = i;
        }return this;
      }return this;
    }, each: function each(e) {
      if (!e) return this;for (var t = 0; t < this.length; t += 1) {
        if (!1 === e.call(this[t], t, this[t])) return this;
      }return this;
    }, html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }return this;
    }, text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }return this;
    }, is: function is(a) {
      var r,
          n,
          o = this[0];if (!o || void 0 === a) return !1;if ("string" == typeof a) {
        if (o.matches) return o.matches(a);if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);if (o.msMatchesSelector) return o.msMatchesSelector(a);for (r = s(a), n = 0; n < r.length; n += 1) {
          if (r[n] === o) return !0;
        }return !1;
      }if (a === e) return o === e;if (a === t) return o === t;if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) {
          if (r[n] === o) return !0;
        }return !1;
      }return !1;
    }, index: function index() {
      var e,
          t = this[0];if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }return e;
      }
    }, eq: function eq(e) {
      if (void 0 === e) return this;var t,
          s = this.length;return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]);
    }, append: function append() {
      for (var t, s = [], a = arguments.length; a--;) {
        s[a] = arguments[a];
      }for (var r = 0; r < s.length; r += 1) {
        t = s[r];for (var n = 0; n < this.length; n += 1) {
          if ("string" == typeof t) {
            var o = e.createElement("div");for (o.innerHTML = t; o.firstChild;) {
              this[n].appendChild(o.firstChild);
            }
          } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) {
            this[n].appendChild(t[l]);
          } else this[n].appendChild(t);
        }
      }return this;
    }, prepend: function prepend(t) {
      var s, a;for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof t) {
          var r = e.createElement("div");for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) {
            this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
          }
        } else if (t instanceof i) for (a = 0; a < t.length; a += 1) {
          this[s].insertBefore(t[a], this[s].childNodes[0]);
        } else this[s].insertBefore(t, this[s].childNodes[0]);
      }return this;
    }, next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]);
    }, nextAll: function nextAll(e) {
      var t = [],
          a = this[0];if (!a) return new i([]);for (; a.nextElementSibling;) {
        var r = a.nextElementSibling;e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }return new i(t);
    }, prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]);
      }return new i([]);
    }, prevAll: function prevAll(e) {
      var t = [],
          a = this[0];if (!a) return new i([]);for (; a.previousElementSibling;) {
        var r = a.previousElementSibling;e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }return new i(t);
    }, parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }return s(a(t));
    }, parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var r = this[i].parentNode; r;) {
          e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
        }
      }return s(a(t));
    }, closest: function closest(e) {
      var t = this;return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    }, find: function find(e) {
      for (var t = [], s = 0; s < this.length; s += 1) {
        for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) {
          t.push(a[r]);
        }
      }return new i(t);
    }, children: function children(e) {
      for (var t = [], r = 0; r < this.length; r += 1) {
        for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) {
          e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
        }
      }return new i(a(t));
    }, filter: function filter(e) {
      for (var t = [], s = 0; s < this.length; s += 1) {
        e.call(this[s], s, this[s]) && t.push(this[s]);
      }return new i(t);
    }, remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }return this;
    }, add: function add() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }var i, a;for (i = 0; i < e.length; i += 1) {
        var r = s(e[i]);for (a = 0; a < r.length; a += 1) {
          this[this.length] = r[a], this.length += 1;
        }
      }return this;
    }, styles: function styles() {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    } };Object.keys(r).forEach(function (e) {
    s.fn[e] = s.fn[e] || r[e];
  });var n = { deleteProps: function deleteProps(e) {
      var t = e;Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}try {
          delete t[e];
        } catch (e) {}
      });
    }, nextTick: function nextTick(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }, now: function now() {
      return Date.now();
    }, getTranslate: function getTranslate(e, i) {
      var s, a, r;void 0 === i && (i = "x");var n = t.getComputedStyle(e, null);return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0;
    }, parseUrlQuery: function parseUrlQuery(e) {
      var i,
          s,
          a,
          r,
          n = {},
          o = e || t.location.href;if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, i = 0; i < r; i += 1) {
        a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
      }return n;
    }, isObject: function isObject(e) {
      return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && e.constructor && e.constructor === Object;
    }, extend: function extend() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
        var a = e[s];if (null != a) for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
          var d = r[o],
              h = Object.getOwnPropertyDescriptor(a, d);void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d]);
        }
      }return i;
    } },
      o = { touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch), pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0, observer: "MutationObserver" in t || "WebkitMutationObserver" in t, passiveListener: function () {
      var e = !1;try {
        var i = Object.defineProperty({}, "passive", { get: function get() {
            e = !0;
          } });t.addEventListener("testPassiveListener", null, i);
      } catch (e) {}return e;
    }(), gestures: "ongesturestart" in t },
      l = function l(e) {
    void 0 === e && (e = {});var t = this;t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
      t.on(e, t.params.on[e]);
    });
  },
      d = { components: { configurable: !0 } };l.prototype.on = function (e, t, i) {
    var s = this;if ("function" != typeof t) return s;var a = i ? "unshift" : "push";return e.split(" ").forEach(function (e) {
      s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
    }), s;
  }, l.prototype.once = function (e, t, i) {
    var s = this;if ("function" != typeof t) return s;function a() {
      for (var i = [], r = arguments.length; r--;) {
        i[r] = arguments[r];
      }s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
    }return a.f7proxy = t, s.on(e, a, i);
  }, l.prototype.off = function (e, t) {
    var i = this;return i.eventsListeners ? (e.split(" ").forEach(function (e) {
      void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function (s, a) {
        (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1);
      });
    }), i) : i;
  }, l.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) {
      e[t] = arguments[t];
    }var i,
        s,
        a,
        r = this;if (!r.eventsListeners) return r;"string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);var n = Array.isArray(i) ? i : i.split(" ");return n.forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(a, s);
        });
      }
    }), r;
  }, l.prototype.useModulesParams = function (e) {
    var t = this;t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i];s.params && n.extend(e, s.params);
    });
  }, l.prototype.useModules = function (e) {
    void 0 === e && (e = {});var t = this;t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i],
          a = e[i] || {};s.instance && Object.keys(s.instance).forEach(function (e) {
        var i = s.instance[e];t[e] = "function" == typeof i ? i.bind(t) : i;
      }), s.on && t.on && Object.keys(s.on).forEach(function (e) {
        t.on(e, s.on[e]);
      }), s.create && s.create.bind(t)(a);
    });
  }, d.components.set = function (e) {
    this.use && this.use(e);
  }, l.installModule = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) {
      t[i] = arguments[i + 1];
    }var s = this;s.prototype.modules || (s.prototype.modules = {});var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
      s.prototype[t] = e.proto[t];
    }), e.static && Object.keys(e.static).forEach(function (t) {
      s[t] = e.static[t];
    }), e.install && e.install.apply(s, t), s;
  }, l.use = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) {
      t[i] = arguments[i + 1];
    }var s = this;return Array.isArray(e) ? (e.forEach(function (e) {
      return s.installModule(e);
    }), s) : s.installModule.apply(s, [e].concat(t));
  }, Object.defineProperties(l, d);var h = { updateSize: function updateSize() {
      var e,
          t,
          i = this.$el;e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
    }, updateSlides: function updateSlides() {
      var e = this.params,
          i = this.$wrapperEl,
          s = this.size,
          a = this.rtlTranslate,
          r = this.wrongRTL,
          o = this.virtual && e.virtual.enabled,
          l = o ? this.virtual.slides.length : this.slides.length,
          d = i.children("." + this.params.slideClass),
          h = o ? this.virtual.slides.length : d.length,
          p = [],
          c = [],
          u = [];function v(t) {
        return !e.cssMode || t !== d.length - 1;
      }var f = e.slidesOffsetBefore;"function" == typeof f && (f = e.slidesOffsetBefore.call(this));var m = e.slidesOffsetAfter;"function" == typeof m && (m = e.slidesOffsetAfter.call(this));var g = this.snapGrid.length,
          b = this.snapGrid.length,
          w = e.spaceBetween,
          y = -f,
          x = 0,
          T = 0;if (void 0 !== s) {
        var E, S;"string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({ marginLeft: "", marginTop: "" }) : d.css({ marginRight: "", marginBottom: "" }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
          S = 0;var $ = d.eq(k);if (e.slidesPerColumn > 1) {
            var L = void 0,
                I = void 0,
                D = void 0;if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
              var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                  A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                  G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({ "-webkit-box-ordinal-group": L, "-moz-box-ordinal-group": L, "-ms-flex-order": L, "-webkit-order": L, order: L });
            } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;$.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px");
          }if ("none" !== $.css("display")) {
            if ("auto" === e.slidesPerView) {
              var B = t.getComputedStyle($[0], null),
                  H = $[0].style.transform,
                  N = $[0].style.webkitTransform;if (H && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);else if (this.isHorizontal()) {
                var X = parseFloat(B.getPropertyValue("width")),
                    V = parseFloat(B.getPropertyValue("padding-left")),
                    Y = parseFloat(B.getPropertyValue("padding-right")),
                    F = parseFloat(B.getPropertyValue("margin-left")),
                    W = parseFloat(B.getPropertyValue("margin-right")),
                    R = B.getPropertyValue("box-sizing");S = R && "border-box" === R ? X + F + W : X + V + Y + F + W;
              } else {
                var q = parseFloat(B.getPropertyValue("height")),
                    j = parseFloat(B.getPropertyValue("padding-top")),
                    K = parseFloat(B.getPropertyValue("padding-bottom")),
                    U = parseFloat(B.getPropertyValue("margin-top")),
                    _ = parseFloat(B.getPropertyValue("margin-bottom")),
                    Z = B.getPropertyValue("box-sizing");S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _;
              }H && ($[0].style.transform = H), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S));
            } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1;
          }
        }if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({ width: this.virtualSize + e.spaceBetween + "px" }), e.setWrapperSize && (this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" }), e.centeredSlides)) {
          C = [];for (var Q = 0; Q < p.length; Q += 1) {
            var J = p[Q];e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J);
          }p = C;
        }if (!e.centeredSlides) {
          C = [];for (var ee = 0; ee < p.length; ee += 1) {
            var te = p[ee];e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te);
          }p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
        }if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({ marginLeft: w + "px" }) : d.filter(v).css({ marginRight: w + "px" }) : d.filter(v).css({ marginBottom: w + "px" })), e.centeredSlides && e.centeredSlidesBounds) {
          var ie = 0;u.forEach(function (t) {
            ie += t + (e.spaceBetween ? e.spaceBetween : 0);
          });var se = (ie -= e.spaceBetween) - s;p = p.map(function (e) {
            return e < 0 ? -f : e > se ? se + m : e;
          });
        }if (e.centerInsufficientSlides) {
          var ae = 0;if (u.forEach(function (t) {
            ae += t + (e.spaceBetween ? e.spaceBetween : 0);
          }), (ae -= e.spaceBetween) < s) {
            var re = (s - ae) / 2;p.forEach(function (e, t) {
              p[t] = e - re;
            }), c.forEach(function (e, t) {
              c[t] = e + re;
            });
          }
        }n.extend(this, { slides: d, snapGrid: p, slidesGrid: c, slidesSizesGrid: u }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
      }
    }, updateAutoHeight: function updateAutoHeight(e) {
      var t,
          i = [],
          s = 0;if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
        var a = this.activeIndex + t;if (a > this.slides.length) break;i.push(this.slides.eq(a)[0]);
      } else i.push(this.slides.eq(this.activeIndex)[0]);for (t = 0; t < i.length; t += 1) {
        if (void 0 !== i[t]) {
          var r = i[t].offsetHeight;s = r > s ? r : s;
        }
      }s && this.$wrapperEl.css("height", s + "px");
    }, updateSlidesOffset: function updateSlidesOffset() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      }
    }, updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);var t = this.params,
          i = this.slides,
          a = this.rtlTranslate;if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();var r = -e;a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
              l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);if (t.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
                h = d + this.slidesSizesGrid[n];(d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass));
          }o.progress = a ? -l : l;
        }this.visibleSlides = s(this.visibleSlides);
      }
    }, updateProgress: function updateProgress(e) {
      if (void 0 === e) {
        var t = this.rtlTranslate ? -1 : 1;e = this && this.translate && this.translate * t || 0;
      }var i = this.params,
          s = this.maxTranslate() - this.minTranslate(),
          a = this.progress,
          r = this.isBeginning,
          o = this.isEnd,
          l = r,
          d = o;0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, { progress: a, isBeginning: r, isEnd: o }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a);
    }, updateSlidesClasses: function updateSlidesClasses() {
      var e,
          t = this.slides,
          i = this.params,
          s = this.$wrapperEl,
          a = this.activeIndex,
          r = this.realIndex,
          n = this.virtual && i.virtual.enabled;t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    }, updateActiveIndex: function updateActiveIndex(e) {
      var t,
          i = this.rtlTranslate ? this.translate : -this.translate,
          s = this.slidesGrid,
          a = this.snapGrid,
          r = this.params,
          o = this.activeIndex,
          l = this.realIndex,
          d = this.snapIndex,
          h = e;if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1) {
          void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
        }r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== o) {
        var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);n.extend(this, { snapIndex: t, realIndex: c, previousIndex: o, activeIndex: h }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== c && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange");
      } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"));
    }, updateClickedSlide: function updateClickedSlide(e) {
      var t = this.params,
          i = s(e.target).closest("." + t.slideClass)[0],
          a = !1;if (i) for (var r = 0; r < this.slides.length; r += 1) {
        this.slides[r] === i && (a = !0);
      }if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
    } };var p = { getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");var t = this.params,
          i = this.rtlTranslate,
          s = this.translate,
          a = this.$wrapperEl;if (t.virtualTranslate) return i ? -s : s;if (t.cssMode) return s;var r = n.getTranslate(a[0], e);return i && (r = -r), r || 0;
    }, setTranslate: function setTranslate(e, t) {
      var i = this.rtlTranslate,
          s = this.params,
          a = this.$wrapperEl,
          r = this.wrapperEl,
          n = this.progress,
          o = 0,
          l = 0;this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;var d = this.maxTranslate() - this.minTranslate();(0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
    }, minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    }, maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }, translateTo: function translateTo(e, t, i, s, a) {
      var r;void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);var n = this,
          o = n.params,
          l = n.wrapperEl;if (n.animating && o.preventInteractionOnTransition) return !1;var d,
          h = n.minTranslate(),
          p = n.maxTranslate();if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
        var c = n.isHorizontal();return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0;
      }return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"));
      }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0;
    } };var c = { setTransition: function setTransition(e, t) {
      this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    }, transitionStart: function transitionStart(e, t) {
      void 0 === e && (e = !0);var i = this.activeIndex,
          s = this.params,
          a = this.previousIndex;if (!s.cssMode) {
        s.autoHeight && this.updateAutoHeight();var r = t;if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
          if ("reset" === r) return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
        }
      }
    }, transitionEnd: function transitionEnd(e, t) {
      void 0 === e && (e = !0);var i = this.activeIndex,
          s = this.previousIndex,
          a = this.params;if (this.animating = !1, !a.cssMode) {
        this.setTransition(0);var r = t;if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
          if ("reset" === r) return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
        }
      }
    } };var u = { slideTo: function slideTo(e, t, i, s) {
      var a;void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);var r = this,
          n = e;n < 0 && (n = 0);var o = r.params,
          l = r.snapGrid,
          d = r.slidesGrid,
          h = r.previousIndex,
          p = r.activeIndex,
          c = r.rtlTranslate,
          u = r.wrapperEl;if (r.animating && o.preventInteractionOnTransition) return !1;var v = Math.floor(n / o.slidesPerGroup);v >= l.length && (v = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");var f,
          m = -l[v];if (r.updateProgress(m), o.normalizeSlideIndex) for (var g = 0; g < d.length; g += 1) {
        -Math.floor(100 * m) >= Math.floor(100 * d[g]) && (n = g);
      }if (r.initialized && n !== p) {
        if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (p || 0) !== n) return !1;
      }if (f = n > p ? "next" : n < p ? "prev" : "reset", c && -m === r.translate || !c && m === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(m), "reset" !== f && (r.transitionStart(i, f), r.transitionEnd(i, f)), !1;if (o.cssMode) {
        var b = r.isHorizontal();return 0 === t ? u[b ? "scrollLeft" : "scrollTop"] = -m : u.scrollTo ? u.scrollTo(((a = {})[b ? "left" : "top"] = -m, a.behavior = "smooth", a)) : u[b ? "scrollLeft" : "scrollTop"] = -m, !0;
      }return 0 === t ? (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), r.transitionEnd(i, f)) : (r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, f));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
    }, slideToLoop: function slideToLoop(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);var a = e;return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
    }, slideNext: function slideNext(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var s = this.params,
          a = this.animating;return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
    }, slidePrev: function slidePrev(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var s = this.params,
          a = this.animating,
          r = this.snapGrid,
          n = this.slidesGrid,
          o = this.rtlTranslate;if (s.loop) {
        if (a) return !1;this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
      }function l(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }var d,
          h = l(o ? this.translate : -this.translate),
          p = r.map(function (e) {
        return l(e);
      }),
          c = (n.map(function (e) {
        return l(e);
      }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);return void 0 === c && s.cssMode && r.forEach(function (e) {
        !c && h >= e && (c = e);
      }), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
    }, slideReset: function slideReset(e, t, i) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
    }, slideToClosest: function slideToClosest(e, t, i, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);var a = this.activeIndex,
          r = Math.floor(a / this.params.slidesPerGroup),
          n = this.rtlTranslate ? this.translate : -this.translate;if (n >= this.snapGrid[r]) {
        var o = this.snapGrid[r];n - o > (this.snapGrid[r + 1] - o) * s && (a += this.params.slidesPerGroup);
      } else {
        var l = this.snapGrid[r - 1];n - l <= (this.snapGrid[r] - l) * s && (a -= this.params.slidesPerGroup);
      }return a = Math.max(a, 0), a = Math.min(a, this.snapGrid.length - 1), this.slideTo(a, e, t, i);
    }, slideToClickedSlide: function slideToClickedSlide() {
      var e,
          t = this,
          i = t.params,
          a = t.$wrapperEl,
          r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
          o = t.clickedIndex;if (i.loop) {
        if (t.animating) return;e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
          t.slideTo(o);
        })) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
          t.slideTo(o);
        })) : t.slideTo(o);
      } else t.slideTo(o);
    } };var v = { loopCreate: function loopCreate() {
      var t = this,
          i = t.params,
          a = t.$wrapperEl;a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();var r = a.children("." + i.slideClass);if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - r.length % i.slidesPerGroup;if (n !== i.slidesPerGroup) {
          for (var o = 0; o < n; o += 1) {
            var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);a.append(l);
          }r = a.children("." + i.slideClass);
        }
      }"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);var d = [],
          h = [];r.each(function (e, i) {
        var a = s(i);e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
      });for (var p = 0; p < h.length; p += 1) {
        a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
      }for (var c = d.length - 1; c >= 0; c -= 1) {
        a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
      }
    }, loopFix: function loopFix() {
      this.emit("beforeLoopFix");var e,
          t = this.activeIndex,
          i = this.slides,
          s = this.loopedSlides,
          a = this.allowSlidePrev,
          r = this.allowSlideNext,
          n = this.snapGrid,
          o = this.rtlTranslate;this.allowSlidePrev = !0, this.allowSlideNext = !0;var l = -n[t] - this.getTranslate();if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);else if (t >= i.length - s) {
        e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
      }this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
    }, loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
    } };var f = { setGrabCursor: function setGrabCursor(e) {
      if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
        var t = this.el;t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    }, unsetGrabCursor: function unsetGrabCursor() {
      o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
    } };var m,
      g,
      b,
      w,
      y,
      x,
      T,
      E,
      S,
      C,
      M,
      P,
      z,
      k,
      $,
      L = { appendSlide: function appendSlide(e) {
      var t = this.$wrapperEl,
          i = this.params;if (i.loop && this.loopDestroy(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) for (var s = 0; s < e.length; s += 1) {
        e[s] && t.append(e[s]);
      } else t.append(e);i.loop && this.loopCreate(), i.observer && o.observer || this.update();
    }, prependSlide: function prependSlide(e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;t.loop && this.loopDestroy();var a = s + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
        for (var r = 0; r < e.length; r += 1) {
          e[r] && i.prepend(e[r]);
        }a = s + e.length;
      } else i.prepend(e);t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1);
    }, addSlide: function addSlide(e, t) {
      var i = this.$wrapperEl,
          s = this.params,
          a = this.activeIndex;s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));var r = this.slides.length;if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
        for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
          var h = this.slides.eq(d);h.remove(), l.unshift(h);
        }if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "length" in t) {
          for (var p = 0; p < t.length; p += 1) {
            t[p] && i.append(t[p]);
          }n = a > e ? a + t.length : a;
        } else i.append(t);for (var c = 0; c < l.length; c += 1) {
          i.append(l[c]);
        }s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
      }
    }, removeSlide: function removeSlide(e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));var a,
          r = s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
        for (var n = 0; n < e.length; n += 1) {
          a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
        }r = Math.max(r, 0);
      } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
    }, removeAllSlides: function removeAllSlides() {
      for (var e = [], t = 0; t < this.slides.length; t += 1) {
        e.push(t);
      }this.removeSlide(e);
    } },
      I = (m = t.navigator.platform, g = t.navigator.userAgent, b = { ios: !1, android: !1, androidChrome: !1, desktop: !1, iphone: !1, ipod: !1, ipad: !1, edge: !1, ie: !1, firefox: !1, macos: !1, windows: !1, cordova: !(!t.cordova && !t.phonegap), phonegap: !(!t.cordova && !t.phonegap), electron: !1 }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);function D(i) {
    var a = this.touchEventsData,
        r = this.params,
        o = this.touches;if (!this.animating || !r.preventInteractionOnTransition) {
      var l = i;l.originalEvent && (l = l.originalEvent);var d = s(l.target);if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved))) if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;var h = o.currentX,
            p = o.currentY,
            c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
            u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;if (!c || !(h <= u || h >= t.screen.width - u)) {
          if (n.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
            var v = !0;d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();var f = v && this.allowTouchMove && r.touchStartPreventDefault;(r.touchStartForcePreventDefault || f) && l.preventDefault();
          }this.emit("touchStart", l);
        }
      }
    }
  }function O(t) {
    var i = this.touchEventsData,
        a = this.params,
        r = this.touches,
        o = this.rtlTranslate,
        l = t;if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "mousemove" !== l.type) {
        var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
            h = "touchmove" === l.type ? d.pageX : l.pageX,
            p = "touchmove" === l.type ? d.pageY : l.pageY;if (l.preventedByNestedSwiper) return r.startX = h, void (r.startY = p);if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (n.extend(r, { startX: h, startY: p, currentX: h, currentY: p }), i.touchStartTime = n.now()));if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
          if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
          r.currentX = h, r.currentY = p;var c = r.currentX - r.startX,
              u = r.currentY - r.startY;if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
            var v;if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;var f = this.isHorizontal() ? c : u;r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;var m = !0,
                  g = a.resistanceRatio;if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
              }a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({ position: r[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }), i.velocities.push({ position: r[this.isHorizontal() ? "currentX" : "currentY"], time: n.now() })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }function A(e) {
    var t = this,
        i = t.touchEventsData,
        s = t.params,
        a = t.touches,
        r = t.rtlTranslate,
        o = t.$wrapperEl,
        l = t.slidesGrid,
        d = t.snapGrid,
        h = e;if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);var p,
        c = n.now(),
        u = c - i.touchStartTime;if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);if (p > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var v = i.velocities.pop(),
              f = i.velocities.pop(),
              m = v.position - f.position,
              g = v.time - f.time;t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;var b = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * b,
            y = t.translate + w;r && (y = -y);var x,
            T,
            E = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
          for (var C, M = 0; M < d.length; M += 1) {
            if (d[M] > -y) {
              C = M;break;
            }
          }y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1]);
        }if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
            var P = Math.abs((r ? -y : y) - t.translate),
                z = t.slidesSizesGrid[t.activeIndex];b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }));
        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();(!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += s.slidesPerGroup) {
        void 0 !== l[L + s.slidesPerGroup] ? p >= l[L] && p < l[L + s.slidesPerGroup] && (k = L, $ = l[L + s.slidesPerGroup] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2]);
      }var I = (p - l[k]) / $;if (u > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && (I >= s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (I > 1 - s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k));
      }
    }
  }function G() {
    var e = this.params,
        t = this.el;if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }function B(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }function H() {
    var e = this.wrapperEl;this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();var t = this.maxTranslate() - this.minTranslate();(0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1);
  }var N = !1;function X() {}var V = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, cssMode: !1, updateOnWindowResize: !0, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
      Y = { update: h, translate: p, transition: c, slide: u, loop: v, grabCursor: f, manipulation: L, events: { attachEvents: function attachEvents() {
        var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl;this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = H.bind(this)), this.onClick = B.bind(this);var r = !!t.nested;if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1);else {
          if (o.touch) {
            var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? { passive: !1, capture: r } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0);
          }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1));
        }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
      }, detachEvents: function detachEvents() {
        var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            r = !!t.nested;if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
          if (o.touch) {
            var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n);
          }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1));
        }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
      } }, breakpoints: { setBreakpoint: function setBreakpoint() {
        var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides;void 0 === i && (i = 0);var s = this.params,
            a = this.$el,
            r = s.breakpoints;if (r && (!r || 0 !== Object.keys(r).length)) {
          var o = this.getBreakpoint(r);if (o && this.currentBreakpoint !== o) {
            var l = o in r ? r[o] : void 0;l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn"].forEach(function (e) {
              var t = l[e];void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });var d = l || this.originalParams,
                h = s.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));var c = d.direction && d.direction !== s.direction,
                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
          }
        }
      }, getBreakpoint: function getBreakpoint(e) {
        if (e) {
          var i = !1,
              s = [];Object.keys(e).forEach(function (e) {
            s.push(e);
          }), s.sort(function (e, t) {
            return parseInt(e, 10) - parseInt(t, 10);
          });for (var a = 0; a < s.length; a += 1) {
            var r = s[a];r <= t.innerWidth && (i = r);
          }return i || "max";
        }
      } }, checkOverflow: { checkOverflow: function checkOverflow() {
        var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update());
      } }, classes: { addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" "));
      }, removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;e.removeClass(t.join(" "));
      } }, images: { loadImage: function loadImage(e, i, s, a, r, n) {
        var o;function l() {
          n && n();
        }e.complete && r ? l() : i ? ((o = new t.Image()).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
      }, preloadImages: function preloadImages() {
        var e = this;function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }e.imagesToLoad = e.$el.find("img");for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      } } },
      F = {},
      W = function (e) {
    function t() {
      for (var i, a, r, l = [], d = arguments.length; d--;) {
        l[d] = arguments[d];
      }1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach(function (e) {
        Object.keys(Y[e]).forEach(function (i) {
          t.prototype[i] || (t.prototype[i] = Y[e][i]);
        });
      });var h = this;void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach(function (e) {
        var t = h.modules[e];if (t.params) {
          var i = Object.keys(t.params)[0],
              s = t.params[i];if ("object" != (typeof s === "undefined" ? "undefined" : _typeof(s)) || null === s) return;if (!(i in r && "enabled" in s)) return;!0 === r[i] && (r[i] = { enabled: !0 }), "object" != _typeof(r[i]) || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = { enabled: !1 });
        }
      });var p = n.extend({}, V);h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;var c = s(h.params.el);if (a = c[0]) {
        if (c.length > 1) {
          var u = [];return c.each(function (e, i) {
            var s = n.extend({}, r, { el: i });u.push(new t(s));
          }), u;
        }var v, f, m;return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function (e) {
          return c.children(e);
        } : v = c.children("." + h.params.wrapperClass), n.extend(h, { $el: c, el: a, $wrapperEl: v, wrapperEl: v[0], classNames: [], slides: s(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function isHorizontal() {
            return "horizontal" === h.params.direction;
          }, isVertical: function isVertical() {
            return "vertical" === h.params.direction;
          }, rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"), rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")), wrongRTL: "-webkit-box" === v.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: h.params.allowSlideNext, allowSlidePrev: h.params.allowSlidePrev, touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = { start: f[0], move: f[1], end: f[2], cancel: f[3] }, h.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: n.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: h.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), h.useModules(), h.params.init && h.init(), h;
      }
    }e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;var i = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };return t.prototype.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;if (e.centeredSlides) {
        for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) {
          t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
        }for (var d = a - 1; d >= 0; d -= 1) {
          t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
        }
      } else for (var h = a + 1; h < t.length; h += 1) {
        i[h] - i[a] < s && (r += 1);
      }return r;
    }, t.prototype.update = function () {
      var e = this;if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, t.prototype.changeDirection = function (e, t) {
      void 0 === t && (t = !0);var i = this.params.direction;return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each(function (t, i) {
        "vertical" === e ? i.style.width = "" : i.style.height = "";
      }), this.emit("changeDirection"), t && this.update(), this);
    }, t.prototype.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
    }, t.prototype.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);var i = this,
          s = i.params,
          a = i.$el,
          r = i.$wrapperEl,
          o = i.slides;return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
        i.off(e);
      }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0, null);
    }, t.extendDefaults = function (e) {
      n.extend(F, e);
    }, i.extendedDefaults.get = function () {
      return F;
    }, i.defaults.get = function () {
      return V;
    }, i.Class.get = function () {
      return e;
    }, i.$.get = function () {
      return s;
    }, Object.defineProperties(t, i), t;
  }(l),
      R = { name: "device", proto: { device: I }, static: { device: I } },
      q = { name: "support", proto: { support: o }, static: { support: o } },
      j = { isEdge: !!t.navigator.userAgent.match(/Edge/g), isSafari: function () {
      var e = t.navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent) },
      K = { name: "browser", proto: { browser: j }, static: { browser: j } },
      U = { name: "resize", create: function create() {
      var e = this;n.extend(e, { resize: { resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          }, orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          } } });
    }, on: { init: function init() {
        t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      }, destroy: function destroy() {
        t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      } } },
      _ = { func: t.MutationObserver || t.WebkitMutationObserver, attach: function attach(e, i) {
      void 0 === i && (i = {});var s = this,
          a = new (0, _.func)(function (e) {
        if (1 !== e.length) {
          var i = function i() {
            s.emit("observerUpdate", e[0]);
          };t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0);
        } else s.emit("observerUpdate", e[0]);
      });a.observe(e, { attributes: void 0 === i.attributes || i.attributes, childList: void 0 === i.childList || i.childList, characterData: void 0 === i.characterData || i.characterData }), s.observer.observers.push(a);
    }, init: function init() {
      if (o.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
          this.observer.attach(e[t]);
        }this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
      }
    }, destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    } },
      Z = { name: "observer", params: { observer: !1, observeParents: !1, observeSlideChildren: !1 }, create: function create() {
      n.extend(this, { observer: { init: _.init.bind(this), attach: _.attach.bind(this), destroy: _.destroy.bind(this), observers: [] } });
    }, on: { init: function init() {
        this.observer.init();
      }, destroy: function destroy() {
        this.observer.destroy();
      } } },
      Q = { update: function update(e) {
      var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          o = t.params.virtual,
          l = o.addSlidesBefore,
          d = o.addSlidesAfter,
          h = t.virtual,
          p = h.from,
          c = h.to,
          u = h.slides,
          v = h.slidesGrid,
          f = h.renderSlide,
          m = h.offset;t.updateActiveIndex();var g,
          b,
          w,
          y = t.activeIndex || 0;g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);var x = Math.max((y || 0) - w, 0),
          T = Math.min((y || 0) + b, u.length - 1),
          E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);function S() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }if (n.extend(t.virtual, { from: x, to: T, offset: E, slidesGrid: t.slidesGrid }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: E, from: x, to: T, slides: function () {
          for (var e = [], t = x; t <= T; t += 1) {
            e.push(u[t]);
          }return e;
        }() }), void S();var C = [],
          M = [];if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var P = p; P <= c; P += 1) {
        (P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
      }for (var z = 0; z < u.length; z += 1) {
        z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
      }M.forEach(function (e) {
        t.$wrapperEl.append(f(u[e], e));
      }), C.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(f(u[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S();
    }, renderSlide: function renderSlide(e, t) {
      var i = this.params.virtual;if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
    }, appendSlide: function appendSlide(e) {
      if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) for (var t = 0; t < e.length; t += 1) {
        e[t] && this.virtual.slides.push(e[t]);
      } else this.virtual.slides.push(e);this.virtual.update(!0);
    }, prependSlide: function prependSlide(e) {
      var t = this.activeIndex,
          i = t + 1,
          s = 1;if (Array.isArray(e)) {
        for (var a = 0; a < e.length; a += 1) {
          e[a] && this.virtual.slides.unshift(e[a]);
        }i = t + e.length, s = e.length;
      } else this.virtual.slides.unshift(e);if (this.params.virtual.cache) {
        var r = this.virtual.cache,
            n = {};Object.keys(r).forEach(function (e) {
          var t = r[e],
              i = t.attr("data-swiper-slide-index");i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
        }), this.virtual.cache = n;
      }this.virtual.update(!0), this.slideTo(i, 0);
    }, removeSlide: function removeSlide(e) {
      if (null != e) {
        var t = this.activeIndex;if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
          this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
        } else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);this.virtual.update(!0), this.slideTo(t, 0);
      }
    }, removeAllSlides: function removeAllSlides() {
      this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
    } },
      J = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } }, create: function create() {
      n.extend(this, { virtual: { update: Q.update.bind(this), appendSlide: Q.appendSlide.bind(this), prependSlide: Q.prependSlide.bind(this), removeSlide: Q.removeSlide.bind(this), removeAllSlides: Q.removeAllSlides.bind(this), renderSlide: Q.renderSlide.bind(this), slides: this.params.virtual.slides, cache: {} } });
    }, on: { beforeInit: function beforeInit() {
        if (this.params.virtual.enabled) {
          this.classNames.push(this.params.containerModifierClass + "virtual");var e = { watchSlidesProgress: !0 };n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update();
        }
      }, setTranslate: function setTranslate() {
        this.params.virtual.enabled && this.virtual.update();
      } } },
      ee = { handle: function handle(i) {
      var s = this.rtlTranslate,
          a = i;a.originalEvent && (a = a.originalEvent);var r = a.keyCode || a.charCode;if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
        if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
          var n = !1;if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;var o = t.innerWidth,
              l = t.innerHeight,
              d = this.$el.offset();s && (d.left -= this.$el[0].scrollLeft);for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
            var c = h[p];c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
          }if (!n) return;
        }this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r);
      }
    }, enable: function enable() {
      this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    }, disable: function disable() {
      this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    } },
      te = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function create() {
      n.extend(this, { keyboard: { enabled: !1, enable: ee.enable.bind(this), disable: ee.disable.bind(this), handle: ee.handle.bind(this) } });
    }, on: { init: function init() {
        this.params.keyboard.enabled && this.keyboard.enable();
      }, destroy: function destroy() {
        this.keyboard.enabled && this.keyboard.disable();
      } } };var ie = { lastScrollTime: n.now(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function event() {
      return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var t = "onwheel" in e;if (!t) {
          var i = e.createElement("div");i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
        }return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
      }() ? "wheel" : "mousewheel";
    }, normalize: function normalize(e) {
      var t = 0,
          i = 0,
          s = 0,
          a = 0;return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), { spinX: t, spinY: i, pixelX: s, pixelY: a };
    }, handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    }, handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    }, handle: function handle(e) {
      var t = e,
          i = this,
          s = i.params.mousewheel;if (i.params.cssMode && t.preventDefault(), !i.mouseEntered && !s.releaseOnEdges) return !0;t.originalEvent && (t = t.originalEvent);var a = 0,
          r = i.rtlTranslate ? -1 : 1,
          o = ie.normalize(t);if (s.forceToAxis) {
        if (i.isHorizontal()) {
          if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;a = o.pixelX * r;
        } else {
          if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;a = o.pixelY;
        }
      } else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;if (0 === a) return !0;if (s.invert && (a = -a), i.params.freeMode) {
        var l = { time: n.now(), delta: Math.abs(a), direction: Math.sign(a) },
            d = i.mousewheel.lastEventBeforeSnap,
            h = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;if (!h) {
          i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();var p = i.getTranslate() + a * s.sensitivity,
              c = i.isBeginning,
              u = i.isEnd;if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !u && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;var v = i.mousewheel.recentWheelEvents;v.length >= 15 && v.shift();var f = v.length ? v[v.length - 1] : void 0,
                m = v[0];if (v.push(l), f && (l.delta > f.delta || l.direction !== f.direction)) v.splice(0);else if (v.length >= 15 && l.time - m.time < 500 && m.delta - l.delta >= 1 && l.delta <= 6) {
              var g = a > 0 ? .8 : .2;i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.mousewheel.timeout = n.nextTick(function () {
                i.slideToClosest(i.params.speed, !0, void 0, g);
              }, 0);
            }i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick(function () {
              i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
            }, 500));
          }if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0;
        }
      } else {
        var b = { time: n.now(), delta: Math.abs(a), direction: Math.sign(a), raw: e },
            w = i.mousewheel.recentWheelEvents;w.length >= 2 && w.shift();var y = w.length ? w[w.length - 1] : void 0;if (w.push(b), y ? (b.direction !== y.direction || b.delta > y.delta) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b)) return !0;
      }return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    }, animateSlider: function animateSlider(e) {
      return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1);
    }, releaseScroll: function releaseScroll(e) {
      var t = this.params.mousewheel;if (e.direction < 0) {
        if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
      } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;return !1;
    }, enable: function enable() {
      var e = ie.event();if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;if (!e) return !1;if (this.mousewheel.enabled) return !1;var t = this.$el;return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
    }, disable: function disable() {
      var e = ie.event();if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;if (!e) return !1;if (!this.mousewheel.enabled) return !1;var t = this.$el;return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
    } },
      se = { update: function update() {
      var e = this.params.navigation;if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    }, onPrevClick: function onPrevClick(e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    }, onNextClick: function onNextClick(e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    }, init: function init() {
      var e,
          t,
          i = this.params.navigation;(i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
    }, destroy: function destroy() {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
    } },
      ae = { update: function update() {
      var e = this.rtl,
          t = this.params.pagination;if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var o,
              l,
              d,
              h = this.pagination.bullets;if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) {
            var r = s(a),
                n = r.index();n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else {
            var p = h.eq(i),
                c = p.index();if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
              for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) {
                h.eq(f).addClass(t.bulletActiveClass + "-main");
              }if (this.params.loop) {
                if (c >= h.length - t.dynamicMainBullets) {
                  for (var m = t.dynamicMainBullets; m >= 0; m -= 1) {
                    h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                  }h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
            }
          }if (t.dynamicBullets) {
            var g = Math.min(h.length, t.dynamicMainBullets + 4),
                b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                w = e ? "right" : "left";h.css(this.isHorizontal() ? w : "top", b + "px");
          }
        }if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
          var y;y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";var x = (i + 1) / n,
              T = 1,
              E = 1;"horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed);
        }"custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    }, render: function render() {
      var e = this.params.pagination;if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";if ("bullets" === e.type) {
          for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) {
            e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
          }i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }"fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    }, init: function init() {
      var e = this,
          t = e.params.pagination;if (t.el) {
        var i = s(t.el);0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();var i = s(this).index() * e.params.slidesPerGroup;e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), n.extend(e.pagination, { $el: i, el: i[0] }));
      }
    }, destroy: function destroy() {
      var e = this.params.pagination;if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    } },
      re = { setTranslate: function setTranslate() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
          n[0].style.opacity = 0, n.transition(400);
        }, 1e3));
      }
    }, setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    }, updateSize: function updateSize() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;t[0].style.width = "", t[0].style.height = "";var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            o = r * (a / this.size);s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, { trackSize: a, divider: r, moveDivider: o, dragSize: s }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
      }
    }, getPointerPosition: function getPointerPosition(e) {
      return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    }, setDragPosition: function setDragPosition(e) {
      var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          o = i.dragStartPos;t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
    }, onDragStart: function onDragStart(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
    }, onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    }, onDragEnd: function onDragEnd(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick(function () {
        a.css("opacity", 0), a.transition(400);
      }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
    }, enableDraggable: function enableDraggable() {
      if (this.params.scrollbar.el) {
        var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
            l = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l));
      }
    }, disableDraggable: function disableDraggable() {
      if (this.params.scrollbar.el) {
        var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
            l = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l));
      }
    }, init: function init() {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));var r = a.find("." + this.params.scrollbar.dragClass);0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }), i.draggable && e.enableDraggable();
      }
    }, destroy: function destroy() {
      this.scrollbar.disableDraggable();
    } },
      ne = { setTransform: function setTransform(e, t) {
      var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
        var p = h - (h - 1) * (1 - Math.abs(t));a[0].style.opacity = p;
      }if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");else {
        var c = d - (d - 1) * (1 - Math.abs(t));a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
      }
    }, setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
        e.parallax.setTransform(i, a);
      }), i.each(function (t, i) {
        var n = i.progress;e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
          e.parallax.setTransform(i, n);
        });
      });
    }, setTransition: function setTransition(e) {
      void 0 === e && (e = this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
        var a = s(i),
            r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;0 === e && (r = 0), a.transition(r);
      });
    } },
      oe = { getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
    }, onGestureStart: function onGestureStart(e) {
      var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e);
      }a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
    }, onGestureChange: function onGestureChange(e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;if (!o.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e);
      }s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
    }, onGestureEnd: function onGestureEnd(e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;if (!o.gestures) {
        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
      }s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
    }, onTouchStart: function onTouchStart(e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image;i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    }, onTouchMove: function onTouchMove(e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));var r = s.width * t.scale,
            o = s.height * t.scale;if (!(r < i.slideWidth && o < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    }, onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);i.isTouched = !1, i.isMoved = !1;var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));var h = Math.max(a, r);i.currentX = o, i.currentY = d;var p = i.width * e.scale,
            c = i.height * e.scale;i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
      }
    }, onTransitionEnd: function onTransitionEnd() {
      var e = this.zoom,
          t = e.gesture;t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    }, toggle: function toggle(e) {
      var t = this.zoom;t.scale && 1 !== t.scale ? t.out() : t.in(e);
    }, in: function _in(e) {
      var t,
          i,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g,
          b = this.zoom,
          w = this.params.zoom,
          y = b.gesture,
          x = b.image;(y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), (n = a * b.scale) < c && (n = c), n > v && (n = v), (o = r * b.scale) < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
    }, out: function out() {
      var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
    }, enable: function enable() {
      var e = this.zoom;if (!e.enabled) {
        e.enabled = !0;var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 },
            i = !o.passiveListener || { passive: !1, capture: !0 };o.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
      }
    }, disable: function disable() {
      var e = this.zoom;if (e.enabled) {
        this.zoom.enabled = !1;var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 },
            i = !o.passiveListener || { passive: !1, capture: !0 };o.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
      }
    } },
      le = { loadInSlide: function loadInSlide(e, t) {
      void 0 === t && (t = !0);var i = this,
          a = i.params.lazy;if (void 0 !== e && 0 !== i.slides.length) {
        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");!r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) {
          var o = s(n);o.addClass(a.loadingClass);var l = o.attr("data-background"),
              d = o.attr("data-src"),
              h = o.attr("data-srcset"),
              p = o.attr("data-sizes");i.loadImage(o[0], d || l, h, p, !1, function () {
            if (null != i && i && (!i || i.params) && !i.destroyed) {
              if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                var e = r.attr("data-swiper-slide-index");if (r.hasClass(i.params.slideDuplicateClass)) {
                  var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");i.lazy.loadInSlide(s.index(), !1);
                } else {
                  var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');i.lazy.loadInSlide(n.index(), !1);
                }
              }i.emit("lazyImageReady", r[0], o[0]);
            }
          }), i.emit("lazyImageLoad", r[0], o[0]);
        });
      }
    }, load: function load() {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;function d(e) {
        if (n) {
          if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (a[e]) return !0;return !1;
      }function h(e) {
        return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
      }if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
        var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();e.lazy.loadInSlide(a);
      });else if (l > 1) for (var p = r; p < r + l; p += 1) {
        d(p) && e.lazy.loadInSlide(p);
      } else e.lazy.loadInSlide(r);if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) {
          d(m) && e.lazy.loadInSlide(m);
        }for (var g = f; g < r; g += 1) {
          d(g) && e.lazy.loadInSlide(g);
        }
      } else {
        var b = t.children("." + i.slideNextClass);b.length > 0 && e.lazy.loadInSlide(h(b));var w = t.children("." + i.slidePrevClass);w.length > 0 && e.lazy.loadInSlide(h(w));
      }
    } },
      de = { LinearSpline: function LinearSpline(e, t) {
      var i,
          s,
          a,
          r,
          n,
          o = function o(e, t) {
        for (s = -1, i = e.length; i - s > 1;) {
          e[a = i + s >> 1] <= t ? s = a : i = a;
        }return i;
      };return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    }, getInterpolateFunction: function getInterpolateFunction(e) {
      this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid));
    }, setTranslate: function setTranslate(e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control;function n(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof W && n(r[o]);
      } else r instanceof W && t !== r && n(r);
    }, setTransition: function setTransition(e, t) {
      var i,
          s = this,
          a = s.controller.control;function r(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) {
        a[i] !== t && a[i] instanceof W && r(a[i]);
      } else a instanceof W && t !== a && r(a);
    } },
      he = { makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    }, addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    }, addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    }, disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    }, enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    }, onEnterKey: function onEnterKey(e) {
      var t = this.params.a11y;if (13 === e.keyCode) {
        var i = s(e.target);this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
      }
    }, notify: function notify(e) {
      var t = this.a11y.liveRegion;0 !== t.length && (t.html(""), t.html(e));
    }, updateNavigation: function updateNavigation() {
      if (!this.params.loop && this.navigation) {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
      }
    }, updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) {
        var r = s(a);e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
      });
    }, init: function init() {
      this.$el.append(this.a11y.liveRegion);var e,
          t,
          i = this.params.a11y;this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    }, destroy: function destroy() {
      var e, t;this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    } },
      pe = { init: function init() {
      if (this.params.history) {
        if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);var e = this.history;e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
      }
    }, destroy: function destroy() {
      this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
    }, setHistoryPopState: function setHistoryPopState() {
      this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    }, getPathValues: function getPathValues() {
      var e = t.location.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = e.length;return { key: e[i - 2], value: e[i - 1] };
    }, setHistory: function setHistory(e, i) {
      if (this.history.initialized && this.params.history.enabled) {
        var s = this.slides.eq(i),
            a = pe.slugify(s.attr("data-history"));t.location.pathname.includes(e) || (a = e + "/" + a);var r = t.history.state;r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({ value: a }, null, a) : t.history.pushState({ value: a }, null, a));
      }
    }, slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    }, scrollToSlide: function scrollToSlide(e, t, i) {
      if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
        var r = this.slides.eq(s);if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
          var n = r.index();this.slideTo(n, e, i);
        }
      } else this.slideTo(0, e, i);
    } },
      ce = { onHashCange: function onHashCange() {
      var t = e.location.hash.replace("#", "");if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
        var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();if (void 0 === i) return;this.slideTo(i);
      }
    }, setHash: function setHash() {
      if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");else {
        var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");e.location.hash = s || "";
      }
    }, init: function init() {
      if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
        this.hashNavigation.initialized = !0;var i = e.location.hash.replace("#", "");if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
          var n = this.slides.eq(a);if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
            var o = n.index();this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
          }
        }this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
      }
    }, destroy: function destroy() {
      this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
    } },
      ue = { run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run();
      }, i);
    }, start: function start() {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    }, stop: function stop() {
      return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
    }, pause: function pause(e) {
      this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
    } },
      ve = { setTranslate: function setTranslate() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;this.params.virtualTranslate || (s -= this.translate);var a = 0;this.isHorizontal() || (a = s, s = 0);var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);i.css({ opacity: r }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
      }
    }, setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.$wrapperEl;if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var a = !1;i.transitionEnd(function () {
          if (!a && t && !t.destroyed) {
            a = !0, t.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              s.trigger(e[i]);
            }
          }
        });
      }
    } },
      fe = { setTranslate: function setTranslate() {
      var e,
          t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: r + "px" })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));for (var u = 0; u < a.length; u += 1) {
        var v = a.eq(u),
            f = u;p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));var m = 90 * f,
            g = Math.floor(m / 360);o && (m = -m, g = Math.floor(-m / 360));var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
          var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
        }
      }if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
            P = d.shadowScale,
            z = d.shadowScale / M,
            k = d.shadowOffset;e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)");
      }var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
    }, setTransition: function setTransition(e) {
      var t = this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    } },
      me = { setTranslate: function setTranslate() {
      for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
        var a = e.eq(i),
            r = a[0].progress;this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));var n = -180 * r,
            o = 0,
            l = -a[0].swiperSlideOffset,
            d = 0;if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
          var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
        }a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
      }
    }, setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;i.eq(s).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              a.trigger(e[i]);
            }
          }
        });
      }
    } },
      ge = { setTranslate: function setTranslate() {
      for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
        var f = i.eq(u),
            m = r[u],
            g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
            b = l ? p * g : 0,
            w = l ? 0 : p * g,
            y = -c * Math.abs(g),
            x = l ? 0 : n.stretch * g,
            T = l ? n.stretch * g : 0;Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);var E = "translate3d(" + T + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";if (f.transform(E), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
          var S = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              C = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
        }
      }(o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%");
    }, setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    } },
      be = { init: function init() {
      var e = this.params.thumbs,
          t = this.constructor;e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), n.extend(this.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
    }, onThumbClick: function onThumbClick() {
      var e = this.thumbs.swiper;if (e) {
        var t = e.clickedIndex,
            i = e.clickedSlide;if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
          var a;if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
            var r = this.activeIndex;this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
          }this.slideTo(a);
        }
      }
    }, update: function update(e) {
      var t = this.thumbs.swiper;if (t) {
        var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;if (this.realIndex !== t.realIndex) {
          var s,
              a = t.activeIndex;if (t.params.loop) {
            t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r;
          } else s = this.realIndex;t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0));
        }var o = 1,
            l = this.params.thumbs.slideThumbActiveClass;if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var d = 0; d < o; d += 1) {
          t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);
        } else for (var h = 0; h < o; h += 1) {
          t.slides.eq(this.realIndex + h).addClass(l);
        }
      }
    } },
      we = [R, q, K, U, Z, J, te, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function create() {
      n.extend(this, { mousewheel: { enabled: !1, enable: ie.enable.bind(this), disable: ie.disable.bind(this), handle: ie.handle.bind(this), handleMouseEnter: ie.handleMouseEnter.bind(this), handleMouseLeave: ie.handleMouseLeave.bind(this), animateSlider: ie.animateSlider.bind(this), releaseScroll: ie.releaseScroll.bind(this), lastScrollTime: n.now(), lastEventBeforeSnap: void 0, recentWheelEvents: [] } });
    }, on: { init: function init() {
        !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable();
      }, destroy: function destroy() {
        this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable();
      } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function create() {
      n.extend(this, { navigation: { init: se.init.bind(this), update: se.update.bind(this), destroy: se.destroy.bind(this), onNextClick: se.onNextClick.bind(this), onPrevClick: se.onPrevClick.bind(this) } });
    }, on: { init: function init() {
        this.navigation.init(), this.navigation.update();
      }, toEdge: function toEdge() {
        this.navigation.update();
      }, fromEdge: function fromEdge() {
        this.navigation.update();
      }, destroy: function destroy() {
        this.navigation.destroy();
      }, click: function click(e) {
        var t,
            i = this.navigation,
            a = i.$nextEl,
            r = i.$prevEl;!this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass));
      } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        }, formatFractionTotal: function formatFractionTotal(e) {
          return e;
        }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function create() {
      n.extend(this, { pagination: { init: ae.init.bind(this), render: ae.render.bind(this), update: ae.update.bind(this), destroy: ae.destroy.bind(this), dynamicBulletIndex: 0 } });
    }, on: { init: function init() {
        this.pagination.init(), this.pagination.render(), this.pagination.update();
      }, activeIndexChange: function activeIndexChange() {
        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
      }, snapIndexChange: function snapIndexChange() {
        this.params.loop || this.pagination.update();
      }, slidesLengthChange: function slidesLengthChange() {
        this.params.loop && (this.pagination.render(), this.pagination.update());
      }, snapGridLengthChange: function snapGridLengthChange() {
        this.params.loop || (this.pagination.render(), this.pagination.update());
      }, destroy: function destroy() {
        this.pagination.destroy();
      }, click: function click(e) {
        this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass));
      } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function create() {
      n.extend(this, { scrollbar: { init: re.init.bind(this), destroy: re.destroy.bind(this), updateSize: re.updateSize.bind(this), setTranslate: re.setTranslate.bind(this), setTransition: re.setTransition.bind(this), enableDraggable: re.enableDraggable.bind(this), disableDraggable: re.disableDraggable.bind(this), setDragPosition: re.setDragPosition.bind(this), getPointerPosition: re.getPointerPosition.bind(this), onDragStart: re.onDragStart.bind(this), onDragMove: re.onDragMove.bind(this), onDragEnd: re.onDragEnd.bind(this), isTouched: !1, timeout: null, dragTimeout: null } });
    }, on: { init: function init() {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
      }, update: function update() {
        this.scrollbar.updateSize();
      }, resize: function resize() {
        this.scrollbar.updateSize();
      }, observerUpdate: function observerUpdate() {
        this.scrollbar.updateSize();
      }, setTranslate: function setTranslate() {
        this.scrollbar.setTranslate();
      }, setTransition: function setTransition(e) {
        this.scrollbar.setTransition(e);
      }, destroy: function destroy() {
        this.scrollbar.destroy();
      } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function create() {
      n.extend(this, { parallax: { setTransform: ne.setTransform.bind(this), setTranslate: ne.setTranslate.bind(this), setTransition: ne.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      }, init: function init() {
        this.params.parallax.enabled && this.parallax.setTranslate();
      }, setTranslate: function setTranslate() {
        this.params.parallax.enabled && this.parallax.setTranslate();
      }, setTransition: function setTransition(e) {
        this.params.parallax.enabled && this.parallax.setTransition(e);
      } } }, { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function create() {
      var e = this,
          t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
        t[i] = oe[i].bind(e);
      }), n.extend(e, { zoom: t });var i = 1;Object.defineProperty(e.zoom, "scale", { get: function get() {
          return i;
        }, set: function set(t) {
          if (i !== t) {
            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;e.emit("zoomChange", t, s, a);
          }i = t;
        } });
    }, on: { init: function init() {
        this.params.zoom.enabled && this.zoom.enable();
      }, destroy: function destroy() {
        this.zoom.disable();
      }, touchStart: function touchStart(e) {
        this.zoom.enabled && this.zoom.onTouchStart(e);
      }, touchEnd: function touchEnd(e) {
        this.zoom.enabled && this.zoom.onTouchEnd(e);
      }, doubleTap: function doubleTap(e) {
        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
      }, transitionEnd: function transitionEnd() {
        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
      }, slideChange: function slideChange() {
        this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd();
      } } }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function create() {
      n.extend(this, { lazy: { initialImageLoaded: !1, load: le.load.bind(this), loadInSlide: le.loadInSlide.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
      }, init: function init() {
        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
      }, scroll: function scroll() {
        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
      }, resize: function resize() {
        this.params.lazy.enabled && this.lazy.load();
      }, scrollbarDragMove: function scrollbarDragMove() {
        this.params.lazy.enabled && this.lazy.load();
      }, transitionStart: function transitionStart() {
        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
      }, transitionEnd: function transitionEnd() {
        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
      }, slideChange: function slideChange() {
        this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
      } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function create() {
      n.extend(this, { controller: { control: this.params.controller.control, getInterpolateFunction: de.getInterpolateFunction.bind(this), setTranslate: de.setTranslate.bind(this), setTransition: de.setTransition.bind(this) } });
    }, on: { update: function update() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, resize: function resize() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, observerUpdate: function observerUpdate() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, setTranslate: function setTranslate(e, t) {
        this.controller.control && this.controller.setTranslate(e, t);
      }, setTransition: function setTransition(e, t) {
        this.controller.control && this.controller.setTransition(e, t);
      } } }, { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function create() {
      var e = this;n.extend(e, { a11y: { liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(he).forEach(function (t) {
        e.a11y[t] = he[t].bind(e);
      });
    }, on: { init: function init() {
        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
      }, toEdge: function toEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      }, fromEdge: function fromEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      }, paginationUpdate: function paginationUpdate() {
        this.params.a11y.enabled && this.a11y.updatePagination();
      }, destroy: function destroy() {
        this.params.a11y.enabled && this.a11y.destroy();
      } } }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function create() {
      n.extend(this, { history: { init: pe.init.bind(this), setHistory: pe.setHistory.bind(this), setHistoryPopState: pe.setHistoryPopState.bind(this), scrollToSlide: pe.scrollToSlide.bind(this), destroy: pe.destroy.bind(this) } });
    }, on: { init: function init() {
        this.params.history.enabled && this.history.init();
      }, destroy: function destroy() {
        this.params.history.enabled && this.history.destroy();
      }, transitionEnd: function transitionEnd() {
        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
      }, slideChange: function slideChange() {
        this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex);
      } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function create() {
      n.extend(this, { hashNavigation: { initialized: !1, init: ce.init.bind(this), destroy: ce.destroy.bind(this), setHash: ce.setHash.bind(this), onHashCange: ce.onHashCange.bind(this) } });
    }, on: { init: function init() {
        this.params.hashNavigation.enabled && this.hashNavigation.init();
      }, destroy: function destroy() {
        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
      }, transitionEnd: function transitionEnd() {
        this.hashNavigation.initialized && this.hashNavigation.setHash();
      }, slideChange: function slideChange() {
        this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash();
      } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function create() {
      var e = this;n.extend(e, { autoplay: { running: !1, paused: !1, run: ue.run.bind(e), start: ue.start.bind(e), stop: ue.stop.bind(e), pause: ue.pause.bind(e), onVisibilityChange: function onVisibilityChange() {
            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
          }, onTransitionEnd: function onTransitionEnd(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
          } } });
    }, on: { init: function init() {
        this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange));
      }, beforeTransitionStart: function beforeTransitionStart(e, t) {
        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
      }, sliderFirstMove: function sliderFirstMove() {
        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
      }, touchEnd: function touchEnd() {
        this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run();
      }, destroy: function destroy() {
        this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange);
      } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function create() {
      n.extend(this, { fadeEffect: { setTranslate: ve.setTranslate.bind(this), setTransition: ve.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        if ("fade" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "fade");var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };n.extend(this.params, e), n.extend(this.originalParams, e);
        }
      }, setTranslate: function setTranslate() {
        "fade" === this.params.effect && this.fadeEffect.setTranslate();
      }, setTransition: function setTransition(e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
      } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function create() {
      n.extend(this, { cubeEffect: { setTranslate: fe.setTranslate.bind(this), setTransition: fe.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        if ("cube" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };n.extend(this.params, e), n.extend(this.originalParams, e);
        }
      }, setTranslate: function setTranslate() {
        "cube" === this.params.effect && this.cubeEffect.setTranslate();
      }, setTransition: function setTransition(e) {
        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
      } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function create() {
      n.extend(this, { flipEffect: { setTranslate: me.setTranslate.bind(this), setTransition: me.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        if ("flip" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };n.extend(this.params, e), n.extend(this.originalParams, e);
        }
      }, setTranslate: function setTranslate() {
        "flip" === this.params.effect && this.flipEffect.setTranslate();
      }, setTransition: function setTransition(e) {
        "flip" === this.params.effect && this.flipEffect.setTransition(e);
      } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function create() {
      n.extend(this, { coverflowEffect: { setTranslate: ge.setTranslate.bind(this), setTransition: ge.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      }, setTranslate: function setTranslate() {
        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
      }, setTransition: function setTransition(e) {
        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
      } } }, { name: "thumbs", params: { thumbs: { multipleActiveThumbs: !0, swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } }, create: function create() {
      n.extend(this, { thumbs: { swiper: null, init: be.init.bind(this), update: be.update.bind(this), onThumbClick: be.onThumbClick.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        var e = this.params.thumbs;e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
      }, slideChange: function slideChange() {
        this.thumbs.swiper && this.thumbs.update();
      }, update: function update() {
        this.thumbs.swiper && this.thumbs.update();
      }, resize: function resize() {
        this.thumbs.swiper && this.thumbs.update();
      }, observerUpdate: function observerUpdate() {
        this.thumbs.swiper && this.thumbs.update();
      }, setTransition: function setTransition(e) {
        var t = this.thumbs.swiper;t && t.setTransition(e);
      }, beforeDestroy: function beforeDestroy() {
        var e = this.thumbs.swiper;e && this.thumbs.swiperCreated && e && e.destroy();
      } } }];return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W;
});
//# sourceMappingURL=swiper.min.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function (t, e, n, o) {
  "use strict";
  function i(t, e) {
    var o,
        i,
        a,
        s = [],
        r = 0;t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o));
  }if (t.console = t.console || { info: function info(t) {} }, n) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");var a = { closeExisting: !1, loop: !1, gutter: 50, keyboard: !0, preventCaptionOverlap: !0, arrows: !0, infobar: !0, smallBtn: "auto", toolbar: "auto", buttons: ["zoom", "slideShow", "thumbs", "close"], idleTime: 3, protect: !1, modal: !1, image: { preload: !1 }, ajax: { settings: { data: { fancybox: !0 } } }, iframe: { tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>', preload: !0, css: {}, attr: { scrolling: "auto" } }, video: { tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>', format: "", autoStart: !0 }, defaultType: "image", animationEffect: "zoom", animationDuration: 366, zoomOpacity: "auto", transitionEffect: "fade", transitionDuration: 366, slideClass: "", baseClass: "", baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>', spinnerTpl: '<div class="fancybox-loading"></div>', errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>', btnTpl: { download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>', zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>', close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>', arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>', arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>', smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>' }, parentEl: "body", hideScrollbar: !0, autoFocus: !0, backFocus: !0, trapFocus: !0, fullScreen: { autoStart: !1 }, touch: { vertical: !0, momentum: !0 }, hash: null, media: {}, slideShow: { autoStart: !1, speed: 3e3 }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" }, wheel: "auto", onInit: n.noop, beforeLoad: n.noop, afterLoad: n.noop, beforeShow: n.noop, afterShow: n.noop, beforeClose: n.noop, afterClose: n.noop, onActivate: n.noop, onDeactivate: n.noop, clickContent: function clickContent(t, e) {
        return "image" === t.type && "zoom";
      }, clickSlide: "close", clickOutside: "close", dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1, mobile: { preventCaptionOverlap: !1, idleTime: !1, clickContent: function clickContent(t, e) {
          return "image" === t.type && "toggleControls";
        }, clickSlide: function clickSlide(t, e) {
          return "image" === t.type ? "toggleControls" : "close";
        }, dblclickContent: function dblclickContent(t, e) {
          return "image" === t.type && "zoom";
        }, dblclickSlide: function dblclickSlide(t, e) {
          return "image" === t.type && "zoom";
        } }, lang: "en", i18n: { en: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", ERROR: "The requested content cannot be loaded. <br/> Please try again later.", PLAY_START: "Start slideshow", PLAY_STOP: "Pause slideshow", FULL_SCREEN: "Full screen", THUMBS: "Thumbnails", DOWNLOAD: "Download", SHARE: "Share", ZOOM: "Zoom" }, de: { CLOSE: "Schlie&szlig;en", NEXT: "Weiter", PREV: "Zur&uuml;ck", ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.", PLAY_START: "Diaschau starten", PLAY_STOP: "Diaschau beenden", FULL_SCREEN: "Vollbild", THUMBS: "Vorschaubilder", DOWNLOAD: "Herunterladen", SHARE: "Teilen", ZOOM: "Vergr&ouml;&szlig;ern" } } },
        s = n(t),
        r = n(e),
        c = 0,
        l = function l(t) {
      return t && t.hasOwnProperty && t instanceof n;
    },
        d = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60);
      };
    }(),
        u = function () {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e);
      };
    }(),
        f = function () {
      var t,
          n = e.createElement("fakeelement"),
          o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (t in o) {
        if (void 0 !== n.style[t]) return o[t];
      }return "transitionend";
    }(),
        p = function p(t) {
      return t && t.length && t[0].offsetHeight;
    },
        h = function h(t, e) {
      var o = n.extend(!0, {}, t, e);return n.each(e, function (t, e) {
        n.isArray(e) && (o[t] = e);
      }), o;
    },
        g = function g(t) {
      var o, i;return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = { x: t.getBoundingClientRect().left + t.offsetWidth / 2, y: t.getBoundingClientRect().top + t.offsetHeight / 2 }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i);
    },
        b = function b(t, e, o) {
      var i = this;i.opts = h({ index: o }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init();
    };n.extend(b.prototype, { init: function init() {
        var o,
            i,
            a = this,
            s = a.group[a.currIndex],
            r = s.opts;r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function (t, e) {
          i += r.btnTpl[e] || "";
        }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = { container: o }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
          a.$refs[t] = o.find(".fancybox-" + t);
        }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex);
      }, translate: function translate(t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e];
        });
      }, addContent: function addContent(t) {
        var e,
            o = this,
            i = n.makeArray(t);n.each(i, function (t, e) {
          var i,
              a,
              s,
              r,
              c,
              l = {},
              d = {};n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = { type: "html", src: e + "" }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, { contentType: "pdf", opts: { iframe: { preload: !1 } } })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, { trapFocus: !0, infobar: 0, toolbar: 0, smallBtn: 0, keyboard: 0, slideShow: 0, fullScreen: 0, thumbs: 0, touch: 0, clickContent: !1, clickSlide: !1, clickOutside: !1, dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1 })), o.group.push(l);
        }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
      }, addEvents: function addEvents() {
        var e = this;e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.close(t);
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.previous();
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.next();
        }).on("click.fb", "[data-fancybox-zoom]", function (t) {
          e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        }), s.on("orientationchange.fb resize.fb", function (t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
            e.update(t);
          })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
            e.$refs.stage.show(), e.update(t);
          }, n.fancybox.isMobile ? 600 : 250));
        }), r.on("keydown.fb", function (t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which;if (9 == a) return void (i.opts.trapFocus && e.focus(t));if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a);
        }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
          e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1;
        }), e.idleInterval = t.setInterval(function () {
          ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls());
        }, 1e3));
      }, removeEvents: function removeEvents() {
        var e = this;s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null);
      }, previous: function previous(t) {
        return this.jumpTo(this.currPos - 1, t);
      }, next: function next(t) {
        return this.jumpTo(this.currPos + 1, t);
      }, jumpTo: function jumpTo(t, e) {
        var o,
            i,
            a,
            s,
            r,
            c,
            l,
            d,
            u,
            f = this,
            h = f.group.length;if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
          if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function (t, e) {
            n.fancybox.stop(e.$slide, !0);
          }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function (t, o) {
            o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });var i = o.pos * c.width + o.pos * o.opts.gutter;n.fancybox.setTranslate(o.$slide, { top: 0, left: i - l.left + u }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, { top: 0, left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter }, e, function () {
              o.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete();
            });
          })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function () {
            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous");
          }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image");
        }
      }, createSlide: function createSlide(t) {
        var e,
            o,
            i = this;return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], { pos: t, $slide: e, isLoaded: !1 }), i.updateSlide(i.slides[t])), i.slides[t];
      }, scaleToActual: function scaleToActual(t, e, o) {
        var i,
            a,
            s,
            r,
            c,
            l = this,
            d = l.current,
            u = d.$content,
            f = n.fancybox.getTranslate(d.$slide).width,
            p = n.fancybox.getTranslate(d.$slide).height,
            h = d.width,
            g = d.height;l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, { top: s, left: a, scaleX: r, scaleY: c }, o || 366, function () {
          l.isAnimating = !1;
        }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      }, scaleToFit: function scaleToFit(t) {
        var e,
            o = this,
            i = o.current,
            a = i.$content;o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, { top: e.top, left: e.left, scaleX: e.width / a.width(), scaleY: e.height / a.height() }, t || 366, function () {
          o.isAnimating = !1;
        }));
      }, getFitPos: function getFitPos(t) {
        var e,
            o,
            i,
            a,
            s = this,
            r = t.$content,
            c = t.$slide,
            l = t.width || t.opts.width,
            d = t.height || t.opts.height,
            u = {};return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u);
      }, update: function update(t) {
        var e = this;n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      }, updateSlide: function updateSlide(t, e) {
        var o = this,
            i = t && t.$content,
            a = t.width || t.opts.width,
            s = t.height || t.opts.height,
            r = t.$slide;o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e);
      }, centerSlide: function centerSlide(t) {
        var e = this,
            o = e.current,
            i = o.$slide;!e.isClosing && o && (i.siblings().css({ transform: "", opacity: "" }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, { top: 0, left: 0, opacity: 1 }, void 0 === t ? 0 : t, function () {
          i.css({ transform: "", opacity: "" }), o.isComplete || e.complete();
        }, !1));
      }, isMoved: function isMoved(t) {
        var e,
            o,
            i = t || this.current;return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5));
      }, updateCursor: function updateCursor(t, e) {
        var o,
            i,
            a = this,
            s = a.current,
            r = a.$refs.container;s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
      }, isZoomable: function isZoomable() {
        var t,
            e = this,
            n = e.current;if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0;
        }return !1;
      }, isScaledDown: function isScaledDown(t, e) {
        var o = this,
            i = !1,
            a = o.current,
            s = a.$content;return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), i = i.width < a.width && i.height < a.height), i;
      }, canPan: function canPan(t, e) {
        var o = this,
            i = o.current,
            a = null,
            s = !1;return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), void 0 !== t && void 0 !== e ? a = { width: t, height: e } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), s;
      }, loadSlide: function loadSlide(t) {
        var e,
            o,
            i,
            a = this;if (!t.isLoading && !t.isLoaded) {
          if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, !1;switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {case "image":
              a.setImage(t);break;case "iframe":
              a.setIframe(t);break;case "html":
              a.setContent(t, t.src || t.content);break;case "video":
              a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));break;case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);break;case "ajax":
              a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, { url: t.src, success: function success(e, n) {
                  "success" === n && a.setContent(t, e);
                }, error: function error(e, n) {
                  e && "abort" !== n && a.setError(t);
                } })), o.one("onReset", function () {
                i.abort();
              });break;default:
              a.setError(t);}return !0;
        }
      }, setImage: function setImage(t) {
        var o,
            i = this;setTimeout(function () {
          var e = t.$image;i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t);
        }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function () {
          n(this).remove(), t.$ghost = null;
        }, o.onload = function () {
          i.afterLoad(t);
        }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t);
      }, checkSrcset: function checkSrcset(e) {
        var n,
            o,
            i,
            a,
            s = e.opts.srcset || e.opts.image.srcset;if (s) {
          i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map(function (t) {
            var e = {};return t.trim().split(/\s+/).forEach(function (t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);if (0 === n) return e.url = t;o && (e.value = o, e.postfix = t[t.length - 1]);
            }), e;
          }), o.sort(function (t, e) {
            return t.value - e.value;
          });for (var r = 0; r < o.length; r++) {
            var c = o[r];if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
              n = c;break;
            }
          }!n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s);
        }
      }, setBigImage: function setBigImage(t) {
        var o = this,
            i = e.createElement("img"),
            a = n(i);t.$image = a.one("error", function () {
          o.setError(t);
        }).one("load", function () {
          var e;t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !o.isClosing && t.$ghost.hide();
          }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t));
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error");
      }, resolveImageSlideSize: function resolveImageSlideSize(t, e, n) {
        var o = parseInt(t.opts.width, 10),
            i = parseInt(t.opts.height, 10);t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i);
      }, setIframe: function setIframe(t) {
        var e,
            o = this,
            i = t.opts.iframe,
            a = t.$slide;t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
          this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t);
        }), a.on("refresh.fb", function () {
          var n,
              o,
              s = t.$content,
              r = i.css.width,
              c = i.css.height;if (1 === e[0].isReady) {
            try {
              n = e.contents(), o = n.find("body");
            } catch (t) {}o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({ width: "100%", "max-width": "100%", height: "9999px" }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden");
          }
        })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
          try {
            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (t) {}n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1;
        });
      }, setContent: function setContent(t, e) {
        var o = this;o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
          n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1);
        }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t));
      }, setError: function setError(t) {
        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1);
      }, showLoading: function showLoading(t) {
        var e = this;(t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
      }, hideLoading: function hideLoading(t) {
        var e = this;(t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
      }, afterLoad: function afterLoad(t) {
        var e = this;e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
          return 2 == t.button && t.preventDefault(), !0;
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t));
      }, adjustCaption: function adjustCaption(t) {
        var e,
            n = this,
            o = t || n.current,
            i = o.opts.caption,
            a = o.opts.preventCaptionOverlap,
            s = n.$refs.caption,
            r = !1;s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""));
      }, adjustLayout: function adjustLayout(t) {
        var e,
            n,
            o,
            i,
            a = this,
            s = t || a.current;s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n));
      }, revealContent: function revealContent(t) {
        var e,
            o,
            i,
            a,
            s = this,
            r = t.$slide,
            c = !1,
            l = !1,
            d = s.isMoved(t),
            u = t.isRevealed;return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function () {
          s.isAnimating = !1, s.complete();
        })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function () {
          r.removeClass(o).css({ transform: "", opacity: "" }), t.pos === s.currPos && s.complete();
        }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === s.currPos && s.complete())));
      }, getThumbPos: function getThumbPos(t) {
        var e,
            o,
            i,
            a,
            s,
            r = !1,
            c = t.$thumb;return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = { top: e.top + o, left: e.left + s, width: e.width - i - s, height: e.height - o - a, scaleX: 1, scaleY: 1 }, e.width > 0 && e.height > 0 && r);
      }, complete: function complete() {
        var t,
            e = this,
            o = e.current,
            i = {};!e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
          o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
        }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
        }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0));
      }, preload: function preload(t) {
        var e,
            n,
            o = this;o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
      }, focus: function focus(t, o) {
        var i,
            a,
            s = this,
            r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function () {
          return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
        }), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"));
      }, activate: function activate() {
        var t = this;n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
      }, close: function close(t, e) {
        var o,
            i,
            a,
            s,
            r,
            c,
            l,
            u = this,
            f = u.current,
            h = function h() {
          u.cleanUp(t);
        };return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function () {
          u.update();
        }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = { top: s.top, left: s.left, scaleX: s.width / l.width, scaleY: s.height / l.height, width: l.width, height: l.height }, r = f.opts.zoomOpacity, "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)));
      }, cleanUp: function cleanUp(e) {
        var o,
            i,
            a,
            s = this,
            r = s.current.opts.$orig;s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
      }, trigger: function trigger(t, e) {
        var o,
            i = Array.prototype.slice.call(arguments, 1),
            a = this,
            s = e && e.opts ? e : a.current;if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;"afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i);
      }, updateControls: function updateControls() {
        var t = this,
            o = t.current,
            i = o.index,
            a = t.$refs.container,
            s = t.$refs.caption,
            r = o.opts.caption;o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
      }, hideControls: function hideControls(t) {
        var e = this,
            n = ["infobar", "toolbar", "nav"];!t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
          return "fancybox-show-" + t;
        }).join(" ")), this.hasHiddenControls = !0;
      }, showControls: function showControls() {
        var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal);
      }, toggleControls: function toggleControls() {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      } }), n.fancybox = { version: "3.5.7", defaults: a, getInstance: function getInstance(t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
      }, open: function open(t, e, n) {
        return new b(t, e, n);
      }, close: function close(t) {
        var e = this.getInstance();e && (e.close(), !0 === t && this.close(t));
      }, destroy: function destroy() {
        this.close(!0), r.add("body").off("click.fb-start", "**");
      }, isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), use3d: function () {
        var n = e.createElement("div");return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
      }(), getTranslate: function getTranslate(t) {
        var e;return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), { top: e.top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) });
      }, setTranslate: function setTranslate(t, e) {
        var n = "",
            o = {};if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o);
      }, animate: function animate(t, e, o, i, a) {
        var s,
            r = this;n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function (c) {
          (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, { top: e.top, left: e.left, width: s.width * e.scaleX, height: s.height * e.scaleY, scaleX: 1, scaleY: 1 }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c));
        }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
          t.trigger(f);
        }, o + 33));
      }, stop: function stop(t, e) {
        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
      } }, n.fn.fancybox = function (t) {
      var e;return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, i) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, i), this;
    }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
      n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", { $trigger: n(this) });
    }), function () {
      var t = null;r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
        switch (e.type) {case "mousedown":
            t = n(this);break;case "mouseup":
            t = null;break;case "focusin":
            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");break;case "focusout":
            n(".fancybox-button").removeClass("fancybox-focus");}
      });
    }();
  }
}(window, document, jQuery), function (t) {
  "use strict";
  var e = { youtube: { matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, paramPlace: 8, type: "iframe", url: "https://www.youtube-nocookie.com/embed/$4", thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg" }, vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, gmap_place: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: "iframe", url: function url(t) {
        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
      } }, gmap_search: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i, type: "iframe", url: function url(t) {
        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      } } },
      n = function n(e, _n, o) {
    if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(_n, function (t, n) {
      e = e.replace("$" + t, n || "");
    }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e;
  };t(document).on("objectNeedsType.fb", function (o, i, a) {
    var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || "",
        h = !1;s = t.extend(!0, {}, e, a.opts.media), t.each(s, function (e, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");for (var i = 0; i < d.length; ++i) {
            var s = d[i].split("=", 2);2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
          }
        }return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
        }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1;
      }
    }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })), t.extend(a, { type: h, src: p, origSrc: a.src, contentSource: f, contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video" })) : p && (a.type = a.opts.defaultType);
  });var o = { youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 }, vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 }, load: function load(t) {
      var e,
          n = this;if (this[t].loaded) return void setTimeout(function () {
        n.done(t);
      });this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
        n[t].loaded = !0, n.done(t);
      } : e.onload = function () {
        n[t].loaded = !0, n.done(t);
      }, document.body.appendChild(e));
    }, done: function done(e) {
      var n, o, i;"youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), { events: { onStateChange: function onStateChange(t) {
            0 == t.data && n.next();
          } } }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", function () {
        n.next();
      })));
    } };t(document).on({ "afterShow.fb": function afterShowFb(t, e, n) {
      e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource);
    } });
}(jQuery), function (t, e, n) {
  "use strict";
  var o = function () {
    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
      return t.setTimeout(e, 1e3 / 60);
    };
  }(),
      i = function () {
    return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
      t.clearTimeout(e);
    };
  }(),
      a = function a(e) {
    var n = [];e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];for (var o in e) {
      e[o].pageX ? n.push({ x: e[o].pageX, y: e[o].pageY }) : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
    }return n;
  },
      s = function s(t, e, n) {
    return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
  },
      r = function r(t) {
    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) {
      if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
    }return !1;
  },
      c = function c(e) {
    var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;return i || a;
  },
      l = function l(t) {
    for (var e = !1;;) {
      if (e = c(t.get(0))) break;if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break;
    }return e;
  },
      d = function d(t) {
    var e = this;e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
  };d.prototype.destroy = function () {
    var t = this;t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null);
  }, d.prototype.ontouchstart = function (o) {
    var i = this,
        c = n(o.target),
        d = i.instance,
        u = d.current,
        f = u.$slide,
        p = u.$content,
        h = "touchstart" == o.type;if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = new Date().getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || { top: 0, left: 0 }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))));
    }
  }, d.prototype.onscroll = function (t) {
    var n = this;n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0);
  }, d.prototype.ontouchmove = function (t) {
    var e = this;return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = a(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))));
  }, d.prototype.onSwipe = function (e) {
    var a,
        s = this,
        r = s.instance,
        c = s.isSwiping,
        l = s.sliderStartPos.left || 0;if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = { top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY, left: l }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
      s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
        var o = e.pos - s.instance.currPos;n.fancybox.setTranslate(e.$slide, { top: s.sliderLastPos.top, left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter });
      }), s.$container.addClass("fancybox-is-sliding"));
    });else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
        var o, i;n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({ transform: "", opacity: "", "transition-duration": "" }).removeClass("fancybox-animated").removeClass(function (t, e) {
          return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
        }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, { top: o.top - i.top, left: o.left - i.left });
      }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
    }
  }, d.prototype.onPan = function () {
    var t = this;if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void (t.startPoints = t.newPoints);t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos);
    });
  }, d.prototype.limitMovement = function () {
    var t,
        e,
        n,
        o,
        i,
        a,
        s = this,
        r = s.canvasWidth,
        c = s.canvasHeight,
        l = s.distanceX,
        d = s.distanceY,
        u = s.contentStartPos,
        f = u.left,
        p = u.top,
        h = u.width,
        g = u.height;return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), { top: a, left: i };
  }, d.prototype.limitPosition = function (t, e, n, o) {
    var i = this,
        a = i.canvasWidth,
        s = i.canvasHeight;return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), { top: e, left: t };
  }, d.prototype.onZoom = function () {
    var e = this,
        a = e.contentStartPos,
        r = a.width,
        c = a.height,
        l = a.left,
        d = a.top,
        u = s(e.newPoints[0], e.newPoints[1]),
        f = u / e.startDistanceBetweenFingers,
        p = Math.floor(r * f),
        h = Math.floor(c * f),
        g = (r - p) * e.percentageOfImageAtPinchPointX,
        b = (c - h) * e.percentageOfImageAtPinchPointY,
        m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
        v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
        y = m - e.centerPointStartX,
        x = v - e.centerPointStartY,
        w = l + (g + y),
        $ = d + (b + x),
        S = { top: $, left: w, scaleX: f, scaleY: f };e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos);
    });
  }, d.prototype.ontouchend = function (t) {
    var o = this,
        s = o.isSwiping,
        r = o.isPanning,
        c = o.isZooming,
        l = o.isScrolling;if (o.endPoints = a(t), o.dMs = Math.max(new Date().getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
  }, d.prototype.endSwiping = function (t, e) {
    var o = this,
        i = !1,
        a = o.instance.group.length,
        s = Math.abs(o.distanceX),
        r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, { top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY, opacity: 0 }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding");
  }, d.prototype.endPanning = function () {
    var t,
        e,
        o,
        i = this;i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366));
  }, d.prototype.endZooming = function () {
    var t,
        e,
        o,
        i,
        a = this,
        s = a.instance.current,
        r = a.newWidth,
        c = a.newHeight;a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)));
  }, d.prototype.onTap = function (e) {
    var o,
        i = this,
        s = n(e.target),
        r = i.instance,
        c = r.current,
        l = e && a(e) || i.startPoints,
        d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
        u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
        f = function f(t) {
      var o = c.opts[t];if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {case "close":
          r.close(i.startEvent);break;case "toggleControls":
          r.toggleControls();break;case "next":
          r.next();break;case "nextOrClose":
          r.group.length > 1 ? r.next() : r.close(i.startEvent);break;case "zoom":
          "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent));}
    };if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";else if (s.is(".fancybox-slide")) o = "Slide";else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;o = "Content";
      }if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;f("dblclick" + o);
      } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
        i.tapped = null, r.isAnimating || f("click" + o);
      }, 500) : f("click" + o);return this;
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new d(e));
  }).on("beforeClose.fb", function (t, e) {
    e && e.Guestures && e.Guestures.destroy();
  });
}(window, document, jQuery), function (t, e) {
  "use strict";
  e.extend(!0, e.fancybox.defaults, { btnTpl: { slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>' }, slideShow: { autoStart: !1, speed: 3e3, progress: !0 } });var n = function n(t) {
    this.instance = t, this.init();
  };e.extend(n.prototype, { timer: null, isActive: !1, $button: null, init: function init() {
      var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle();
      }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
    }, set: function set(t) {
      var n = this,
          o = n.instance,
          i = o.current;i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), { scaleX: 1 }, i.opts.slideShow.speed), n.timer = setTimeout(function () {
        o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0);
      }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls());
    }, clear: function clear() {
      var t = this;clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide();
    }, start: function start() {
      var t = this,
          e = t.instance.current;e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0));
    }, stop: function stop() {
      var t = this,
          e = t.instance.current;t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide();
    }, toggle: function toggle() {
      var t = this;t.isActive ? t.stop() : t.start();
    } }), e(t).on({ "onInit.fb": function onInitFb(t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e));
    }, "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var i = e && e.SlideShow;o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
    }, "afterShow.fb": function afterShowFb(t, e, n) {
      var o = e && e.SlideShow;o && o.isActive && o.set();
    }, "afterKeydown.fb": function afterKeydownFb(n, o, i, a, s) {
      var r = o && o.SlideShow;!r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle());
    }, "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(t, e) {
      var n = e && e.SlideShow;n && n.stop();
    } }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(),
        o = n && n.SlideShow;o && o.isActive && (t.hidden ? o.clear() : o.set());
  });
}(document, jQuery), function (t, e) {
  "use strict";
  var n = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
      var i = e[o];if (i && i[1] in t) {
        for (var a = 0; a < i.length; a++) {
          n[e[0][a]] = i[a];
        }return n;
      }
    }return !1;
  }();if (n) {
    var o = { request: function request(e) {
        e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      }, exit: function exit() {
        t[n.exitFullscreen]();
      }, toggle: function toggle(e) {
        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
      }, isFullscreen: function isFullscreen() {
        return Boolean(t[n.fullscreenElement]);
      }, enabled: function enabled() {
        return Boolean(t[n.fullscreenEnabled]);
      } };e.extend(!0, e.fancybox.defaults, { btnTpl: { fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>' }, fullScreen: { autoStart: !1 } }), e(t).on(n.fullscreenchange, function () {
      var t = o.isFullscreen(),
          n = e.fancybox.getInstance();n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
    });
  }e(t).on({ "onInit.fb": function onInitFb(t, e) {
      var i;if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle();
      }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
    }, "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle());
    }, "beforeClose.fb": function beforeCloseFb(t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
    } });
}(document, jQuery), function (t, e) {
  "use strict";
  var n = "fancybox-thumbs";e.fancybox.defaults = e.extend(!0, { btnTpl: { thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>' }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" } }, e.fancybox.defaults);var o = function o(t) {
    this.init(t);
  };e.extend(o.prototype, { $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function init(t) {
      var e = this,
          n = t.group,
          o = 0;e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++) {}o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
        e.toggle();
      }), e.isActive = !0) : e.$button.hide();
    }, create: function create() {
      var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = [];o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function () {
        i.jumpTo(e(this).attr("data-index"));
      })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function (e, n) {
        t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
      }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0));
    }, focus: function focus(t) {
      var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid;o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({ scrollLeft: n.left }, t));
    }, update: function update() {
      var t = this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update();
    }, hide: function hide() {
      this.isVisible = !1, this.update();
    }, show: function show() {
      this.isVisible = !0, this.update();
    }, toggle: function toggle() {
      this.isVisible = !this.isVisible, this.update();
    } }), e(t).on({ "onInit.fb": function onInitFb(t, e) {
      var n;e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show());
    }, "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var i = e && e.Thumbs;i && i.isVisible && i.focus(o ? 0 : 250);
    }, "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
      var a = e && e.Thumbs;a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
    }, "beforeClose.fb": function beforeCloseFb(t, e) {
      var n = e && e.Thumbs;n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
    } });
}(document, jQuery), function (t, e) {
  "use strict";
  function n(t) {
    var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };return String(t).replace(/[&<>"'`=\/]/g, function (t) {
      return e[t];
    });
  }e.extend(!0, e.fancybox.defaults, { btnTpl: { share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>' }, share: { url: function url(t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>' } }), e(t).on("click", "[data-fancybox-share]", function () {
    var t,
        o,
        i = e.fancybox.getInstance(),
        a = i.current || null;a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({ src: i.translate(i, o), type: "html", opts: { touch: !1, animationEffect: !1, afterLoad: function afterLoad(t, e) {
          i.$refs.container.one("beforeClose.fb", function () {
            t.close(null, 0);
          }), e.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1;
          });
        }, mobile: { autoFocus: !1 } } }));
  });
}(document, jQuery), function (t, e, n) {
  "use strict";
  function o() {
    var e = t.location.hash.substr(1),
        n = e.split("-"),
        o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
        i = n.join("-");return { hash: e, index: o < 1 ? 1 : o, gallery: i };
  }function i(t) {
    "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
  }function a(t) {
    var e, n;return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n);
  }n.escapeSelector || (n.escapeSelector = function (t) {
    return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    });
  }), n(function () {
    !1 !== n.fancybox.defaults.hash && (n(e).on({ "onInit.fb": function onInitFb(t, e) {
        var n, i;!1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
      }, "beforeShow.fb": function beforeShowFb(n, o, i, s) {
        var r;i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
          "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null;
        }, 300)));
      }, "beforeClose.fb": function beforeCloseFb(n, o, i) {
        i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null);
      } }), n(t).on("hashchange.fb", function () {
      var t = o(),
          e = null;n.each(n(".fancybox-container").get().reverse(), function (t, o) {
        var i = n(o).data("FancyBox");if (i && i.currentHash) return e = i, !1;
      }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t);
    }), setTimeout(function () {
      n.fancybox.getInstance() || i(o());
    }, 50));
  });
}(window, document, jQuery), function (t, e) {
  "use strict";
  var n = new Date().getTime();e(t).on({ "onInit.fb": function onInitFb(t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
        var o = e.current,
            i = new Date().getTime();e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
      });
    } });
}(document, jQuery);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.ScrollMagic = t();
}(undefined, function () {
  "use strict";
  var _ = function _() {};_.version = "2.0.7", window.addEventListener("mousewheel", function () {});var P = "data-scrollmagic-pin-spacer";_.Controller = function (e) {
    var n,
        r,
        i = "REVERSE",
        t = "PAUSED",
        o = z.defaults,
        s = this,
        a = R.extend({}, o, e),
        l = [],
        c = !1,
        f = 0,
        u = t,
        d = !0,
        h = 0,
        p = !0,
        g = function g() {
      0 < a.refreshInterval && (r = window.setTimeout(E, a.refreshInterval));
    },
        v = function v() {
      return a.vertical ? R.get.scrollTop(a.container) : R.get.scrollLeft(a.container);
    },
        m = function m() {
      return a.vertical ? R.get.height(a.container) : R.get.width(a.container);
    },
        w = this._setScrollPos = function (e) {
      a.vertical ? d ? window.scrollTo(R.get.scrollLeft(), e) : a.container.scrollTop = e : d ? window.scrollTo(e, R.get.scrollTop()) : a.container.scrollLeft = e;
    },
        y = function y() {
      if (p && c) {
        var e = R.type.Array(c) ? c : l.slice(0);c = !1;var t = f,
            n = (f = s.scrollPos()) - t;0 !== n && (u = 0 < n ? "FORWARD" : i), u === i && e.reverse(), e.forEach(function (e, t) {
          e.update(!0);
        });
      }
    },
        S = function S() {
      n = R.rAF(y);
    },
        b = function b(e) {
      "resize" == e.type && (h = m(), u = t), !0 !== c && (c = !0, S());
    },
        E = function E() {
      if (!d && h != m()) {
        var t;try {
          t = new Event("resize", { bubbles: !1, cancelable: !1 });
        } catch (e) {
          (t = document.createEvent("Event")).initEvent("resize", !1, !1);
        }a.container.dispatchEvent(t);
      }l.forEach(function (e, t) {
        e.refresh();
      }), g();
    };this._options = a;var x = function x(e) {
      if (e.length <= 1) return e;var t = e.slice(0);return t.sort(function (e, t) {
        return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
      }), t;
    };return this.addScene = function (e) {
      if (R.type.Array(e)) e.forEach(function (e, t) {
        s.addScene(e);
      });else if (e instanceof _.Scene) if (e.controller() !== s) e.addTo(s);else if (l.indexOf(e) < 0) for (var t in l.push(e), l = x(l), e.on("shift.controller_sort", function () {
        l = x(l);
      }), a.globalSceneOptions) {
        e[t] && e[t].call(e, a.globalSceneOptions[t]);
      }return s;
    }, this.removeScene = function (e) {
      if (R.type.Array(e)) e.forEach(function (e, t) {
        s.removeScene(e);
      });else {
        var t = l.indexOf(e);-1 < t && (e.off("shift.controller_sort"), l.splice(t, 1), e.remove());
      }return s;
    }, this.updateScene = function (e, n) {
      return R.type.Array(e) ? e.forEach(function (e, t) {
        s.updateScene(e, n);
      }) : n ? e.update(!0) : !0 !== c && e instanceof _.Scene && (-1 == (c = c || []).indexOf(e) && c.push(e), c = x(c), S()), s;
    }, this.update = function (e) {
      return b({ type: "resize" }), e && y(), s;
    }, this.scrollTo = function (e, t) {
      if (R.type.Number(e)) w.call(a.container, e, t);else if (e instanceof _.Scene) e.controller() === s && s.scrollTo(e.scrollOffset(), t);else if (R.type.Function(e)) w = e;else {
        var n = R.get.elements(e)[0];if (n) {
          for (; n.parentNode.hasAttribute(P);) {
            n = n.parentNode;
          }var r = a.vertical ? "top" : "left",
              i = R.get.offset(a.container),
              o = R.get.offset(n);d || (i[r] -= s.scrollPos()), s.scrollTo(o[r] - i[r], t);
        }
      }return s;
    }, this.scrollPos = function (e) {
      return arguments.length ? (R.type.Function(e) && (v = e), s) : v.call(s);
    }, this.info = function (e) {
      var t = { size: h, vertical: a.vertical, scrollPos: f, scrollDirection: u, container: a.container, isDocument: d };return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t;
    }, this.loglevel = function (e) {
      return s;
    }, this.enabled = function (e) {
      return arguments.length ? (p != e && (p = !!e, s.updateScene(l, !0)), s) : p;
    }, this.destroy = function (e) {
      window.clearTimeout(r);for (var t = l.length; t--;) {
        l[t].destroy(e);
      }return a.container.removeEventListener("resize", b), a.container.removeEventListener("scroll", b), R.cAF(n), null;
    }, function () {
      for (var e in a) {
        o.hasOwnProperty(e) || delete a[e];
      }if (a.container = R.get.elements(a.container)[0], !a.container) throw "ScrollMagic.Controller init failed.";(d = a.container === window || a.container === document.body || !document.body.contains(a.container)) && (a.container = window), h = m(), a.container.addEventListener("resize", b), a.container.addEventListener("scroll", b);var t = parseInt(a.refreshInterval, 10);a.refreshInterval = R.type.Number(t) ? t : o.refreshInterval, g();
    }(), s;
  };var z = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };_.Controller.addOption = function (e, t) {
    z.defaults[e] = t;
  }, _.Controller.extend = function (e) {
    var t = this;_.Controller = function () {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
    }, R.extend(_.Controller, t), _.Controller.prototype = t.prototype, _.Controller.prototype.constructor = _.Controller;
  }, _.Scene = function (e) {
    var n,
        l,
        c = "BEFORE",
        f = "DURING",
        u = "AFTER",
        r = D.defaults,
        d = this,
        h = R.extend({}, r, e),
        p = c,
        g = 0,
        a = { start: 0, end: 0 },
        v = 0,
        i = !0,
        s = {};this.on = function (e, i) {
      return R.type.Function(i) && (e = e.trim().split(" ")).forEach(function (e) {
        var t = e.split("."),
            n = t[0],
            r = t[1];"*" != n && (s[n] || (s[n] = []), s[n].push({ namespace: r || "", callback: i }));
      }), d;
    }, this.off = function (e, o) {
      return e && (e = e.trim().split(" ")).forEach(function (e, t) {
        var n = e.split("."),
            r = n[0],
            i = n[1] || "";("*" === r ? Object.keys(s) : [r]).forEach(function (e) {
          for (var t = s[e] || [], n = t.length; n--;) {
            var r = t[n];!r || i !== r.namespace && "*" !== i || o && o != r.callback || t.splice(n, 1);
          }t.length || delete s[e];
        });
      }), d;
    }, this.trigger = function (e, n) {
      if (e) {
        var t = e.trim().split("."),
            r = t[0],
            i = t[1],
            o = s[r];o && o.forEach(function (e, t) {
          i && i !== e.namespace || e.callback.call(d, new _.Event(r, e.namespace, d, n));
        });
      }return d;
    }, d.on("change.internal", function (e) {
      "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && d.update());
    }).on("shift.internal", function (e) {
      t(), d.update();
    }), this.addTo = function (e) {
      return e instanceof _.Controller && l != e && (l && l.removeScene(d), l = e, E(), o(!0), y(!0), t(), l.info("container").addEventListener("resize", S), e.addScene(d), d.trigger("add", { controller: l }), d.update()), d;
    }, this.enabled = function (e) {
      return arguments.length ? (i != e && (i = !!e, d.update(!0)), d) : i;
    }, this.remove = function () {
      if (l) {
        l.info("container").removeEventListener("resize", S);var e = l;l = void 0, e.removeScene(d), d.trigger("remove");
      }return d;
    }, this.destroy = function (e) {
      return d.trigger("destroy", { reset: e }), d.remove(), d.off("*.*"), null;
    }, this.update = function (e) {
      if (l) if (e) {
        if (l.enabled() && i) {
          var t,
              n = l.info("scrollPos");t = 0 < h.duration ? (n - a.start) / (a.end - a.start) : n >= a.start ? 1 : 0, d.trigger("update", { startPos: a.start, endPos: a.end, scrollPos: n }), d.progress(t);
        } else m && p === f && C(!0);
      } else l.updateScene(d, !1);return d;
    }, this.refresh = function () {
      return o(), y(), d;
    }, this.progress = function (e) {
      if (arguments.length) {
        var t = !1,
            n = p,
            r = l ? l.info("scrollDirection") : "PAUSED",
            i = h.reverse || g <= e;if (0 === h.duration ? (t = g != e, p = 0 === (g = e < 1 && i ? 0 : 1) ? c : f) : e < 0 && p !== c && i ? (p = c, t = !(g = 0)) : 0 <= e && e < 1 && i ? (g = e, p = f, t = !0) : 1 <= e && p !== u ? (g = 1, p = u, t = !0) : p !== f || i || C(), t) {
          var o = { progress: g, state: p, scrollDirection: r },
              s = p != n,
              a = function a(e) {
            d.trigger(e, o);
          };s && n !== f && (a("enter"), a(n === c ? "start" : "end")), a("progress"), s && p !== f && (a(p === c ? "start" : "end"), a("leave"));
        }return d;
      }return g;
    };var m,
        w,
        t = function t() {
      a = { start: v + h.offset }, l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook), a.end = a.start + h.duration;
    },
        o = function o(e) {
      if (n) {
        var t = "duration";x(t, n.call(d)) && !e && (d.trigger("change", { what: t, newval: h[t] }), d.trigger("shift", { reason: t }));
      }
    },
        y = function y(e) {
      var t = 0,
          n = h.triggerElement;if (l && (n || 0 < v)) {
        if (n) if (n.parentNode) {
          for (var r = l.info(), i = R.get.offset(r.container), o = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(P);) {
            n = n.parentNode;
          }var s = R.get.offset(n);r.isDocument || (i[o] -= l.scrollPos()), t = s[o] - i[o];
        } else d.triggerElement(void 0);var a = t != v;v = t, a && !e && d.trigger("shift", { reason: "triggerElementPosition" });
      }
    },
        S = function S(e) {
      0 < h.triggerHook && d.trigger("shift", { reason: "containerResize" });
    },
        b = R.extend(D.validate, { duration: function duration(t) {
        if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
          var e = parseFloat(t) / 100;t = function t() {
            return l ? l.info("size") * e : 0;
          };
        }if (R.type.Function(t)) {
          n = t;try {
            t = parseFloat(n.call(d));
          } catch (e) {
            t = -1;
          }
        }if (t = parseFloat(t), !R.type.Number(t) || t < 0) throw n && (n = void 0), 0;return t;
      } }),
        E = function E(e) {
      (e = arguments.length ? [e] : Object.keys(b)).forEach(function (t, e) {
        var n;if (b[t]) try {
          n = b[t](h[t]);
        } catch (e) {
          n = r[t];
        } finally {
          h[t] = n;
        }
      });
    },
        x = function x(e, t) {
      var n = !1,
          r = h[e];return h[e] != t && (h[e] = t, E(e), n = r != h[e]), n;
    },
        z = function z(t) {
      d[t] || (d[t] = function (e) {
        return arguments.length ? ("duration" === t && (n = void 0), x(t, e) && (d.trigger("change", { what: t, newval: h[t] }), -1 < D.shifts.indexOf(t) && d.trigger("shift", { reason: t })), d) : h[t];
      });
    };this.controller = function () {
      return l;
    }, this.state = function () {
      return p;
    }, this.scrollOffset = function () {
      return a.start;
    }, this.triggerPosition = function () {
      var e = h.offset;return l && (h.triggerElement ? e += v : e += l.info("size") * d.triggerHook()), e;
    }, d.on("shift.internal", function (e) {
      var t = "duration" === e.reason;(p === u && t || p === f && 0 === h.duration) && C(), t && F();
    }).on("progress.internal", function (e) {
      C();
    }).on("add.internal", function (e) {
      F();
    }).on("destroy.internal", function (e) {
      d.removePin(e.reset);
    });var C = function C(e) {
      if (m && l) {
        var t = l.info(),
            n = w.spacer.firstChild;if (e || p !== f) {
          var r = { position: w.inFlow ? "relative" : "absolute", top: 0, left: 0 },
              i = R.css(n, "position") != r.position;w.pushFollowers ? 0 < h.duration && (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top")) ? i = !0 : p === c && 0 === parseFloat(R.css(w.spacer, "padding-bottom")) && (i = !0)) : r[t.vertical ? "top" : "left"] = h.duration * g, R.css(n, r), i && F();
        } else {
          "fixed" != R.css(n, "position") && (R.css(n, { position: "fixed" }), F());var o = R.get.offset(w.spacer, !0),
              s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10;o[t.vertical ? "top" : "left"] += s, R.css(w.spacer.firstChild, { top: o.top, left: o.left });
        }
      }
    },
        F = function F() {
      if (m && l && w.inFlow) {
        var e = p === f,
            t = l.info("vertical"),
            n = w.spacer.firstChild,
            r = R.isMarginCollapseType(R.css(w.spacer, "display")),
            i = {};w.relSize.width || w.relSize.autoFullWidth ? e ? R.css(m, { width: R.get.width(w.spacer) }) : R.css(m, { width: "100%" }) : (i["min-width"] = R.get.width(t ? m : n, !0, !0), i.width = e ? i["min-width"] : "auto"), w.relSize.height ? e ? R.css(m, { height: R.get.height(w.spacer) - (w.pushFollowers ? h.duration : 0) }) : R.css(m, { height: "100%" }) : (i["min-height"] = R.get.height(t ? n : m, !0, !r), i.height = e ? i["min-height"] : "auto"), w.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = h.duration * g, i["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)), R.css(w.spacer, i);
      }
    },
        L = function L() {
      l && m && p === f && !l.info("isDocument") && C();
    },
        T = function T() {
      l && m && p === f && ((w.relSize.width || w.relSize.autoFullWidth) && R.get.width(window) != R.get.width(w.spacer.parentNode) || w.relSize.height && R.get.height(window) != R.get.height(w.spacer.parentNode)) && F();
    },
        A = function A(e) {
      l && m && p === f && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)));
    };this.setPin = function (e, t) {
      if (t = R.extend({}, { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" }, t), !(e = R.get.elements(e)[0])) return d;if ("fixed" === R.css(e, "position")) return d;if (m) {
        if (m === e) return d;d.removePin();
      }var n = (m = e).parentNode.style.display,
          r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];m.parentNode.style.display = "none";var i = "absolute" != R.css(m, "position"),
          o = R.css(m, r.concat(["display"])),
          s = R.css(m, ["width", "height"]);m.parentNode.style.display = n, !i && t.pushFollowers && (t.pushFollowers = !1);var a = m.parentNode.insertBefore(document.createElement("div"), m),
          l = R.extend(o, { position: i ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" });if (i || R.extend(l, R.css(m, ["width", "height"])), R.css(a, l), a.setAttribute(P, ""), R.addClass(a, t.spacerClass), w = { spacer: a, relSize: { width: "%" === s.width.slice(-1), height: "%" === s.height.slice(-1), autoFullWidth: "auto" === s.width && i && R.isMarginCollapseType(o.display) }, pushFollowers: t.pushFollowers, inFlow: i }, !m.___origStyle) {
        m.___origStyle = {};var c = m.style;r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (e) {
          m.___origStyle[e] = c[e] || "";
        });
      }return w.relSize.width && R.css(a, { width: s.width }), w.relSize.height && R.css(a, { height: s.height }), a.appendChild(m), R.css(m, { position: i ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }), (w.relSize.width || w.relSize.autoFullWidth) && R.css(m, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }), window.addEventListener("scroll", L), window.addEventListener("resize", L), window.addEventListener("resize", T), m.addEventListener("mousewheel", A), m.addEventListener("DOMMouseScroll", A), C(), d;
    }, this.removePin = function (e) {
      if (m) {
        if (p === f && C(!0), e || !l) {
          var t = w.spacer.firstChild;if (t.hasAttribute(P)) {
            var n = w.spacer.style,
                r = {};["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function (e) {
              r[e] = n[e] || "";
            }), R.css(t, r);
          }w.spacer.parentNode.insertBefore(t, w.spacer), w.spacer.parentNode.removeChild(w.spacer), m.parentNode.hasAttribute(P) || (R.css(m, m.___origStyle), delete m.___origStyle);
        }window.removeEventListener("scroll", L), window.removeEventListener("resize", L), window.removeEventListener("resize", T), m.removeEventListener("mousewheel", A), m.removeEventListener("DOMMouseScroll", A), m = void 0;
      }return d;
    };var N,
        O = [];return d.on("destroy.internal", function (e) {
      d.removeClassToggle(e.reset);
    }), this.setClassToggle = function (e, t) {
      var n = R.get.elements(e);return 0 !== n.length && R.type.String(t) && (0 < O.length && d.removeClassToggle(), N = t, O = n, d.on("enter.internal_class leave.internal_class", function (e) {
        var n = "enter" === e.type ? R.addClass : R.removeClass;O.forEach(function (e, t) {
          n(e, N);
        });
      })), d;
    }, this.removeClassToggle = function (e) {
      return e && O.forEach(function (e, t) {
        R.removeClass(e, N);
      }), d.off("start.internal_class end.internal_class"), N = void 0, O = [], d;
    }, function () {
      for (var e in h) {
        r.hasOwnProperty(e) || delete h[e];
      }for (var t in r) {
        z(t);
      }E();
    }(), d;
  };var D = { defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2 }, validate: { offset: function offset(e) {
        if (e = parseFloat(e), !R.type.Number(e)) throw 0;return e;
      }, triggerElement: function triggerElement(e) {
        if (e = e || void 0) {
          var t = R.get.elements(e)[0];if (!t || !t.parentNode) throw 0;e = t;
        }return e;
      }, triggerHook: function triggerHook(e) {
        var t = { onCenter: .5, onEnter: 1, onLeave: 0 };if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));else {
          if (!(e in t)) throw 0;e = t[e];
        }return e;
      }, reverse: function reverse(e) {
        return !!e;
      } }, shifts: ["duration", "offset", "triggerHook"] };_.Scene.addOption = function (e, t, n, r) {
    e in D.defaults || (D.defaults[e] = t, D.validate[e] = n, r && D.shifts.push(e));
  }, _.Scene.extend = function (e) {
    var t = this;_.Scene = function () {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
    }, R.extend(_.Scene, t), _.Scene.prototype = t.prototype, _.Scene.prototype.constructor = _.Scene;
  }, _.Event = function (e, t, n, r) {
    for (var i in r = r || {}) {
      this[i] = r[i];
    }return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this;
  };var R = _._util = function (s) {
    var n,
        e = {},
        a = function a(e) {
      return parseFloat(e) || 0;
    },
        l = function l(e) {
      return e.currentStyle ? e.currentStyle : s.getComputedStyle(e);
    },
        r = function r(e, t, n, _r) {
      if ((t = t === document ? s : t) === s) _r = !1;else if (!u.DomElement(t)) return 0;e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();var i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;if (n && _r) {
        var o = l(t);i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight);
      }return i;
    },
        c = function c(e) {
      return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
        return e[1].toUpperCase();
      });
    };e.extend = function (e) {
      for (e = e || {}, n = 1; n < arguments.length; n++) {
        if (arguments[n]) for (var t in arguments[n]) {
          arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
        }
      }return e;
    }, e.isMarginCollapseType = function (e) {
      return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e);
    };var i = 0,
        t = ["ms", "moz", "webkit", "o"],
        o = s.requestAnimationFrame,
        f = s.cancelAnimationFrame;for (n = 0; !o && n < 4; ++n) {
      o = s[t[n] + "RequestAnimationFrame"], f = s[t[n] + "CancelAnimationFrame"] || s[t[n] + "CancelRequestAnimationFrame"];
    }o || (o = function o(e) {
      var t = new Date().getTime(),
          n = Math.max(0, 16 - (t - i)),
          r = s.setTimeout(function () {
        e(t + n);
      }, n);return i = t + n, r;
    }), f || (f = function f(e) {
      s.clearTimeout(e);
    }), e.rAF = o.bind(s), e.cAF = f.bind(s);var u = e.type = function (e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
    };u.String = function (e) {
      return "string" === u(e);
    }, u.Function = function (e) {
      return "function" === u(e);
    }, u.Array = function (e) {
      return Array.isArray(e);
    }, u.Number = function (e) {
      return !u.Array(e) && 0 <= e - parseFloat(e) + 1;
    }, u.DomElement = function (e) {
      return "object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
    };var d = e.get = {};return d.elements = function (e) {
      var t = [];if (u.String(e)) try {
        e = document.querySelectorAll(e);
      } catch (e) {
        return t;
      }if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList) for (var n = 0, r = t.length = e.length; n < r; n++) {
        var i = e[n];t[n] = u.DomElement(i) ? i : d.elements(i);
      } else (u.DomElement(e) || e === document || e === s) && (t = [e]);return t;
    }, d.scrollTop = function (e) {
      return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0;
    }, d.scrollLeft = function (e) {
      return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0;
    }, d.width = function (e, t, n) {
      return r("width", e, t, n);
    }, d.height = function (e, t, n) {
      return r("height", e, t, n);
    }, d.offset = function (e, t) {
      var n = { top: 0, left: 0 };if (e && e.getBoundingClientRect) {
        var r = e.getBoundingClientRect();n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft());
      }return n;
    }, e.addClass = function (e, t) {
      t && (e.classList ? e.classList.add(t) : e.className += " " + t);
    }, e.removeClass = function (e, t) {
      t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }, e.css = function (e, t) {
      if (u.String(t)) return l(e)[c(t)];if (u.Array(t)) {
        var n = {},
            r = l(e);return t.forEach(function (e, t) {
          n[e] = r[c(e)];
        }), n;
      }for (var i in t) {
        var o = t[i];o == parseFloat(o) && (o += "px"), e.style[c(i)] = o;
      }
    }, e;
  }(window || {});return _;
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (q, g) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (g),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = g() : q.Rellax = g();
})("undefined" !== typeof window ? window : global, function () {
  var q = function q(g, t) {
    var b = Object.create(q.prototype),
        l = 0,
        u = 0,
        n = 0,
        v = 0,
        c = [],
        w = !0,
        A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (b) {
      return setTimeout(b, 1E3 / 60);
    },
        p = null,
        x = !1;try {
      var k = Object.defineProperty({}, "passive", { get: function get() {
          x = !0;
        } });window.addEventListener("testPassive", null, k);window.removeEventListener("testPassive", null, k);
    } catch (f) {}var J = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
        K = window.transformProp || function () {
      var b = document.createElement("div");if (null === b.style.transform) {
        var a = ["Webkit", "Moz", "ms"],
            d;for (d in a) {
          if (void 0 !== b.style[a[d] + "Transform"]) return a[d] + "Transform";
        }
      }return "transform";
    }();b.options = { speed: -2, verticalSpeed: null,
      horizontalSpeed: null, center: !1, wrapper: null, relativeToWrapper: !1, round: !0, vertical: !0, horizontal: !1, verticalScrollAxis: "y", horizontalScrollAxis: "x", callback: function callback() {} };t && Object.keys(t).forEach(function (c) {
      b.options[c] = t[c];
    });g || (g = ".rellax");k = "string" === typeof g ? document.querySelectorAll(g) : [g];if (0 < k.length) {
      b.elems = k;if (b.options.wrapper && !b.options.wrapper.nodeType) if (k = document.querySelector(b.options.wrapper)) b.options.wrapper = k;else {
        console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
        return;
      }var B = function B() {
        for (var f = 0; f < c.length; f++) {
          b.elems[f].style.cssText = c[f].style;
        }c = [];u = window.innerHeight;v = window.innerWidth;D();for (f = 0; f < b.elems.length; f++) {
          var a = b.elems[f],
              d = a.getAttribute("data-rellax-percentage"),
              e = a.getAttribute("data-rellax-speed"),
              y = a.getAttribute("data-rellax-vertical-speed"),
              g = a.getAttribute("data-rellax-horizontal-speed"),
              h = a.getAttribute("data-rellax-vertical-scroll-axis"),
              k = a.getAttribute("data-rellax-horizontal-scroll-axis"),
              l = a.getAttribute("data-rellax-zindex") || 0,
              n = a.getAttribute("data-rellax-min"),
              p = a.getAttribute("data-rellax-max"),
              q = a.getAttribute("data-rellax-min-x"),
              t = a.getAttribute("data-rellax-max-x"),
              x = a.getAttribute("data-rellax-min-y"),
              A = a.getAttribute("data-rellax-max-y"),
              z = b.options.wrapper ? b.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;b.options.relativeToWrapper && (z = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - b.options.wrapper.offsetTop);var m = b.options.vertical ? d || b.options.center ? z : 0 : 0,
              r = b.options.horizontal ? d || b.options.center ? b.options.wrapper ? b.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;z = m + a.getBoundingClientRect().top;var E = a.clientHeight || a.offsetHeight || a.scrollHeight,
              F = r + a.getBoundingClientRect().left,
              G = a.clientWidth || a.offsetWidth || a.scrollWidth;m = d ? d : (m - z + u) / (E + u);d = d ? d : (r - F + v) / (G + v);b.options.center && (m = d = .5);e = e ? e : b.options.speed;y = y ? y : b.options.verticalSpeed;
          g = g ? g : b.options.horizontalSpeed;h = h ? h : b.options.verticalScrollAxis;k = k ? k : b.options.horizontalScrollAxis;m = H(d, m, e, y, g);a = a.style.cssText;d = "";if (r = /transform\s*:/i.exec(a)) d = a.slice(r.index), d = (r = d.indexOf(";")) ? " " + d.slice(11, r).replace(/\s/g, "") : " " + d.slice(11).replace(/\s/g, "");c.push({ baseX: m.x, baseY: m.y, top: z, left: F, height: E, width: G, speed: e, verticalSpeed: y, horizontalSpeed: g, verticalScrollAxis: h, horizontalScrollAxis: k, style: a, transform: d, zindex: l, min: n, max: p, minX: q, maxX: t, minY: x, maxY: A });
        }I();
        w && (window.addEventListener("resize", B), w = !1, C());
      },
          D = function D() {
        var c = l,
            a = n;l = b.options.wrapper ? b.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;n = b.options.wrapper ? b.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;b.options.relativeToWrapper && (l = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - b.options.wrapper.offsetTop);return c != l && b.options.vertical || a != n && b.options.horizontal ? !0 : !1;
      },
          H = function H(c, a, d, e, g) {
        var f = {};c = 100 * (g ? g : d) * (1 - c);a = 100 * (e ? e : d) * (1 - a);f.x = b.options.round ? Math.round(c) : Math.round(100 * c) / 100;f.y = b.options.round ? Math.round(a) : Math.round(100 * a) / 100;return f;
      },
          h = function h() {
        window.removeEventListener("resize", h);window.removeEventListener("orientationchange", h);(b.options.wrapper ? b.options.wrapper : window).removeEventListener("scroll", h);(b.options.wrapper ? b.options.wrapper : document).removeEventListener("touchmove", h);p = A(C);
      },
          C = function C() {
        D() && !1 === w ? (I(), p = A(C)) : (p = null, window.addEventListener("resize", h), window.addEventListener("orientationchange", h), (b.options.wrapper ? b.options.wrapper : window).addEventListener("scroll", h, x ? { passive: !0 } : !1), (b.options.wrapper ? b.options.wrapper : document).addEventListener("touchmove", h, x ? { passive: !0 } : !1));
      },
          I = function I() {
        for (var f, a = 0; a < b.elems.length; a++) {
          var d = c[a].verticalScrollAxis.toLowerCase(),
              e = c[a].horizontalScrollAxis.toLowerCase();
          f = -1 != d.indexOf("x") ? l : 0;d = -1 != d.indexOf("y") ? l : 0;var g = -1 != e.indexOf("x") ? n : 0;e = -1 != e.indexOf("y") ? n : 0;f = H((f + g - c[a].left + v) / (c[a].width + v), (d + e - c[a].top + u) / (c[a].height + u), c[a].speed, c[a].verticalSpeed, c[a].horizontalSpeed);e = f.y - c[a].baseY;d = f.x - c[a].baseX;null !== c[a].min && (b.options.vertical && !b.options.horizontal && (e = e <= c[a].min ? c[a].min : e), b.options.horizontal && !b.options.vertical && (d = d <= c[a].min ? c[a].min : d));null != c[a].minY && (e = e <= c[a].minY ? c[a].minY : e);null != c[a].minX && (d = d <= c[a].minX ? c[a].minX : d);null !== c[a].max && (b.options.vertical && !b.options.horizontal && (e = e >= c[a].max ? c[a].max : e), b.options.horizontal && !b.options.vertical && (d = d >= c[a].max ? c[a].max : d));null != c[a].maxY && (e = e >= c[a].maxY ? c[a].maxY : e);null != c[a].maxX && (d = d >= c[a].maxX ? c[a].maxX : d);b.elems[a].style[K] = "translate3d(" + (b.options.horizontal ? d : "0") + "px," + (b.options.vertical ? e : "0") + "px," + c[a].zindex + "px) " + c[a].transform;
        }b.options.callback(f);
      };b.destroy = function () {
        for (var f = 0; f < b.elems.length; f++) {
          b.elems[f].style.cssText = c[f].style;
        }w || (window.removeEventListener("resize", B), w = !0);J(p);p = null;
      };B();b.refresh = B;return b;
    }console.warn("Rellax: The elements you're trying to select don't exist.");
  };return q;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map