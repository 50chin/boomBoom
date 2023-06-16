// Сделаем отдельный класс для отображения игры в консоли.
class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = 'United Sexy Boys';

    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(''));
    console.log('\n\n');
    console.log(` Игра cоздана конмадой ${yourTeamName}`);
  }
}

module.exports = View;
