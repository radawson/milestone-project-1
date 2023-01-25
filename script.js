// Canvas elements
const canvas = document.getElementById("ball-court");
const ctx = canvas.getContext("2d");

// Ball variables
ballX = 10;
ballY = 10;

function renderObjects() {
    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    ball = new Image();
    ball.onload = () => {
        ctx.drawImage(ball, ballX, ballY);
    };
    ballImg.src = 'ball.png';
}


function gameloop() {
    let i = 0;
    while (true)
        if (i > 100) {
            break
        }
    requestAnimationFrame(renderObjects());
    i++;
}

gameloop();

/*
var ballTop = 0;
var ballLeft = 0;
var game = document.getElementById("game");
//var block = document.getElementsByClassName("block");
var hole = document.getElementsByClassName("hole");
var currentBlocks = [];
var block = document.createElement("div"); //creates new div
var hole = document.createElement("div"); //creates new div

const delay = ms => new Promise(res => setTimeout(res, ms));

function createBlocks() {
    if (counter > 0) {

        let lastBlock = document.getElementById("block" + (counter - 1));
        let lastHole = document.getElementById("block" + (counter - 1));

        let lastBlockTop = window.getComputedStyle(lastBlock).getPropertyValue("top");
        let lastHoleTop = window.getComputedStyle(lastHole).getPropertyValue("top");

        block.setAttribute("class", "block"); //sets class 
        hole.setAttribute("class", "hole"); //sets class 
        block.setAttribute("id", "block" + counter); //sets id 
        hole.setAttribute("id", "hole" + counter); //sets id 
        block.style.top = lastBlockTop + 100 + "px"; //styles new div and makes it equal to new varible
        hole.style.top = lastHoleTop + 100 + "px"; //styles new div and makes it equal to new varible

        var random = Math.floor(Math.random() * 360); //makes holes in random places
        hole.style.left = random + "px"; //styles holes in random spots

        game.appendChild(block); //adds lines to dom
        game.appendChild(hole); //adds gaps to the line
    }

    counter++; //loops through counter adds more lines
    currentBlocks.push(counter); // adds blocks at end
}

//code works to move ball left and right but goes off page 6 to 24
let moveBy = 10;
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            ball.style.left = parseInt(ball.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            ball.style.left = parseInt(ball.style.left) + moveBy + 'px';
            break;
    }
});

createBlocks()
//function to make more lines and with holes

//function to scroll lines up continously when left or right arrow key is hit

//function to drop ball unless on platform

//make score count how many lines the ball went through
//make game stop when ball is no longer on screen
//display score
*/