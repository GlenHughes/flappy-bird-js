export default class Bird {
    constructor(birdColour, outlineColour, width, height) {
        this.birdColour = birdColour;
        this.outlineColour = outlineColour;
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
        this.canvas.context.fillStyle = this.snakeColour
        this.canvas.context.fillRect(
            x * this.width, 
            y * this.height, 
            this.width, 
            this.height
        );

        // draw outline
        this.canvas.context.fillStyle = this.outlineColour;
        this.canvas.context.strokeRect(
            x * this.width, 
            y * this.height, 
            this.width,
            this.height
        );
    }
}