// Initaial Screen
// Game Playing screen
// Game Over Scree

var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;
var KEY_CODE = {
    R: 82,
}

function FlappyMonster( canvas ){

    var game = this;

    // Global Attributes
    game.canvas = canvas;
    game.context = game.canvas.getContext('2d');

    //Game State
    game.currentState = GAME_OVER;

    //Bind events
    game.bindEvents();

    //Create Game Object
    game.createObjects();
};

FlappyMonster.prototype.createObjects = function(){
    
}

FlappyMonster.prototype.bindEvents = function(){

    //Base
    var game = this;

    //Mouse Listener
    game.canvas.addEventListener('click', function(event){
        switch(game.currentState){
            case INITIAL:
                game.currentState = GAME_PLAYING;
                break;
            
            case GAME_PLAYING:
                //DRAW GAME PLYING STATE
                break;
    
            case GAME_OVER:
                //DRAW GAME OVER STATE
                break;
        }
    })

    //Key listener
    window.addEventListener('keydown', function(event){
        switch(game.currentState){
            case INITIAL:
                break;
            
            case GAME_PLAYING:
                //DRAW GAME PLYING STATE
                break;
    
            case GAME_OVER:
                if(event.keyCode === KEY_CODE.R){
                    game.currentState = GAME_PLAYING;
                }
                break;
        }
    })
}

FlappyMonster.prototype.start = function(){
    var game = this;

    window.requestAnimationFrame(function(){
        game.runGameLoop();
    })
}


FlappyMonster.prototype.runGameLoop = function(){
    var game = this;

    switch(game.currentState){
        case INITIAL:
            //DRAW INTIAL SCREEN
            game.drawInitialScreen();
            break;
        
        case GAME_PLAYING:
            //DRAW GAME PLYING STATE
            game.drawGamePlayingScreen();
            break;

        case GAME_OVER:
            //DRAW GAME OVER STATE
            game.drawGameOverScreen();
            break;
    }

    window.requestAnimationFrame(function(){
        game.runGameLoop();
    })
}


FlappyMonster.prototype.drawInitialScreen = function(){
    var game = this;

    //Draw
    game.context.fillStyle = "black";
    game.context.fillRect( 0, 0, game.canvas.width, game.canvas.height );

    //Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Arial';
    game.context.fillText( "Click to Start!", game.canvas.width/2 - 60, game.canvas.height/2 );
}

FlappyMonster.prototype.drawGamePlayingScreen = function(){
    var game = this;

    //Draw
    game.context.fillStyle = "black";
    game.context.fillRect( 0, 0, game.canvas.width, game.canvas.height );

    //Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Arial';
    game.context.fillText( "GAME PLAYING", game.canvas.width/2 - 105, game.canvas.height/2 );
}

FlappyMonster.prototype.drawGameOverScreen = function(){
    var game = this;

    //Draw
    game.context.fillStyle = "black";
    game.context.fillRect( 0, 0, game.canvas.width, game.canvas.height );

    //Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Arial';
    game.context.fillText( "GAME OVER :(", game.canvas.width/2 - 105, game.canvas.height/2 );
    game.context.font = '20px Arial';
    game.context.fillText( "Press R to Restart", game.canvas.width/2 - 60, game.canvas.height/2 + 40 );
}