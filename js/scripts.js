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
}