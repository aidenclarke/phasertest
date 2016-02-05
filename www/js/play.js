//State Test.Play

'use strict';

var player;


Test.Play = function () {};

Test.Play.prototype = {

  init: function () {
  },

  create: function () {
    this.background = null;
    game.add.sprite(0,0,'player');
    game.physics.enable(player, Phaser.Physics.ARCADE);
  },

  update: function () {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;





    if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
      player.body.velocity.y = -300;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
       player.body.velocity.y = 300;
     }

     if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
       player.body.velocity.x = -300;
     }

     if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
       player.body.velocity.x = 300;
     }
  },

  end: function () {
  },

}
