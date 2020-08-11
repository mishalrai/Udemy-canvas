
window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // context.cratePattern(image, repetition);
    // repetition:
    // -repeat: both directions
    // -repeat-x: horizontal only
    // -repeat-y: vertical only
    // -no-repeat: neither

    var patternImage = new Image();
    patternImage.src = 'src/pattern.png';

    patternImage.onload = function(){
        // var pattern = context.createPattern( patternImage, 'repeat');
        var pattern = context.createPattern( patternImage, 'repeat-x');
        context.fillStyle = pattern;
        context.fillRect( 0, 0, canvas.width, canvas.height);
    };

}
