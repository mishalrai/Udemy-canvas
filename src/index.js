window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    //Draw line steps
    context.beginPath(); // reset the context state
    context.moveTo(30, 30); // move(x, y) -> starting point of the line
    context.lineTo(80, 80); //line(x, y) -> end point of the line
    context.lineTo(130, 30); //line(x, y) -> end point of the line
    context.lineTo(180, 80); //line(x, y) -> end point of the line
    context.lineTo(230, 30); //line(x, y) -> end point of the line
    context.stroke();  // draw the line

   /*  //Draw line steps
    context.beginPath(); // reset the context state
    context.moveTo(80, 80); // move(x, y) -> starting point of the line
    context.lineTo(130, 30); //line(x, y) -> end point of the line
    context.stroke();  // draw the line


    //Draw line steps
    context.beginPath(); // reset the context state
    context.moveTo(130, 30); // move(x, y) -> starting point of the line
    context.lineTo(180, 80); //line(x, y) -> end point of the line
    context.stroke();  // draw the line

    //Draw line steps
    context.beginPath(); // reset the context state
    context.moveTo(180, 80); // move(x, y) -> starting point of the line
    context.lineTo(230, 30); //line(x, y) -> end point of the line
    context.stroke();  // draw the line */

}
