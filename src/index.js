window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    /* 
        Bezier Curve
        bezierCurveTo( controlX1, controlY1, controlX2, controlY2, endX, endY)
    */

    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.moveTo(50, 200);
    context.bezierCurveTo( 100, 50, 200, 50, 250, 200)
    context.stroke();

    context.beginPath();
    context.strokeStyle = "blue";
    context.lineWidth = 1;
    context.moveTo(50, 200);
    context.lineTo( 100, 50);
    context.lineTo(200, 50);
    context.lineTo(250, 200);
    context.stroke();
}

