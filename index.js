import Boundary from './Boundary.js';

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const boundary = new Boundary({
    ctx,
    position: {
        x: 40, 
        y: 40
    }
});
}

draw();
