export default class Bird {
    constructor(birdColour, width, height) {
        this.birdColour = birdColour;
        this.squares = [];
        this.width = width;
        this.height = height;
        this.position = {
            x: 1,
            y: 1,
        }
    }

    init(canvas) {
        this.canvas = canvas;
    }

    getLength() {
        return this.squares.length;
    }

    draw(x, y) {
        // draw square
        this.canvas.context.fillStyle = this.birdColour
        this.canvas.context.beginPath();
        this.canvas.context.ellipse(
            x * this.width, 
            y * this.height, 
            this.width, 
            this.height,
            Math.PI / 4, 0, 2 * Math.PI
        );
        this.canvas.context.stroke();
    }
}