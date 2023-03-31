const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
    console.log(Date.now());

    requestAnimationFrame(draw)
}

draw();
