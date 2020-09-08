window.onload = function(){

    var canvas = document.getElementById('flappy-monster-game');

    var flappyMonster = new FlappyMonster(canvas);
    flappyMonster.start();

}