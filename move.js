function move(element) {
    element.style.position = 'absolute'
    // fallFactor is the speed at which the ball falls
    var fallFactor = 1;

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom) {
        // left and bottom are starting positions
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveCharacter() {
            if (direction === 'west') {
                x -= 1
            }
            if (direction === 'north') {
                y += 1
            }
            if (direction === 'east') {
                x += 1
            }
            if (direction === 'south') {
                y -= 1
            }
            y -= fallFactor;
            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
            switch (collision(element)) {
                case 'win':
                    clearInterval(gameLoop);
                    message.innerHTML = "You win!"
                    element.remove();
                    break;
                case 'lose':
                    clearInterval(gameLoop);
                    message.innerHTML = "You lose!"
                    element.src='assets/explosion.png';
                    document.querySelector('#start-btn').style.display = "none";
                    document.querySelector('#reset-btn').style.display = "block";
                    break;
            }
        }

        var gameLoop = setInterval(moveCharacter, gameSpeed)

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;

            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            /*if(e.key === 'ArrowUp'){
                direction = 'north'
            }*/
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
        })

        document.addEventListener('keyup', function (e) {
            direction = null;
        })
    }

    // collision function - could all be in the callback
    function collision(element) {
        // first, if the ball gets to the bottom
        if (parseInt(element.style.bottom) <= 0) {
            return "win";
        } else if (wallCheck(element)) {
            return "lose";
        }
    }

    // could be part of collision, but kept separate for clarity
    function holeCheck(wall, element) {
        console.log("checking hole",);
        for (i = 0; i < wall.length; i++) {
            console.log("1:",wall[i].x + itemWidth,parseInt(element.style.left));
            console.log("1:",wall[i].x,parseInt(element.style.left) + itemWidth);
            if (wall[i].x + itemWidth > parseInt(element.style.left) &&
                wall[i].x < parseInt(element.style.left) + itemWidth
            ) {
                return true;
            }
        }
        return false;
    }

    // could be part of collision, but kept separate for clarity
    function wallCheck(element) {
        for (i = 0; i < walls.length; i++) {
            //console.log("1:", walls[i][0].y + itemHeight, parseInt(element.style.bottom))
            //console.log("2:", walls[i][0].y, parseInt(element.style.bottom) + itemHeight);
            // check the first block of each wall to see if the ball is on the same height as the wall
            if (walls[i][0].y + itemHeight > parseInt(element.style.bottom) && //bottom of ball below top of wall
                walls[i][0].y < parseInt(element.style.bottom) + itemHeight // top of ball above bottom of wall
            ) {
                if (holeCheck(walls[i], element)) {
                    return true;
                }
            }
        }
        return false;
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}