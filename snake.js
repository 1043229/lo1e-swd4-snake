document.getElementById('snake');
const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;
let direction = 'down';

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
    if(direction == 'right'){
        snakeX += 20;
    } else if(direction == 'left'){
        snakeX -= 20;
    } else if(direction == 'up'){
        snakeY -= 20;
    } else if(direction == 'down'){
        snakeY += 20;
    }
   
   
   
    drawBackground();
    drawSnake();
}
drawBackground();
drawSnake();
setInterval(update, 1000);
