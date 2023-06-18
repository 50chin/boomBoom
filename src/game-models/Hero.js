// Наш герой.
const sound = require('play-sound')((opts = {}));

class Hero {
  constructor({
    position,
    boomerang,
    lives = ['1', '2', '3'],
    name = 'Игрок',
  }) {
    this.skin = '👮';
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
    sound.play('src/sounds/metanie-noja-v-stenu.wav');
  }

  die() {
    this.skin = '💀';
    sound.play('src/sounds/inecraft_zombie_aaa.wav');
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
    process.exit();
  }
}

module.exports = Hero;
