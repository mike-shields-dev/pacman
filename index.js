import { gridRes, WALL, COMMAND } from './game-config.js';
import Pacman from './Pacman.js';

import Wall from './Wall.js';
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
        case COMMAND.RIGHT:
            return directions.push("right");
        case COMMAND.DOWN:
            return directions.push("down");
        case COMMAND.LEFT:
            return directions.push("left");
    }
});

window.addEventListener('keyup', ({ key }) => {
    switch (key) {
        case COMMAND.UP:
            return directions = directions.filter(d => d !== "up");
        case COMMAND.RIGHT:
            return directions = directions.filter(d => d !== "right");
        case COMMAND.DOWN:
            return directions = directions.filter(d => d !== "down");
        case COMMAND.LEFT:
            return directions = directions.filter(d => d !== "left");
    }
});

const player = new Pacman({
    position: {
        x: 3 * (gridRes / 2),
        y: 3 * (gridRes / 2)
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
            if (cell !== WALL) return;

            const position = {
                x: x * gridRes,
                y: y * gridRes,
            };

            const wall = new Wall({ position })
            wall.draw(ctx);

            const {
                position: { x: playerX, y: playerY, },
                radius: playerRadius,
            } = player;

            const playerBounds = {
                top: playerY - playerRadius,
                right: playerX + playerRadius,
                bottom: playerY + playerRadius,
                left: playerX - playerRadius,
            }

            const {
                position: { x: wallX, y: wallY },
                width: wallWidth,
                height: wallHeight,
            } = wall;

            const wallBounds = {
                top: wallY,
                right: wallX + wallWidth,
                bottom: wallY + wallHeight,
                left: wallX,
            };

            if (
                playerBounds.top <= wallBounds.bottom &&
                playerBounds.right >= wallBounds.left &&
                playerBounds.bottom >= wallBounds.top &&
                playerBounds.left <= wallBounds.right
            ) {
                console.log("collision");
            }
        });
    });

    player.update(directions);
    player.draw(ctx);

    requestAnimationFrame(loop)
}

loop();
