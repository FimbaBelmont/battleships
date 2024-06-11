import { Player } from "./players.js";
import { renderGameBoard } from "./gameRender.js";
import { renderShips, renderPlacementContainer } from "./renderShips.js";


let aiGame = 0;

function aiGameStart() {
  //Starts the game with computer
  const player1 = Player()
  const player2 = Player() //COMPUTER
  aiGame = 1;
  document.querySelector(".menuScreen").classList.add("hide");
  document.querySelector(".shipPlaceScreen").classList.remove("hide");
  renderShips(player1);
  renderPlacementContainer(player1);
  // aiSelectsShips();
  

  
  // take these into selection screen confirment button
  // player1.turn = true;
  // document.querySelector(".screen").classList.remove("hide");
  // document.querySelector(".hideBtt").classList.add("hide");
  // document.querySelector(".pass").classList.add("hide");
  // renderGameBoard(player1, player2, true);
}

let currentPlayers = [];

function playerGameStart() {
  //Start 2-player game
  document.querySelector(".pass").classList.add("show");

  player1.turn = true;
  currentPlayers.push(player1, player2);
  document.querySelector(".menuScreen").classList.add("hide");
  document.querySelector(".screen").classList.remove("hide");
  renderGameBoard(player1, player2, false);
  renderShips(player1);
}

export { aiGameStart, playerGameStart, currentPlayers }
