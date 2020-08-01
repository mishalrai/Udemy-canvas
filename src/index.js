

window.onload = function(){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var img = new Image();
    img.src = 'src/test.png';
    
    // drawImage( img, dx, dy )
    // drawImage( img, dx, dy, dw, dy )
    // drawImage( img, sx, sy, sw, sy, dx, dy, dw, dy, )

    img.onload = function(){
        
        // context.drawImage( img, 50, 50, 1000, 1000);

        context.drawImage( img, 304, 30, 150, 322, 50, 50, 150, 322);

    }
    
}