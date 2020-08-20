

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var g = 0.098 //gravity

    //Ball 1
    var ball1 = new Ball(50, 'green');
        ball1.x = 255;
        ball1.y = 250;
        ball1.m = 100;
        ball1.context = context;
        ball1.draw();

    //Ball 2
    var ball2 = new Ball(25, 'red');
        ball2.x = 550;
        ball2.y = 250;
        ball2.m = 5;
        ball2.context = context;
        ball2.draw();
    

    // Velocity
    ball1.vx = 5;   
       
    ball2.vx = -5;

    requestAnimationFrame(animationLoop);

    function animationLoop() { 
        
        // Clear Canvas
        context.clearRect( 0, 0, canvas.width, canvas.height );

        
        // Update
        ball1.x = ball1.x + ball1.vx;
        ball2.x = ball2.x + ball2.vx;

        // Detect Ball collisions
        if( Math.abs(ball1.x - ball2.x) < ball1.r + ball2.r){
            
            // New valocity of ball 1 after collision
            var v1 =  ((ball1.m - ball2.m) * ball1.vx)  / (ball1.m + ball2.m) ;
                v1 += (2 * ball2.m * ball2.vx) / (ball1.m + ball2.m);

            // New valocity of ball 2 after collision
            var v2 = ((ball2.m - ball1.m) * ball2.vx) / (ball1.m + ball2.m);
                v2 += (2 * ball1.m * ball1.vx) / (ball1.m + ball2.m);

                ball1.vx = v1;
                ball2.vx = v2;

        }

        // Detect Edge collisions
        if( ball1.x + ball1.r > canvas.width || ball1.x - ball1.r < 0 ){
            ball1.vx *= -1;
        }
        if( ball2.x + ball2.r > canvas.width || ball2.x - ball2.r < 0 ){
            ball2.vx *= -1;
        }

        ball1.draw();
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
