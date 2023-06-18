// Сделаем отдельный класс для отображения игры в консоли.
class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = 'USB';
    // const gamerName = process.argv[2];
    const livesView = '💖 ';

    // Тут всё рисуем.
    console.clear();
    console.log(`${livesView.repeat(this.game.hero.lives.length)}`);
    console.log('\n');
    console.log(this.game.track.join(''));
    console.log('\n\n');
    console.log(`Created by ${yourTeamName} with love`);
    console.log(`Player's score ${this.game.score}`);
    console.log(`Player nickname ${this.game.hero.name}`);
  }
}

module.exports = View;
