let fakeDoorMessage = 0;

const light = {

    length: 250,

    width: 0.7,

    color: "rgba(255, 255, 180, 0.30)",

    battery: 100,

    drainRate: 0.03,

    active: true

};


// =====================================
// FLASHLIGHT RECTANGLE COLLISION
// =====================================

function flashlightRayRectangleHit(
    startX,
    startY,
    dirX,
    dirY,
    maxDistance,
    rectangle
){

    let closestDistance = Infinity;


    // =====================================
    // LEFT SIDE
    // =====================================

    if(dirX !== 0){

        let t =
            (rectangle.x - startX) /
            dirX;

        if(
            t >= 0 &&
            t <= maxDistance
        ){

            let y =
                startY +
                dirY * t;

            if(
                y >= rectangle.y &&
                y <= rectangle.y + rectangle.height
            ){

                closestDistance = t;

            }

        }


        // =====================================
        // RIGHT SIDE
        // =====================================

        t =
            (
                rectangle.x +
                rectangle.width -
                startX
            ) /
            dirX;

        if(
            t >= 0 &&
            t <= maxDistance
        ){

            let y =
                startY +
                dirY * t;

            if(
                y >= rectangle.y &&
                y <= rectangle.y + rectangle.height
            ){

                if(t < closestDistance){

                    closestDistance = t;

                }

            }

        }

    }


    // =====================================
    // TOP / BOTTOM
    // =====================================

    if(dirY !== 0){

        // TOP

        let t =
            (rectangle.y - startY) /
            dirY;

        if(
            t >= 0 &&
            t <= maxDistance
        ){

            let x =
                startX +
                dirX * t;

            if(
                x >= rectangle.x &&
                x <= rectangle.x + rectangle.width
            ){

                if(t < closestDistance){

                    closestDistance = t;

                }

            }

        }


        // BOTTOM

        t =
            (
                rectangle.y +
                rectangle.height -
                startY
            ) /
            dirY;

        if(
            t >= 0 &&
            t <= maxDistance
        ){

            let x =
                startX +
                dirX * t;

            if(
                x >= rectangle.x &&
                x <= rectangle.x + rectangle.width
            ){

                if(t < closestDistance){

                    closestDistance = t;

                }

            }

        }

    }


    return closestDistance;

}


// =====================================
// FLASHLIGHT CIRCLE COLLISION
// USED FOR ENEMIES
// =====================================

function flashlightRayCircleHit(
    startX,
    startY,
    dirX,
    dirY,
    maxDistance,
    circleX,
    circleY,
    radius
){

    const toCircleX =
        circleX - startX;

    const toCircleY =
        circleY - startY;


    const projection =
        toCircleX * dirX +
        toCircleY * dirY;


    if(
        projection < 0 ||
        projection > maxDistance
    ){

        return Infinity;

    }


    const closestX =
        startX +
        dirX * projection;

    const closestY =
        startY +
        dirY * projection;


    const offsetX =
        circleX - closestX;

    const offsetY =
        circleY - closestY;


    const offsetDistance =
        Math.sqrt(
            offsetX * offsetX +
            offsetY * offsetY
        );


    if(offsetDistance > radius){

        return Infinity;

    }


    const inside =
        Math.sqrt(
            radius * radius -
            offsetDistance * offsetDistance
        );


    const hitDistance =
        projection - inside;


    if(
        hitDistance >= 0 &&
        hitDistance <= maxDistance
    ){

        return hitDistance;

    }


    return Infinity;

}


// =====================================
// FIND WHAT BLOCKS THE FLASHLIGHT
// =====================================

function getFlashlightRayDistance(
    startX,
    startY,
    angle
){

    const dirX =
        Math.cos(angle);

    const dirY =
        Math.sin(angle);


    let closestDistance =
        light.length;
        
        // =====================================
		// OUTER MAP WALLS
		// =====================================

		const wallThickness = map.wallThickness;

		const outerWalls = [

			// LEFT WALL
			{
				x: 0,
				y: 0,
				width: wallThickness,
				height: canvas.height
			},

			// RIGHT WALL
			{
				x: canvas.width - wallThickness,
				y: 0,
				width: wallThickness,
				height: canvas.height
			},

			// TOP WALL
			{
				x: 0,
				y: 0,
				width: canvas.width,
				height: wallThickness
			},

			// BOTTOM WALL
			{
				x: 0,
				y: canvas.height - wallThickness,
				width: canvas.width,
				height: wallThickness
			}

		];

		for(let wall of outerWalls){

			const hit =
				flashlightRayRectangleHit(
					startX,
					startY,
					dirX,
					dirY,
					light.length,
					wall
				);

			if(hit < closestDistance){

				closestDistance = hit;

			}

		}


    // =====================================
    // WALLS
    // =====================================

    for(let obstacle of map.obstacles){

        const hit =
            flashlightRayRectangleHit(
                startX,
                startY,
                dirX,
                dirY,
                light.length,
                obstacle
            );


        if(hit < closestDistance){

            closestDistance = hit;

        }

    }


    // =====================================
    // FURNITURE
    // =====================================

    if(map.furniture){

        for(let furniture of map.furniture){

            const hit =
                flashlightRayRectangleHit(
                    startX,
                    startY,
                    dirX,
                    dirY,
                    light.length,
                    furniture
                );


            if(hit < closestDistance){

                closestDistance = hit;

            }

        }

    }


    // =====================================
    // ENEMIES
    // =====================================

    for(let enemy of enemies){

        if(
            enemy.dead ||
            enemy.dying
        ){

            continue;

        }


        const hit =
            flashlightRayCircleHit(
                startX,
                startY,
                dirX,
                dirY,
                light.length,
                enemy.x,
                enemy.y,
                enemy.radius
            );


        if(hit < closestDistance){

            closestDistance = hit;

        }

    }


    return closestDistance;

}


// =====================================
// DRAW FLASHLIGHT
// =====================================

function drawLight(){

    // =====================================
    // BLACKOUT
    // =====================================

    if(blackout.active){

        return;

    }


    // =====================================
    // FLASHLIGHT OFF
    // =====================================

    if(!light.active){

        return;

    }


    // =====================================
    // NO BATTERY
    // =====================================

    if(light.battery <= 0){

        light.battery = 0;

        light.active = false;

        return;

    }


    // =====================================
    // PLAYER CENTER
    // =====================================

    const startX =
        player.x +
        player.width / 2;

    const startY =
        player.y +
        player.height / 2;


    ctx.save();


    // =====================================
    // MOVE TO PLAYER
    // =====================================

    ctx.translate(
        startX,
        startY
    );


    // =====================================
    // FLASHLIGHT ANGLE
    // =====================================

    ctx.rotate(
        player.angle
    );


    // =====================================
    // BUILD LIGHT SHAPE
    // =====================================

    ctx.beginPath();


    ctx.moveTo(
        0,
        0
    );


    // Number of rays

	const rayCount = 100;


	for(
		let i = 0;
		i <= rayCount;
		i++
	){

		const progress =
			i / rayCount;


		const angle =
			-light.width +
			(
				progress *
				light.width *
				2
			);


		const distance =
			getFlashlightRayDistance(
				startX,
				startY,
				player.angle + angle
			);


		const x =
			Math.cos(angle) *
			distance;

		const y =
			Math.sin(angle) *
			distance;


		ctx.lineTo(
			x,
			y
		);

	}


    ctx.closePath();


    // =====================================
    // LIGHT COLOR
    // =====================================

    ctx.fillStyle =
        light.color;


    ctx.fill();


    ctx.restore();


    // =====================================
	// DRAIN BATTERY
	// =====================================

	if(!gamePaused){

		light.battery -=
			light.drainRate;


		if(light.battery < 0){

			light.battery = 0;

		}

	}

}

// =====================================
// BATTERY IMAGE
// =====================================

const batteryImage = new Image();

batteryImage.src = "assets/tools/battery.png";


const battery = {

    x: 300,

    y: 300,

    radius: 12,

    active: true,

    respawnTime: 0,
    
    collected: 0,
    
    locations: [],

	currentIndex: 0

};


// =====================================
// GENERATORS (LEVEL 8)
// =====================================

const generators = [

    {
        x: 260,
        y: 420,
        required: 2,
        current: 0,
        online: false
    },

    {
        x: 660,
        y: 60,
        required: 2,
        current: 0,
        online: false
    },

    {
        x: 780,
        y: 420,
        required: 3,
        current: 0,
        online: false
    }

];

// =====================================
// NETWORK TERMINALS
// =====================================

	const terminals = {

		locations: [],

		connected: 0,

		total: 3,

		nearby: false,

		connecting: false,

		current: null,

		progress: 0

	};
	
	// =====================================
	// MISSION OBJECTIVES
	// =====================================

	let objectives = {

		completed: 0,

		locations: [],

		current: null,

		nearby: false,

		interacting: false,

		message: "",

		messageTimer: 0,

		rescueStarted: false,

		rescueTimer: 0

	};
	
	
const explosives = {

    // =====================================
    // CHEMICALS
    // =====================================

    chemicalsCollected: 0,

    chemicalsRequired: 4,

    locations: [],

    // =====================================
    // EXPLOSIVE
    // =====================================

    carryingExplosive: false,

    completedPods: 0,

    // =====================================
    // MANUFACTURING
    // =====================================

    manufacturing: false,

    interacting: false,

    progress: 0,

    progressMax: 600,

    manufactureTime: 600,

    // =====================================
    // LAB
    // =====================================

    nearbyLab: false,

    labX: 640,

    labY: 100,

    // =====================================
    // MESSAGES
    // =====================================

    message: "",

    messageTimer: 0,
    
    warning: "",

	warningTimer: 0,
	
	spawnDelay: 3600,

	spawnActive: false,

};
	
	const hive = {

		x: 480,

		y: 70,

		width: 60,

		height: 60,

		health: 20,

		maxHealth: 20,

		alive: true,

		pulse: 0

	};
	
	
	let hiveFlash = 0;
	
	let hiveShake = 0;

	let hiveShakeOffset = 0;
	
	let hiveRecoil = 0;
	
	// ==========================
	// HIVE CRITICAL STATE
	// ==========================

	let hiveCritical = false;

	let hiveCriticalPulse = 2;
	
	let hiveExploding = false;

	let hiveExplosionTimer = 0;
	
	let hiveExplosionRadius = 0;
	
	let walkerSpawnTimer = Date.now();

	let runnerSpawnTimer = Date.now();

	let tankSpawnTimer = Date.now();

	let spawnTimer = Date.now();

	let SPAWN_INTERVAL = 45000; // 45 seconds

	let currentSpawnPod = 0;


function drawBatteryItem(){

    if(!battery.active){
        return;
    }

    const batteryWidth = 20;
	const batteryHeight = 28;

    ctx.drawImage(
        batteryImage,

        battery.x - batteryWidth / 2,
        battery.y - batteryHeight / 2,

        batteryWidth,
        batteryHeight
    );

}

// =====================================
// DRAW CHEMICALS
// =====================================

function drawExplosives(){

    if(level.current !== 9){
        return;
    }

    const jarImages = [

        furnitureImages.blue_jar,

        furnitureImages.white_jar,

        furnitureImages.yellow_jar,

        furnitureImages.red_jar

    ];

    for(let i = 0; i < explosives.locations.length; i++){

        const chemical = explosives.locations[i];

        // Do not draw collected chemical
        if(chemical.collected){
            continue;
        }

        const image = jarImages[i];

        if(image && image.complete){

            ctx.drawImage(
                image,
                chemical.x,
                chemical.y,
                18,
                18
            );

        }
    }
}

// =====================================
// DRAW LAB TABLE
// =====================================
function drawLab(){

    if(level.current !== 9){

        return;

    }

    // =====================================
	// LAB TABLE
	// =====================================

	if(
		furnitureImages.computer_table3 &&
		furnitureImages.computer_table3.complete
	){

		ctx.drawImage(
			furnitureImages.computer_table3,
			580,
			90,
			140,
			60
		);

	}

    // =====================================
    // LAB PROMPT
    // =====================================

    if(

        explosives.nearbyLab &&

        !explosives.carryingExplosive

    ){

        ctx.fillStyle = "white";

        ctx.font = "22px Arial";

        ctx.textAlign = "center";

        ctx.fillText(

            "Press X to Manufacture Explosive",

            canvas.width / 2,

            40

        );

    }

    // =====================================
    // PROGRESS BAR
    // =====================================

    if(explosives.interacting){

        ctx.fillStyle = "#444";

        ctx.fillRect(

            canvas.width / 2 - 120,

            55,

            240,

            20

        );

        ctx.fillStyle = "lime";

        ctx.fillRect(

            canvas.width / 2 - 120,

            55,

            (explosives.progress / explosives.progressMax) * 240,

            20

        );

    }

    // =====================================
    // MAIN MESSAGE
    // =====================================

    if(explosives.messageTimer > 0){

        ctx.fillStyle = "#00ff00";

        ctx.font = "28px Arial";

        ctx.textAlign = "center";

        ctx.fillText(

            explosives.message,

            canvas.width / 2,

            100

        );

    }

    // =====================================
    // SECOND MESSAGE / WARNING
    // =====================================

    if(explosives.warningTimer > 0){

        ctx.fillStyle = "yellow";

        ctx.font = "24px Arial";

        ctx.textAlign = "center";

        ctx.fillText(

            explosives.warning,

            canvas.width / 2,

            135

        );

    }

}



function drawGenerators(){

    if(level.current !== 8 && level.current !== 9){
        return;
    }

    for(let generator of generators){

        // =====================================
        // LEVEL 8
        // =====================================

        if(level.current === 8){

            let image;

            if(generator.online){
                image = furnitureImages.generator2;
            }
            else{
                image = furnitureImages.generator;
            }

            if(image.complete){

                ctx.drawImage(
                    image,
                    generator.x - 15,
                    generator.y - 15,
                    30,
                    30
                );

            }
        }

        // =====================================
        // LEVEL 9
        // =====================================

        else if(level.current === 9){

            ctx.fillStyle =
                generator.online ? "#cc0000" : "#444444";

            ctx.fillRect(
                generator.x - 18,
                generator.y - 18,
                36,
                36
            );
        }

        // =====================================
        // POWER INDICATOR
        // =====================================

        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";

        ctx.fillText(
            generator.current + "/" + generator.required,
            generator.x,
            generator.y - 26
        );
    }
}

// =====================================
// DRAW NETWORK TERMINALS
// =====================================

function drawTerminals(){

    if(level.current !== 11){

        return;

    }

    for(let terminal of terminals.locations){

        if(terminal.online){

            ctx.fillStyle = "lime";

        }
        else{

            ctx.fillStyle = "deepskyblue";

        }

        ctx.fillRect(

            terminal.x,

            terminal.y,

            30,

            30

        );

        ctx.fillStyle = "black";

        ctx.fillRect(

            terminal.x + 5,

            terminal.y + 5,

            20,

            20

        );

    }
    if(terminals.nearby){

		ctx.textAlign = "center";

		if(terminals.connecting){

			// ==========================
			// CONNECTING TEXT
			// ==========================

			ctx.fillStyle = "lime";

			ctx.font = "24px Arial";

			ctx.fillText(

				"CONNECTING...",

				canvas.width / 2,

				40

			);

			// ==========================
			// PROGRESS BAR
			// ==========================

			ctx.strokeStyle = "white";

			ctx.lineWidth = 2;

			ctx.strokeRect(

				canvas.width / 2 - 100,

				55,

				200,

				18

			);

			ctx.fillStyle = "lime";

			ctx.fillRect(

				canvas.width / 2 - 100,

				55,

				(terminals.current.progress / 180) * 200,

				18

			);

		}
		else{

			ctx.fillStyle = "white";

			ctx.font = "24px Arial";

			ctx.fillText(

				"PRESS E TO CONNECT",

				canvas.width / 2,

				40

			);

		}

	}

}



// =====================================
// CHECK TERMINAL
// =====================================

function updateTerminals(){

    terminals.nearby = false;

    if(level.current !== 11){

        return;

    }

    for(let terminal of terminals.locations){

        if(terminal.online){

            continue;

        }

        if(

            player.x < terminal.x + 30 &&
            player.x + player.width > terminal.x &&
            player.y < terminal.y + 30 &&
            player.y + player.height > terminal.y

        ){

            terminals.nearby = true;
            
            if(terminals.connecting){

				break;

			}
            
            terminals.current = terminal;

            break;

        }

    }
    
    // =====================================
	// CONNECT TERMINAL
	// =====================================

	if(terminals.connecting && terminals.current){

		terminals.current.progress++;

		if(terminals.current.progress >= 180){

			terminals.current.online = true;

			terminals.connected++;

			terminals.connecting = false;

			terminals.current.progress = 0;

			console.log(

				"Terminal Connected:",

				terminals.connected

			);

			// ==========================
			// ALL TERMINALS CONNECTED
			// ==========================

			if(terminals.connected >= terminals.total){

				for(let door of exitDoors){

					door.unlocked = true;

				}

				console.log("NETWORK RESTORED");

			}

		}

	}

}


function drawHive(){

    if(level.current !== 10){

        return;

    }
    
    // ==========================
	// HIVE EXPLOSION
	// ==========================

	if(hiveExploding){

		hiveExplosionTimer--;

		if(hiveExplosionTimer <= 0){

			hiveExploding = false;

			exitDoor.unlocked = true;

		}

		return;

	}

    if(!hive.alive){

        return;

    }

    hive.pulse += 0.05;

    let pulse = Math.sin(hive.pulse) * hiveCriticalPulse;
    
    // ==========================
	// CRITICAL HEARTBEAT
	// ==========================

	if(hiveCritical){

		if(hiveCriticalPulse < 18){

			hiveCriticalPulse += 0.08;

		}

	}

    // ==========================
    // SHAKE
    // ==========================

    if(hiveShake > 0){

        hiveShake--;

        hiveShakeOffset = Math.random() * 6 - 3;

    }
    else{

        hiveShakeOffset = 0;

    }
    
    // ==========================
	// RECOIL
	// ==========================

	let recoilOffset = 0;

	if(hiveRecoil > 0){

		recoilOffset = -hiveRecoil;

		hiveRecoil -= 0.7;

		if(hiveRecoil < 0){

			hiveRecoil = 0;

		}

	}

    // ==========================
    // OUTER BODY
    // ==========================

    if(hiveFlash > 0){

        ctx.fillStyle = "#ff5555";

        hiveFlash--;

    }
    else{

        ctx.fillStyle = "#550000";

    }

    ctx.fillRect(

        hive.x + hiveShakeOffset + recoilOffset,

        hive.y,

        hive.width + pulse,

        hive.height + pulse

    );

    // ==========================
    // INNER BODY
    // ==========================

    ctx.fillStyle = "#990000";

    ctx.fillRect(

        hive.x + 8 + hiveShakeOffset + recoilOffset,

        hive.y + 8,

        hive.width - 16,

        hive.height - 16

    );

    // ==========================
    // HEART
    // ==========================

    ctx.beginPath();

    ctx.fillStyle = "#ff3333";

    ctx.arc(

        hive.x + 30 + hiveShakeOffset + recoilOffset,

        hive.y + 30,

        10 + pulse,

        0,

        Math.PI * 2

    );

    ctx.fill();

}
	

function drawHiveGlow(){

    if(level.current !== 10){

        return;

    }

    if(!hive.alive){

        return;

    }

    const centerX = hive.x + hive.width / 2;

    const centerY = hive.y + hive.height / 2;

    const radius = hiveFlash > 0 ? 250 : 130;

    const alpha = hiveFlash > 0 ? 0.35 : 0.12;

    const glow = ctx.createRadialGradient(

        centerX,

        centerY,

        20,

        centerX,

        centerY,

        radius

    );

    glow.addColorStop(0, "rgba(255,40,40," + alpha + ")");

    glow.addColorStop(1, "rgba(255,0,0,0)");

    ctx.fillStyle = glow;

    ctx.beginPath();

    ctx.arc(

        centerX,

        centerY,

        radius,

        0,

        Math.PI * 2

    );

    ctx.fill();

}



function updateBatteryItem(){

    if(level.current === 10 && !hive.alive){

        return;

    }

    // =====================================
    // BATTERY NOT ACTIVE
    // =====================================

    if(!battery.active){

        // LEVEL 8
        if(level.current === 8){

            return;

        }
        
        //Level 9

		if(level.current === 9){

		// =====================================
		// STOP AFTER ALL 7 BATTERIES
		// =====================================

		if(battery.collected >= 7){

			battery.active = false;

			return;

		}

    // =====================================
    // SPAWN NEXT BATTERY
    // =====================================

		if(

			light.battery <= 45 &&

			battery.currentIndex < battery.locations.length - 1

		){

			battery.currentIndex++;

			battery.x =
				battery.locations[battery.currentIndex].x;

			battery.y =
				battery.locations[battery.currentIndex].y;

			battery.active = true;

		}

		return;
	}

        // LEVEL 10
        if(level.current === 10){

            if(player.hasBattery){

                return;

            }

            if(battery.collected < battery.locations.length){

                battery.x = battery.locations[battery.collected].x;
                battery.y = battery.locations[battery.collected].y;
                battery.active = true;

            }

            return;

        }
        
        // =====================================
		// LEVEL 12
		// =====================================

		if(level.current === 12){

			// Stop spawning once all 7 batteries
			// have been collected.

			if(battery.collected >= level.batteryGoal){

				battery.active = false;

				return;

			}


			// Spawn the next battery only when
			// flashlight reaches 50% or lower.

			if(light.battery <= 50){

				if(
					battery.collected <
					battery.locations.length
				){

					battery.currentIndex =
						battery.collected;

					battery.x =
						battery.locations[
							battery.currentIndex
						].x;

					battery.y =
						battery.locations[
							battery.currentIndex
						].y;

					battery.active = true;

				}

			}

			return;

		}
		// =====================================
		// LEVELS 1-7 & LEVEL 11
		// =====================================

		if(level.current <= 7 || level.current === 11){

			// STOP BATTERY SPAWNING
			// once the required number has been collected

			if(battery.collected >= level.batteryGoal){

				battery.active = false;

				return;

			}


			if(Date.now() >= battery.respawnTime){

				// Use the next predefined battery location

				if(battery.collected < battery.locations.length){

					battery.currentIndex = battery.collected;

					battery.x =
						battery.locations[battery.currentIndex].x;

					battery.y =
						battery.locations[battery.currentIndex].y;

					battery.active = true;

				}

			}

		}

        return;

    }

    // =====================================
    // PLAYER TOUCHES BATTERY
    // =====================================

    const centerX = player.x + player.width / 2;
    const centerY = player.y + player.height / 2;

    const dx = battery.x - centerX;
    const dy = battery.y - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if(distance < battery.radius + player.width / 2){

        // =====================================
        // LEVEL 8
        // =====================================

        if(level.current === 8){

            battery.active = false;

            player.hasBattery = true;

            pickupMessage = "BATTERY PICKED UP";

            pickupTimer = 60;

            pickupY = player.y - 20;

            pickupFlash = 20;

            return;

        }

        // =====================================
        // LEVEL 9
        // =====================================

        if(level.current === 9){

            battery.active = false;

            light.battery = 100;

            light.active = true;

            return;

        }

        // =====================================
        // LEVEL 10
        // =====================================

        if(level.current === 10){

            battery.active = false;

            battery.x = -1000;
            battery.y = -1000;

            player.hasBattery = true;

            light.battery = 100;

            light.active = true;

            pickupMessage = "POWER CELL";

            pickupTimer = 60;

            pickupY = player.y - 20;

            pickupFlash = 20;

            return;

        }
        
        // LEVEL 12
		if(level.current === 12){

			battery.active = false;

			battery.collected++;

			light.battery = 100;

			light.active = true;

			if(
				battery.collected >=
				level.batteryGoal
			){

				exitDoor.unlocked = true;

			}

			return;

		}

        // =====================================
        // LEVELS 1-7 & LEVEL 11
        // =====================================

        if(level.current <= 7 || level.current === 11){

            battery.active = false;

            battery.collected++;

            pickupMessage = "+1 BATTERY";

            pickupTimer = 60;

            pickupY = player.y - 20;

            pickupFlash = 20;

            battery.respawnTime = Date.now() + 20000;

            light.battery = 100;

            light.active = true;

            if(battery.collected >= level.batteryGoal){

                exitDoor.unlocked = true;

            }

        }

    }

}

// =====================================
// UPDATE CHEMICALS
// =====================================

function updateExplosives(){

    if(level.current !== 9){

        return;

    }

    for(let chemical of explosives.locations){

        if(chemical.collected){

            continue;

        }

        let dx = (player.x + player.width / 2) - chemical.x;

        let dy = (player.y + player.height / 2) - chemical.y;

        let distance = Math.sqrt(dx * dx + dy * dy);

        if(distance < 30){

            chemical.collected = true;

            explosives.chemicalsCollected++;

            pickupMessage = "CHEMICAL COLLECTED";

            pickupTimer = 60;

            pickupY = player.y - 20;

            pickupFlash = 20;

            break;

        }

    }

}

// =====================================
// UPDATE LAB
// =====================================

function updateLab(){

    if(level.current !== 9){

        return;

    }
    
    // =====================================
	// SPAWN POD ACTIVATION TIMER
	// =====================================

	if(!explosives.spawnActive){

		explosives.spawnDelay--;

		if(explosives.spawnDelay <= 0){

			explosives.spawnActive = true;

			explosives.message = "SPAWN PODS ACTIVATED";

			explosives.messageTimer = 180;

		}

	}

    explosives.nearbyLab = false;

    if(

        explosives.chemicalsCollected <

        explosives.chemicalsRequired

    ){

        return;

    }

    let dx =

        (player.x + player.width / 2) -

        explosives.labX;

    let dy =

        (player.y + player.height / 2) -

        explosives.labY;

    let distance = Math.sqrt(dx * dx + dy * dy);

    if(distance < 120){

        explosives.nearbyLab = true;

    }

    // =====================================
    // MANUFACTURE PROGRESS
    // =====================================

    if(

        explosives.interacting &&

        explosives.nearbyLab

    ){

        explosives.progress++;

        if(explosives.progress >= explosives.progressMax){

            explosives.progress = 0;

            explosives.interacting = false;

            explosives.carryingExplosive = true;

            explosives.message = "DEMOLITION CHARGE READY";

            explosives.messageTimer = 120;

        }

    }

    else{

        explosives.progress = 0;

    }

    // =====================================
    // MESSAGE TIMER
    // =====================================

    if(explosives.messageTimer > 0){

        explosives.messageTimer--;

    }

    // =====================================
    // WARNING TIMER
    // =====================================

    if(explosives.warningTimer > 0){

        explosives.warningTimer--;

    }

}



function updateGenerators(){

    // =====================================
    // LEVEL 8 - CHARGE GENERATORS
    // =====================================

    if(level.current === 8){

        if(!player.hasBattery){

            return;

        }

        const centerX = player.x + player.width / 2;
        const centerY = player.y + player.height / 2;

        for(let generator of generators){

            const dx = generator.x - centerX;
            const dy = generator.y - centerY;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < 35){

                if(generator.current >= generator.required){

                    break;

                }

                player.hasBattery = false;

                generator.current++;

                light.battery = 100;
                light.active = true;

                battery.collected++;

                if(level.current === 8){

					pickupMessage = "GENERATOR CHARGED";

				}
				else if(level.current === 9){

					pickupMessage = "SPAWN POD DESTROYED";

				};

                pickupTimer = 60;
                pickupY = player.y - 20;
                pickupFlash = 20;

                if(generator.current >= generator.required){

                    generator.online = true;

                }

                if(battery.collected < battery.locations.length){

                    battery.x = battery.locations[battery.collected].x;
                    battery.y = battery.locations[battery.collected].y;
                    battery.active = true;

                }
                else{

                    exitDoor.unlocked = true;

                }

                break;

            }

        }

        return;

    }


    // =====================================
    // LEVEL 9 - SWITCH GENERATORS OFF
    // =====================================

    if(level.current === 9){

        const centerX = player.x + player.width / 2;
        const centerY = player.y + player.height / 2;

        for(let generator of generators){

            const dx = generator.x - centerX;
            const dy = generator.y - centerY;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < 35){

			// Need a demolition charge

			if(!explosives.carryingExplosive){
				
				explosives.warning = "Explosive Required";

				explosives.warningTimer = 120;

				break;

			}

                // Already OFF
                if(!generator.online){

                    break;

                }

                generator.online = false;
                
                explosives.carryingExplosive = false;
                
                explosives.message = "Charge Expended";

				explosives.warning = "Return to the Laboratory";

				explosives.messageTimer = 180;

				explosives.warningTimer = 180;

                pickupMessage = "SPAWN POD DESTROYED";

                pickupTimer = 60;
                pickupY = player.y - 20;
                pickupFlash = 20;

                let allOff = true;

                for(let g of generators){

                    if(g.online){

                        allOff = false;
                        break;

                    }

                }

                if(allOff){

                    exitDoor.unlocked = true;

                }

                break;

            }

        }

    }

}


function updateHive(){
	
	if(level.current !== 10){

    return;

}

	// ==========================
	// HIVE EXPLOSION
	// ==========================

	if(hiveExploding){

		hiveExplosionTimer--;
		
		hiveExplosionRadius += 12;

		if(hiveExplosionTimer <= 0){

			hiveExploding = false;

			exitDoor.unlocked = true;

		}

		return;

	}

	if(!hive.alive){

		return;

	}
	
    // =====================================
    // HIVE SPAWNS WALKERS
    // =====================================

    if(Date.now() - walkerSpawnTimer >= 60000){

        createEnemyAt(

            "Walker",

            hive.x + hive.width / 2,

            hive.y + hive.height / 2

        );

        walkerSpawnTimer = Date.now();

    }
    
    // =====================================
	// HIVE SPAWNS RUNNERS
	// =====================================

	if(Date.now() - runnerSpawnTimer >= 180000){

		createEnemyAt(

			"Runner",

			hive.x + hive.width / 2,

			hive.y + hive.height / 2

		);

		runnerSpawnTimer = Date.now();

	}
	
	// =====================================
	// HIVE SPAWNS TANKS
	// =====================================

	if(Date.now() - tankSpawnTimer >= 300000){

		createEnemyAt(

			"Tank",

			hive.x + hive.width / 2,

			hive.y + hive.height / 2

		);

		tankSpawnTimer = Date.now();

	}

    // =====================================
    // PLAYER NOT CARRYING POWER CELL
    // =====================================

    if(!player.hasBattery){

        return;

    }

    const centerX = player.x + player.width / 2;
    const centerY = player.y + player.height / 2;

    const hiveCenterX = hive.x + hive.width / 2;
    const hiveCenterY = hive.y + hive.height / 2;

    const dx = hiveCenterX - centerX;
    const dy = hiveCenterY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if(distance < 50){

        player.hasBattery = false;

        battery.collected++;

        hive.health--;
        
        console.log("Hive Health:", hive.health);
        
        hiveFlash = 10;
        
        hiveShake = 12;
        
        hiveRecoil = 8;

        pickupMessage = "HIVE DAMAGED";

        pickupTimer = 60;

        pickupY = player.y - 20;

        pickupFlash = 20;

        if(battery.collected < battery.locations.length){

            battery.x = battery.locations[battery.collected].x;

            battery.y = battery.locations[battery.collected].y;

            battery.active = true;

        }

        if(hive.health <= 0){

		hive.health = 0;

		hive.alive = false;

		exitDoor.unlocked = true;

		battery.active = false;

		player.hasBattery = false;

	}

    }

}

// =====================================
// DRAW OBJECTIVES
// =====================================

function drawObjectives(){

    if(level.current !== 12){

        return;

    }

	// =====================================
	// DRAW OBJECTIVES
	// =====================================

	for(let objective of objectives.locations){

		if(objective.completed){

			continue;

		}

		let image = null;

		if(objective.type === "research"){

			image = furnitureImages.computer_table2;

			ctx.drawImage(
				image,
				objective.x + 0,   // X position adjustment
				objective.y + 0,   // Y position adjustment
				50,                // WIDTH
				25                 // HEIGHT
			);

		}

		else if(objective.type === "dna"){

			image = furnitureImages.refrigerator;

			ctx.drawImage(
				image,
				objective.x + 0,   // X position adjustment
				objective.y + 0,   // Y position adjustment
				20,                // WIDTH
				50                 // HEIGHT
			);

		}

		else{

			image = furnitureImages.signal_device;

			ctx.drawImage(
				image,
				objective.x + 0,   // X position adjustment
				objective.y + 0,   // Y position adjustment
				20,                // WIDTH
				30                 // HEIGHT
			);

		}
		
	}

    // Prompt

    if(objectives.nearby && objectives.current){

        ctx.fillStyle = "white";

        ctx.font = "22px Arial";

        ctx.textAlign = "center";

        if(objectives.current.type === "research"){

            ctx.fillText(

                "Press U to Upload Research",

                canvas.width / 2,

                40

            );

        }

        else if(objectives.current.type === "dna"){

            ctx.fillText(

                "Press D to Collect DNA Sample",

                canvas.width / 2,

                40

            );

        }

        else{

            ctx.fillText(

                "Press S to Send Distress Signal",

                canvas.width / 2,

                40

            );

        }

        // Progress Bar

        if(!objectives.current.completed){

            ctx.fillStyle = "#444";

            ctx.fillRect(

                canvas.width / 2 - 100,

                55,

                200,

                18

            );

            ctx.fillStyle = "lime";

            ctx.fillRect(

                canvas.width / 2 - 100,

                55,

                (objectives.current.progress / 180) * 200,

                18

            );

        }

    }

    // Counter

    ctx.fillStyle = "white";

    ctx.font = "20px Arial";

    ctx.textAlign = "right";

    ctx.fillText(

        "Objectives: " + objectives.completed + " / 3",

        canvas.width - 20,

        35

    );
    
    ctx.textAlign = "left";

    // Completion Message

    if(objectives.messageTimer > 0){

        ctx.fillStyle = "#00ff00";

        ctx.font = "28px Arial";

        ctx.textAlign = "center";

        ctx.fillText(

            objectives.message,

            canvas.width / 2,

            100

        );

    }

}


// =====================================
// UPDATE OBJECTIVES
// =====================================

function updateObjectives(){
	

    if(level.current !== 12){

        return;

    }

    objectives.nearby = false;

    objectives.current = null;

    for(let objective of objectives.locations){

        if(objective.completed){

            continue;

        }

        let dx = (player.x + player.width / 2) - objective.x;

        let dy = (player.y + player.height / 2) - objective.y;

        let distance = Math.sqrt(dx * dx + dy * dy);

        if(distance < 60){

            objectives.nearby = true;

            objectives.current = objective;

            break;

        }

    }

    // =====================================
    // OBJECTIVE PROGRESS
    // =====================================

    if(

        objectives.interacting &&

        objectives.current

    ){

        objectives.current.progress++;

        if(objectives.current.progress >= 180){

            objectives.current.completed = true;

            objectives.completed++;

            if(objectives.current.type === "research"){

                objectives.message = "Research Uploaded";

            }

            else if(objectives.current.type === "dna"){

                objectives.message = "DNA Sample Collected";

            }

            else if(objectives.current.type === "signal"){

                objectives.message = "Distress Signal Sent";

            }

            objectives.messageTimer = 120;

            objectives.interacting = false;

            objectives.current = null;

            objectives.nearby = false;

            // =====================================
            // START RESCUE COUNTDOWN
            // =====================================

            if(

                objectives.completed === 3 &&

                !objectives.rescueStarted

            ){

                console.log("Starting Rescue Timer");

                objectives.rescueStarted = true;

                objectives.rescueTimer = 600;

            }

        }

    }

    else{

        if(objectives.current){

            objectives.current.progress = 0;

        }

    }

	// =====================================
	// RESCUE TIMER
	// =====================================

	if(objectives.rescueStarted){

		objectives.rescueTimer--;

		if(objectives.rescueTimer <= 0){

			exitDoor.destroyed = true;

			exitDoor.unlocked = true;

			objectives.rescueStarted = false;

			soldiers.spawning = true;

		}

	}

	// =====================================
	// SOLDIER ARRIVAL TIMER
	// =====================================

	if(

		soldiers.spawning &&

		!soldiers.arrived

	){

		soldiers.spawnTimer--;

		if(soldiers.spawnTimer <= 0){

			spawnSoldiers();

			soldiers.spawning = false;

		}

	}

	// =====================================
	// OBJECTIVE MESSAGE TIMER
	// =====================================

	if(objectives.messageTimer > 0){

		objectives.messageTimer--;

	}

	// =====================================
	// PLAYER ESCAPES
	// =====================================

	if(

		level.current === 12 &&

		exitDoor.destroyed

	){

		let dx =

			(player.x + player.width / 2) -

			(exitDoor.x + 10);

		let dy =

			(player.y + player.height / 2) -

			(exitDoor.y + 40);

		let distance = Math.sqrt(

			dx * dx +

			dy * dy

		);

		if(distance < 90){

			gameFinished = true;

		}

	}

	

}
