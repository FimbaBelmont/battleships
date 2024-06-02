import { aiTakeTurn } from "./index"

function renderGameBoard(player, player2, contain, contain2){
    contain.innerHTML = "";
    contain2.innerHTML = "";

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
                if(player.turn){player2.board.receiveAttack([rowIdx,idx]);
                contain.innerHTML ="";
                contain2.innerHTML = "";
                renderGameBoard(player,player2,contain,contain2);
                player.turn = false;
                player2.turn = true;
                aiTakeTurn(player2, player);
                //CHANGE SOME TEXT CONTENT TO IT'S THE PLAYER2'S TURN
            }
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

export { renderGameBoard }