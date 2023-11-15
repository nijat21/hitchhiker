// Game class
class Game {
    constructor(id, level) {
        this.startScreen = document.getElementById('game-intro');
        this.gameScore = document.getElementById('game-score');
        this.qPane = document.getElementById('q-pane');
        this.gameContainerSore = document.querySelector('#container-score');
        this.music = new Music();

        this.gameEndScreen = document.getElementById('game-end');
        // this.midScreen = document.getElementById('mid-screen');
        this.boDy = document.querySelector('body');

        this.el = document.getElementById(id);

        // New instance of quiz
        this.qsInstance = new Question(level);

        // lives
        this.lives = this.qsInstance.lives;

        this.level_idx = 0;
        this.levels = [...levels];

        // the basic properties common to all this objects.
        this.tileTypes = ['floor', 'wall'];
        this.tileDim = 32;
        // inherit the level's properties: map, player start, goal start.
        this.map = level.map;
        this.theme = level.theme;
        this.player = { ...level.player };
        // create a property for the DOM element, to be set later.
        this.player.element = null;
        this.goal = { ...level.goal };

        this.q1 = { ...level.questions[0] };
        this.q2 = { ...level.questions[1] };
        this.q3 = { ...level.questions[2] };
        this.qFinal = { ...level.questions[3] };

        // to limit the chance to answer to 1
        this.q1Shown = false;
        this.q2Shown = false;
        this.q3Shown = false;
        this.qFinalShown = false;
    }

    // Setup the game
    start() {
        // hide the start screen 
        this.startScreen.style.display = 'none';

        // show the score
        this.gameScore.style.display = 'block';

        // showing
        // this.gameScreen.style.display = 'block';

        // Populating map, sizing up accordingly and placing sprites
        this.populateMap();
        this.sizeUp();
        this.placeSprite();

        // this.music.playMusicStart();

        // Show guide text visible
        let text1 = this.el.querySelector('.text');
        text1.style.display = 'inline';
        let text2 = this.el.querySelector('#text-1');
        text2.style.display = 'inline';

        // getting the returned value from placeSprite()
        // Showing the player and the finish point
        let spritePlayer = this.placeSprite('player');
        this.player.element = spritePlayer;
        let spriteGoal = this.placeSprite('goal');
        this.goal.element = spriteGoal;


        // Showing questions object
        let spriteQ1 = this.placeSprite('q1');
        this.q1.element = spriteQ1;
        let spriteQ2 = this.placeSprite('q2');
        this.q2.element = spriteQ2;
        let spriteQ3 = this.placeSprite('q3');
        this.q3.element = spriteQ3;
    }

    // Create a tile or sprite <div> element
    createEL(x, y, type) {
        // create one tile.
        let el1 = document.createElement('div');

        // two class names: one for tile, one or the tile type.
        el1.className = type;

        // set width and height of tile based on the passed-in dimensions.
        el1.style.width = el1.style.height = this.tileDim + 'px';

        // set left positions based on x coordinate.
        el1.style.left = x * this.tileDim + 'px';

        // set top position based on y coordinate.
        el1.style.top = y * this.tileDim + 'px';

        return el1;
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

        let x = 0;
        let y = 0;

        if (type === 'player') {
            x = this.player.x;
            y = this.player.y;
        } else if (type === 'goal') {
            x = this.goal.x;
            y = this.goal.y;
        } else if (type === 'q1') {
            x = this.q1.x;
            y = this.q1.y;
        } else if (type === 'q2') {
            x = this.q2.x;
            y = this.q2.y;
        } else if (type === 'q3') {
            x = this.q3.x;
            y = this.q3.y;
        }

        // Creating sprites
        let sprite = this.createEL(x, y, type);
        sprite.id = type;
        // sprite.style.borderRadius = this.tileDim + 'px';

        // Accessing the layer
        let layer = document.querySelector('#sprites');
        layer.appendChild(sprite);

        return sprite;
    }

    // Collide animation for player
    collide() {
        this.player.element.className += 'collide';
        let obj = this;

        // every time the player collides, lives decrease by one
        // this.lives--;

        // 0.2 seconds later reset the player
        window.setTimeout(() => {
            obj.player.element.className = 'player';
        }, 20);
        return 0;
    }

    // Left movement
    moveLeft() {
        if (this.player.x == 0) {
            this.collide()
            return;
        }

        // check next tile
        let nextTile = this.map[this.player.y][this.player.x - 1];
        if (nextTile == 1) {
            this.collide();
            return;
        }
        this.player.x -= 1;

        // Updating the location of DOM element
        this.updateHoriz();
    }

    // Move up
    moveUp() {
        if (this.player.y == 0) {
            this.collide();
            return;
        }

        // check next tile
        let nextTile = this.map[this.player.y - 1][this.player.x];
        if (nextTile == 1) {
            this.collide();
            return;
        }
        this.player.y -= 1;

        // Updating the location of DOM element
        this.updateVert();
    }

    // Right movement
    moveRight() {
        if (this.player.x == this.map[this.player.y].length - 1) {
            this.collide();
            return;
        }

        // check next tile
        let nextTile = this.map[this.player.y][this.player.x + 1];
        if (nextTile == 1) {
            this.collide();
            return;
        }
        this.player.x += 1;
        this.updateHoriz();
    }

    // Down movement
    moveDown() {
        if (this.player.y == this.map.length - 1) {
            this.collide();
            return;
        }

        // check next tile
        let nextTile = this.map[this.player.y + 1][this.player.x];
        if (nextTile == 1) {
            this.collide();
            return;
        }
        this.player.y += 1;
        this.updateVert();
    }

    // Updating vertical position
    updateVert() {
        this.player.element.style.top = this.player.y * this.tileDim + 'px';
    }

    // Updating horizontal position
    updateHoriz() {
        this.player.element.style.left = this.player.x * this.tileDim + 'px';
    }

    // Checking if the goals is reached
    checkGoal() {
        if (this.player.x == this.goal.x && this.player.y == this.goal.y) {
            if (this.qFinalShown == false) {
                let check = this.qsInstance.checkAnswer(this.qFinal);
                // show end-screen if the player reaches to goal even if he does have a life and some score
                this.gameContainerSore.style.display = 'none';
                let endWords = document.getElementById('game-finished');
                endWords.innerHTML = "Passed! Please follow the inter-galactic travel guidelines!Good luck!";
                this.gameEndScreen.style.display = 'block';

                this.qFinalShown = true;
                // this.music.stopMusic();
                // this.music.playMusicEnd();
            }
        } else if (this.player.x == this.q1.x && this.player.y == this.q1.y) {
            if (this.q1Shown == false) {
                let check = this.qsInstance.checkAnswer(this.q1);
                this.q1Shown = true;
                // this.music.playAlert();
            }
        } else if (this.player.x == this.q2.x && this.player.y == this.q2.y) {
            if (this.q2Shown == false) {
                let check = this.qsInstance.checkAnswer(this.q2);
                this.q2Shown = true;
                // this.music.playAlert();
            }
        } else if (this.player.x == this.q3.x && this.player.y == this.q3.y) {
            if (this.q3Shown == false) {
                let check = this.qsInstance.checkAnswer(this.q3);
                this.q3Shown = true;
                // this.music.playAlert();
            }
        }
    }

    // Size up the game-map
    sizeUp() {
        let map = this.el.querySelector('.game-map');

        map.style.height = this.map.length * this.tileDim + 'px';
        map.style.width = this.map[0].length * this.tileDim + 'px';
    }

}


