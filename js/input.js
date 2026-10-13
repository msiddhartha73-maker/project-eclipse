const keys = {};


const mouse = {

    x: 0,

    y: 0

};



// ===============================
// Keyboard Press
// ===============================

window.addEventListener("keydown", function(event){


    keys[event.key] = true;




    // ===============================
    // Flashlight Toggle
    // ===============================

    if(event.code === "Space"){

        light.active = !light.active;

    }



    // ===============================
    // Level Editor Toggle
    // ===============================

    if(event.key === "O" || event.key === "o"){
		
		event.preventDefault();

        editor.enabled = !editor.enabled;

        console.log(
            "Level Editor:",
            editor.enabled ? "ON" : "OFF"
        );

    }
    
    // =====================================
	// PATH RECORDER
	// =====================================

	if(event.key === "w" || event.key === "W"){

		editor.recording = !editor.recording;

		if(editor.recording){

			editor.path = [];

			editor.lastX = -1000;

			editor.lastY = -1000;

			console.log("PATH RECORDING STARTED");

		}

		else{

			console.log("PATH RECORDING STOPPED");

		}

	}



	// ===============================
	// Add 40x40 Wall (Q)
	// ===============================

	if(event.key === "q" || event.key === "Q"){

		if(editor.enabled){

			useVerticalWall();

			placeEditorWall();

		}

	}
	
	
	// ===============================
	// Add 40x20 Wall (Y)
	// ===============================

	if(event.key === "y" || event.key === "Y"){

		if(editor.enabled){

			useHorizontalWall();

			placeEditorWall();

		}

	}



    // ===============================
    // Delete Wall
    // ===============================

    if(event.key === "x" || event.key === "X"){

        if(editor.enabled){

            removeEditorWall();

        }

    }



	// ===============================
	// EXPORT WALLS / PRINT PATH
	// ===============================

	if(event.key === "p" || event.key === "P"){

		// Export walls

		if(editor.enabled){

			exportLevelWalls();

		}

		// Print recorded path

		if(editor.path.length > 0){

			console.log("Recorded Path:");

			console.log(editor.path);

		}

		else{

			console.log("No path recorded.");

		}

	}
    
	// ===============================
	// CONNECT TERMINAL
	// ===============================

	if(event.key === "e" || event.key === "E"){

		if(

			terminals.nearby &&

			terminals.current &&

			!terminals.current.online

		){

			terminals.connecting = true;

		}

	}


    // ===============================
    // Test Enemy Spawn
    // ===============================

    if(event.key === "n" || event.key === "N"){

        createEnemy("Walker");

    }



    // ===============================
    // Unlock Door Test
    // ===============================

    if(event.key === "k" || event.key === "K"){

        exitDoor.unlocked = true;

        console.log("Door Unlocked");

    }
    
    
    // ===============================
	// Skip To Next Level
	// ===============================

	if(event.key === "l" || event.key === "L"){

		if(level.current < level.totalLevels){

			loadLevel(level.current + 1);

			console.log("Loading Level:", level.current);

		}

	}



    // ===============================
    // Show Player Position
    // ===============================

    if(event.key === "c" || event.key === "C"){

        console.log(

            "Player Position:",

            Math.floor(player.x + player.width / 2),

            Math.floor(player.y + player.height / 2)

        );

    }
    

	// =====================================
	// MISSION OBJECTIVES
	// =====================================

	if(level.current === 12 && objectives.nearby && objectives.current){

		if(

			(event.key === "u" || event.key === "U") &&

			objectives.current.type === "research"

		){

			objectives.interacting = true;

		}

		else if(

			(event.key === "d" || event.key === "D") &&

			objectives.current.type === "dna"

		){

			objectives.interacting = true;

		}

		else if(

			(event.key === "s" || event.key === "S") &&

			objectives.current.type === "signal"

		){

			objectives.interacting = true;

		}

	}
	
		// =====================================
		// MANUFACTURE EXPLOSIVE
		// =====================================

		if(event.key === "x" || event.key === "X"){

			console.log("X Pressed");

			console.log("Near Lab:", explosives.nearbyLab);

			console.log("Chemicals:", explosives.chemicalsCollected);

			console.log("Required:", explosives.chemicalsRequired);

			console.log("Carrying:", explosives.carryingExplosive);

			if(

				level.current === 9 &&

				explosives.nearbyLab &&

				explosives.chemicalsCollected === explosives.chemicalsRequired &&

				!explosives.carryingExplosive

			){

				explosives.interacting = true;

				console.log("Manufacturing Started");

			}

		}

});

// ===============================
// RELEASE TERMINAL CONNECTION
// ===============================

window.addEventListener("keyup", function(event){

    if(event.key === "e" || event.key === "E"){

        if(terminals.connecting){

            terminals.connecting = false;

            if(terminals.current){

                terminals.current.progress = 0;

            }

        }

    }
    
	// =====================================
	// STOP MISSION OBJECTIVE
	// =====================================

	if(

		event.key === "u" ||

		event.key === "U" ||

		event.key === "d" ||

		event.key === "D" ||

		event.key === "s" ||

		event.key === "S"

	){

		objectives.interacting = false;

	}
	
	// =====================================
	// STOP MANUFACTURING XPLOSIVES
	// =====================================

	if(event.key === "x" || event.key === "X"){

		explosives.interacting = false;

		console.log("Manufacturing Stopped");

	}

});

// ===============================
// STOP RESCUING
// ===============================

window.addEventListener("keyup", function(event){

    if(event.key === "h" || event.key === "H"){

        if(level.current === 12){

            survivors.rescuing = false;

            if(survivors.current){

                survivors.current.progress = 0;

            }

        }

    }

});


// ===============================
// Keyboard Release
// ===============================

window.addEventListener("keyup", function(event){

    keys[event.key] = false;

});





// ===============================
// Mouse Position
// ===============================

window.addEventListener("mousemove", function(event){

    mouse.x = event.clientX;

    mouse.y = event.clientY;

});


