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
            if (collision(element) == 1) {
                clearInterval(gameLoop);
            }
        }

        var gameLoop = setInterval(moveCharacter, 1)

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
        console.log(element.style.bottom);
        // first, if the ball gets to the bottom
        if (parseInt(element.style.bottom) <= 0) {
            message.innerHTML = "You win!"
            return 1;
        } else {
            return 0;
        }
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}