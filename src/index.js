

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // What is acceleration?
    // Acceleration is the rate of change of velocity of an object with respect to time
    // Acceleration is a vector quantity
    // Acceleration is respresented by the formula 
    // velocity = Δv/Δt

    var ball = new Ball(20, 'green');
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.context = context;
    ball.draw(); 

    //Velocity
    ball.vx = -2;
    ball.vy = -2;

    //Acceleration 
    var ax = 0.05;
    var ay = 0.05;
    
    requestAnimationFrame(animationLoop);

    function animationLoop() {
        
        // Clear Canvas
        context.clearRect( 0, 0, canvas.width, canvas.height );


        //Update 
        // ball.vx = ball.vx + ax;
        // ball.x = ball.x + ball.vx;
 
        ball.vy = ball.vy + ay;
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
