import { renderGameBoard } from "./gameRender";

function aiTakeTurn(player, humanPlayer){
    while(player.turn === true && player.takenTurns.length < 101) {
        if(!((player.possibleTurns.length) === 0)){
            let pt= player.possibleTurns.shift();
            if(!(player.takenTurns.includes(((pt[0]*10)+pt[1])))){
                console.log((pt[0]*10)+pt[1]);
                let sHit = humanPlayer.board.receiveAttack(pt);
                player.takenTurns.push((pt[0]*10)+pt[1]);
                if(sHit ===3 ){ 
                    if(pt[0]+1<10)            player.possibleTurns.push([pt[0]+1, pt[1]]);
                    if(pt[0]+1<10&&pt[1]+1<10)player.possibleTurns.push([pt[0]+1, pt[1]+1]);
                    if(pt[0]-1>-1)            player.possibleTurns.push([pt[0]-1, pt[1]]);
                    if(pt[0]-1>-1&&pt[1]-1>-1)player.possibleTurns.push([pt[0]-1, pt[1]-1])}
                player.takenTurns.push(pt);
                player.turn = false;
                humanPlayer.turn = true;
                renderGameBoard(humanPlayer, player, true);
        }else {aiTakeTurn(player,humanPlayer)}}
        else {
        let randomFirst = Math.floor(Math.random()*10);
        let randomSecond = Math.floor(Math.random()*10);
        if(!(player.takenTurns.includes((randomFirst*10)+randomSecond))){
            let hit = humanPlayer.board.receiveAttack([randomFirst, randomSecond]);
            if (hit === 3){ 
                if(randomFirst+1<10)                      player.possibleTurns.push([randomFirst+1, randomSecond]);
                if(randomFirst+1<10 && randomSecond+1<10) player.possibleTurns.push([randomFirst+1, randomSecond+1]);
                if(randomFirst-1>-1)                      player.possibleTurns.push([randomFirst-1, randomSecond]);
                if(randomFirst-1>-1 && randomSecond-1>-1) player.possibleTurns.push([randomFirst-1, randomSecond-1]);
            }
            player.takenTurns.push((randomFirst*10)+randomSecond);
            player.turn = false;
            humanPlayer.turn = true;
            console.log(randomFirst, randomSecond)
            renderGameBoard(humanPlayer, player, true);
        }
            else {aiTakeTurn(player,humanPlayer)}
        }
        }        
    }

export { aiTakeTurn };