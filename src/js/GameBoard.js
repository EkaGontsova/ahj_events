export default class GameBoard {
  constructor() {
    this.board = document.createElement("div");
    this.board.className = "game-board";
    this.cells = [];

    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      this.board.appendChild(cell);
      this.cells.push(cell);
    }
  }

  getRandomCell() {
    const randomIndex = Math.floor(Math.random() * this.cells.length);
    return this.cells[randomIndex];
  }
}
