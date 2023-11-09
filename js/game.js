// Game class
class Game {
    constructor(id, level) {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.el = document.getElementById(id);

        this.height = 600;
        this.width = 800;
        // this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.isGameOver = false;

        this.level_idx = 0;
        this.levels = [...levels];
        // console.log(this.levels);

        // establish the basic properties common to all this objects.
        this.tileTypes = ['floor', 'wall'];
        this.numLines = 16;
        this.tileDim = 32;
        // inherit the level's properties: map, player start, goal start.
        this.map = level.map;
        // level switch
        this.theme = level.theme;
        // make a copy of the level's player.
        this.player = { ...level.player };
        // create a property for the DOM element, to be set later.
        this.player.el = null;
        // make a copy of the goal.
        this.goal = { ...level.goal };
    }

    start() {
        // Setting the game screen size
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        // hide the start screen 
        this.startScreen.style.display = 'none';

        // showing
        this.gameScreen.style.display = 'grid';
        this.populateMap()
        this.placeSprite()
    }

    // Create a tile or sprite <div> element
    createEL(x, y, type) {
        // create one tile.
        let el = document.createElement('div');

        // two class names: one for tile, one or the tile type.
        el.className = type;

        // set width and height of tile based on the passed-in dimensions.
        el.style.width = el.style.height = this.tileDim + 'px';

        // set left positions based on x coordinate.
        el.style.left = x * this.tileDim + 'px';

        // set top position based on y coordinate.
        el.style.top = y * this.tileDim + 'px';

        return el;
    }

    // Applies the level theme as a class to the game element. 
    // Populates the map by adding tiles and sprites to their respective layers.
    populateMap() {
        // Creating a theme cell 
        this.el.className = 'game-container' + this.theme;
        let tiles = this.el.querySelector('#tiles');

        // Loop that will add all the cells
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                // tileCode will return 0,1
                // tileTypes will return floor if tileCode 0, and wall if tileCode is 1
                let tileCode = this.map[y][x];
                let tileType = this.tileTypes[tileCode];

                // Creating cells for all map elements and adding it into tiles
                let tile = this.createEL(x, y, tileType);
                tiles.append(tile);
            }
        }
    }

    // placing a player or a goal sprite
    // Type has ben used in createEL and become a class name. Cna be either 'player' or 'goal'
    placeSprite(type) {
        let x = this[type].x;
        let y = this[type].x;

        // Creating sprites
        let sprite = this.createEL(x, y, type);
        sprite.id = type;

        let character = sprite.createElement('img');
        if (type === 'player') {
            character.src = '../images/astronaut_baloon.png';
        }
        // set the border radius of the sprite.
        character.src = '../images/door-to-universe.png';

        // Accessing the layer
        let layer = document.querySelector('#sprites');
        layer.appendChild(sprite);

        return sprite;
    }

    // Collide animation for player
    collide() {
        this.player.className += 'collide';
        let obj = this;

        window.setTimeout(() => {
            this.player.col.className = 'player';
        }, 200);
        return 0;
    }


}


