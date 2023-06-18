// Наш герой.
const sound = require('play-sound')((opts = {}));

class Hero {

  constructor({
    position,
    boomerang,
    lives = ['1', '2', '3'],
    name = 'Игрок',
  }) {
  constructor({ position, boomerang, lives = 3 }) {
    this.skin = '🤠';
    this.position = position;
    this.boomerang = boomerang;
    this.lives = lives;
    this.name = name;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.position = this.position + 1; // Устанавливаем начальную позицию бумеранга
    this.boomerang.fly();
  }

  die() {
    // if (this.hero.position === this.enemy.position) this.lives -= 1;
    this.skin = '💀';
    // sound.play('src/sounds/inecraft_zombie_aaa.wav');
    console.log(`
    └┐░░█░█░█▀█░█░█░░┌┘░░█▀█░█▀█░█▀▀░░┌┘░░█▀▄░█▀▀░█▀█░█▀▄░┌┘
    └┐░░▀█▀░█░█░█░█░░┌┘░░█▀█░█▀▄░█▀▀░░┌┘░░█░█░█▀▀░█▀█░█░█░┌┘
    └┐░░░▀░░▀▀▀░▀▀▀░░┌┘░░▀░▀░▀░▀░▀▀▀░░┌┘░░▀▀░░▀▀▀░▀░▀░▀▀░░┌┘

                       ╱▔▔▔▔▔▔▔╲╱▔▔▔▔▔╲
                       ▏╮╭┈┈╮╭┈╮▏╭╮┈╭╮▕
                       ▏┊╱▔▉┊╱▔▉▏▊┃▕▋┃▕
                       ▏╯╲▂╱┊╲▂╱▏▔▅┈▔▔▕
                       ╲╭┳┳╮▕▋╭╱╲┳┳┳┫▂╱
                       ┈▔▏┣┳┳┳┳▏▕┻┻┻╯▏┈
                       ┈┈▏╰┻┻┻┻▏▕▂▂▂╱┈┈
                       ┈┈╲▂▂▂▂▂▏┈┈┈┈┈┈┈
        `);
);
    process.exit();
  }
}

module.exports = Hero;
