export class MapParser{

    static recreateMap(string: string): Map<string, number>{
        try{
            let r: Map<string, number> = new Map<string, number>();
            let cutString = string.substring(1, string.length-1);
            let array: string[] = cutString.split("],[");
            array.forEach(i => {
                let sp: string[] = i.split(",");
                r.set(sp[0], parseInt(sp[1]));
            })
            return r;
        }catch{
            console.log("Error: Invalid mapstring");
            return new Map<string, number>();
        }
    }

    static mapToString(map: Map<string,number>): string{
        let array: string[] = [];
        for (let [key, value] of map) {
          array.push("[" + key + "," + value + "]")      
        } 
        return array.join(",");
      }
}