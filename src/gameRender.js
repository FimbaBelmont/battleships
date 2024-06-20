import { aiTakeTurn } from "./computerTakeTurn.js";

function renderGameBoard(
  player,
  player2,
  aiGame,
  contain = document.querySelector(".container"),
  contain2 = document.querySelector(".container2")
) {
  contain.innerHTML = "";
  contain2.innerHTML = "";

  player.board.boardMap.forEach((row) => {
    row.forEach((element) => {
      let allySqr = document.createElement("div");
      allySqr.classList.add("sqr");
      switch (element) {
        case 0:
          allySqr.classList.add("notHit");
          break;
        case 1:
          allySqr.classList.add("shipNotHit");
          break;
        case 2:
          allySqr.classList.add("hitNoShip");
          break;
        case 3:
          allySqr.classList.add("hitShip");
        default:
          break;
      }
      contain2.appendChild(allySqr);
    });
  });
  player2.board.boardMap.forEach((row, rowIdx) => {
    row.forEach((element, idx) => {
      let sqr = document.createElement("div");
      sqr.classList.add("sqr");
      sqr.addEventListener("click", () => {
        if(aiGame){
        if (player.turn) {
          player2.board.receiveAttack([rowIdx, idx]);
          renderGameBoard(player, player2,true);
          player.turn = false;
          if(player2.board.isSunkAll()) {
            document.querySelector(".winnerName").textContent = "You Win !";
            document.querySelector(".screen").classList.add("hide");
            document.querySelector(".winScreen").classList.remove("hide");
          }
          player2.turn = true;
          console.log("human plays");
          aiTakeTurn(player2, player)
          if(player.board.isSunkAll()) {
            document.querySelector(".winnerName").textContent = "Computer Wins !";
            document.querySelector(".screen").classList.add("hide");
            document.querySelector(".winScreen").classList.remove("hide");
          }
        }}

          else if(aiGame === false){
          if (player.turn) {
          player2.board.receiveAttack([rowIdx, idx]);
          renderGameBoard(player, player2,false);
          player.turn = false;
          if(player2.board.isSunkAll()) {
            document.querySelector(".winnerName").textContent = `${player.playerName} Wins !`
            document.querySelector(".screen").classList.add("hide");
            document.querySelector(".winScreen").classList.remove("hide");
          }
          player2.turn = true}
        }
      });
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
    });
  })}


export { renderGameBoard };
