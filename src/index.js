

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");


    var g = 0.098;
    var mouseX = 0;
    var mouseY = 0; 


    var ball = new Ball(20, 'green');
    ball.x = canvas.width/2;
    ball.y = 50;
    ball.context = context;
    ball.draw();

    ball.vy = 2;

    canvas.addEventListener('mousemove', function(event){
        var boundings = canvas.getBoundingClientRect();
        mouseX = event.clientX - boundings.left;
        mouseY = event.clientY - boundings.top;

        console.log( mouseX, mouseY);
    });

    
    requestAnimationFrame(animationLoop);

    function animationLoop() {
        
        // Clear Canvas
        context.clearRect( 0, 0, canvas.width, canvas.height );

        // ball.x = ball.x + ball.vx;
        ball.vy = ball.vy + g;
        ball.y = ball.y + ball.vy;
        ball.draw();

        // Mouse Collision check
        if( Math.sqrt(  Math.pow( (ball.x - mouseX), 2 ) + Math.pow( (ball.y - mouseY) ,2) ) < ball.r){
            ball.vy *= -1;
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
