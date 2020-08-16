
window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");



    var spriteImage = new Image();
    spriteImage.src = 'src/sprite.png';

    // drawImage( img, sx, sy, sw, sh, dx, dy, dw, dy, )
    var cellWidth = 75;
    var cellHeight = 80;
    
    spriteImage.onload = function(){
        context.drawImage( spriteImage, 0, 0 );
        // context.drawImage( spriteImage, 0, 0, (cellSize * index), cellSize, 600, 350, cellSize, cellSize );
    };


    requestAnimationFrame( animationLoop );

    var counter = 0;
    var rowCount = 0;
    var start = new Date();

    function animationLoop(){
        var now = new Date();
        if( now - start > 30){
            start = now;
            context.clearRect(600, 350, cellWidth, cellHeight);
            counter %= 14;
            drawTileCell(counter, rowCount);
            counter++;
        }
        requestAnimationFrame( animationLoop );
        
    };

    function drawTileCell( index ){
        context.drawImage( spriteImage, index*cellWidth, 0, cellWidth, cellHeight, 600, 350, cellWidth, cellHeight );
    }

    window.requestAnimationFrame = (function(){
        return window.requestAnimationFrame       ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame    ||
               window.msRequestionAnimationFrame  ||
               function( callback){
                   window.setTimeout(callback, 1000/60);
               }
    })()

}
