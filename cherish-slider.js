(function(exports, $) {
  'use strict'

  var _el,
  intervalId,
  _config = {
    index: 0, //轮播初始设置
    time: 1000 //轮播间隔
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
    var height = _config.index * 100
    $(_el).css('top', '-' + height + 'px')
    $("#slider-index li").removeClass('active')
    $("#slider-index li").eq(_config.index).addClass('active')
  }

  function _stop () {
    clearInterval(intervalId)
  }

  function _start () {
    renderIndex()

    $('#slider-index li').on('mouseover', function() {
      _stop ()
    })

    $('#slider-index li').on('mouseout', function() {
      _animation ()
    })

    $('#slider-index li').on('click', function() {
      var i = $(this).index() - 0
      _stop ()
      _config.index = i
      _change ()
    })

    _animation ()
  }

  function _animation () {
    intervalId = setInterval(function() {
      _config.index = ((_config.index + 1) >= _config.length) ? (_config.index + 1 - _config.length) : (_config.index + 1)
      _change()
    }, _config.time)
  }

  function renderIndex() {
    var html = [
      '<ol id="slider-index">',
      '</ol>'
    ].join('')
    $(_el).parent().append(html)
    var ol_html = ''
    for(var i = 0; i < _config.length; i ++) {
      ol_html += '<li> ' + (i + 1) + '</li>'
    }
    $('#slider-index').append(ol_html)
    _change ()
  }

  Slider.prototype = {
    init: function (el, opts) {
      _el = el
      _config = _extend (opts, _config)
      _config.length = $(_el).children().length - 0
      return this
    },
    /**
     * [start 启动轮播]
     * @return {[type]} [description]
     */
    start: function () {
      _start()
    }
  }

  Slider.prototype.init.prototype = Slider.prototype

  exports.Slider = Slider

})(window, jQuery)