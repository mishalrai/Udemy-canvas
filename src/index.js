window.onload = function(){

    // Definations
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // ctx.font = "font-style font-weight font-size font-family";

    //font-style
        // -normal (the default)
        // -italic
        // - oblique
        // - inherit (style comes from the parent element)

    
    // font-weight
        // - normal (the default)
        // - bold
        // - bolder
        // - lighter
        // - 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
        // - inherit (style comes from the parent element)

    // font-size
        // - xx-small | x-small | small | smaller | medium | large | x-large | xx-large
        // - exact number in px (pixels), pt (points) or em (ems)
        // - inherit;

    // font-family
        // - fomily-name (linke "times", "courier", "arial"...)
        // - generic-family (like "serif", "sans-serif", "cursive")
        // - inherit (style comes from the parent element)

    var text = "I am testing text styling";
    ctx.font = "normal bolder xx-large courier";
    ctx.fillText(text, 10, 100);


}

