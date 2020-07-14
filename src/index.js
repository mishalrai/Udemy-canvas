window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /*
     Shadow attributes on canvas
     -shadowColor
     -shadowOffsetX
     -shadowOffsetY
     -shadowBlur
     */

    ctx.beginPath();
    ctx.fillStyle = "green";
    
    
    // Shadow
    ctx.shadowColor = "#000";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;
    ctx.rect(100, 100, 200, 200);
    
    ctx.stroke();
    ctx.fill();
}

