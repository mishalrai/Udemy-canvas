

window.onload = function(){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var img = new Image();
    img.src = 'src/test.png';
    
    // drawImage( img, dx, dy )
    // drawImage( img, dx, dy, dw, dy )
    // drawImage( img, sx, sy, sw, sy, dx, dy, dw, dy, )

    img.onload = function(){
        
        context.drawImage( img, 50, 400)

        context.drawImage( img, 300, 40, img.width * 0.7, img.height*0.7);

        context.drawImage( img, 304, 30, 150, 322, 50, 50, 150, 322);
        
    }
    
}