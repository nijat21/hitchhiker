// Player class
class Player {
    constructor(gameScreen, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement('img');

        this.addPlayer(imgSrc);
    }

    addPlayer(imgSrc) {
        // Adding the player to the screen
        this.element.src = imgSrc;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.gameScreen.appendChild(this.element);
    }


}