

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");


    canvas.addEventListener('mousedown', function(events){

    });
    
    canvas.addEventListener('mouseup', function(events){

    });
    
   /*  canvas.addEventListener('mousemove', function(event){
        console.log('mousemove');
        console.log(event);
    }); */
   
    canvas.addEventListener('click', function(event){
        console.log('click');
        console.log(event);
    });

    canvas.addEventListener('dblclick', function(event){
        console.log('dblclick');
        console.log(event);
    });

    canvas.addEventListener('mouseover', function(event){
        console.log('mouseover');
        console.log(event);
    });

    canvas.addEventListener('mouseout', function(event){
        console.log('mouseout');
        console.log(event);
    });

}

