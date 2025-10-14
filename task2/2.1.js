function converter(str){
    const parts = str.split("-");
    const newParts = parts.map((part, index) =>{
        if(index){
            return part.at(0).toUpperCase() + part.slice(1)
        }
        return part
    })
    return newParts.join("")
}


console.log(converter("background-color")) 