document.getElementById('snake');
const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;
let direction = null;

// draw the background
function drawBackground() {
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);
}

// draw the snake
function drawSnake(){
ctx.fillStyle = "white";
ctx.fillRect(snakeX, snakeY, 20, 20);
}

function update() {
    if(direction == 'right') {
        if(snakeX < 380) {
        snakeX += 20;
    } else {
        gameOver();
    }


    } else if (direction == 'left') {
        if(snakeX > 0) {
            snakeX -=20;
        } else {
            gameOver();
        }


    } else if (direction == 'up') {
        if(snakeY > 0) {
        snakeY -= 20;
    } else {
        gameOver();
    }


    } else if (direction == 'down') {
        if(snakeY < 380) {
        snakeY +=20;
    } else {
        gameOver();
    }
    }

    drawBackground();
    drawSnake();
}

function changeDirection(event) {
    if(event.code == 'ArrowUp') {
        direction = 'up';
    } else if (event.code == 'ArrowDown') {
        direction = 'down';
    } else if (event.code == 'ArrowLeft') {
        direction = 'left';
    } else if (event.code == 'ArrowRight') {
        direction = 'right';
    }
}

function gameOver() {
    direction = null;
    alert("gameover");
}

setInterval(update, 500);
addEventListener('keydown', changeDirection);