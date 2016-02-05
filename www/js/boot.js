// Test.Boot state

'use strict';

var Test = {
};

Test.Boot = function () {};

Test.Boot.prototype = {

  init: function () {
      console.log("Booting the Test for phaser.", "color:#fdf6e3; background:#073642");
  },

  preload: function () {
      this.game.load.spritesheet('html','assets/html.png', 46,64);
  },

  create: function () {
    this.game.stage.backgroundColor = "#073642";
    this.game.state.start('preload');
  }

};
