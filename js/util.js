/** 
 * 
 * Global functions
 * 
 */
window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestionAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
})()


window.getRandomInt = function( min, max ){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

window.getRandomRGBColor = function(){
    var red = getRandomInt(0, 257);
    var green = getRandomInt(0, 257);
    var blue = getRandomInt(0, 257);
    return {r:red, g:green, b:blue};
}