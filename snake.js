document.getElementById('snake');
const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;

// draw the background
function drawBackground(){
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);
}

// draw the snake
function drawSnake(){
ctx.fillStyle = "green";
ctx.fillRect(snakeX, snakeY, 20, 20);
}

function update() {
    snakeX += 20;
    console.log(snakeX);
    drawBackground();
    drawSnake();
}

setInterval(update, 1000);
