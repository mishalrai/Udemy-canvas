window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    /* 
        Line Caps -> context.lineJoin = "miter| bevel | round";
        - miter -> default
        - bevel
        - round
    */

    /* First line with line cap butt(default)*/
    context.beginPath();
    context.strokeStyle = "red";
    // context.lineJoin = "bevel";
    context.lineJoin = "round";
    context.lineWidth = 20;
    context.moveTo(50, 50);
    context.lineTo(300, 50);
    context.lineTo(300, 300);
    context.lineTo(50, 300);
    context.lineTo(50, 450);
    context.stroke();
}

