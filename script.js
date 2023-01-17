let ball = document.querySelector("#ball");
let moveBy = 10;

//function moveLeft(){}
//function moveRight(){}
//listens for left and right key clicks
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
    });
//listens for unclicked to stop moving
//document.addEventListener()