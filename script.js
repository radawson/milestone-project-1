// create coordinate object
class coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// get message element for notifications
const message = document.querySelector('#message');

// range for walls to maintain reasonable space
// enough for 4 walls
let wallRange = [
    40,240,
    280, 520,
    560, 800,
    800, 960
]

// start with three walls
// This could also be an array of arrays
let wall1 = [];
let wall2 = [];
let wall3 = [];
let wall4 = [];

let ball = new coordinate(between(40, 460), 920);

// build wall function
function buildWall(wall, index) {
    let y = between(wallRange[index], wallRange[index +1]);
    for (let x = 0; x < 500; x += 20) {
        wall.push(new coordinate(x, y))
    }
}

// draw ball function
function renderBall() {
    move(newImage('assets/ball.png')).withArrowKeys(ball.x, ball.y, collision);
}

// collision function - could all be in the callback
function collision(element){
// first, if the ball gets to the bottom
if (element.style.bottom == 0 ){

}

}



// draw wall function
function drawWall(wall) {
    for (i = 0; i < wall.length; i++) {
        move(newImage('assets/wall.png')).to(wall[i].x, wall[i].y)
    }
}

// this is a separate function in case we need to redraw the walls
function renderWalls() {
    drawWall(wall1);
    drawWall(wall2);
    drawWall(wall3);
    drawWall(wall4);
}

// initialize walls
function initialize() {
    // format (wall, range index)
    // range index numbers determine area wall will be displayed
    buildWall(wall1, 0);
    buildWall(wall2, 2);
    buildWall(wall3, 4);
    buildWall(wall4, 6);
    // add random holes
    // we know our walls are 25 blocks long
    wall1.splice(between(0, 25), 2);
    wall2.splice(between(0, 25), 2);
    wall3.splice(between(0, 25), 2);
    wall4.splice(between(0, 25), 2);
    renderWalls(); // walls would not need to be rendered more than once at this point
}


//game loop
var count = 0;
//setInterval(mainLoop, 800); // if we need a timed game loop for gravity

function mainLoop() {
    renderBall(); 
}

// run game
initialize();
//mainLoop();





// helper functions
function between(x, y) {
    return Math.floor(
        Math.random() * (y - x) + x
    )
}