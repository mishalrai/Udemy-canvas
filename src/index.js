

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var ball = new Ball(20, 'green');
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.context = context;
    ball.draw();

    
    // requestAnimationFrame(animationLoop);

    function animationLoop() {
        
        // Clear Canvas
        context.clearRect( 0, 0, canvas.width, canvas.height );
        
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
