window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    /* 
       shadow attributes on canvas
       - shadowColor
       - shadowOffsetX
       - shadowOffsetY
       - shadowBlur
    */
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 60;

    context.shadowColor = "black";
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 10;

    context.moveTo(100, 60);
    context.lineTo(300, 60);
    context.stroke();
 
}

