import $ from 'jquery';

import './css/styles.scss';
import Game from './game';
import Player from './player';
import { board } from './constants';

$(document).ready(function() {
  let game;

  $('#startGame').click(function(event) {
    let player1 = new Player(
      $('#player1Name').val(),
      $('#player1Icon').val()
    );
    let player2 = new Player(
      $('#player2Name').val(),
      $('#player2Icon').val()
    );

    game = new Game(board, [player1, player2]);

    $('#monopolyForm').hide();
    $('#monopoly-board').css('visibility','visible');
    
    game.players.forEach((player) => {
      $(`#${player.currentPosition}`).append(`<div class="${player.icon}"></div>`);
    });

    event.preventDefault();
  });

  $('#rollDice').click(function(event) {
    rollDice(game);

    event.preventDefault();
  });
});

function rollDice(game) {
  game.dice1 = Math.floor(Math.random() * 6) + 1;
  game.dice2 = Math.floor(Math.random() * 6) + 1;
  let diceTotal = game.dice1 + game.dice2;
  $(`.${game.getCurrentPlayer().icon}`).remove();

  if (game.dice1 === game.dice2) {
    // change player position and roll dice again
    game.getCurrentPlayer().move(diceTotal);
    $(`#${game.getCurrentPlayer().currentPosition}`).append(`<div class="${game.getCurrentPlayer().icon}"></div>`);

    game.doubleCount++;
    
    if (game.doubleCount % 3 === 0) {
      game.doubleCount = 0;
      game.getCurrentPlayer().move(30);
      $(`#${game.getCurrentPlayer().currentPosition}`).append(`<div class="${game.getCurrentPlayer().icon}"></div>`);
      switchPlayer(game);
    }
  } 
  else {
    game.getCurrentPlayer().move(diceTotal);
    console.log('currentPlayer position', game.getCurrentPlayer().currentPosition);
    $(`#${game.getCurrentPlayer().currentPosition}`).append(`<div class="${game.getCurrentPlayer().icon}"></div>`);

    switchPlayer(game);
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
