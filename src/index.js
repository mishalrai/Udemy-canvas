window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    /* 
        Quadratic Curves 
        quadraticCurveTo( controlX, controlY, endX, endY)
        - controlX => 
    */

    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.moveTo(50, 200);
    context.quadraticCurveTo( 150, 50, 250, 200)
    context.stroke();


    context.beginPath();
    context.strokeStyle = "blue";
    context.lineWidth = 1;
    context.moveTo(50, 200);
    context.lineTo( 150, 50);
    context.lineTo(250, 200);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.moveTo(50, 125);
    context.lineTo(250, 125);
    context.stroke();
}

