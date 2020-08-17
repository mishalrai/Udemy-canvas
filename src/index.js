

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // What is velocity?
    // Velocity is the rate of change in an object's position
    // Velocity has a magnitude (speed) and a direction
    // Velocity is a vector quantity.
    // Velocity is represented by the formula.
    // velocity = Δx/Δt

    var ball = new Ball(20, 'green');
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.context = context;
    ball.draw();

    //Velocity
    ball.vx = 2;
    ball.vy = 2;
    
    requestAnimationFrame(animationLoop);

    function animationLoop() {
        
        // Clear Canvas
        context.clearRect( 0, 0, canvas.width, canvas.height );

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
