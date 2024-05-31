const Ship = require("./ships.js")
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
        for (x in coordinates){
            this.boardMap[coordinates[x][0]][coordinates[x][1]] = 1;
        }
        },
    receiveAttack(coord){
        // console.log(this.boardMap[coord[0]][coord[1]]);
        if(this.boardMap[coord[0]][coord[1]] === 0){
            this.boardMap[coord[0]][coord[1]] = 2;
        }
        else if(this.boardMap[coord[0]][coord[1]] === 1){
            this.shipsInfo.forEach(ship => {
                ship.coordinates.forEach(cord => {
                if(cord[0] === coord[0] && cord[1] === coord[1]){
                    ship.hit(coord);
                    ship.isSunk();
                    this.boardMap[coord[0]][coord[1]] = 3;
                }    

                });
                })
                
            };
        },
    isSunkAll(){
        let sunk = true
        this.shipsInfo.forEach(element=> {
            if(element.sunk === false)
                sunk = false;
        });
        return sunk
    }
    }
    }



module.exports = gameBoard