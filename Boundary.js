import { gridRes } from './game-config.js';

class Boundary {
    constructor({ position }) {
        this.position = position;
        this.width = gridRes;
        this.height = gridRes;
    }

    draw(ctx) {
        ctx.fillStyle = "#00f";
        ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );
    }
};

export default Boundary;
