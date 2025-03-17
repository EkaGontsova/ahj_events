import GameBoard from "./GameBoard.js";
import Goblin from "./Goblin.js";

export default class Game {
  constructor() {
    this.board = new GameBoard();
    this.goblin = new Goblin();
    this.score = 0;
    this.missed = 0;

    this.startButton = document.createElement("button");
    this.startButton.textContent = "Начать игру";
    this.startButton.className = "start-button";
    document.body.appendChild(this.startButton);

    this.hitsDisplay = document.createElement("h2");
    this.hitsDisplay.className = "score";
    this.missesDisplay = document.createElement("h2");
    this.missesDisplay.className = "score";

    document.body.appendChild(this.hitsDisplay);
    document.body.appendChild(this.missesDisplay);
    document.body.appendChild(this.board.board);

    this.startButton.addEventListener("click", () => this.startGame());
  }

  startGame() {
    this.resetGame();
    this.goblin.show(this.board.getRandomCell());

    this.goblinInterval = setInterval(() => {
      this.goblin.hide();
      this.goblin.show(this.board.getRandomCell());

      setTimeout(() => {
        if (this.goblin.isVisible) {
          this.goblin.hide();
          this.missed += 1;
          this.updateMisses();
          this.checkGameOver();
        }
      }, 1000);
    }, 2000);

    this.board.cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (this.goblin.isVisible && cell.contains(this.goblin.element)) {
          this.score += 1;
          this.updateHits();
          this.goblin.hide();
          this.checkGameOver();
        }
      });
    });
  }

  resetGame() {
    this.score = 0;
    this.missed = 0;
    this.updateHits();
    this.updateMisses();
    clearInterval(this.goblinInterval);
  }

  updateHits() {
    this.hitsDisplay.textContent = `Попадания: ${this.score}`;
  }

  updateMisses() {
    this.missesDisplay.textContent = `Промахи: ${this.missed}`;
  }

  checkGameOver() {
    if (this.missed >= 5) {
      clearInterval(this.goblinInterval);
      alert(`Игра окончена! Ваш счет: ${this.score}`);
    }
  }
}
