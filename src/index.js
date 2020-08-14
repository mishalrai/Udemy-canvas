
window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    

    var ballX = 20;
    var ballY = 20;
    var ballRadius = 30;
    var ballColor = 'orange';
    var changeX = 10;
    var changeY = 10;
    var radian = Math.PI / 180;


    window.requestAnimationFrame( animationLoop );

    function animationLoop(){

       
        // clear Canvas
        context.clearRect( 0, 0, canvas.clientWidth, canvas.height );

        ballX += changeX;
        ballY += changeY;

        if( ballY + ballRadius > canvas.height){
            changeY *= -1;
        }

        if( ballX + ballRadius > canvas.width){
            changeX *= -1;
        }

        if( ballX - ballRadius < 0){
            changeX *= -1;
        }
      
        if( ballY - ballRadius < 0){
            changeY *= -1;
        }

        console.log('x '+ballX, 'y '+ballY, 'width '+canvas.width, 'height '+canvas.height); 

        drawBall ( ballX, ballY, ballRadius, ballColor);
        window.requestAnimationFrame( animationLoop );
    }


    function drawBall ( ballX, ballY, ballRadius, ballColor){

        context.beginPath();
        context.fillStyle = ballColor;
        context.arc(ballX, ballY, ballRadius, 0, 360*radian , false);
        context.fill();
    }

    window.requestAnimationFrame = (function(){
        return window.requestAnimationFrame       ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame    ||
               window.msRequestionAnimationFrame  ||
               function( callback){
                   console.log('from settimeout');
                   window.setTimeout(callback, 1000/60);
               }
    })()

}
