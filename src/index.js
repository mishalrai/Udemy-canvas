
window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var isBackgroundLoaded = false;
    var isHeroloaded = false;


    /* BACKGROUND */
    var backgroundImage = new Image();
    backgroundImage.src = 'src/background.jpg';

    backgroundImage.onload = function () {
        isBackgroundLoaded = true;
        
    }


    /* HERO */
    var spriteImage = new Image();
    spriteImage.src = 'src/sprite.png';

    var cellWidth = 75;
    var cellHeight = 80;

    spriteImage.onload = function () {
        isHeroloaded = true;
    };


    /* MOVE SPECIFICATION */
    var moveAmount = 2;
    var moveX = 0;

    requestAnimationFrame(animationLoop);

    var counter = 0;
    var start = new Date();

    function animationLoop() {
        var now = new Date();
        if (now - start > 30) {
            start = now;
            counter %= 14;
            context.clearRect(0, 0, canvas.width, canvas.height);

            if(moveX >= canvas.width){
                moveX = -1 * cellWidth;
            }
            moveX += moveAmount;

            if(isBackgroundLoaded){
                context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
            }
            if(isHeroloaded){
                context.drawImage(spriteImage, counter * cellWidth, 0, cellWidth, cellHeight, moveX, 200, 50, 50);
            }
            counter++;
        }
        requestAnimationFrame(animationLoop);
    };


    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestionAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
    })()

}
