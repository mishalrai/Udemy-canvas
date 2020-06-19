window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    //Draw line steps
    context.beginPath(); // reset the context state
    context.strokeStyle = "red"; //color of the line
    context.lineWidth = 5; //thickness of the line
    context.moveTo(50, 50); // move(x, y) -> starting point of the line
    context.lineTo(300, 50); //line(x, y) -> end point of the line
    context.stroke();  // draw the line

}
