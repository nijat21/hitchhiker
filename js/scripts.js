// For movements of the player
window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    // New instance of game
    let game = new Game('game-container-1', levels[0]);
    function startGame() {
        game.start();
    }

    startButton.addEventListener('click', () => {
        startGame();
    });

    // Keydown movement
    window.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                game.runningChar();
                game.moveUp();
                game.checkGoal();
                break;
            case 'ArrowDown':
                event.preventDefault();
                game.runningChar();
                game.moveDown();
                game.checkGoal();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                game.runningChar();
                game.turnLeft();
                game.moveLeft();
                game.checkGoal();
                break;
            case 'ArrowRight':
                event.preventDefault();
                game.runningChar();
                game.turnRight();
                game.moveRight();
                game.checkGoal();
                break;
        }
    });

    // Keyup movement
    window.addEventListener('keyup', event => {
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                game.standingChar();
                game.checkGoal();
                break;
            case 'ArrowDown':
                event.preventDefault();
                game.standingChar();
                game.checkGoal();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                game.standingChar();
                game.checkGoal();
                break;
            case 'ArrowRight':
                event.preventDefault();
                game.standingChar();
                game.checkGoal();
                break;
        }
    });


    // reload the page so that we can start the game again
    restartButton.addEventListener('click', () => {
        location.reload();
    });
}