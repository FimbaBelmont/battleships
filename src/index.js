
import { Ship } from "./ships.js";
import {gameBoard} from "./gameBoard.js";
import "./stylesheet.css";
import { aiGameStart, playerGameStart } from "./gameStart.js"; 
import { renderGameBoard } from "./gameRender.js";
import { currentPlayers } from "./gameStart.js";
import { Player } from "./players.js";
import { renderShips, renderPlacementContainer } from "./renderShips.js";

//Main Menu
const aiStartBtt = document.querySelector("#aiGame");
const humanStartBtt = document.querySelector("#humanGame");
//take the game to ship selection
const creditsBtt = document.querySelector("#credits");

aiStartBtt.addEventListener("click", ()=>{
    aiGameStart();
})

humanStartBtt.addEventListener("click", ()=>{
    playerGameStart();
})

//Confirm ship selection
const confirmBtt = document.querySelector(".confirmSelect");

confirmBtt.addEventListener("click", ()=>{

})

// Passing the screen implementation
const passButton = document.querySelector(".pass");
const turnStart = document.querySelector(".passScreen");
const gameScreen = document.querySelector(".screen");
const hideBtt = document.querySelector(".hideBtt");




// document.addEventListener("keyup", event=>{
//     if(event.code=== "Space"){
//     if(passButton.classList.contains("show")){
//     gameScreen.classList.toggle("hide");
//     turnStart.classList.toggle("hide")}
// }
// })

//Make sure the player has played their turn
//Keep the track of which screen is showing so that i can change it 

passButton.addEventListener("click", ()=>{
    gameScreen.classList.toggle("hide");
    turnStart.classList.toggle("hide");
})

turnStart.addEventListener("click", ()=>{
    gameScreen.classList.toggle("hide");
    turnStart.classList.toggle("hide");
    if(currentPlayers[0].turn) {renderGameBoard(currentPlayers[0],currentPlayers[1],false)}
    else if(currentPlayers[1].turn) { renderGameBoard(currentPlayers[1], currentPlayers[0], false)}
    //if the last turn played is player1 => render for player2
    //else if the last turn played is player2 =>render for player1
})

hideBtt.addEventListener("click", ()=>{
    const playerBoard = document.querySelector(".container2");
        playerBoard.classList.toggle("hide")
})

//TODO
//there should be a confirm button for ship selection
//implement a way so that ai can put ships
//currently ship selection screen and the actual game screen looks way different // implement the ship selection screen look to the actual game screen with ships being rendered as they are in selection screen
    // Implementing the ship selection screen look to the actual game will break how the hits are being rendered // find a different way to render it
//Implement the win condition
//Implement a win screen

//implement a button so i can change the index  


