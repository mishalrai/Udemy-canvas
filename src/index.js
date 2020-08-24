

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var boudings = canvas.getBoundingClientRect();
    var currentBall = null;

    var balls = 5;
    var ballsArr = [];

    //Create Balls
    for(var i=0; i<balls; i++){
        var radius = getRandomInt( 25, 50);
        var randColor = createRandomRGBColor();
        var ballColor = 'rgba('+randColor.r+', '+randColor.g+', '+randColor.b+')';
        
        var ball = new Ball(radius, ballColor);
        ball.context = context;
        ball.x = getRandomInt( radius, canvas.width - radius );
        ball.y = getRandomInt( radius, canvas.height - radius );
        ballsArr.push(ball);
    }


    drawBalls();

    // Draw ball
    function drawBalls(){

        //Clear canvas
        context.clearRect( 0, 0, canvas.width, canvas.height );

        for(var i=0; i<balls; i++){
            ballsArr[i].draw();
        }
    };

    // Balls are draw from first to last so we need tho loop for last
    // Because balls may overlay first to last 
    function isHitOnBall( mx, my ){

        for( i = balls -1; i>= 0; i--){

            if( Math.sqrt( Math.pow( (mx - ballsArr[i].x), 2) + Math.pow( (my - ballsArr[i].y), 2)) < ballsArr[i].r){
                currentBall = ballsArr[i];
                break;
            }

        }

    };


    //Mouse mousedown handler
    canvas.addEventListener('mousedown', function(event){
        var mousedownX = event.clientX - boudings.left;
        var mousedownY = event.clientY - boudings.top;

        isHitOnBall( mousedownX, mousedownY );

    })

    //Mouse move handler
    canvas.addEventListener('mousemove', function(event){
        var mouseMoveX = event.clientX - boudings.left;
        var mouseMoveY = event.clientY - boudings.top;
        if(currentBall){
            currentBall.x = mouseMoveX;
            currentBall.y = mouseMoveY;

            drawBalls();
        }
    })

    //Mouse mouseup handler
    canvas.addEventListener('mouseup', function(event){
        currentBall = null;
    })
    

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



function getRandomInt( min, max ){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}


function createRandomRGBColor(){
    var red = getRandomInt(0, 257);
    var green = getRandomInt(0, 257);
    var blue = getRandomInt(0, 257);
    return {r:red, g:green, b:blue}
}
