import { Player } from "./players.js";
import { renderGameBoard } from "./gameRender.js";
import { renderShips, renderPlacementContainer, shipsCoordinates } from "./renderShips.js";
import { aiPlaceShips } from "./computerTakeTurn.js";


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
  

  
  
  const confirmSelectBtt =  document.querySelector(".confirmSelect");
  confirmSelectBtt.addEventListener("click", ()=>{
  //if aigame starts the game
  //if 2-player game pass to the blank screen so that player1 can start

  if(aiGame === 1
    &&Object.keys(shipsCoordinates).length === 10
    ){
  for (let ele in shipsCoordinates){
    let shipCoord = []; 
    console.log(ele)
    console.log(shipsCoordinates[ele]);
    if(shipsCoordinates[ele][2]==="xAxis"){
      for(let i = 0; i<shipsCoordinates[ele][1]; i++){
        shipCoord.push([shipsCoordinates[ele][0][0],shipsCoordinates[ele][0][1]+i])
      }}
    else if(shipsCoordinates[ele][2]==="yAxis"){
        for(let i = 0; i<shipsCoordinates[ele][1]; i++){
          shipCoord.push([shipsCoordinates[ele][0][0]+i,shipsCoordinates[ele][0][1]])
        }
      }
      player1.board.placeShip(shipCoord);
  }
let aiShipCoords = aiPlaceShips(player2);
for (let ele in aiShipCoords){  
  let ships = [];
  if(aiShipCoords[ele][2]===1){
    for(let a = 0; a <aiShipCoords[ele][1]; a++){
      ships.push([aiShipCoords[ele][0][0]+a, aiShipCoords[ele][0][1]])
    }
  }
  else {
    for(let i = 0; i <aiShipCoords[ele][1]; i++){
      ships.push([aiShipCoords[ele][0][0], aiShipCoords[ele][0][1]+i])  
    }
  }
    player2.board.placeShip(ships);
}
  player1.turn = true;
  document.querySelector(".screen").classList.remove("hide");
  document.querySelector(".hideBtt").classList.add("hide");
  document.querySelector(".pass").classList.add("hide");
  document.querySelector(".shipPlaceScreen").classList.add("hide");
  renderGameBoard(player1, player2, true);
}

}

)
}

let currentPlayers = [];

function playerGameStart() {
  //Start 2-player game
  const player1= Player();
  player1.playerName = "Player 1";
  const player2=Player();
  player2.playerName = "Player 2";
  
  document.querySelector(".menuScreen").classList.add("hide");
  document.querySelector(".shipPlaceScreen").classList.remove("hide");
  renderShips(player1);
  renderPlacementContainer(player1);


  
  
  var player1HasSelected = false;
  
  const confirmSelectBtt =  document.querySelector(".confirmSelect");
  confirmSelectBtt.addEventListener("click", ()=>{
    //Store player1 ship info //if this has 10 length =>
    //render player2 ships
    //render player2 ship placement screen
    if (player1HasSelected === false && Object.keys(shipsCoordinates).length === 10){
      let player1ShipInfo = JSON.parse(JSON.stringify(shipsCoordinates));
      for (let ele in player1ShipInfo){
        let ship1Coord = []; 
        if(player1ShipInfo[ele][2]==="xAxis"){
          for(let i = 0; i<player1ShipInfo[ele][1]; i++){
            ship1Coord.push([player1ShipInfo[ele][0][0],player1ShipInfo[ele][0][1]+i])
          }}
        else if(player1ShipInfo[ele][2]==="yAxis"){
            for(let i = 0; i<player1ShipInfo[ele][1]; i++){
              ship1Coord.push([player1ShipInfo[ele][0][0]+i,player1ShipInfo[ele][0][1]])
            }
          }
          player1.board.placeShip(ship1Coord);
      }
      player1HasSelected = true;
      renderShips(player2);
      renderPlacementContainer(player2);
    }
    if(player1HasSelected === true){
      let player2ShipInfo = shipsCoordinates;
    if(Object.keys(player2ShipInfo).length === 10)
    {

      for (let ele in player2ShipInfo){
        let ship2Coord = []; 
        if(player2ShipInfo[ele][2]==="xAxis"){
          for(let i = 0; i<player2ShipInfo[ele][1]; i++){
            ship2Coord.push([player2ShipInfo[ele][0][0],player2ShipInfo[ele][0][1]+i])
          }}
          else if(player2ShipInfo[ele][2]==="yAxis"){
            for(let i = 0; i<player2ShipInfo[ele][1]; i++){
              ship2Coord.push([player2ShipInfo[ele][0][0]+i,player2ShipInfo[ele][0][1]])
            }
          }
          player2.board.placeShip(ship2Coord);
        }
        
        
        document.querySelector(".pass").classList.add("show");
        document.querySelector(".menuScreen").classList.add("hide");
        document.querySelector(".container2").classList.add("hide");
        document.querySelector(".screen").classList.remove("hide");
        document.querySelector(".shipPlaceScreen").classList.add("hide");
        renderGameBoard(player1, player2, false);
        document.querySelector(".turnTag").textContent = `Player 1's Turn`;
        player1.turn = true;
        currentPlayers.push(player1, player2);
      }
  }
  })}



export { aiGameStart, playerGameStart, currentPlayers }
