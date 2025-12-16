
export class MineSweeper{

    board = null
    constructor(widthBoard, heightBoard, bombsCount){
        this.widthBoard = widthBoard;
        this.heightBoard = heightBoard;
        this.bombsCount = bombsCount
        this.isWon = null
        this.board = []
    }

    boardInit(){
        this.isWon = null;
        this.board = new Array(this.heightBoard);
        const defaultObject = {
            count: 0,
            isOpen:false,
            isBomb:false,
            isFlag:false
        }
        for(let i = 0; i < this.board.length; i++){
            this.board[i] = Array.from({length:this.widthBoard}, ()=>({...defaultObject}))
        }
       
    }
    _openCell(x, y){
        this.board[y][x].isOpen = true
    }

    makeMove(x, y){
        const cell = this.board[y][x];

        if (cell.isOpen || cell.isFlag) return;

        const isFirstMove = this._isCloseAllCells();

        if (isFirstMove) {
            this._boardFill([x, y]);
        }

        if (cell.count === 0 && !cell.isBomb) {
            this._floodFill(x, y);
        } else {
            this._openCell(x, y);
}

        if (cell.isBomb) {
            this._openAllCells();
            this.isWon = false;
            return;
        }

        if (this._isOpenAllCells()) {
            this.isWon = true;
        }
    }

    
        
    _isCloseAllCells(){
        for (let y = 0; y < this.heightBoard; y++) {
            for (let x = 0; x < this.widthBoard; x++) {
                if (this.board[y][x].isOpen) {
                    return false;
                }
            }
        }
        return true;
    }

    _isOpenAllCells(){
        for (let y = 0; y < this.heightBoard; y++) {
            for (let x = 0; x < this.widthBoard; x++) {
                if (!this.board[y][x].isOpen && !this.board[y][x].isBomb) {
                    return false;
                }
            }
        }
        return true;
    }


    changeFlag(x, y){
        if(this.board[y][x].isOpen) return;
        this.board[y][x].isFlag = !this.board[y][x].isFlag 
    }

    _openAllCells(){
        for(let y = 0; y<this.heightBoard; y++){
            for(let x = 0; x<this.widthBoard; x++){
                this._openCell(x, y)
            }
        }
    }
    _boardFill(exception){
        const positionBombs = this._generateBombsPositions(this.bombsCount ,exception)
        this._createBombs(positionBombs)
        this._initCountCells()
    }
    
    _generateBombsPositions(countBombs, exception = null){
        let positions = new Set()
        while(positions.size < countBombs){
            const x = Math.floor(Math.random() * this.widthBoard)
            const y = Math.floor(Math.random() * this.heightBoard)
            if(exception?.[0] === x && exception?.[1] === y){
                continue;
            }
            positions.add(`${x} ${y}`)
        }
        positions = [...positions].map((elem)=> elem.split(' ').map(Number))
        return positions
    }
    _inBounds(x, y){
        return(
            (x >= 0 && x < this.widthBoard)
            &&
            (y>= 0 && y < this.heightBoard)
        )
    }
    _createBombs(positions){
        positions.forEach(([x, y]) => {
            this.board[y][x].isBomb = true
        });
    }
    _floodFill(x, y, visited = new Set()) {
        const mask = [[-1, -1], [-1, 0], [0, -1], [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1]]
        const key = `${x},${y}`;
        if (visited.has(key)) return;
        visited.add(key);

        const cell = this.board[y][x];


        if (cell.isOpen || cell.isFlag) return;

        this._openCell(x, y);

        if (cell.count > 0) return;

        for (const [dx, dy] of mask) {
            const nx = x + dx;
            const ny = y + dy;

            if (!this._inBounds(nx, ny)) continue;
            this._floodFill(nx, ny, visited);
        }
}


    _initCountCells(){
        const mask = [[-1, -1], [-1, 0], [0, -1], [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1]]
        for(let y = 0; y<this.heightBoard; y++){
            for(let x = 0; x<this.widthBoard; x++){

                if(this.board[y][x].isBomb) continue;
                let count = 0
                for (const [dx, dy] of mask){

                
                    const nx = x + dx;
                    const ny = y + dy;

                    if(!this._inBounds(nx, ny) ) continue;
                    
                    if(this.board[ny][nx].isBomb){
                        count ++;
                    }
                }
                this.board[y][x].count = count
            }
        }
    }

}

