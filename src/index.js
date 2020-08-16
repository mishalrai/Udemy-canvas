

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var radiant = Math.PI / 180;


    context.translate( -100, -100);
    context.fillStyle = 'red';
    context.rect( 100, 100, 100, 100);
    context.fill();


    context.fillStyle = 'blue';
    context.rect( 200, 200, 100, 100);
    context.fill();

}
