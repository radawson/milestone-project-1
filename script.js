var ball = document.getElementById("ball");
var game = document.getElementById("game");
var counter = 0;
var interval;
var left = 0;


//9 to 34 doesnt move ball
//function moves ball left
function moveLeft() {
    window.getComputedStyle(ball).getPropertyValue(left);
    if (left > 0) {
    ball.style.left = left - 2 + "px";
}}
//function moves ball right
function moveRight() {
    window.getComputedStyle(ball).getPropertyValue(left);
    if(left > 500){
    ball.style.left = left + 2 + "px";
}}

//listens for keyboard (press down) 
document.addEventListener("keydown", event => {
    if (event.key ==="ArrowLeft") {
        interval = setInterval(moveLeft,-1);
    }
    if (event.key ==="ArrowRight") {
        interval = setInterval(moveRight, 1);
    }
});
//listens for keyboard(lift up)
document.addEventListener("keyup", event => {
    clearInterval(interval);
})

//code works to move ball left and right but goes off page
/*let moveBy = 10;
window.addEventListener('load',() =>{
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
    });*/
//sets function to new variables for lines added and hole
setInterval(function(){
    const lastBlock = document.getElementById("block" + (counter -1));
    const lastHole = document.getElementById("block" + (counter -1));
 if(counter > 0) {   
    var lastBlockTop = window.getComputedStyle(lastBlock).getPropertyValue("top"); 
    var lastHoleTop = window.getComputedStyle(lastHole).getPropertyValue("top");
}
if( lastBlockTop<300 ){ 
    let block = document.createElement("div"); //creates new div
    let hole = document.createElement("div"); //creates new div
    block.setAttribute("class", "block"); //sets class for css
    hole.setAttribute("class", "hole"); //sets class for css
    block.setAttribute("id", "block"+ counter); //sets id for js
    hole.setAttribute("id", "hole"+ counter); //sets id for js
    block.style.top = lastBlockTop + 100 +"px"; //styles new div
    hole.style.top = lastHoleTop + 100 + "px"; //styles new div
    var random = Math.floor(Math.random() * 460); //makes holes have random numbers
    hole.style.left = random + "px"; //styles holes in random spots
    game.appendChild(block); //adds lines to dom
    game.appendChild(hole); //adds gaps to the line
    counter++; //loops through counter adds more lines
    currentBlocks.push(counter); // adds blocks at end

}
})

//supposed to loop through blocks 
 var currentBlocks = [];
for(var i = 0; i < currentBlocks.length; i++);{
        let current = currentBlocks[i];
        let ihole= document.getElementById("hole" + current);
        let iblock = document.getElementById("block" + current);
        let iblockTop = window.getComputedStyle("iblock").getPropertyPriorityvalue("top");
        iblock.style.top = iblockTop - 0.5 + "px";

}10;





