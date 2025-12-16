

class MineSweeper{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }


    boardInit(){

    }
    boardFill(){

    }
    
    createBombs(){

    }

}


pathToImages = {
    bomb: "./assets/bomb.png",
    flag: "./assets/flag.png"
}

const createCell = {
    createCloseCell(){
        let cell = document.createElement("button");
        cell.classList.add("cell")
        return cell
    },
    createFlagCell(){
        let cell = this.createCloseCell()
        const img = document.createElement("img")
        img.src = pathToImages.flag
        cell.classList.add("flag")
        cell.append = img
        return cell
    },
    createBombCell(){
        let cell = this.createCloseCell()
        const img = document.createElement("img")
        img.src = pathToImages.bomb
        cell.classList.add("bomb")
        cell.append(img)
        return cell
    },
    createOpenCell(number = null){
        let cell = this.createCloseCell()
        cell.classList.add("open")
        if(number !== null){
            cell.append(number)
        }
        return cell
    }
}