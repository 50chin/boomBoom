// Сделаем отдельный класс для отображения игры в консоли.


class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = 'Elbrus';
    const gamerName = process.argv[2];
    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
    console.log(`Player's score ${this.game.score}`);
    console.log(`Player nickname ${gamerName}`);
    
  }
}

module.exports = View;
