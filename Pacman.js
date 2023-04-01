import { gridRes } from './game-config.js';

class Pacman {
    #radius = gridRes / 3;
    speed = 5;

    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
    }

    get radius() {
        return this.#radius
    }

    update(directions) {
        const velocityMap = {
            up: { 
                x: 0, 
                y: -this.speed 
            },
            down: {
                x: 0,
                y: this.speed,
            },
            left: { 
                x: -this.speed, 
                y: 0,
            },
            right: {
                x: this.speed,
                y: 0,
            },
        }

        this.velocity = 
            velocityMap[directions.at(-1)] || 
            { x: 0, y: 0 };

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

    draw(ctx) {
        const offset = gridRes / 2;
        const x = this.position.x;
        const y = this.position.y;
        const startAngle = 0;
        const endAngle = Math.PI * 2;
        
        ctx.beginPath();
        ctx.fillStyle = '#ff0';
        ctx.arc(
            x, 
            y, 
            this.#radius, 
            startAngle, 
            endAngle
        );
        ctx.fill();
        ctx.closePath();
    }
}

export default Pacman;

