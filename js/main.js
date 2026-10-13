// =====================================
// GAME CANVAS
// =====================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// =====================================
// FIXED GAME WORLD RESOLUTION
// =====================================
//
// The entire game world was designed around
// these coordinates.
//
// Do NOT change these values unless the
// actual level layouts are redesigned.
//

const GAME_WIDTH = 960;
const GAME_HEIGHT = 540;


// =====================================
// KEEP INTERNAL CANVAS FIXED
// =====================================

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;


// =====================================
// SCALE CANVAS TO SCREEN
// =====================================

function resizeCanvas(){

    const viewportWidth =
        window.visualViewport
            ? window.visualViewport.width
            : window.innerWidth;

    const viewportHeight =
        window.visualViewport
            ? window.visualViewport.height
            : window.innerHeight;


    const gameAspect =
        GAME_WIDTH / GAME_HEIGHT;

    const viewportAspect =
        viewportWidth / viewportHeight;


    let displayWidth;
    let displayHeight;


    // =====================================
    // FIT GAME WITHOUT DISTORTION
    // =====================================

    if(viewportAspect > gameAspect){

        // Screen is wider than the game

        displayHeight = viewportHeight;

        displayWidth =
            displayHeight * gameAspect;

    }
    else{

        // Screen is taller/narrower than the game

        displayWidth = viewportWidth;

        displayHeight =
            displayWidth / gameAspect;

    }


    canvas.style.width =
        displayWidth + "px";

    canvas.style.height =
        displayHeight + "px";


    // Center the game

    canvas.style.position = "absolute";

    canvas.style.left =
        ((viewportWidth - displayWidth) / 2) + "px";

    canvas.style.top =
        ((viewportHeight - displayHeight) / 2) + "px";

}


// =====================================
// INITIAL SCREEN SIZE
// =====================================

resizeCanvas();


// =====================================
// HANDLE WINDOW RESIZING
// =====================================

window.addEventListener(
    "resize",
    resizeCanvas
);


if(window.visualViewport){

    window.visualViewport.addEventListener(
        "resize",
        resizeCanvas
    );

}


// =====================================
// CAMERA
// =====================================

const camera = {

    x: 0,

    y: 0

};


// =====================================
// START GAME
// =====================================

loadLevel(1);

gameLoop();
