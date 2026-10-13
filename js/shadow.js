function drawDarkness(){

    if(light.active){

        return;

    }


    ctx.save();


    // Dark layer

    ctx.fillStyle = "rgba(0,0,0,0.88)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // Player's small vision area

    const centerX = player.x + player.width / 2;
    const centerY = player.y + player.height / 2;


    const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        180
    );


    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(1, "rgba(0,0,0,1)");


    ctx.globalCompositeOperation = "destination-out";


    ctx.fillStyle = gradient;


    ctx.beginPath();

    ctx.arc(
        centerX,
        centerY,
        180,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.restore();

}
