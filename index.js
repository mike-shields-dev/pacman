import boundaries from "./boundaries.js";

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

boundaries.forEach(b => b.draw(ctx));

function loop() {

    requestAnimationFrame(loop)
}

loop();

export { ctx };
