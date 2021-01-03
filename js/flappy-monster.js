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
    game.currentState = INITIAL;

    // Game speed
    game.velocity= 5;

    //Bind events
    game.bindEvents();

    //Create Game Object
    game.createObjects();
};

FlappyMonster.prototype.createObjects = function(){
    //Base
    var game= this;

    //Game background
    game.background1= new GameBackground('images/back.png', game.canvas);
    game.background2= new GameBackground('images/back.png', game.canvas);
    game.background2.x= game.canvas.width;

    //Game score
    game.gameScore= new GameScore(game.canvas);
    game.gameScore.x= game.canvas.width - 150;
    game.gameScore.y= 80;

    //Wall factory
    game.wallFactory= new WallFactory(game.canvas);

    //Monster
    game.monster = new Monster('images/monster.png', game.canvas);

}

FlappyMonster.prototype.bindEvents = function(){

    //Base
    var game = this;

    //Mouse Listener
    game.canvas.addEventListener('click', function(event){
        switch(game.currentState){
            case INITIAL:
                game.currentState = GAME_PLAYING;
                game.wallFactory.generateWalls();
                break;
            
            case GAME_PLAYING:
                game.monster.vy = -1 * game.velocity;
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
                    game.reset();
                    game.currentState = GAME_PLAYING;
                }
                break;
        }
    })
}

FlappyMonster.prototype.reset = function(){
    //Base
    var game = this;

    // Reset states
    game.gameScore.startMoment = new Date();
    game.gameScore.score = 0;
    game.wallFactory.walls = [];
    game.monster.x = 115;
    game.monster.y = 115;
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

FlappyMonster.prototype.animateBackground= function(){
    var game= this;

    //background 1
    game.background1.draw();

    if(Math.abs(game.background1.x) > game.canvas.width){
        game.background1.x= game.canvas.width - game.velocity;
    }
    game.background1.x= game.background1.x - game.velocity;

    // Background 2
    game.background2.draw();

    if(Math.abs(game.background2.x) > game.canvas.width){
        game.background2.x= game.canvas.width - game.velocity;
    }
    game.background2.x= game.background2.x - game.velocity;

   
}

FlappyMonster.prototype.drawGamePlayingScreen = function(){
    var game = this;

    //Clear canvas
    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);

    //Draw background
    game.animateBackground();

    //Draw Score
    game.gameScore.draw();

    //Draw walls
    game.drawWalls();

    //Draw monster
    game.monster.draw();

    //Collision check
    game.checkCollisions();
}

FlappyMonster.prototype.isCollided = function(monster, wall){
    var game = this;
    var iscollided = true;

    // Monster Coordinates
    var monsterTop = game.monster.y;
    var monsterBottom = game.monster.y + game.monster.h;
    var monsterRight = game.monster.x + game.monster.w;
    var monsterLeft = game.monster.x;

    var wallTop = wall.y + wall.height + wall.gap;
    var wallBottom = wall.y + wall.height;
    var wallRight = wall.x + wall.width;
    var wallLeft = wall.x;

    if( (monsterBottom < wallTop && monsterTop > wallBottom)
        || (monsterLeft > wallRight)
        || (monsterRight < wallLeft)
    ){
        iscollided = false;
    }

    return iscollided;
};


FlappyMonster.prototype.checkCollisions = function(){
    var game = this; 
    var walls = game.wallFactory.walls;

    for( var i=0; i<walls.length; i++){
        if( game.isCollided( game.monster, walls[i])){
            game.currentState = GAME_OVER;
        }
    }
}


FlappyMonster.prototype.removeOutofCanvasWalls= function(){
    //Base
    var game= this;
    
    //Walls
    var walls= game.wallFactory.walls;
    for(i=0; i<walls.length; i++){
        if(walls[i].x +walls[i].width < 0){
            walls.shift();
        }
    }
};



FlappyMonster.prototype.drawWalls= function(){
    //Base
    var game= this;

    //Draw walls
    var walls= game.wallFactory.walls;

    for( var i=0; i< walls.length; i++){
        walls[i].draw();
        walls[i].x= walls[i].x - game.velocity;
    }

    game.removeOutofCanvasWalls();

}

FlappyMonster.prototype.drawGameOverScreen = function(){
    var game = this;

    //Draw
    game.context.fillStyle = "black";
    game.context.fillRect( 0, 0, game.canvas.width, game.canvas.height );

    //Text
    game.context.fillStyle = 'white';
    game.context.font = '45px Arial';
    game.context.fillText( "YOUR GAME SCORE "+game.gameScore.score, game.canvas.width/2 - 230, game.canvas.height/2 - 100);

    game.context.font = '36px Arial';
    game.context.fillText( "GAME OVER :(", game.canvas.width/2 - 105, game.canvas.height/2 );

    game.context.font = '20px Arial';
    game.context.fillText( "Press R to Restart", game.canvas.width/2 - 60, game.canvas.height/2 + 40 );
}