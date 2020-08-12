
window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    var gap = 80;

    // context.createLinearGradient(x1, y1, x2, y2);
    // context.crateRadialGradiant( x1, y1, r1, x2, y2, r2);




    var radialGradient = context.createRadialGradient(200, 200, 400, canvas.width -gap, canvas.height -gap, 400);
    radialGradient.addColorStop(0, 'red');
    radialGradient.addColorStop(0.5, 'black');
    radialGradient.addColorStop(1, 'blue');


    context.fillStyle = radialGradient;
    context.rect( gap/2, gap/2, (canvas.width-gap) / 2, canvas.height-gap );
    context.stroke();
    context.fill();

    var linearGradient = context.createLinearGradient( gap/2, gap/2, canvas.width -gap, canvas.height -gap);
    linearGradient.addColorStop(0, 'red');
    linearGradient.addColorStop(0.5, 'yellow');
    linearGradient.addColorStop(1, 'blue');

    context.fillStyle = linearGradient;
    context.fillRect( gap/2 + (canvas.width-gap) / 2, gap/2, (canvas.width-gap) / 2, canvas.height-gap );
   



}
