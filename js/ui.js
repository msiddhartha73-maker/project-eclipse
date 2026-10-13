let gameOver = false;

let levelComplete = false;

let gameFinished = false;

let endingFade = 0;

let pickupMessage = "";

let pickupTimer = 0;

let pickupY = 0;

let pickupFlash = 0;

function restartGame(){

    loadLevel(level.current);

    gameOver = false;

    levelComplete = false;

}

function drawGameOver() {

    if (!gameOver) {
        return;
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "white";
    ctx.font = "60px Arial";
    ctx.textAlign = "center";

    ctx.fillText(
        "GAME OVER",
        canvas.width / 2,
        canvas.height / 2
    );
    
    ctx.font = "30px Arial";

	ctx.fillText(
		"Press R to Restart",
		canvas.width / 2,
			canvas.height / 2 + 60
	);

}

// =====================================
// LEVEL 10 VICTORY
// =====================================



window.addEventListener("keydown", function(event){

    if(event.key === "r" || event.key === "R"){

        restartGame();

    }

});


function drawBattery(){

    ctx.fillStyle = "white";

    ctx.font = "25px Arial";

    ctx.textAlign = "left";

    ctx.fillText(

        "Flashlight: " + Math.floor(light.battery) + "%",

        20,

        40

    );

// =====================================
// LEVEL 8
// =====================================

if(level.current === 8){

    let generatorsOff = 0;

    for(let generator of generators){

        if(!generator.online){

            generatorsOff++;

        }

    }

    ctx.fillText(

        "Generators: " +

        (generators.length - generatorsOff) +

        " / " +

        generators.length,

        20,

        70

    );
}



// =====================================
// LEVEL 9
// =====================================

else if(level.current === 9){

    ctx.fillText(

        "Chemicals: " +

        explosives.chemicalsCollected +

        " / " +

        explosives.chemicalsRequired,

        20,

        70

    );

}

    // =====================================
    // ALL OTHER LEVELS
    // =====================================

    else if(level.current === 10){

		ctx.fillText(

			"Hive Health: " +

			hive.health +

			" / " +

			hive.maxHealth,

			20,

			70

		);

		}

		else if(level.current !== 12){

		ctx.fillText(

			"Batteries: " +

			battery.collected +

			" / " +

			level.batteryGoal,

			20,

			70

		);

	}

}





window.addEventListener("keydown", function(event){

    if(!levelComplete){
        return;
    }

    if(event.key === "n" || event.key === "N"){

        if(level.current < level.totalLevels){

            loadLevel(level.current + 1);

        }
        else{

            loadLevel(1);

        }

        levelComplete = false;

    }

});


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

    ctx.fillStyle = "white";

    ctx.textAlign = "center";

    ctx.font = "56px Arial";

    ctx.fillText(

        level.loadingMessage,

        canvas.width / 2,

        canvas.height / 2

    );

}






