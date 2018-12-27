import Canvas from './assets/js/Canvas';
import Score from './assets/js/Score';
import Bird from './assets/js/Bird';

import './assets/css/game-styles.css';

const defaultConfig = {
    gameSpeed: 60, // game speed in milliseconds
    container: 'game-container',
    gameOver: '#game-over',
    birdColour: '#fff',
    birdWidth: 10,
    birdHeight: 10,
}

export default class FlappyBirdJS {
    constructor(config) {
        console.log('flappy bird game has been loaded');
        this.setConfig(config);
        this.container = document.getElementById(this.config.container);
        this.gameOverEl = this.container.querySelector(this.config.gameOver);
        this.score = new Score();
        this.bird = new Bird();
        this.canvas = new Canvas(
            400,
            400,
            this.bird.width, 
            this.bird.height
        );

        this.bird.init(this.canvas);
        this.startGame();

        // allow user to change direction with keys
        document.addEventListener('keydown', event => {
            this.setDirection(event.keyCode);
        });

        // allow restart of game
        this.gameOverEl.querySelector('button').addEventListener('click', event => {
            this.startGame();
        });

        setInterval(() => {
            if (this.running) {
                this.draw();
            }
        }, this.config.gameSpeed);
    }

    setConfig(config) {
        if (!config) {
            return this.config = defaultConfig;
        }
        this.config = { defaultConfig, ...config };
    }

    draw() {
        this.canvas.clear();

        // game running code
    }

    startGame() {
        console.log('Start game');
        this.running = true;
        this.score.setScore(0);
        this.gameOverEl.style.display = 'none';
    }

    gameOver() {
        console.log('Game over!');
        this.running = false;
        this.gameOverEl.querySelector('span').textContent = this.score.getScore();
        this.score.setScore(0);
        this.gameOverEl.style.display = 'block';
    }
}

const bird = new FlappyBirdJS();
