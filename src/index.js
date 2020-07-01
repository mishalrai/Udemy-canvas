window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /* COLORS */
    var radiant = Math.PI/180;
    
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(272, 286);
    ctx.arc( 200, 200, 112, 50*radiant, 300*radiant, false);
    ctx.lineTo(200, 200);
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "orange";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(180, 144, 10, 0*radiant, 360*radiant, false);
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.fill();
    ctx.stroke();
    

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.arc(400, 100, 80, 120*radiant, 300*radiant, false);
    ctx.stroke();
    ctx.fill(); 
    
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.arc(400, 100, 80, 60*radiant, 240*radiant, false);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.arc(390, 60, 7, 0, 360*radiant, false);
    ctx.fill();
    ctx.stroke();
}

