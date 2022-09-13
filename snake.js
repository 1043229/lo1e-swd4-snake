document.getElementById('snake');
const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;

// draw the background
ctx.fillStyle = "black";
ctx.fillRect(snakeX, SnakeY, 400, 400);

// draw the snake
ctx.fillStyle = "green";
ctx.fillRect(200, 200, 20, 20);

function update() {
    console.log('update');
}

setInterval(update, 1000);
