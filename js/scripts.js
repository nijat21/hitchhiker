// For movements of the player
window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    startButton.addEventListener('click', () => {
        startGame();
        createMaze();
    });

    let game = new Game();
    function startGame() {
        game.start();
    }
}