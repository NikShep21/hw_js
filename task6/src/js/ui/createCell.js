



const pathToImages = {
    bomb: "./assets/bomb.png",
    flag: "./assets/flag.png"
}


export class CreateCell{
    static createCloseCell(x, y){
        let cell = document.createElement("button");
        cell.classList.add("cell")
        cell.dataset.x = x;
        cell.dataset.y = y;
        return cell
    }

    static createFlagCell(x, y){
        let cell = this.createCloseCell(x, y)
        const img = document.createElement("img")
        img.src = pathToImages.flag
        cell.classList.add("flag")
        cell.append(img)
        return cell
    }
    static createBombCell(x, y){
        let cell = this.createCloseCell(x, y)
        const img = document.createElement("img")
        img.src = pathToImages.bomb
        cell.classList.add("bomb")
        cell.append(img)
        return cell
    }
    static createOpenCell(x, y, number = null){
        let cell = this.createCloseCell(x, y)
        cell.classList.add("open")
        if(number !== null){
            cell.append(number)
        }
        return cell
    }
}