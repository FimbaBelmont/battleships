
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
const creditsBtt = document.querySelector("#credits");

aiStartBtt.addEventListener("click", ()=>{
    aiGameStart();
})

humanStartBtt.addEventListener("click", ()=>{
    playerGameStart();
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

const testPlayer = Player();
renderPlacementContainer(testPlayer);
renderShips(testPlayer);
//TODO
//implement drag and drop for ships
    //there should be a confirm button
    //implement a button so i can change the index
//implement a way so that ai can put ships
//Implement the win condition
//Implement a win screen



