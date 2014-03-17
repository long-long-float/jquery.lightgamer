jquery.lightgamer
=================

A jQuery plugin for simple game
This requires html5(canvas)

#Example
```js
$('#canvas').lightgamer({
  width: 500,
  height: 500,
  fps: 30,
  oninit: function(canvas) {
    //initialize...
  },
  onframe: function(canvas) {
    //update and draw
  }
}).click(function(event){
  //You can write jQuery event
});

$('#canvas').lightgamer('stop'); //stop game
$('#canvas').lightgamer('start'); //start game after stop
```
