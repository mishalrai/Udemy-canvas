

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
    

    //Velocity
    ball.vx = 5;
    ball.vy = 0;

    requestAnimationFrame(animationLoop);

    function animationLoop() { 
        
        // Clear Canvas
        context.clearRect( 0, 0, canvas.width, canvas.height );

        
        // Update
        ball.vy = ball.vy + g;

        ball.x = ball.x + ball.vx;
        ball.y = ball.y + ball.vy;

        ball.draw();
    
        
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
