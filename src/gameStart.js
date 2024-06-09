import { Player } from "./players.js";
import { renderGameBoard } from "./gameRender.js";
import { renderShips } from "./renderShips.js";

function aiGameStart() {
  //Starts the game with computer
  const player1 = Player();
  let cord = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  let cord2 = [
    [2, 1],
    [2, 2],
    [2, 3],
  ];
  let cord3 = [
    [7, 1],
    [6, 1],
  ];
  player1.board.placeShip(cord);
  player1.board.placeShip(cord2);
  player1.board.placeShip(cord3);
  const player2 = Player();
  player2.board.placeShip(cord);
  player2.board.placeShip(cord3);
  player1.turn = true;
  
  document.querySelector(".hideBtt").classList.add("hide");
  document.querySelector(".pass").classList.add("hide");
  document.querySelector(".menuScreen").classList.add("hide");
  document.querySelector(".screen").classList.remove("hide");
  renderGameBoard(player1, player2, true);
}

let currentPlayers = [];

function playerGameStart() {
  //Start 2-player game
  document.querySelector(".pass").classList.add("show");
  const player1 = Player();
  let cord = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  let cord2 = [
    [2, 1],
    [2, 2],
    [2, 3],
  ];
  let cord3 = [
    [7, 1],
    [6, 1],
  ];
  player1.board.placeShip(cord);
  player1.board.placeShip(cord2);
  player1.board.placeShip(cord3);
  const player2 = Player();
  player2.board.placeShip(cord);
  player2.board.placeShip(cord3);
  player1.turn = true;
  currentPlayers.push(player1, player2);
  document.querySelector(".menuScreen").classList.add("hide");
  document.querySelector(".screen").classList.remove("hide");
  renderGameBoard(player1, player2, false);
  renderShips(player1);
}

export { aiGameStart, playerGameStart, currentPlayers }
