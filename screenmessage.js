function drawLoadingScreen(){

    if(!level.loading){
        return;
    }

    ctx.fillStyle = "rgba(0,0,0,0.85)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // ==========================
    // TITLE
    // ==========================

    ctx.fillStyle = "white";

    ctx.textAlign = "center";

    ctx.font = "56px Arial";

    ctx.fillText(

        level.loadingMessage,

        canvas.width / 2,

        180

    );

    // ==========================
    // OBJECTIVE
    // ==========================

    ctx.font = "30px Arial";

    if(level.current + 1 === 1){

        ctx.fillText("Find the Exit", canvas.width / 2, 300);

    }
    else if(level.current + 1 === 2){

        ctx.fillText("Avoid the Shadows", canvas.width / 2, 300);

    }
    else if(level.current + 1 === 3){

        ctx.fillText("Survive the Darkness", canvas.width / 2, 300);

    }
    else if(level.current + 1 === 10){

        ctx.fillText("Destroy the Hive", canvas.width / 2, 300);

    }
    else if(level.current + 1 === 11){

        ctx.fillText("Map Under Construction", canvas.width / 2, 300);

    }
    else{

        ctx.fillText("Prepare Yourself", canvas.width / 2, 300);

    }

}
