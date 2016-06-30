(function(exports, $) {
  'use strict'

  var _config = {}
  var _el

  var Slider = function (el, opts) {
    return new Slider.prototype.init(el, opts)
  }

  Slider.prototype = {
    init: function(el, opts) {
      _el = el
      _config = opts
      return this
    },
    start: function() {
      console.log(_el)
      console.log(_config)
    }
  }

  Slider.prototype.init.prototype = Slider.prototype

  exports.Slider = Slider

})(window, jQuery)