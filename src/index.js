

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var radiant = Math.PI / 180;


    // context.scalte( horzontalScaleFactor, verticalScaleFoctor)  -> scales the content 

    context.rotate( 10 * radiant);
    context.fillStyle = 'red';
    context.rect( 100, 100, 100, 100);
    context.fill();

}
