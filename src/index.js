

window.onload = function(){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // context.save()     -> Saving the context state-canvas
    // context.restore()  -> restoring the state from the state stack

    
    context.fillStyle = "red";
    context.fillRect( 240, 100, 120, 120);
    context.save();


    context.fillStyle = "green";
    context.fillRect( 390, 100, 120, 120);
    context.save();

    context.fillStyle = "blue";
    context.fillRect( 540, 100, 120, 120);
    context.save();

    context.restore()
    context.fillRect( 240, 300, 120, 120);

    context.restore()
    context.fillRect( 390, 300, 120, 120);

    context.restore()
    context.fillRect( 540, 300, 120, 120);

}