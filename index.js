import { gridRes, BOUNDARY } from './game-config.js';

import Boundary from './Boundary.js';
import map from './map.js';

const ctx = document.querySelector('canvas').getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

function loop() {
    requestAnimationFrame(loop)
}

loop();
