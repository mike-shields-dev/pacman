import boundaries from "./boundaries.js";

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

boundaries.forEach(b => b.draw(ctx));
const boundary = new Boundary({
    ctx,
    position: {
        x: 40, 
        y: 40
    }
});
}

draw();
