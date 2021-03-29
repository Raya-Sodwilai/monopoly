export default class Player {
  constructor (name, icon) {
    this.name = name;
    this.icon = icon;
    this.money = 1500;
    this.currentPosition = 0;
  }

  move(position) {
    if (this.currentPosition + position > 39) {
      this.currentPosition += position - 39
    } 
    else {
      this.currentPosition += position;
    }
  }
}