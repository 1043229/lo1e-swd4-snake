document.getElementById('snake');
const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

// draw the background
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);

// draw the snake
ctx.fillStyle = "green";
ctx.fillRect(200, 200, 20, 20);

function update() {
    console.log('update');
}
setInterval(update, 1000);
