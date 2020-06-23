window.onload = function(){

    //Definations
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    /* 
       arc
       arc(x,y,r,sa,ea, counterClockeWise)

       - x => x co-ordinate
       - y => y co-ordinate
       - radius => circle radius
       - sa => start angle
       - ea => end angle
       - counterClockwise
    */

    var radian = Math.PI / 180;

    context.beginPath();
    context.lineWidth = 30;
    context.strokeStyle = "red";
    context.arc(200, 200, 50, 0*radian, 180*radian, true);
    context.stroke();
}

