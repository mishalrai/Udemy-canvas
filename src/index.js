window.onload = function(){

    // Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    

    draw3DText("Hello Mishal Rai", 20, 100, "normal bolder 45px courier", "red", 15);

    function draw3DText( text, x, y, style, color, size){
        var i = 0;
        ctx.font = style;
        ctx.fillStyle = "black";
        for( i; i< size; i++){
            ctx.fillText(text, x+i, y+i);
        }

        ctx.fillStyle = color;
        ctx.fillText( text, x, y);
    }   


}

