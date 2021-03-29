import Game from './game';
import Player from './player';
import { board } from './constants';

export const startGame = () => {
  let player1 = new Player('John', 'blue');
  let player2 = new Player('Jennifer', 'red');
  let game = new Game(board, [player1, player2]);

  // console.log('game', game);

  /* eslint-disable */
  while(true) {
    rollDice(game);
  }
  /* eslint-enable */
}

function rollDice(game) {
  game.dice1 = Math.floor(Math.random() * 6) + 1;
  game.dice2 = Math.floor(Math.random() * 6) + 1;

  if (game.dice1 === game.dice2) {
    // change player position and roll dice again
    game.getCurrentPlayer().move(game.dice1 + game.dice2);
    game.doubleCount++;
    
    if (game.doubleCount % 3 === 0) {
      game.doubleCount = 0;
      game.getCurrentPlayer().move(30);
      switchPlayer(game);


      return;
    }

    rollDice(game);
  } 
  else {
    game.getCurrentPlayer().move(game.dice1 + game.dice2);
    switchPlayer(game);

    return;
  }
}

function switchPlayer(game) {
  if (game.players.length === game.currentPlayer) {
    game.setCurrentPlayer(1);
  }
  else {
    game.setCurrentPlayer(game.currentPlayer + 1);
  }
}

// startGame();
