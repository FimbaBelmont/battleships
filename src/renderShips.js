import img from "./two.png";
import { Ship } from "./ships";
const shipContainer = document.querySelector(".shipContainer");
const ships = document.createElement("ul");
shipContainer.appendChild(ships);

let placedShipLength = 0;
let placedShipIdx = -1;

function renderShips(player){
    player.shipsToPlace.forEach((ele,idx) => {
      const shipImg = document.createElement("img");
      shipImg.src = img;
      shipImg.id = `ship${idx}`;
      shipImg.setAttribute("style", `width : calc(${ele}*30px); height:30px; object-fit:fill; draggable:"true"`);
      shipImg.addEventListener("dragstart", (e)=>{
        e.dataTransfer.setData("id", e.target.id);
        placedShipLength = ele;
      });
      ships.appendChild(shipImg);
    });
  };


function renderPlacementContainer(player){
  const shipsCoordinates = {};
    let axis = 0;
    //if 0 => axis is x ; if 1 => axis is y
    player.board.boardMap.forEach((row, rowIdx) => {
      row.forEach((element, idx) => {
        let allySqr = document.createElement("div");
        allySqr.classList.add("sqr");
  
        allySqr.addEventListener("drop", (e)=>{
          e.preventDefault();

          //if its legal =>
          //render the image in front of the squares
          const data = e.dataTransfer.getData("id");
          e.target.appendChild(document.querySelector(`#${data}`));
          shipsCoordinates[`${data}`] = [(rowIdx*10)+idx, placedShipLength, axis];
          console.log(shipsCoordinates[`${data}`]);
          console.log(shipsCoordinates);
        })
  
        allySqr.addEventListener("dragover", (e)=>{
          e.preventDefault();
        });
  
        switch (element) {
          case 0:
            allySqr.classList.add("notHit");
            break;
          case 1:
            allySqr.classList.add("shipNotHit");
            break;        
        }
        document.querySelector(".shipPlacementContainer").appendChild(allySqr);
      });
  })
}



export { renderShips, renderPlacementContainer };
 




//when dropped take the ships coordinate to place them later on
//make a hashmap for coordinates
//make the ships so that they can be changed within the placement square with drag and drop api
//double click should change the ships direction
//also add a button to change the placement of the ship
