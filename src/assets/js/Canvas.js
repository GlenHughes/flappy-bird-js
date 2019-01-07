export default class Canvas {
    constructor(canvasWidth, canvasHeight, birdWidth, birdHeight) {
        this.element = document.getElementById('game-canvas');
        this.element.width = this.width = canvasWidth;
        this.element.height = this.height = canvasHeight;
        this.context = this.element.getContext('2d');
        this.birdWidth = birdWidth;
        this.birdHeight = birdHeight;
    }

    clear() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
    }
}