const canvas = document.querySelector('canvas');

canvas.getContext('2d');
canvas.width = document.innerWidth;
canvas.height = document.innerHeight;

function draw() {
    console.log(Date.now());

    requestAnimationFrame(draw)
}

draw();
