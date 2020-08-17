

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var radiant = Math.PI / 180;


    // context.transform(m11, m12, m21, m22, dx, dy);
    // context.setTransform(m11, m12, m21, m22, dx, dy);
    // context.resetTransform()

    context.fillStyle = 'red';
    context.rect( 100, 100, 100, 100);
    context.fill();

    // Scale Transform
    context.setTransform( 1.5, 0, 0, 1.5, 0, 0);
    context.fillStyle = 'blue';
    context.rect( 100, 100, 100, 100);
    context.fill();

    // Scale Transform
    context.reset( );
    context.fillStyle = 'green';
    context.rect( 100, 100, 100, 100);
    context.fill();


}
