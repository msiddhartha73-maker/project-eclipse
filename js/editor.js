const editor = {

    enabled: false,

    wallSize: 40,
    
    wallHeight: 40,
    
    gridSize: 40,

    // =====================================
    // PATH RECORDER
    // =====================================

    recording: false,

    path: [],

    lastX: -1000,

    lastY: -1000,

    recordDistance: 30

};



function placeEditorWall(){

    const gridX = Math.floor(mouse.x / editor.gridSize) * editor.gridSize;
	const gridY = Math.floor(mouse.y / editor.gridSize) * editor.gridSize;


    // =====================================
    // DON'T ADD DUPLICATE WALLS
    // =====================================

    const wallExists = map.obstacles.some(function(obstacle){

        return (

            obstacle.x === gridX &&
            obstacle.y === gridY

        );

    });

    if(wallExists){

        return;

    }


	map.obstacles.push({

		x: gridX,

		y: gridY,

		width: editor.wallSize,

		height: editor.wallHeight

	});

}

function useVerticalWall(){

    editor.wallSize = 20;      // Width
    editor.wallHeight = 40;    // Height
    editor.gridSize = 20;      // Snap every 20 pixels

}

function useHorizontalWall(){

    editor.wallSize = 40;
    editor.wallHeight = 20;
    editor.gridSize = 20;

}

function removeEditorWall(){

    map.obstacles = map.obstacles.filter(function(obstacle){

        return !(

            mouse.x >= obstacle.x &&
            mouse.x <= obstacle.x + obstacle.width &&
            mouse.y >= obstacle.y &&
            mouse.y <= obstacle.y + obstacle.height

        );

    });

}



function exportLevelWalls(){

    console.log("COPY THIS INTO level.js");


    let simpleWalls = map.obstacles.map(function(wall){

		return [

			wall.x,

			wall.y,

			wall.width,

			wall.height

		];

	});


    console.log(

        JSON.stringify(

            simpleWalls,

            null,

            4

        )

    );

}

// =====================================
// RECORD PLAYER PATH
// =====================================

function recordPlayerPath(){

    if(!editor.recording){

        return;

    }

    const centerX = Math.floor(

        player.x + player.width / 2

    );

    const centerY = Math.floor(

        player.y + player.height / 2

    );

    const dx = centerX - editor.lastX;

    const dy = centerY - editor.lastY;

    const distance = Math.sqrt(

        dx * dx +

        dy * dy

    );

    if(distance < editor.recordDistance){

        return;

    }

    editor.lastX = centerX;

	editor.lastY = centerY;

	// =====================================
	// IGNORE DUPLICATE WAYPOINTS
	// =====================================

	editor.path.push({

		x: centerX,

		y: centerY

	});

}



function drawEditor(){

    if(!editor.enabled){

        return;

    }


    ctx.fillStyle = "lime";

    ctx.font = "24px Arial";

    ctx.textAlign = "left";


    ctx.fillText(

        "LEVEL EDITOR",

        20,

        canvas.height - 20

    );


    ctx.fillText(

        "Q: Add Wall | X: Delete Wall | P: Export",

        20,

        canvas.height - 50

    );

}
