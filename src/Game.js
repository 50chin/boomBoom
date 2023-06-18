// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const sound = require('play-sound')((opts = {}));

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Boomerang = require('./game-models/Boomerang');
const readlineSync = require('readline-sync');

let playerName = '';
// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {

    this.trackLength = trackLength; // h

    this.boomerang = new Boomerang(trackLength);
    this.hero = new Hero({ position: 0, boomerang: this.boomerang });
    this.enemy = new Enemy(trackLength);
    this.view = new View(this);
    this.track = [];
    this.regenerateTrack();
    this.score = 0;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin; // Добавьте эту строку
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }
  }

  check() {
    // удаляю жизни с помощью POP()
    if (this.hero.position === this.enemy.position) this.hero.lives.pop();
    sound.play('src/sounds/inecraft_zombie_.wav');
    if (this.hero.lives.length <= 0) this.hero.die();
  }

  play() {
    playerName = readlineSync.question('What is your name? ');
    process.stdin.resume(); // решить конфликт между пакетами npm
    this.hero.name = playerName;
    setInterval(() => {
      // Let's play!
      this.handleCollisions();
      this.regenerateTrack();

      // Добавьте логику движения врагов, например, двигаться влево
      this.enemy.moveLeft();

      // Если враг достиг края трека, перемещаем его в начало
      if (this.enemy.position < 0) {
        this.enemy.position = this.trackLength - 1;
      }

      this.view.render(this.track);
    }, 100); // Вы можете настроить частоту обновления игрового цикла
  }

  // изменил вызов метода c this.die на this.check

  handleCollisions() {
    if (this.hero.position === this.enemy.position) {
      this.check();
    }

    if (this.boomerang.position === this.enemy.position) {
      this.enemy.die();
      // console.log(`${this.lives}`);
      this.score += 1;
      this.boomerang.position = -1;
      /* this.enemy = new Enemy(this.trackLength); // Создаем нового врага */
    }
  }
}

module.exports = Game;
