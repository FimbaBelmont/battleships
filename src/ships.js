function Ship (coordinates) {return {
    length : coordinates.length,
    hp : coordinates.length,
    coordinates : coordinates,
    sunk : false,
    
    hit(coordinate){
            let index = 0;
        this.coordinates.forEach((coord, idx)=>{
            if(coord[0]===coordinate[0]&& coord[1]===coordinate[1]){
                index = idx;
            }
        })
        this.coordinates.splice(index, 1)
        if(this.hp>0){
        this.hp -= 1}
    },
    isSunk(){
        if(this.hp===0&&this.coordinates.length === 0){
            this.sunk = true;
            return true
        }
    }
}}
export { Ship }