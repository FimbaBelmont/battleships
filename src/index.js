const ship = require("./ships");
const gameBoard = require("./gameBoard");
const Player = require("./players");
const stylesheet = require("./stylesheet.css")

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
player1.board.receiveAttack([1,3]);
player1.board.receiveAttack([1,2]);
player1.board.receiveAttack([1,1]);
player1.board.receiveAttack([1,1]);
player2.board.receiveAttack([2,9]);
player2.board.receiveAttack([2,9]);
player2.board.receiveAttack([3,9]);
player2.board.receiveAttack([4,9]);
player2.board.receiveAttack([5,9]);
player2.board.receiveAttack([7,1]);


const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");

function renderGameBoard(player, player2, contain, contain2){
    player.board.boardMap.forEach(row=>{
        row.forEach(element=>{
            let sqr = document.createElement("div");
            sqr.classList.add("sqr");
            switch (element) {
                case 0:
                    sqr.classList.add("notHit");
                    break;
                case 1:
                    sqr.classList.add("shipNotHit");
                    break;
                case 2:
                    sqr.classList.add("hitNoShip");
                    break;
                case 3:
                    sqr.classList.add("hitShip");
                default:
                    break;
            }
            contain2.appendChild(sqr);
        })
    })
    player2.board.boardMap.forEach((row, rowIdx)=>{
        row.forEach((element, idx)=>{
            let sqr = document.createElement("div");
            sqr.classList.add("sqr");
            sqr.addEventListener("click",()=>{
                player2.board.receiveAttack([rowIdx,idx]);
                contain.innerHTML ="";
                contain2.innerHTML = "";
                renderGameBoard(player,player2,contain,contain2);
            })
            switch (element) {
                case 0:
                    sqr.classList.add("notHit");
                    break;
                case 1:
                    sqr.classList.add("notHit");
                    break;
                case 2:
                    sqr.classList.add("hitNoShip");
                    break;
                case 3:
                    sqr.classList.add("hitShip");
                default:
                    break;
            }
            contain.appendChild(sqr);
        })
    })
}

renderGameBoard(player2,player1, container, container2);

//TODO
//write a game state logic so that players take turns,
//write enemy ai >it should randomly put ships and understand that it hit an enemy ship and try adjacent squares
//implement drag and drop for ships
//implement a menu so that you can choose between 2-player or an enemy ai