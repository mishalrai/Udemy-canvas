

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var g = 0.098 //gravity

    //Ball 1
    var ball = new Ball(20, 'green');
        ball.x = 100;
        ball.y = 200;
        ball.context = context;
        ball.draw();

    //Ball 2
    var ball2 = new Ball(20, 'red');
        ball2.x = 30;
        ball2.y = 480;
        ball2.context = context;
        ball2.draw();
    

    //Velocity
    ball.vx = 5;
    ball.vy = 0;
   
    ball2.vx = 5;
    ball2.vy = -7;

    requestAnimationFrame(animationLoop);

    function animationLoop() { 
        
        // Clear Canvas
        context.clearRect( 0, 0, canvas.width, canvas.height );

        
        // Update

            //ball
            ball.vy = ball.vy + g;
            ball.x = ball.x + ball.vx;
            ball.y = ball.y + ball.vy;

            //ball2
            ball2.vy = ball2.vy + g;
            ball2.x = ball2.x + ball2.vx;
            ball2.y = ball2.y + ball2.vy;

        ball.draw();
        ball2.draw();
    
        
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
