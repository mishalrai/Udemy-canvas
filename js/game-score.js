function GameScore(canvas){
    //Base
    var gameScore = this;

    //Global Attributes
    gameScore.canvas= canvas;
    gameScore.context= gameScore.canvas.getContext('2d');

    //Specification
    gameScore.startMoment= new Date();
    gameScore.score= 0;
    gameScore.x= 0;
    gameScore.y= 0;
};

GameScore.prototype.draw= function(){
    //Base
    var gameScore= this;

    var draw= new Date();
    
    gameScore.score= parseFloat((draw - gameScore.startMoment)/1000).toFixed(1);
    gameScore.context.font= '45px Verdana';
    gameScore.context.fillText(gameScore.score, gameScore.x, gameScore.y);
}