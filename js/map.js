
const floor1 = new Image();
floor1.src = "assets/environment/floor.png";

const floor2 = new Image();
floor2.src = "assets/environment/floor2.png";

const floor3 = new Image();
floor3.src = "assets/environment/floor3.png";

const floor4 = new Image();
floor4.src = "assets/environment/floor4.png";

// This variable stores the floor currently being used.
let currentFloor = floor1;


// ======================================
// WALL TEXTURES
// ======================================


//Walls

const wallHorizontal = new Image();
wallHorizontal.src = "assets/environment/wall_horizontal.png";

const wallVertical = new Image();
wallVertical.src = "assets/environment/wall_vertical.png";


// =====================================
// FURNITURE / ENVIRONMENT OBJECTS
// =====================================

const furnitureImages = {

    authourisation_terminal: new Image(),
    chair: new Image(),
    chemical_storage_cabinet: new Image(),
    computer_table: new Image(),
    crate: new Image(),
    fire_extinguisher: new Image(),
    gas_cylinder: new Image(),
    generator: new Image(),
    generator2: new Image(),
    lab_bottles: new Image(),
    lab_cabinets: new Image(),
    lab_cabinets2: new Image(),
    lab_cabinets2_vertical: new Image(),
    laboratory_sink: new Image(),
    commode: new Image(),
    commode2: new Image(),
    commode3: new Image(),
    lab_research_table: new Image(),
    lab_table: new Image(),
    lab_waste_container: new Image(),
    medical_bed: new Image(),
    medical_cylinder: new Image(),
    papers: new Image(),
    refrigerator: new Image(),
    server_rack: new Image(),
    signal_device: new Image(),
    storage_rack: new Image(),
    
    computer_table2: new Image(),
    computer_table3: new Image(),
    microscope: new Image(),
    x_ray_machine: new Image(),
    wheel_chair: new Image(),
    wheel_chair_vertical: new Image(),
    xerox_machine: new Image(),
    lab_research_table_vertical: new Image(),
    storage_rack_vertical: new Image(),
    x_ray_machine_vertical: new Image(),
    blue_jar: new Image(),
    red_jar: new Image(),
    yellow_jar: new Image(),
    white_jar: new Image()

};

// =====================================
// DEAD BODY IMAGES
// =====================================

const deadBodyImages = {
	
	bloodsplats1: new Image(),
    bloodsplats2: new Image(),
    bloodsplats3: new Image(),
    bloodsplats4: new Image(),
    bloodsplats5: new Image(),
    bloodsplats6: new Image(),
    bloodsplats7: new Image(),

    body: new Image(),
    body1: new Image(),
    body2: new Image(),
    body3: new Image(),
    body4: new Image(),
    body5: new Image(),
    body6: new Image(),
    body7: new Image(),
    body8: new Image(),
    body9: new Image(),
    body10: new Image(),
    body11: new Image(),
    body12: new Image(),
    body13: new Image(),
    body14: new Image()
    

};


deadBodyImages.body.src =
    "assets/deadbodies/body.png";

deadBodyImages.body1.src =
    "assets/deadbodies/body1.png";

deadBodyImages.body2.src =
    "assets/deadbodies/body2.png";

deadBodyImages.body3.src =
    "assets/deadbodies/body3.png";

deadBodyImages.body4.src =
    "assets/deadbodies/body4.png";

deadBodyImages.body5.src =
    "assets/deadbodies/body5.png";

deadBodyImages.body6.src =
    "assets/deadbodies/body6.png";

deadBodyImages.body7.src =
    "assets/deadbodies/body7.png";

deadBodyImages.body8.src =
    "assets/deadbodies/body8.png";

deadBodyImages.body9.src =
    "assets/deadbodies/body9.png";

deadBodyImages.body10.src =
    "assets/deadbodies/body10.png";

deadBodyImages.body11.src =
    "assets/deadbodies/body11.png";

deadBodyImages.body12.src =
    "assets/deadbodies/body12.png";

deadBodyImages.body13.src =
    "assets/deadbodies/body13.png";

deadBodyImages.body14.src =
    "assets/deadbodies/body14.png";
    
deadBodyImages.bloodsplats1.src =
    "assets/deadbodies/bloodsplats1.png";

deadBodyImages.bloodsplats2.src =
    "assets/deadbodies/bloodsplats2.png";

deadBodyImages.bloodsplats3.src =
    "assets/deadbodies/bloodsplats3.png";

deadBodyImages.bloodsplats4.src =
    "assets/deadbodies/bloodsplats4.png";

deadBodyImages.bloodsplats5.src =
    "assets/deadbodies/bloodsplats5.png";

deadBodyImages.bloodsplats6.src =
    "assets/deadbodies/bloodsplats6.png";

deadBodyImages.bloodsplats7.src =
    "assets/deadbodies/bloodsplats7.png";


// =====================================
// FURNITURE DISPLAY NAMES
// =====================================

const furnitureLabels = {

    authourisation_terminal: "Authorisation Terminal",

    chair: "Chair",

    chemical_storage_cabinet: "Chemical Storage Cabinet",

    computer_table: "Computer Table",

    crate: "Crate",

    fire_extinguisher: "Fire Extinguisher",

    gas_cylinder: "Gas Cylinder",

    generator: "Generator",
    
    generator2: "Generator",

    lab_bottles: "Laboratory Bottles",

    lab_cabinets: "Laboratory Cabinets",
    
    lab_cabinets2: "Lab Cabinets",
    
    lab_cabinets2_vertical: "Lab Cabinets",

    laboratory_sink: "Laboratory Sink",
    
    commode: "Toilet",
    
    commode2: "Toilet",
    
    commode3: "Toilet",

    lab_research_table: "Research Table",

    lab_table: "Laboratory Table",

    lab_waste_container: "Waste Container",

    medical_bed: "Medical Bed",

    medical_cylinder: "Medical Cylinder",

    papers: "Papers",

    refrigerator: "Refrigerator",

    server_rack: "Server Rack",

    signal_device: "Signal Device",

    storage_rack: "Storage Rack",
    
    computer_table2: "Computer Table",
    
    computer_table3: "Lab Table",
    
    blue_jar : "Sodium",
    
    red_jar : "Nitroglycerin",
    
    white_jar : "Amonium Nitrate",
    
    yellow_jar : "Nitrate",

    microscope: "Microscope",

    x_ray_machine: "X-Ray Machine",

    wheel_chair: "Wheel Chair",
    
    wheel_chair_vertical: "Wheel Chair",

    xerox_machine: "Xerox Machine",

    lab_research_table_vertical: "Lab Research Table",

    storage_rack_vertical: "Storage Rack",

    x_ray_machine_vertical: "X-Ray Machine",

    
};

// =====================================
// FURNITURE IMAGE PATHS
// =====================================

furnitureImages.authourisation_terminal.src =
    "assets/environment/furnitures/authourisation_terminal.png";

furnitureImages.chair.src =
    "assets/environment/furnitures/chair.png";

furnitureImages.chemical_storage_cabinet.src =
    "assets/environment/furnitures/chemical_storage_cabinet.png";

furnitureImages.computer_table.src =
    "assets/environment/furnitures/computer_table.png";

furnitureImages.crate.src =
    "assets/environment/furnitures/crate.png";

furnitureImages.fire_extinguisher.src =
    "assets/environment/furnitures/fire_extinguisher.png";

furnitureImages.gas_cylinder.src =
    "assets/environment/furnitures/gas_cylinder.png";

furnitureImages.generator.src =
    "assets/environment/furnitures/generator.png";
    
furnitureImages.generator2.src =
    "assets/environment/furnitures/generator2.png";

furnitureImages.lab_bottles.src =
    "assets/environment/furnitures/lab_bottles.png";

furnitureImages.lab_cabinets.src =
    "assets/environment/furnitures/lab_cabinets.png";
    
furnitureImages.lab_cabinets2.src =
    "assets/environment/furnitures/lab_cabinets2.png";
    
furnitureImages.lab_cabinets2_vertical.src =
    "assets/environment/furnitures/lab_cabinets2_vertical.png";

furnitureImages.laboratory_sink.src =
    "assets/environment/furnitures/laboratory_sink.png";
    
furnitureImages.commode.src =
    "assets/environment/furnitures/commode.png";
    
furnitureImages.commode2.src =
    "assets/environment/furnitures/commode2.png";
    
furnitureImages.commode3.src =
    "assets/environment/furnitures/commode3.png";

furnitureImages.lab_research_table.src =
    "assets/environment/furnitures/lab_research_table.png";

furnitureImages.lab_table.src =
    "assets/environment/furnitures/lab_table.png";

furnitureImages.lab_waste_container.src =
    "assets/environment/furnitures/lab_waste_container.png";

furnitureImages.medical_bed.src =
    "assets/environment/furnitures/medical_bed.png";

furnitureImages.medical_cylinder.src =
    "assets/environment/furnitures/medical_cylinder.png";

furnitureImages.papers.src =
    "assets/environment/furnitures/papers.png";

furnitureImages.refrigerator.src =
    "assets/environment/furnitures/refrigerator.png";

furnitureImages.server_rack.src =
    "assets/environment/furnitures/server_rack.png";

furnitureImages.signal_device.src =
    "assets/environment/furnitures/signal_device.png";

furnitureImages.storage_rack.src =
    "assets/environment/furnitures/storage_rack.png";
    
furnitureImages.computer_table2.src =
    "assets/environment/furnitures/computer_table2.png";
    
furnitureImages.computer_table3.src =
    "assets/environment/furnitures/computer_table3.png";
    
furnitureImages.red_jar.src =
    "assets/environment/furnitures/red_jar.png";
    
furnitureImages.blue_jar.src =
    "assets/environment/furnitures/blue_jar.png";
    
furnitureImages.yellow_jar.src =
    "assets/environment/furnitures/yellow_jar.png";
    
furnitureImages.white_jar.src =
    "assets/environment/furnitures/white_jar.png";

furnitureImages.microscope.src =
    "assets/environment/furnitures/microscope.png";

furnitureImages.x_ray_machine.src =
    "assets/environment/furnitures/x-ray_machine.png";

furnitureImages.wheel_chair.src =
    "assets/environment/furnitures/wheel_chair.png";
    
furnitureImages.wheel_chair_vertical.src =
    "assets/environment/furnitures/wheel_chair_vertical.png";

furnitureImages.xerox_machine.src =
    "assets/environment/furnitures/xerox_machine.png";

furnitureImages.lab_research_table_vertical.src =
    "assets/environment/furnitures/lab_research_table_vertical.png";

furnitureImages.storage_rack_vertical.src =
    "assets/environment/furnitures/storage_rack_vertical.png";

furnitureImages.x_ray_machine_vertical.src =
    "assets/environment/furnitures/x-ray_machine_vertical.png";
    
    
    
const map = {

    wallThickness: 40,

    floorColor: "#202020",

    wallColor: "#505050",

    obstacles: [],
    
    furniture: [],
    
    deadBodies: []

};




function createFurniture(type, x, y, width, height){

    return {

        type: type,

        x: x,

        y: y,

        width: width,

        height: height,

        label: type

    };

}

// =====================================
// GET FURNITURE TOUCHING PLAYER
// =====================================

function getTouchingFurniture(){

    const touchDistance = 6;

    for(let furniture of map.furniture){

        const playerLeft = player.x;
        const playerRight = player.x + player.width;
        const playerTop = player.y;
        const playerBottom = player.y + player.height;

        const furnitureLeft = furniture.x;
        const furnitureRight = furniture.x + furniture.width;
        const furnitureTop = furniture.y;
        const furnitureBottom = furniture.y + furniture.height;


        // =====================================
        // HORIZONTAL CONTACT
        // =====================================

        const horizontalTouch =
            playerRight >= furnitureLeft - touchDistance &&
            playerLeft <= furnitureRight + touchDistance;


        // =====================================
        // VERTICAL CONTACT
        // =====================================

        const verticalTouch =
            playerBottom >= furnitureTop - touchDistance &&
            playerTop <= furnitureBottom + touchDistance;


        if(horizontalTouch && verticalTouch){

            return furniture;

        }

    }

    return null;

}

function drawMap(){

	// =======================================
	// Draw Repeating Floor Tiles
	// =======================================

	const FLOOR_TILE_SIZE = 40;
	const FLOOR_GAP = 1;

	if(currentFloor.complete){

		for(let y = 0; y < canvas.height; y += FLOOR_TILE_SIZE){

			for(let x = 0; x < canvas.width; x += FLOOR_TILE_SIZE){

				// Draw the dark grout (joint)
				ctx.fillStyle = "#3A3A3A";

				ctx.fillRect(
					x,
					y,
					FLOOR_TILE_SIZE,
					FLOOR_TILE_SIZE
				);

				// Draw the floor tile slightly smaller,
				// leaving a black border around it.
				ctx.drawImage(

					currentFloor,

					0,
					0,
					currentFloor.width,
					currentFloor.height,

					x + FLOOR_GAP,
					y + FLOOR_GAP,

					FLOOR_TILE_SIZE - FLOOR_GAP * 2,
					FLOOR_TILE_SIZE - FLOOR_GAP * 2

				);

			}

		}

	}



	// Top wall

	if (wallHorizontal.complete) {

		ctx.drawImage(

			wallHorizontal,

			0,
			0,
			wallHorizontal.width,
			wallHorizontal.height,

			0,
			0,

			canvas.width,
			map.wallThickness

		);

	}


	// Bottom wall

	if (wallHorizontal.complete) {

		ctx.drawImage(

			wallHorizontal,

			0,
			0,
			wallHorizontal.width,
			wallHorizontal.height,

			0,
			canvas.height - map.wallThickness,

			canvas.width,
			map.wallThickness

		);

	}


	// Left wall

	if (wallVertical.complete) {

		ctx.drawImage(

			wallVertical,

			0,
			0,
			wallVertical.width,
			wallVertical.height,

			0,
			0,

			map.wallThickness,
			canvas.height

		);

	}



	// Right wall

	if (wallVertical.complete) {

		ctx.drawImage(

			wallVertical,

			0,
			0,
			wallVertical.width,
			wallVertical.height,

			canvas.width - map.wallThickness,
			0,

			map.wallThickness,
			canvas.height

		);

}
    
	// =====================================
	// Interior Walls
	// =====================================

	for(let obstacle of map.obstacles){

		if(wallHorizontal.complete){

			ctx.drawImage(

				wallHorizontal,

				0,
				0,
				wallHorizontal.width,
				wallHorizontal.height,

				obstacle.x,
				obstacle.y,

				obstacle.width,
				obstacle.height

			);

		}

	}
	
	
	
	// =====================================
	// FURNITURE / ENVIRONMENT OBJECTS
	// =====================================

	for(let furniture of map.furniture){

		const image = furnitureImages[furniture.type];

		if(!image){

			console.warn(
				"Furniture image not found:",
				furniture.type
			);

			continue;

		}

		if(!image.complete){

			continue;

		}
		
		if(level.current === 8 && furniture.type === "generator"){
			continue;
		}

		ctx.drawImage(

			image,

			0,
			0,
			image.width,
			image.height,

			furniture.x,
			furniture.y,
			furniture.width,
			furniture.height

		);

	}
	
	// =====================================
	// DEAD BODIES
	// VISUAL ONLY - NO COLLISION
	// =====================================

	for(let body of map.deadBodies){

		if(!body.image){
			continue;
		}

		if(!body.image.complete){
			continue;
		}

		ctx.drawImage(

			body.image,

			0,
			0,
			body.image.width,
			body.image.height,

			body.x,
			body.y,
			body.width,
			body.height

		);

	}
	
	// =====================================
	// FURNITURE TOUCH LABEL
	// =====================================

	const touchingFurniture = getTouchingFurniture();

	if(touchingFurniture){

		const label =
			furnitureLabels[touchingFurniture.type] ||
			touchingFurniture.type;

		ctx.save();

		ctx.font = "10px Arial";

		ctx.fillStyle = "yellow";

		ctx.textAlign = "center";

		ctx.textBaseline = "bottom";

		ctx.fillText(

			label,

			touchingFurniture.x +
			touchingFurniture.width / 2,

			touchingFurniture.y - 4

		);

		ctx.restore();

	}
	


}

const exitDoor = {

    x: 700,

    y: 260,

    width: 40,

    height: 80,

    unlocked: false,

    destroyed: false

};


function drawExitDoor(){

// =====================================
// LEVEL 12
// =====================================

if(level.current === 12){


    // ---------------------------------
    // DESTROYED DOOR
    // ---------------------------------

		if(exitDoor.destroyed){

			return;

		}
	// ---------------------------------
    // NORMAL DOOR
    // ---------------------------------

    ctx.fillStyle = "darkred";

    ctx.fillRect(

        exitDoor.x,

        exitDoor.y,

        exitDoor.width,

        exitDoor.height

    );

    return;

}

    // =====================================
    // LEVELS 1–11
    // =====================================

    if(exitDoor.unlocked){

        ctx.fillStyle = "lime";

    }
    else{

        ctx.fillStyle = "darkred";

    }

    ctx.fillRect(

        exitDoor.x,

        exitDoor.y,

        exitDoor.width,

        exitDoor.height

    );

}

// =====================================
// LEVEL 11 EXIT DOORS
// =====================================

const exitDoors = [];

// =====================================
// LEVEL 11 EXIT DOORS
// =====================================

function drawExitDoors(){

    if(level.current !== 11){

        return;

    }

    for(let door of exitDoors){

        if(door.unlocked){

            ctx.fillStyle = "lime";

        }
        else{

            ctx.fillStyle = "#7A0000";

        }

        ctx.fillRect(

            door.x,

            door.y,

            door.width,

            door.height

        );

    }

}

function updateExitDoor(){

    // =====================================
    // LEVEL 11 - THREE EXIT DOORS
    // =====================================

    if(level.current === 11){

        for(let door of exitDoors){

            if(!door.unlocked){

                continue;

            }

            if(

                player.x < door.x + door.width &&
                player.x + player.width > door.x &&
                player.y < door.y + door.height &&
                player.y + player.height > door.y

            ){

                if(door.real){

                    if(!level.loading){

                        levelComplete = true;

                        if(level.current < level.maxLevel){

                            startNextLevel();

                        }

                    }

                }
                
                else{

					fakeDoorMessage = 120;
					console.log("FAKE DOOR");

				}

                return;

            }

        }

        return;

    }
    
    // =====================================
	// LEVEL 12
	// =====================================

	if(level.current === 12){

		// Spawn the rescue team once
		if(

			exitDoor.unlocked &&

			!soldiers.active

		){

			spawnSoldiers();

		}

		// Player escapes

		if(!exitDoor.unlocked){

			return;

		}

		if(

			player.x < exitDoor.x + exitDoor.width &&
			player.x + player.width > exitDoor.x &&
			player.y < exitDoor.y + exitDoor.height &&
			player.y + player.height > exitDoor.y

		){

			if(!level.loading){

				gameFinished = true;

			}

		}

		return;

	}

    // =====================================
    // LEVELS 1–10 (OLD SYSTEM)
    // =====================================

    if(!exitDoor.unlocked){

        return;

    }

    if(

        player.x < exitDoor.x + exitDoor.width &&
        player.x + player.width > exitDoor.x &&
        player.y < exitDoor.y + exitDoor.height &&
        player.y + player.height > exitDoor.y

    ){

        if(!level.loading){

            levelComplete = true;

            if(level.current < level.maxLevel){

                startNextLevel();

            }

        }

    }

}

function isInsideObstacle(x, y){

    // =====================================
    // CHECK OUTER MAP WALLS
    // =====================================

    const wall = map.wallThickness;

    // TOP WALL
    if(y <= wall){

        return true;

    }

    // BOTTOM WALL
    if(y >= canvas.height - wall){

        return true;

    }

    // LEFT WALL
    if(x <= wall){

        return true;

    }

    // RIGHT WALL
    if(x >= canvas.width - wall){

        return true;

    }


    // =====================================
    // CHECK INTERIOR WALLS
    // =====================================

    for(let obstacle of map.obstacles){

        if(
            x >= obstacle.x &&
            x <= obstacle.x + obstacle.width &&
            y >= obstacle.y &&
            y <= obstacle.y + obstacle.height
        ){

            return true;

        }

    }


    // =====================================
    // CHECK FURNITURE
    // =====================================

    for(let furniture of map.furniture){

        if(
            x >= furniture.x &&
            x <= furniture.x + furniture.width &&
            y >= furniture.y &&
            y <= furniture.y + furniture.height
        ){

            return true;

        }

    }


    return false;

}
