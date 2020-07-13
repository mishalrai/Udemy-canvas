window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // Polygon variables
    var sides = 7;
    var radius = 100;
    var centerX = 250;
    var centerY = 250;
    var startAngle = 20;

    var angle = (2*Math.PI) / sides;

    // Start drawing
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";

    //Begining point coordinates
    var beginX = centerX + radius * Math.cos(startAngle);
    var beginY = centerY - radius * Math.sin(startAngle);

    ctx.moveTo(beginX, beginY);

    

    //Drawing lines
    for( var i =1; i<=sides; i++){
        //Current point's coordinates
        var currentAngle = startAngle + i * angle;
        var currentPointX = centerX + radius * Math.cos(currentAngle);
        var currentPointY = centerY - radius * Math.sin(currentAngle);

        //Draw the line
        ctx.lineTo( currentPointX, currentPointY);
    }
    ctx.closePath();
    ctx.stroke();

    var radiant = Math.PI/180;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";
    ctx.arc(centerX, centerY, radius, 0, 360*radius, false);
    ctx.arc(centerX, centerY, 1, 0, 360*radius, false);
    ctx.stroke();


}

