
let grid;
let cellSize;

function setup() {
    createCanvas(500, 500);
    cellSize = width / 10;
    grid = new Grid(10, 10);
}



class Tile {
    constructor(color) {
        this.color = color
    }
    flip() {
        if (this.color == '#000000') {
            this.color = '#00ff00'
        }
        else
            this.color = '#000000'
    }
}

class Grid {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.tiles = []
        for (let col = 0; col < height; col++) {
            this.tiles[col] = []
            for (let row = 0; row < width; row++) {
                this.tiles[col].push(new Tile('#00ff00'));

            }
        }
        for (let col = 0; col < height; col++) {
            for (let row = 0; row < width; row++) {
                if(floor(random(0,5)) == 0){
                    this.flipTiles(row,col)
                }
                    
               
            }
        }
    }
    checkWin() {
        let win = true
        for (let col = 0; col < this.height; col++) {
            for (let row = 0; row < this.width; row++) {
                let color = this.tiles[row][col].color
                if(color == '#000000'){
                    return false
                }
            }
        }
        return true
    }
    flipTiles(x, y) {
        if (x < 0 || x > 9 || y < 0 || y > 9) {
            return
        }
        if (x == 0 && y == 0) {
            this.tiles[x][y].flip();
            this.tiles[x + 1][y].flip();
            this.tiles[x][y + 1].flip();
        }

        else if (x == 0 && y == 9) {
            this.tiles[x][y].flip();
            this.tiles[x + 1][y].flip();
            this.tiles[x][y - 1].flip();
        }

        else if (x == 9 && y == 0) {
            this.tiles[x][y].flip();
            this.tiles[x - 1][y].flip();
            this.tiles[x][y + 1].flip();
        }

        else if (x == 9 && y == 9) {
            this.tiles[x][y].flip();
            this.tiles[x - 1][y].flip();
            this.tiles[x][y - 1].flip();
        }

        else if (x == 9) {
            this.tiles[x][y].flip();
            this.tiles[x - 1][y].flip();
            this.tiles[x][y + 1].flip();
            this.tiles[x][y - 1].flip();
        }

        else if (y == 0) {
            this.tiles[x][y].flip();
            this.tiles[x - 1][y].flip();
            this.tiles[x][y + 1].flip();
            this.tiles[x + 1][y].flip();
        }

        else if (x == 0) {
            this.tiles[x][y].flip();
            this.tiles[x + 1][y].flip();
            this.tiles[x][y + 1].flip();
            this.tiles[x][y - 1].flip();
        }

        else if (y == 9) {
            this.tiles[x][y].flip();
            this.tiles[x - 1][y].flip();
            this.tiles[x + 1][y].flip();
            this.tiles[x][y - 1].flip();
        }

        else {
            this.tiles[x][y].flip();
            this.tiles[x - 1][y].flip();
            this.tiles[x + 1][y].flip();
            this.tiles[x][y - 1].flip();
            this.tiles[x][y + 1].flip();
        }

    }
    drawGrid(cellSize) {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                fill(this.tiles[i][j].color)
                rect(i * cellSize, j * cellSize, cellSize, cellSize)
            }
        }
    }
}

function mouseClicked() {
    grid.drawGrid(cellSize)
    let xPos = floor(mouseX / cellSize);
    let yPos = floor(mouseY / cellSize);
    grid.flipTiles(xPos, yPos);
    grid.drawGrid(50)
    if(grid.checkWin() === true){
        alert('You win!!!')
    } else{
        console.log('you dont win')
    }
}