import { Ship } from "./ships";
function gameBoard(){return {
    boardMap : [[0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0]],
    shipsInfo : [],

    placeShip(coordinates){
        //[[0,0],[0,1]] [[column, row]]
        this.shipsInfo.push(Ship(coordinates));
        for (let x of coordinates){
            this.boardMap[x[0]][x[1]] = 1;
        }
        },
    receiveAttack(coord){
        // console.log(this.boardMap[coord[0]][coord[1]]);
        let result = 0;
        if(this.boardMap[coord[0]][coord[1]] === 0){
            this.boardMap[coord[0]][coord[1]] = 2;
            result = 2
        }
        else if(this.boardMap[coord[0]][coord[1]] === 1){
            this.shipsInfo.forEach(ship => {
                ship.coordinates.forEach(cord => {
                if(cord[0] === coord[0] && cord[1] === coord[1]){
                    ship.hit(coord);
                    ship.isSunk();
                    this.boardMap[coord[0]][coord[1]] = 3;
                    result =3
                }    

                });
                })
                
            };
            return result
        },
    isSunkAll(){
        let sunk = true
        this.shipsInfo.forEach(element=> {
            if(element.sunk === false){
                sunk = false;}
        });
        return sunk;
    }
    }
    }



export { gameBoard }