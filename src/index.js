

window.onload = function(){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var img = new Image();
    img.src = 'src/test.png';
    
    // drawImage( img, dx, dy )
    // drawImage( img, dx, dy, dw, dy )
    // drawImage( img, sx, sy, sw, sy, dx, dy, dw, dy, )


  
    img.onload = function(){
        
        var imgWidth = img.width;
        var imgHeight = img.height;
        context.drawImage( img, 50, 50);

        // Image Data functions
        // - createImageData() Creates a new, blank Image Object
        // - getImageData() Returns and ImageData object that copies the pixel data for the specified reactangle on 
        // - putImageData() puts the image data (from a specified ImageData object) back onto the canvas

        var imageData = context.getImageData( 50, 50, imgWidth, imgHeight);  //(x, y, imgWidth, imgHeight) => x and are starting point of  image width and height
    
        console.log( imageData, 'Image Data');

        // R - The color red (from 0-255);
        // G - The color green (from 0-255);
        // R - The color blue (from 0-255);
        // R - The alpa channel (from 0-255, o is transparent and 255 is fully visible);

        for( var i=0; i< imageData.data.length; i+=4){
            // imageData.data[i] = 0;      // Red
            // imageData.data[i+1] = 0;    // Geen
            // imageData.data[i+2] = 0;    // Blue
            // imageData.data[i+3] = 255;  // Alpa
           
            // Decrease opacity of image
            // imageData.data[i+3] = 50;  // Alpa

            //Inverse Filter
            //  imageData.data[i] = 255 - imageData.data[i] ;      // Red
            // imageData.data[i+1] = 255 - imageData.data[i+1];    // Geen
            // imageData.data[i+2] = 255 - imageData.data[i+2];    // Blue


            //Black and white filter
            
            var avarage = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;

            imageData.data[i] = avarage;      // Red
            imageData.data[i+1] = avarage;    // Geen
            imageData.data[i+2] = avarage;    // Blue 
        }

        context.putImageData(imageData, 50, 50);


    }
    
}