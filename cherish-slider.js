(function(exports, $) {
  'use strict'

  var _el, //轮播节点
  intervalId, //定时器id
  _config = {
    index: 0, //轮播初始设置
    time: 1000 //轮播间隔
  }

  var Slider = function (el, opts) {
    return new Slider.prototype.init(el, opts)
  }

  /**
   * [_extend 合并配置]
   * @param  {[type]} o [description]
   * @param  {[type]} n [description]
   * @return {[type]}   [description]
   */
  function _extend (o, n) {
    for (var p in n) {
      if (n.hasOwnProperty(p) && !o.hasOwnProperty(p)) {
        o[p]=n[p]
      }
    }
    return o
  }

  /**
   * [_change 样式修改及动画]
   * @return {[type]} [description]
   */
  function _change () {
    var height = _config.index * 100
    $(_el).css('top', '-' + height + 'px')
    $("#slider-index li").removeClass('active')
    $("#slider-index li").eq(_config.index).addClass('active')
  }

  /**
   * [_stop 停止]
   * @return {[type]} [description]
   */
  function _stop () {
    clearInterval(intervalId)
  }

  function _start () {
    renderIndex()

    //监听事件
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

  /**
   * [_animation 定时器]
   * @return {[type]} [description]
   */
  function _animation () {
    intervalId = setInterval(function() {
      _config.index = ((_config.index + 1) >= _config.length) ? (_config.index + 1 - _config.length) : (_config.index + 1)
      _change()
    }, _config.time)
  }

  /**
   * [renderIndex 显示轮播指引]
   * @return {[type]} [description]
   */
  function renderIndex() {
    $('#slider-index').remove()
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
      _start ()
    },

    /**
     * [stop 终止轮播]
     * @return {[type]} [description]
     */
    stop: function () {
      _stop ()
    }
  }

  Slider.prototype.init.prototype = Slider.prototype

  exports.Slider = Slider

})(window, jQuery)