// const ship = require("./ships");
// const gameBoard = require("./gameBoard");
// const Player = require("./players");
// const stylesheet = require("./stylesheet.css");
// const render = require("./gameRender.js");
// const renderGameBoard = require("./gameRender.js");

import { Ship } from "./ships.js";
import {gameBoard} from "./gameBoard.js";
import { Player } from "./players.js";
import "./stylesheet.css";
import { renderGameBoard } from "./gameRender.js";


const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");

//Game Menu


function aiGameStart(){
const player1 = Player();
let cord = [[1,1],[1,2],[1,3]];
let cord2 = [[2,1],[2,2],[2,3]];
let cord3 = [[7,1],[6,1]];
player1.board.placeShip(cord);
player1.board.placeShip(cord2);
player1.board.placeShip(cord3);
const player2 = Player();
player2.board.placeShip(cord);
player2.board.placeShip(cord3);
player1.turn = true;
renderGameBoard(player1, player2, container, container2);
    
}

function aiTakeTurn(player, humanPlayer){
    while(player.turn === true) {
        if(!((player.possibleTurns.length) === 0)){
            let pt= player.possibleTurns.shift();
            if(!(player.takenTurns.includes((pt[0]*10+pt[1])))){
                let sHit = humanPlayer.board.receiveAttack(pt);
                if(sHit ===3 ){ player.possibleTurns.push([pt[0]+1, pt[1]]);
                    //make sure both coordinates are bigger than -1 and less than 10
                    player.possibleTurns.push([pt[0]+1, pt[1]+1]);
                    player.possibleTurns.push([pt[0]-1, pt[1]]);
                    player.possibleTurns.push([pt[0]-1, pt[1]-1])}
                player.takenTurns.push(pt);
                player.turn = false;
                humanPlayer.turn = true;
                console.log(pt);
                renderGameBoard(humanPlayer, player, container, container2);
        }else {aiTakeTurn(player,humanPlayer)}}
        else {
        let randomFirst = Math.floor(Math.random()*10);
        let randomSecond = Math.floor(Math.random()*10);
        if(!(player.takenTurns.includes((randomFirst*10)+randomSecond))){
            let hit = humanPlayer.board.receiveAttack([randomFirst, randomSecond]);
            if (hit === 3){ player.possibleTurns.push([randomFirst+1, randomSecond]);
                player.possibleTurns.push([randomFirst+1, randomSecond+1]);
              player.possibleTurns.push([randomFirst-1, randomSecond]);
               player.possibleTurns.push([randomFirst-1, randomSecond-1]);
            }
            player.takenTurns.push((randomFirst*10)+randomSecond);
            player.turn = false;
            humanPlayer.turn = true;
            console.log(randomFirst, randomSecond)
            renderGameBoard(humanPlayer, player, container, container2);
        }
            else {aiTakeTurn(player,humanPlayer)}
        }
        }        }
        



const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");


aiGameStart()
export { aiTakeTurn }


//TODO
//write a game state logic so that players take turns,
//write enemy ai >it should randomly put ships and understand that it hit an enemy ship and try adjacent squares
//implement drag and drop for ships
//implement a menu so that you can choose between 2-player or an enemy ai



