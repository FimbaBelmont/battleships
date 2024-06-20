import img from "./two.png";
const shipContainer = document.querySelector(".shipContainer");
const ships = document.createElement("ul");
shipContainer.appendChild(ships);

// const axisChangeBtt = document.querySelector(".axisChange");
// const currentAxis = 0;
// //if 0 => axis is x ; if 1 => axis is y
// axisChangeBtt.addEventListener("click", ()=>{
// if(currentAxis === 0 ) currentAxis = 1;
// else if (currentAxis === 1 ) currentAxis = 0;
// })

let placedShipLength = 0;

let placedCoords = [];

function renderShips(player) {
  ships.innerHTML = "";
  player.shipsToPlace.forEach((ele, idx) => {
    const shipImg = document.createElement("img");
    shipImg.src = img;
    shipImg.id = `ship${idx}`;
    shipImg.setAttribute(
      "style",
      `width : calc(${ele}*30px); 
      height:30px;
      object-fit:fill;
      draggable:"true"; 
      top: -3px;
      left: -3px`
    );
    shipImg.classList.add("xAxis");
    shipImg.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("id", e.target.id);
      e.dataTransfer.setData("class", e.target.classList);
      placedShipLength = ele;
    });
    ships.appendChild(shipImg);
  })
  };


let shipsCoordinates = {};
function renderPlacementContainer(player) {
  document.querySelector(".shipPlacementContainer").innerHTML = "";
  shipsCoordinates = {};
  player.board.boardMap.forEach((row, rowIdx) => {
    row.forEach((element, idx) => {
      let allySqr = document.createElement("div");
      allySqr.classList.add("sqr");

      allySqr.addEventListener("drop", (e) => {
        
        function checkLegal(e) {
             let result = true;
             const data = e.dataTransfer.getData("id");
            const draggedShip = document.querySelector(`#${data}`);
             if (draggedShip.classList.contains("xAxis")){
               if ((placedShipLength + idx) > 10) result = false;
               for (let i = 0; i< placedShipLength; i++){
              if( placedCoords.includes(rowIdx*10 + idx+i)){
               result = false}}}
             else if (draggedShip.classList.contains("yAxis")){
               if ( (placedShipLength + rowIdx) > 10) result = false;
               for (let i = 0; i< placedShipLength; i++){
              if( placedCoords.includes((rowIdx+i)*10 + idx)){
  
               result = false}
              }
           }
           return result}
        
          if (checkLegal(e))
          {
            
        e.preventDefault();
        const data = e.dataTransfer.getData("id");
        const axis = e.dataTransfer.getData("class");
        e.target.appendChild(document.querySelector(`#${data}`));
        shipsCoordinates[`${data}`] = [
          [rowIdx,idx],
          placedShipLength,
          axis,
        ];
  
        placedCoords = coordCalc(shipsCoordinates);
        function coordCalc(shipsCoordinates){
          let result =[];
          for(let ele in shipsCoordinates){
            if (shipsCoordinates[ele][2]==="xAxis"){
              for (let i = 0; i<shipsCoordinates[ele][1]; i++){
                result.push(shipsCoordinates[ele][0] + i)
              }  
            }
            else if (shipsCoordinates[ele][2]==="yAxis"){
              for (let i = 0; i<shipsCoordinates[ele][1]; i++){
                result.push(shipsCoordinates[ele][0] + (i*10))
              }
            }
          }
          
          return result
        }
        document.querySelector(`#${data}`).addEventListener("dblclick", (e) => {
          function checkLegalTurn() {
            let result = true;
            let cordStr = shipsCoordinates[data][0].toString().padStart(2, "0");
            let idx = parseInt(cordStr.at(1)) ; 
            let rowIdx = parseInt(cordStr.at(0));
           const draggedShip = document.querySelector(`#${data}`);
            if (draggedShip.classList.contains("xAxis")){
              if ((shipsCoordinates[data][1]+ rowIdx) > 10) result = false;
              for (let i = 1; i< placedShipLength; i++){
             if( placedCoords.includes((rowIdx+i)*10 + idx)){
              result = false}}}
            else if (draggedShip.classList.contains("yAxis")){
              if ( (shipsCoordinates[data][1] + idx) > 10) result = false;
              for (let i = 1; i< placedShipLength; i++){
             if( placedCoords.includes((rowIdx)*10 + idx+i)){
              result = false}
             }
          }
          if(result === false)
          return result
          }
    
          if(checkLegalTurn()){
          if (shipsCoordinates[data][2]==="xAxis") {
            e.target.classList.remove("xAxis");
            e.target.classList.add("yAxis");
            e.target.setAttribute(
            "style",
            `width : 30px; 
            height:calc(${shipsCoordinates[data][1]}*30px);
            object-fit:fill;
            draggable:"true"; 
            top: -6px;
            left: -3px`);
            shipsCoordinates[`${data}`] = [
              [rowIdx,idx],
              placedShipLength,
              `yAxis`,
            ];
          } else if (shipsCoordinates[data][2]==="yAxis") {
            e.target.classList.add("xAxis");
            e.target.classList.remove("yAxis");
            e.target.setAttribute(
            "style",
           `width : calc(${shipsCoordinates[data][1]}*30px); 
            height:30px;
            object-fit:fill;
            draggable:"true"; 
            top: -3px;
            left: -3px`);
            shipsCoordinates[`${data}`] = [
              [rowIdx,idx],
              placedShipLength,
              "xAxis",
            ];
          }
          
          placedCoords = coordCalc(shipsCoordinates);

        }})

}
      });

      allySqr.addEventListener("dragover", (e) => {
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
  });
}

export { renderShips, renderPlacementContainer, shipsCoordinates };

//also add a button to change the placement of the ship
