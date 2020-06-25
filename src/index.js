window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    /* 
        Bezier Curve
        bezierCurveTo( controlX1, controlY1, controlX2, controlY2, endX, endY)
    */


    function drawBezierCurve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, curveColor, curveWidth){
        context.beginPath();
        context.strokeStyle = curveColor || 'red';
        context.lineWidth = curveWidth || 2;
        context.moveTo(startX, startY);
        context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
        context.stroke();

        /* Guide lines */
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "gray";
        context.moveTo(startX, startY);
        context.lineTo(controlX1, controlY1);
        context.lineTo(controlX2, controlY2);SVGAElement;
        context.lineTo(endX, endY);
        context.stroke();

        /* Circles */
        context.beginPath();
        context.arc(controlX1, controlY1, 7, 2*Math.PI, false);
        context.lineWidth = 1;
        context.strokeStyle = 'black';
        context.fillStyle = "gray";
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(controlX2, controlY2, 7, 2*Math.PI, false);
        context.lineWidth = 1;
        context.strokeStyle = 'black';
        context.fillStyle = "gray";
        context.fill();
        context.stroke();
    };


    function drawQuadraticCurve( startX, startY, controlX, controlY, endX, endY, curveColor, curveWidth){
        context.beginPath();
        context.strokeStyle = curveColor || 'red';
        context.lineWidth = curveWidth || 2;
        context.moveTo(startX, startY);
        context.quadraticCurveTo(controlX, controlY, endX, endY);
        context.stroke();

        /* Guide */
        context.beginPath();
        context.strokeStyle = "grey";
        context.lineWidth = curveWidth || 1;
        context.moveTo(startX, startY);
        context.lineTo(controlX, controlY);
        context.lineTo(endX, endY);
        context.stroke();

        /* Circle */
        context.beginPath();
        context.arc(controlX, controlY, 7, 2*Math.PI, false);
        context.fillStyle = "grey";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();
    }


    drawBezierCurve( 430, 130, 470, 10, 670, 10, 670, 180);
    drawQuadraticCurve( 670, 180, 670, 380, 430, 520);
    
    drawBezierCurve( 430, 130, 410, 10, 190, 10, 190, 180);
    drawQuadraticCurve( 190, 180, 190, 380, 430, 520);
}

