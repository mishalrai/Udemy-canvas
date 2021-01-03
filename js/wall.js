function Wall(canvas){
    var wall= this;

    //Global attributes
    wall.canvas= canvas;
    wall.context= canvas.getContext('2d');

    //Specification
    wall.x= canvas.width;
    wall.y= 0;
    wall.width= 100;
    wall.height= 0;
    wall.gap= 0;
    wall.color= getRandomRGBColor();
};

Wall.prototype.draw= function(){
    //Base
    var wall= this;
    var color=
    wall.context.fillStyle= wall.color; 
    wall.context.fillRect(wall.x, wall.y, wall.width, wall.height);
    wall.context.fillRect(wall.x, wall.height + wall.gap, wall.width, wall.canvas.height);

}