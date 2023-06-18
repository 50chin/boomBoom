// Сделаем отдельный класс для отображения игры в консоли.
class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    // const gamerName = process.argv[2];
    const livesView = '❤ ';
    const yourTeamName = 'Dream Team';

    // Тут всё рисуем.
    console.clear();
    console.log(`Lives: ${livesView.repeat(this.game.hero.lives.length - 1)}`);
    console.log('\n');
    console.log(this.game.track.join(''));
    // console.log(this.game.track2.join(''));
    console.log('\n');

    console.log(`Player's score - ${this.game.score}`);
    console.log(`Player nickname - ${this.game.hero.name}`);
    console.log('\n');
    console.log(`                    Created by ${yourTeamName} `);
  }
}

module.exports = View;
