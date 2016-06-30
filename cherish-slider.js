(function(exports, $) {
  'use strict'

  var _el, _config = {
    count: 0,
    time: 1000
  }

  var Slider = function (el, opts) {
    return new Slider.prototype.init(el, opts)
  }

  function _extend (o, n) {
    for (var p in n) {
      if (n.hasOwnProperty(p) && !o.hasOwnProperty(p)) {
        o[p]=n[p]
      }
    }
    return o
  }

  function _change () {
    var height = _config.count * 100
    $(_el).css('top', '-' + height + 'px')
    $("#slider-index li").removeClass('active')
    $("#slider-index li").eq(_config.count).addClass('active')
    _config.count++
  }

  function _start () {
    setInterval(function() {
      _config.count = ((_config.count + 1) >= 3) ? (_config.count + 1 - 3) : (_config.count + 1)
      _change()
    }, _config.time)
  }

  Slider.prototype = {
    init: function (el, opts) {
      _el = el
      _config = _extend (opts, _config)
      return this
    },
    start: function () {
      _start()
    }
  }

  Slider.prototype.init.prototype = Slider.prototype

  exports.Slider = Slider

})(window, jQuery)