import goblinImage from "./img/goblin.png";

export default class Goblin {
  constructor() {
    this.element = document.createElement("img");
    this.element.src = goblinImage;
    this.element.id = "goblin";
    this.isVisible = false;
  }

  show(cell) {
    cell.appendChild(this.element);
    this.isVisible = true;
  }

  hide() {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.isVisible = false;
  }
}
