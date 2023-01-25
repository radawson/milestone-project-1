var ball = document.getElementById("ball");
let left = 0;
let ballTop = 0;
let ballLeft = 0;
var game = document.getElementById("game"); left = 0;
var counter = 0;
var currentBlocks = [];

let block = document.createElement("div"); //creates new div
let hole = document.createElement("div"); //creates new div
let lastBlock = document.getElementById("block" + (counter - 1));
let lastHole = document.getElementById("block" + (counter - 1));
let lastBlockTop = getComputedStyle(block).getPropertyValue("top");
let lastHoleTop = getComputedStyle(hole).getPropertyValue("top");

    function createBlocks() {

        block.setAttribute("class", "block"); //sets class 
        hole.setAttribute("class", "hole"); //sets class
        
        block.setAttribute("id", "block" + counter); //sets id 
        hole.setAttribute("id", "hole" + counter); //sets id 
        
        block.style.top = lastBlockTop + 100 + "px"; //styles new div and makes it equal to new varible
        hole.style.top = lastHoleTop + 100 + "px"; //styles new div and makes it equal to new varible

        var random = Math.floor(Math.random() * 360); //makes holes in random places
        hole.style.left = random + "px"; //styles holes in random spots

        hole.getElementsByClassName("hole");

        game.appendChild(block); //adds lines to dom
        game.appendChild(hole); //adds gaps to the line
    
    }

    createBlocks()
    
let block1 = document.createElement("div"); //creates new div
let hole1 = document.createElement("div"); //creates new div
let lastBlock1 = document.getElementById("block1" + (counter - 1));
let lastHole1 = document.getElementById("block1" + (counter - 1));
let lastBlockTop1 = getComputedStyle(block1).getPropertyValue("top");
let lastHoleTop1 = getComputedStyle(hole1).getPropertyValue("top");    
    
    function createBlocks1() {

        block1.setAttribute("class", "block1"); //sets class 
        hole1.setAttribute("class", "hole1"); //sets class
        
        block1.setAttribute("id", "block1" + counter); //sets id 
        hole1.setAttribute("id", "hole1" + counter); //sets id 
        
        block1.style.top = lastBlockTop1 + 200 + "px"; //styles new div and makes it equal to new varible
        hole1.style.top = lastHoleTop1 + 200 + "px"; //styles new div and makes it equal to new varible

        var random = Math.floor(Math.random() * 300); //makes holes in random places
        hole1.style.left = random + "px"; //styles holes in random spots

        hole1.getElementsByClassName("hole1");
        
        game.appendChild(block1); //adds lines to dom
        game.appendChild(hole1); //adds gaps to the line
    }
    
    createBlocks1()

//code works to move ball left and right but goes off page 92 to 109
let moveBy = 5;
window.addEventListener("load", function () {
    
    ball.style.position = 'relative';
    ball.style.left = 0;
    ball.style.top = 0;

});
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

//makes ball drop within container start to fall slow then fast/stops in container
const delay = ms => new Promise(res => setTimeout(res, ms));
setInterval(async function () {
    await delay(4000);
    if (parseInt(ball.style.top) < 550) {
        ball.style.top = parseInt(ball.style.top) + moveBy + 'px';
    } else {
        ball.style.top = '580px';
    }
}, 1)