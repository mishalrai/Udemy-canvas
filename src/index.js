window.onload = function(){

    // Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    // context.textAlign = "center | end | left | right | start";
    // Specifics how text is aligned horizontally
    // the default value is "start"

    // context.textBaseline = "alphabetic | top | hanging | middle | bottom";
    // Specifies how text is aligned vertically
    // The default value is "alphbetic"


    // Vertical Reference line
    ctx.beginPath();
    ctx.moveTo( 250, 0);
    ctx.lineTo(250, 500);
    ctx.stroke();

    ctx.font = "normal 400 18px monospace";
    
    ctx.textAlign = "start";
    ctx.fillText("start", 250, 35);

    ctx.textAlign = "center";
    ctx.fillText( "center", 250, 50);

    ctx.textAlign = "end";
    ctx.fillText("end", 250, 65);

    ctx.textAlign = "left";
    ctx.fillText( "left", 250, 80);

    ctx.textAlign = "right";
    ctx.fillText("right", 250, 95);


    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.stroke();

    ctx.textBaseline = "alphabetic";
    ctx.fillText("Alphabtic", 100, 250);

    ctx.textBaseline = "top";
    ctx.fillText("top", 150, 250);
    
    ctx.textBaseline = "hanging";
    ctx.fillText("hanging",250, 250);

    ctx.textBaseline = "middle";
    ctx.fillText("middle", 350, 250);

    ctx.textBaseline = "bottom";
    ctx.fillText("bottom", 450, 250);

}

