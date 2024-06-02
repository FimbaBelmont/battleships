import { gameBoard } from "./gameBoard"
function Player() { return {
    //Each player receives 1x5
    //                     2x4
    //                     3x3
    //                     4x2 squared ships

    shipsToPlace : [5,4,4,3,3,3,2,2,2,2],
    board : gameBoard(),
    turn : false,
    takenTurns : [],
    possibleTurns : [],
}};



export { Player }