import { gridRes } from './game-config.js';

class Pacman {
    #radius = gridRes / 2.2;
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
    }

    draw(ctx) {
        const offset = gridRes / 2;
        const x = this.position.x + offset;
        const y = this.position.y + offset;
        const startAngle = 0;
        const endAngle = Math.PI * 2;
        
        ctx.fillStyle = '#ff0';
        ctx.beginPath();
        ctx.arc(x, y, this.#radius, startAngle, endAngle);
        ctx.fill();
        ctx.closePath();
    }
}

export default Pacman;

