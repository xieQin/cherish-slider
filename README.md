# cherish-slider

[online demo](http://2.xieqin.sinaapp.com/slider/)

# 一、使用

```html
  <div class="slider">
    <ul id="slider-img">
      <li><img src="https://fuss10.elemecdn.com/e/ea/6aff99c88dbc4eed6b46034886b8fpng.png?imageMogr2/format/webp/quality/85" alt=""></li>
      <li><img src="https://fuss10.elemecdn.com/2/0a/ceef756987f56fd0ec73b01bd4493png.png?imageMogr2/format/webp/quality/85" alt=""></li>
      <li><img src="https://fuss10.elemecdn.com/a/20/39f31c22d1f01b35d79b2a06da1ebpng.png?imageMogr2/format/webp/quality/85" alt=""></li>
    </ul>
  </div>
```

```js
var slider = Slider('#slider-img', {
  time: 2000, //轮播间隔，默认设置1000ms
  index: 1 //设置起始图片，默认为0
})
slider.start()
```
```js
Slider('#slider-img', {
  time: 2000,
  index: 1
}).start()
```

# 二、API
```js
slider.start() //启动轮播

slider.stop() //停止轮播
```


