"use strict";

var _scrollSnap = _interopRequireDefault(require("scroll-snap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 'use strict';
// (function splashEvents(){
//   const CONFIGS = {
//     'triggerSelector': '[data-splash-trigger]'
//   };
//   function collapseMarquee() {
//     document.body.classList.remove('splash-load');
//   }
//   document.addEventListener('wheel', function(event) {
//     if (event.deltaY > 5) {
//       collapseMarquee();
//     }
//   });
//   document.querySelector(CONFIGS.triggerSelector).addEventListener('click', collapseMarquee);
// })();
var snapConfig = {
  /**
   * snap-destination for x and y axes
   * should be a valid css value expressed as px|%|vw|vh
   **/
  snapDestinationX: '0%',
  snapDestinationY: '100%',

  /**
   * time in ms after which scrolling is considered finished
   * [default: 100]
   **/
  timeout: 100,

  /**
   * duration in ms for the smooth snap
   * [default: 300]
   **/
  duration: 300,

  /**
   * threshold to reach before scrolling to next/prev element, expressed as a percentage in the range [0, 1]
   * [default: 0.2]
   **/
  threshold: 0.2,

  /**
   * custom easing function
   * [default: easeInOutQuad]
   * for reference: https://gist.github.com/gre/1650294
   * @param t normalized time typically in the range [0, 1]
   **/
  easing: easeInOutQuad
};
var element = document.getElementById('scroll__container');
var snapObject = new _scrollSnap["default"](element, snapConfig);
snapObject.bind(); // unbind the element
// snapObject.unbind();