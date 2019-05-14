const View = require('../src//ttt-view.js');// require appropriate file
const Game = require('../src/game.js');// require appropriate file

  $(() => {
    var game = new Game();
    var view = new View(game, $('ttt'));
  });
