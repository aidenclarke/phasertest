//State Test.Preload


'use strict';

Test.Preload = function () {};

Test.Preload.prototype = {

  preload: function () {
    this.load.spritesheet('background','assets/background.jpg',600,600);
    this.load.spritesheet('player','assets/player.jpg',130,225);
  },

  create: function () {
    this.game.state.start('start');
  }


};
