window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /* COLORS */
    var radiant = Math.PI/180;
    
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc( 200, 200, 150, 0*radiant, 180*radiant, true);
    ctx.stroke();
    ctx.fill();
    
}

