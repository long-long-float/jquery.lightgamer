(function($) {
  var Game, game;

  Game = (function() {
    function Game(opt, $canvas) {
      this.opt = $.extend({
        width: 100,
        height: 100,
        fps: 30,
        oninit: function(canvas) {},
        onframe: function(canvas) {}
      }, opt);
      this.canvas = $canvas.attr('width', this.opt.width).attr('height', this.opt.height).get(0).getContext('2d');
      this.opt.oninit();
    }

    Game.prototype.start = function() {
      var _this = this;

      if (this.intervalID) {
        return;
      }
      return this.intervalID = setInterval((function() {
        var old;

        old = _this.canvas.fillStyle;
        _this.canvas.fillStyle = '#fff';
        _this.canvas.fillRect(0, 0, _this.opt.width, _this.opt.height);
        _this.canvas.fillStyle = old;
        return _this.opt.onframe(_this.canvas);
      }), 1000.0 / this.opt.fps);
    };

    Game.prototype.stop = function() {
      if (!this.intervalID) {
        return;
      }
      clearInterval(this.intervalID);
      return this.intervalID = null;
    };

    return Game;

  })();
  game = null;
  return $.fn.lightgamer = function(opt) {
    switch (opt) {
      case 'start':
        game.start();
        break;
      case 'stop':
        game.stop();
        break;
      default:
        game = new Game(opt, $(this));
        game.start();
    }
    $(this).get(0).game = game;
    return $(this);
  };
})(jQuery);