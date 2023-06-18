// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');
const sound = require('play-sound')((opts = {}));
// Инициализация игры с настройками.
const game = new Game({
  trackLength: 50,
});

// Запуск игры.

game.play();
runInteractiveConsole(game);
sound.play('src/sounds/Sound_06881.mp3');
