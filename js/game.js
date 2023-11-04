// Game class
class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');

        this.player = new Player(this.gameScreen, 100, 100, '../images/astronaut_on_rocket.png');
        this.height = 600;
        this.width = 600;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.isGameOver = false;
        this.maze = [...grid];
        this.column = 10;
        this.row = 10;
        // console.log(this.maze);
    }

    start() {
        // Setting the game screen size
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        // hide the start screen 
        this.startScreen.style.display = 'none';

        // showing
        this.gameScreen.style.display = 'block';
        this.createMaze(this.column, this.row);
    }

    createMaze() {
        // Use a nested for loop to create the grid cells
        // for (let i = 0; i < this.row; i++) {
        //     for (let j = 0; j < this.column; j++) {
        //         const cell = document.createElement('div').classList.add('cell');
        //         this.gameScreen.appendChild(cell);
        //     }
        // }
    }

}


