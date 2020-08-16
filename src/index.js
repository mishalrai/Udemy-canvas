

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");


    // context.scalte( horzontalScaleFactor, verticalScaleFoctor)  -> scales the content 


    context.fillRect( 0, 0, 100, 100);

    context.scale( 2, 2);
    context.fillRect( 65, 65, 100, 100);

}
