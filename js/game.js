// Game class
class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');

        this.player = new Player(this.gameScreen, 40, 40, '../images/astronaut_on_rocket.png');
        this.height = 600;
        this.width = 800;
        // this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.isGameOver = false;
        this.grid = [...grid];
        this.column = 16;
        this.row = 16;
    }

    start() {
        // Setting the game screen size
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        // hide the start screen 
        this.startScreen.style.display = 'none';

        // showing
        this.gameScreen.style.display = 'grid';
        this.buildMaze()
    }

    buildMaze() {
        // Number of rows and columns passed to CSS
        this.gameScreen.style.setProperty('--rows', this.row);
        this.gameScreen.style.setProperty('--columns', this.column);

        // Dimensions of the grid passed to CSS
        this.gameScreen.style.setProperty('--grid-height', this.height);
        this.gameScreen.style.setProperty('--grid-width', this.width);


        for (let i = 0; i < this.row; i++) {

            for (let j = 0; j < this.column; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');

                // Setting calculated cell dimensions
                this.gameScreen.appendChild(cell);
            }
        }
        console.log(this.player);
    }
}


