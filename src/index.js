window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /* COLORS */
    var lightCellColor = "#ddb180";
    var darkCellColor = "#7c330c";

    ctx.fillStyle = darkCellColor;
    ctx.fillRect( 30, 30, 440, 440);

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeRect( 47.5, 47.5, 405, 405);


    for( y=0; y <8; y++){
        for( x=0; x<8; x++){
            var fillColor = (x+y)%2 !== 0 ? darkCellColor : lightCellColor;
            ctx.fillStyle = fillColor;
            ctx.fillRect(50 + x*50, 50 + y*50, 50, 50);
         }
    }
    
}

