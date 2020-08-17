

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var g = 0.098 //gravity

    //Ball 1
    var ball1 = new Ball(20, 'green');
        ball1.x = 100;
        ball1.y = 200;
        ball1.context = context;
    
    //Ball 2
    var ball2 = new Ball(20, 'gree');
        ball2.x = 200;
        ball2.y = 200;
        ball2.context = context;

    //Ball 3
    var ball3 = new Ball(20, 'gree');
        ball3.x = 300;
        ball3.y = 600;
        ball3.context = context;

    //Velocity
    ball1.vy = 0;
    ball2.vy = 2;
    ball3.vy = -10;

    //Acceleration 
    var ax = 0.05;
    var ay = 0.05;
    
    requestAnimationFrame(animationLoop);

    function animationLoop() {
        
        // Clear Canvas
        context.clearRect( 0, 0, canvas.width, canvas.height );

        // Ball 1
        ball1.vy = ball1.vy + g;
        ball1.y = ball1.y + ball1.vy;

        //Ball 2
        ball2.vy = ball2.vy + g;
        ball2.y = ball2.y + ball2.vy;

        //Ball 2
        ball3.vy = ball3.vy + g;
        ball3.y = ball3.y + ball3.vy;

        ball1.draw();
        ball2.draw();
        ball3.draw();
        
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
