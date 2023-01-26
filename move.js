function move(element) {
    element.style.position = 'absolute'
    // fallFactor is the speed at which the ball falls
    var fallFactor = 1;

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback) {
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
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

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
            //callback(element);
        })

        document.addEventListener('keyup', function (e) {
            direction = null;
            //callback(element);
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}