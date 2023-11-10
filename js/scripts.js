// For movements of the player
window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    startButton.addEventListener('click', () => {
        startGame();
    });

    let game = new Game('game-container-1', levels[0]);
    function startGame() {
        game.start();
    }

    // Adding movement
    window.addEventListener('keydown', event => {
        event.preventDefault();

        switch (event.key) {
            case 'ArrowUp':
                game.moveUp();
                break;
            case 'ArrowDown':
                game.moveDown();
                break;
            case 'ArrowLeft':
                game.moveLeft();
                break;
            case 'ArrowRight':
                game.moveRight();
                break;
        }
    });

    // difference between normal even and keydown event
    // how does this code given that we automatically put keydown even for the arrows
    // 
    Game.prototype.keyboardListener = function () {
        document.addEventListener('keydown', event => {
            this.movePlayer(event);
            this.checkGoal();
        });

    }
}