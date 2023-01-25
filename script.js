// create coordinate object
class coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// start with three walls
let wall1 = [];
let wall2 = [];
let wall3 = [];

// build wall function
function buildWall(wall) {
    let y = between(40, 960);
    for (let x = 0; x < 500; x += 20) {
        wall.push(new coordinate(x, y))
    }
}

// draw wall function
function drawWall(wall) {
    for (i = 0; i < wall.length; i++) {
        move(newImage('assets/wall.png')).to(wall[i].x, wall[i].y)
    }
}

// initialize walls
function initialize() {
    buildWall(wall1);
    buildWall(wall2);
    buildWall(wall3);
    // add random holes
    // we know our walls are 25 blocks long
    wall1.splice(between(0,25), 2);
    wall2.splice(between(0,25), 2);
    wall3.splice(between(0,25), 2);
}

function render() {
    drawWall(wall1);
    drawWall(wall2);
    drawWall(wall3);
}



// run game
initialize();

//game loop
var count = 0;
setInterval(mainLoop, 1000);

function mainLoop() {
    render();
}







// helper functions
function between(x, y) {
    return Math.floor(
        Math.random() * (y - x) + x
    )
}