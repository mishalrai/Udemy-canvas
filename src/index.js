window.onload = function(){

    // Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // must pass font size with font family
    ctx.font= "40px Verdana";

    // Context.fillText( text, xCoordinate, yCoordinate, maxWidth);
    var fText = "Canvas text";
    ctx.fillText( fText, 100, 100,);

    ctx.fillText( "Testing width parameter", 100, 300, 100);

    // Context.strokeText(text, xCoordinate, yCoordinate, maxWidth);
    var sText = "Stroke Text";
    ctx.strokeText( sText, 100, 200);

}

