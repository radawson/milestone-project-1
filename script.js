
/*let moveBy = 10;
window.addEventListener("load", function() {
    var ball = document.getElementById("ball");
    var game = document.getElementById("game"); 
    ball.style.position = 'relative';
    ball.style.left = 0;
    ball.style.top = 0;

});
document.addEventListener('keyup',(e) =>{
    switch(e.key){
        case 'ArrowLeft':
            ball.style.left = parseInt(ball.style.left )- moveBy + 'px';
            break;
        case 'ArrowRight':
            ball.style.left = parseInt(ball.style.left) + moveBy + 'px';
            break;
    }
    });
//function to make more lines and with holes
    setInterval(function(){
        var lastBlock = document.getElementById("block" + (counter -1));
        var lastHole = document.getElementById("block" + (counter -1));
       
        if(counter > 0){
        var lastBlockTop = parseInt(window.getComputedStyle(lastBlock).getPropertyValue("top")); 
        var lastHoleTop = parseInt(window.getComputedStyle("lastHole").getPropertyValue("top"));
        }

        var block = document.createElement("div"); //creates new div
        var hole = document.createElement("div"); //creates new div
        block.setAttribute("class", "block"); //sets class 
        hole.setAttribute("class", "hole"); //sets class 
        block.setAttribute("id", "block"); //sets id 
        hole.setAttribute("id", "hole"); //sets id 

        block.style.top = lastBlockTop + 100 +"px"; //styles new div and makes it equal to new varible
        hole.style.top = lastHoleTop + 100 + "px"; //styles new div and makes it equal to new varible

        var random = Math.floor(Math.random() * 360); //does math to make holes in random places
        hole.style.left = random + "px"; //styles holes in random place

        game.appendChild(block); //adds lines to dom
        game.appendChild(hole); //adds gaps to the line
        counter++; //loops through counter adds more lines
       // currentBlocks.push(counter); // adds blocks at end
        
    },1)*/


var ball = document.getElementById("ball");
let left = 0;
let ballTop = 0;
let ballLeft = 0;
var game = document.getElementById("game"); left = 0;
let counter = 0;
let getElementsByClassName=("hole");
let currentBlocks = [];
let block = document.createElement("div"); //creates new div
let hole = document.createElement("div"); //creates new div
//let lastBlock = document.getElementById("block" + (counter - 1));
//let lastHole = document.getElementById("block" + (counter - 1));
//let lastBlockTop = getComputedStyle(block).getPropertyValue("top");
//let lastHoleTop = getComputedStyle(hole).getPropertyValue("top");

function createBlocks() {
   // if (counter > 0) {

        let lastBlock = document.getElementById("block" + (counter - 1));
        let lastHole = document.getElementById("block" + (counter - 1));

        let lastBlockTop = window.getComputedStyle(block).getPropertyValue("top");
        let lastHoleTop = window.getComputedStyle(hole).getPropertyValue("top");

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
    //}
/*function updateBlock() {
    counter++; //loops through counter adds more lines
    for(let i = i < 50; i++;
    currentBlocks.push(counter)) // adds blocks at end
}*/

    }
    createBlocks()

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