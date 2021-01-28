console.log('map class loaded')

class Map{
    constructor(){
     
      this.lengthMatrix = 15
      this.heightMatrix = 11
      
      this.level = [
        "001111111111111001010000010101101010111110101100000000010001101110111110111101000100000001101110111010111101000001010001101110101110111100010100000000111111111111102",
        "001111111111111000000001000101101110101010101100010101010001101111101111101100000101000001101110111011101100010001010001111010111110111100010000000000111111111111102",
        "001111111111111000000101010001101111101010101100000000000101111111101111101100000000010101111110101110111101000100000001101110101011101100000101010000111111111111102"
        ]
      this.matrix = this.makeMap()
    }

    chooseRandomLevel(){
        let index = Math.floor(Math.random()*(this.level.length));
        console.log('this is' + index)
        return this.level[index];
    }

    makeMap(){
        let levelString = this.chooseRandomLevel();
        let map=[];
        let index = 0;

        for (let row=0; row<this.heightMatrix; row++){
            map.push([]);
            for(let col=0; col<this.lengthMatrix; col++){

                map[row].push(parseInt(levelString[index]));
                index++
            }
        } 
        return map;  
    } 
}

 