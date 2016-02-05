//State Test.Start

'use strict';

Test.Start = function () {};

Test.Start.prototype = {

  init: function () {
    this.background = null;
  },

  create: function () {
    this.game.state.start('play');
  }



};
