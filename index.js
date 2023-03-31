import Boundary from './Boundary.js';
import map from './map.js';

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

map.forEach((row, _y) => {
    row.forEach((col, _x) => {
        const position = { x: _x * 40, y: _y * 40}
        const boundary = new Boundary({ position });
        const isChecked = map[_y][_x] === 1;

        if(isChecked) boundary.draw(ctx);
    });
});

function loop() {

    requestAnimationFrame(loop)
}

loop();

export { ctx };
