window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //First 
    /**
     *  Syntax ctx.rect(X, Y, width, height);
     */

    ctx.rect(50, 100, 50, 50);
    ctx.stroke();

    // ctx.fillStyle = "red";
    ctx.fillRect( 120, 100, 50, 50);


    ctx.strokeRect( 180, 100, 50, 50);

    // ctx.clearRect( 0, 0, 500, 120);


}


