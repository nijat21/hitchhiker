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


    // Adding movement
    window.addEventListener('keydown', event => {
        event.preventDefault();

        switch (event.key) {
            case 'ArrowUp':
                game.moveUp();
                game.checkGoal();
                break;
            case 'ArrowDown':
                game.moveDown();
                game.checkGoal();
                break;
            case 'ArrowLeft':
                game.moveLeft();
                game.checkGoal();
                break;
            case 'ArrowRight':
                game.moveRight();
                game.checkGoal();
                break;
        }
    });


    // reload the page so that we can start the game again
    restartButton.addEventListener('click', () => {
        location.reload();
    });
}