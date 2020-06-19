window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    /* 
        Line Caps -> context.lineCap = "";
        - butt -> default
        - round
        - square
    */

    /* First line with line cap butt(default)*/
    context.beginPath();
    context.lineCap = "butt";
    context.strokeStyle = "red";
    context.lineWidth = 20;
    context.moveTo(100, 30);
    context.lineTo(100, 300);
    context.stroke();


    /* Second line with line cap square*/
    context.beginPath();
    context.lineCap = "square";
    context.lineWidth = 20;
    context.moveTo(250, 30);
    context.lineTo(250, 300);
    context.strokeStyle = "blue";
    context.stroke();
    
    
    /* Third line with line cap round*/
    context.beginPath();
    context.lineCap = "round";
    context.lineWidth = 20;
    context.strokeStyle = "green";
    context.moveTo(400, 30);
    context.lineTo(400, 300);
    context.stroke();

}


/*
 *  Note => square and round line cap increase the size of the line 
 */