export default class Game {
  constructor(board, players) {
    this.board = board;
    this.players = players;
    this.currentPlayer = 1;
    this.dice1 = 0;
    this.dice2 = 0;
    this.doubleCount = 0;
    // this.chanceCards = chanceCards;
    // this.communityCards = communityCards;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayer - 1];
  }

  setCurrentPlayer(player) {
    this.currentPlayer = player;
  }
}