class Boundary {
    constructor({ ctx, position }) {
        this.ctx = ctx;
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );
    }
};

export default Boundary;
