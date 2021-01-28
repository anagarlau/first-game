class Map{
    constructor(linearString){
     
      this.lengthMatrix = 15
      this.heightMatrix = 11
      this.matrix = this.makeMap(linearString)
    }

    makeMap(linearString){
        let map=[];
        let index = 0;
        for (let row=0; row<this.heightMatrix; row++){
            map.push([]);
            for(let col=0; col<this.lengthMatrix; col++){

                map[row].push(linearString[index]);
                index++
            }
        } 
        return map;  
    } 
}

 