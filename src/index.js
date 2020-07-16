window.onload = function(){

    // Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
     /* 
      Shadow attributes on canvas
      -shadowColor
      -shadowOffsetX
      -shadowOffsetY
      -shadowBlur
     */

    ctx.font = "normal 400 30px times";
    ctx.shadowColor = "red";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.fillText("Testing text shadow", 20, 40);


    ctx.font = "normal 400 45px times";
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.strokeText("Testing text shadow", 20, 200);


}

