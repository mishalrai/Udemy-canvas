function GameBackground(src, canvas){
    //Base
    var bg= this;

    //Global Attributes
    bg.canvas= canvas;
    bg.context= bg.canvas.getContext('2d');


    //Specification
    bg.x= 0;
    bg.y= 0;
    bg.width= bg.canvas.width;
    bg.height= bg.canvas.height;
    bg.src= src;
    bg.img= null;

    //Create background image
    bg.create();
};

GameBackground.prototype.create= function(){
    //Base
    var bg= this;

    //Create Image
    bg.img= new Image();
    bg.img.src= bg.src;
};


GameBackground.prototype.draw= function(){
    //Base
    var bg= this;

    //Draw
    if(bg.img != null){
        bg.context.drawImage(bg.img, bg.x, bg.y, bg.width, bg.height);
    }
}