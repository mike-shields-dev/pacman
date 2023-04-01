import { gridRes, BOUNDARY, COMMAND } from './game-config.js';
import Pacman from './Pacman.js';

import Boundary from './Boundary.js';
import map from './map.js';

const ctx = document.querySelector('canvas').getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let directions = [];

window.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const { key } = e;

    switch (key) {
        case COMMAND.UP:
            return directions.push("up");
        case COMMAND.DOWN:
            return directions.push("down");
        case COMMAND.LEFT:
            return directions.push("left");
        case COMMAND.RIGHT:
            return directions.push("right");
    }
});

window.addEventListener('keyup', ({ key }) => {
    switch (key) {
        case COMMAND.UP:
            return directions = directions.filter(d => d !== "up");
        case COMMAND.DOWN:
            return directions = directions.filter(d => d !== "down");
        case COMMAND.LEFT:
            return directions = directions.filter(d => d !== "left");
        case COMMAND.RIGHT:
            return directions = directions.filter(d => d !== "right");
    }
});

const player = new Pacman({
    position: {
        x: 1 * gridRes,
        y: 1 * gridRes
    },
    velocity: {
        x: 0,
        y: 0,
    },
});

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    map.forEach((row, y) => {
        row.forEach((cell, x) => {
            const position = {
                x: x * gridRes,
                y: y * gridRes
            };

            switch (cell) {
                case BOUNDARY:
                    new Boundary({ position }).draw(ctx);
                    break;
            }
        });
    });

    player.update(directions);
    player.draw(ctx);

    requestAnimationFrame(loop)
}

loop();
