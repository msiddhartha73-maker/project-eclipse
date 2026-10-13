// =====================================
// SOLDIER SPRITES
// =====================================

const soldierSprites = {

    down: [
        new Image(),
        new Image(),
        new Image()
    ],

    right: [
        new Image(),
        new Image(),
        new Image()
    ],

    up: [
        new Image(),
        new Image(),
        new Image()
    ],

    left: [
        new Image(),
        new Image(),
        new Image()
    ]

};


// DOWN
soldierSprites.down[0].src =
    "assets/soldiers/soldier_moving_down.png";

soldierSprites.down[1].src =
    "assets/soldiers/soldier_moving_down2.png";

soldierSprites.down[2].src =
    "assets/soldiers/soldier_moving_down3.png";


// RIGHT
soldierSprites.right[0].src =
    "assets/soldiers/soldier_moving_right.png";

soldierSprites.right[1].src =
    "assets/soldiers/soldier_moving_right2.png";

soldierSprites.right[2].src =
    "assets/soldiers/soldier_moving_right3.png";


// UP
soldierSprites.up[0].src =
    "assets/soldiers/soldier_moving_up.png";

soldierSprites.up[1].src =
    "assets/soldiers/soldier_moving_up2.png";

soldierSprites.up[2].src =
    "assets/soldiers/soldier_moving_up3.png";


// LEFT
soldierSprites.left[0].src =
    "assets/soldiers/soldier_moving_left.png";

soldierSprites.left[1].src =
    "assets/soldiers/soldier_moving_left2.png";

soldierSprites.left[2].src =
    "assets/soldiers/soldier_moving_left3.png";
    
    
// =====================================
// SOLDIER BULLET SPRITES
// =====================================

const soldierBulletSprites = [

    new Image(),
    new Image(),
    new Image()

];

soldierBulletSprites[0].src =
    "assets/soldiers/bullet_moving1.png";

soldierBulletSprites[1].src =
    "assets/soldiers/bullet_moving2.png";

soldierBulletSprites[2].src =
    "assets/soldiers/bullet_moving3.png";


// =====================================
// SOLDIER BULLETS
// =====================================

const soldierBullets = [];


const soldierPath1 = [

{ x: 52, y: 261 }, { x: 82, y: 261 }, { x: 112, y: 261 }, { x: 142, y: 261 }, { x: 172, y: 261 }, { x: 202, y: 261 }, { x: 232, y: 261 }, { x: 258, y: 246 }, { x: 258, y: 216 }, { x: 258, y: 186 },
{ x: 258, y: 156 }, { x: 258, y: 126 }, { x: 258, y: 96 }, { x: 229, y: 85 }, { x: 199, y: 85 }, { x: 169, y: 85 }, { x: 139, y: 85 }, { x: 165, y: 69 }, { x: 195, y: 69 }, { x: 225, y: 69 },
{ x: 255, y: 69 }, { x: 285, y: 69 }, { x: 315, y: 69 }, { x: 345, y: 69 }, { x: 316, y: 81 }, { x: 286, y: 81 }, { x: 267, y: 105 }, { x: 267, y: 135 }, { x: 267, y: 165 }, { x: 267, y: 195 },
{ x: 291, y: 213 }, { x: 321, y: 213 }, { x: 342, y: 235 }, { x: 366, y: 253 }, { x: 396, y: 253 }, { x: 426, y: 253 }, { x: 456, y: 253 }, { x: 486, y: 253 }, { x: 496, y: 223 }, { x: 496, y: 193 },
{ x: 496, y: 163 }, { x: 496, y: 133 }, { x: 496, y: 103 }, { x: 480, y: 76 }, { x: 508, y: 63 }, { x: 538, y: 63 }, { x: 568, y: 63 }, { x: 577, y: 93 }, { x: 607, y: 94 }, { x: 637, y: 94 },
{ x: 658, y: 72 }, { x: 687, y: 63 }, { x: 717, y: 63 }, { x: 746, y: 54 }, { x: 767, y: 76 }, { x: 767, y: 106 }, { x: 767, y: 136 }, { x: 737, y: 136 }, { x: 707, y: 136 }, { x: 685, y: 157 },
{ x: 697, y: 185 }, { x: 727, y: 185 }, { x: 757, y: 185 }, { x: 787, y: 185 }, { x: 817, y: 185 }, { x: 847, y: 185 }, { x: 848, y: 155 }, { x: 848, y: 125 }, { x: 848, y: 95 }, { x: 824, y: 76 },
{ x: 847, y: 55 }, { x: 877, y: 55 }, { x: 881, y: 85 }, { x: 881, y: 115 }, { x: 881, y: 145 }, { x: 869, y: 173 }, { x: 839, y: 173 }, { x: 826, y: 202 }, { x: 826, y: 232 }, { x: 826, y: 262 },
{ x: 796, y: 263 }, { x: 766, y: 263 }, { x: 736, y: 263 }, { x: 706, y: 263 }, { x: 676, y: 263 }, { x: 646, y: 263 }, { x: 616, y: 263 }, { x: 586, y: 263 }, { x: 556, y: 263 }, { x: 526, y: 263 },
{ x: 496, y: 263 }, { x: 466, y: 263 }, { x: 436, y: 263 }, { x: 406, y: 263 }, { x: 376, y: 263 }, { x: 346, y: 263 }, { x: 343, y: 233 }, { x: 313, y: 229 }, { x: 283, y: 229 }, { x: 253, y: 229 },
{ x: 235, y: 253 }, { x: 206, y: 262 }, { x: 176, y: 262 }, { x: 146, y: 262 }, { x: 116, y: 262 }, { x: 86, y: 262 }, { x: 56, y: 262 }
];

const soldierPath2 = [
{ x: 53, y: 299 }, { x: 81, y: 310 }, { x: 81, y: 340 }, { x: 81, y: 370 }, { x: 81, y: 400 }, { x: 81, y: 430 }, { x: 81, y: 460 }, { x: 107, y: 476 }, { x: 137, y: 476 }, { x: 167, y: 472 }, { x: 170, y: 442 }, { x: 170, y: 412 },
{ x: 170, y: 382 }, { x: 170, y: 352 }, { x: 186, y: 326 }, { x: 214, y: 315 }, { x: 244, y: 315 }, { x: 247, y: 285 }, { x: 247, y: 255 }, { x: 247, y: 225 }, { x: 277, y: 222 }, { x: 307, y: 222 }, { x: 324, y: 247 }, { x: 351, y: 261 },
{ x: 351, y: 291 }, { x: 371, y: 314 }, { x: 401, y: 314 }, { x: 431, y: 314 }, { x: 461, y: 314 }, { x: 491, y: 314 }, { x: 521, y: 314 }, { x: 551, y: 314 }, { x: 556, y: 344 }, { x: 556, y: 374 }, { x: 556, y: 404 }, { x: 556, y: 434 },
{ x: 556, y: 464 }, { x: 526, y: 468 }, { x: 509, y: 443 }, { x: 484, y: 426 }, { x: 454, y: 421 }, { x: 424, y: 421 }, { x: 394, y: 421 }, { x: 383, y: 449 }, { x: 365, y: 473 }, { x: 335, y: 473 }, { x: 305, y: 473 }, { x: 275, y: 473 },
{ x: 267, y: 444 }, { x: 297, y: 446 }, { x: 327, y: 446 }, { x: 357, y: 446 }, { x: 374, y: 421 }, { x: 404, y: 419 }, { x: 434, y: 419 }, { x: 464, y: 419 }, { x: 494, y: 419 }, { x: 524, y: 419 }, { x: 554, y: 419 }, { x: 555, y: 389 },
{ x: 555, y: 359 }, { x: 555, y: 329 }, { x: 575, y: 306 }, { x: 605, y: 306 }, { x: 635, y: 306 }, { x: 665, y: 306 }, { x: 695, y: 306 }, { x: 697, y: 336 }, { x: 703, y: 366 }, { x: 703, y: 396 }, { x: 682, y: 418 }, { x: 666, y: 444 },
{ x: 674, y: 415 }, { x: 694, y: 392 }, { x: 694, y: 362 }, { x: 702, y: 333 }, { x: 725, y: 313 }, { x: 755, y: 313 }, { x: 785, y: 313 }, { x: 815, y: 313 }, { x: 845, y: 313 }, { x: 856, y: 341 }, { x: 856, y: 371 }, { x: 856, y: 401 },
{ x: 856, y: 431 }, { x: 856, y: 461 }, { x: 831, y: 478 }, { x: 801, y: 478 }, { x: 793, y: 449 }, { x: 822, y: 441 }, { x: 852, y: 441 }, { x: 882, y: 441 }, { x: 866, y: 415 }, { x: 866, y: 385 }, { x: 862, y: 355 }, { x: 862, y: 325 },
{ x: 832, y: 321 }, { x: 802, y: 321 }, { x: 772, y: 321 }, { x: 742, y: 321 }, { x: 712, y: 321 }, { x: 682, y: 321 }, { x: 652, y: 321 }, { x: 622, y: 321 }, { x: 592, y: 321 }, { x: 562, y: 321 }, { x: 532, y: 321 }, { x: 502, y: 321 },
{ x: 472, y: 321 }, { x: 442, y: 321 }, { x: 412, y: 321 }, { x: 382, y: 321 }, { x: 374, y: 292 }, { x: 374, y: 262 }, { x: 374, y: 232 }, { x: 346, y: 219 }, { x: 316, y: 219 }, { x: 286, y: 219 }, { x: 259, y: 233 }, { x: 248, y: 261 },
{ x: 247, y: 291 }, { x: 217, y: 291 }, { x: 187, y: 291 }, { x: 157, y: 291 }, { x: 127, y: 291 }, { x: 99, y: 304 }, { x: 69, y: 304 }
];

const soldiers = {

    active: false,

    arrived: false,

    spawning: false,

    spawnTimer: 120,

    spawnStage: 0,

    spawnDelay: 120,

    message: "",

    messageTimer: 0,

    list: []

};


function spawnSoldiers(){

    // =====================================
    // LEVEL 12 ONLY
    // SOLDIERS REQUIRE ALL 3 OBJECTIVES
    // =====================================

    if(level.current === 12){

        if(objectives.completed < 3){

            console.log(
                "Soldiers blocked:",
                "Objectives completed =",
                objectives.completed
            );

            return;

        }

    }


    // =====================================
    // DON'T SPAWN TWICE
    // =====================================

    if(soldiers.arrived){

        return;

    }


    console.log("spawnSoldiers() CALLED");


    // =====================================
    // ACTIVATE SOLDIERS
    // =====================================

    soldiers.active = true;

    soldiers.arrived = true;

    soldiers.spawnStage = 1;

    soldiers.spawnDelay = 120;


    soldiers.message =
        "RESCUE TEAM HAS ARRIVED";

    soldiers.messageTimer = 180;


    // =====================================
    // FIRST TWO SOLDIERS
    // =====================================

    soldiers.list = [

        {

            x: 48,

            y: 257,

            width: 15,

            height: 15,

            color: "#00aa00",

            speed: 2,

            path: soldierPath1,

            pathIndex: 1,

            direction: "right",

            frame: 0,

            frameTimer: 0,

            shooting: false,

            target: null,

            shootCooldown: 0,

            health: 3,

            alive: true,

            attackCooldown: 0

        },

        {

            x: 48,

            y: 297,

            width: 15,

            height: 15,

            color: "#00aa00",

            speed: 2,

            path: soldierPath2,

            pathIndex: 1,

            direction: "right",

            frame: 0,

            frameTimer: 0,

            shooting: false,

            target: null,

            shootCooldown: 0,

            health: 3,

            alive: true,

            attackCooldown: 0

        }

    ];

}


function drawSoldiers(){
	
	

    if(!soldiers.active){

        return;

    }

    // =====================================
    // DRAW SOLDIERS
    // =====================================

	for(let soldier of soldiers.list){

		const frames =
			soldierSprites[soldier.direction];

		const image =
			frames[soldier.frame];

		if(image && image.complete){

			const drawSize = 20;

			ctx.drawImage(

				image,

				soldier.x +
					soldier.width / 2 -
					drawSize / 2,

				soldier.y +
					soldier.height / 2 -
					drawSize / 2,

				drawSize,
				drawSize

			);

		}

	}

    // =====================================
    // ARRIVAL MESSAGE
    // =====================================

    if(soldiers.messageTimer > 0){

        soldiers.messageTimer--;

        // First line

        ctx.fillStyle = "#00ff00";

        ctx.font = "30px Arial";

        ctx.textAlign = "center";

        ctx.fillText(

            "RESCUE TEAM HAS ARRIVED",

            canvas.width / 2,

            65

        );

        // Second line

        ctx.fillStyle = "#ffff00";

        ctx.font = "24px Arial";

        ctx.fillText(

            "Proceed to the Entrance",

            canvas.width / 2,

            100

        );

    }

}


// =====================================
// SOLDIER LINE OF SIGHT
// LEVEL 12 ONLY
// =====================================

function soldierHasLineOfSight(soldier, enemy){

    const startX =
        soldier.x +
        soldier.width / 2;

    const startY =
        soldier.y +
        soldier.height / 2;


    const endX =
        enemy.x;

    const endY =
        enemy.y;


    const dx =
        endX - startX;

    const dy =
        endY - startY;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    if(distance <= 0){

        return true;

    }


    // Check the path between
    // soldier and enemy.

    const steps =
        Math.ceil(distance / 4);


    for(let i = 1; i < steps; i++){

        const progress =
            i / steps;


        const checkX =
            startX +
            dx * progress;


        const checkY =
            startY +
            dy * progress;


        // Check every wall / obstacle

        for(let obstacle of map.obstacles){

            if(

                checkX >= obstacle.x &&

                checkX <=
                    obstacle.x +
                    obstacle.width &&

                checkY >= obstacle.y &&

                checkY <=
                    obstacle.y +
                    obstacle.height

            ){

                // Wall is blocking the enemy

                return false;

            }

        }

    }


    // Nothing blocked the path

    return true;

}

// =====================================
// FIND NEAREST VISIBLE ENEMY
// LEVEL 12 ONLY
// =====================================

function findSoldierTarget(soldier){

    if(level.current !== 12){

        return null;

    }


    let closestEnemy = null;

    let closestDistance = Infinity;


    const soldierCenterX =
        soldier.x +
        soldier.width / 2;


    const soldierCenterY =
        soldier.y +
        soldier.height / 2;


    for(let enemy of enemies){

        // =====================================
        // IGNORE DEAD ENEMIES
        // =====================================

        if(
            enemy.dead ||
            enemy.dying
        ){

            continue;

        }


        // =====================================
        // DISTANCE
        // =====================================

        const dx =
            enemy.x -
            soldierCenterX;


        const dy =
            enemy.y -
            soldierCenterY;


        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        // Maximum detection range

        if(distance > 300){

            continue;

        }


        // =====================================
        // WALL / LINE OF SIGHT CHECK
        // =====================================

        if(
            !soldierHasLineOfSight(
                soldier,
                enemy
            )
        ){

            continue;

        }


        // =====================================
        // SELECT NEAREST VISIBLE ENEMY
        // =====================================

        if(distance < closestDistance){

            closestDistance =
                distance;

            closestEnemy =
                enemy;

        }

    }


    return closestEnemy;

}

// =====================================
// SOLDIER FACE ENEMY
// =====================================

function soldierFaceEnemy(soldier, enemy){

    const soldierCenterX =
        soldier.x +
        soldier.width / 2;

    const soldierCenterY =
        soldier.y +
        soldier.height / 2;


    const dx =
        enemy.x -
        soldierCenterX;

    const dy =
        enemy.y -
        soldierCenterY;


    if(Math.abs(dx) > Math.abs(dy)){

        if(dx > 0){

            soldier.direction = "right";

        }
        else{

            soldier.direction = "left";

        }

    }
    else{

        if(dy > 0){

            soldier.direction = "down";

        }
        else{

            soldier.direction = "up";

        }

    }

}

// =====================================
// SOLDIER SHOOT
// =====================================

function soldierShoot(soldier, enemy){
	
	// =====================================
    // GUNSHOT SOUND
    // =====================================

    playSoldierGunshot();

    const startX =
        soldier.x +
        soldier.width / 2;

    const startY =
        soldier.y +
        soldier.height / 2;


    const dx =
        enemy.x - startX;

    const dy =
        enemy.y - startY;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    if(distance === 0){

        return;

    }


    soldierBullets.push({

        x: startX,

        y: startY,

        dx: dx / distance,

        dy: dy / distance,

        speed: 6,

        target: enemy,

        frame: 0,

        frameTimer: 0,

        active: true

    });

}

// =====================================
// UPDATE SOLDIER BULLETS
// =====================================

function updateSoldierBullets(){

    for(let bullet of soldierBullets){

        if(!bullet.active){

            continue;

        }


        // =====================================
        // MOVE BULLET
        // =====================================

        bullet.x +=
            bullet.dx *
            bullet.speed;

        bullet.y +=
            bullet.dy *
            bullet.speed;


        // =====================================
        // BULLET ANIMATION
        // =====================================

        bullet.frameTimer++;

        if(bullet.frameTimer >= 4){

            bullet.frameTimer = 0;

            bullet.frame++;

            if(bullet.frame >= 3){

                bullet.frame = 0;

            }

        }


        // =====================================
        // WALL COLLISION
        // =====================================

        for(let obstacle of map.obstacles){

            if(

                bullet.x >= obstacle.x &&

                bullet.x <=
                    obstacle.x +
                    obstacle.width &&

                bullet.y >= obstacle.y &&

                bullet.y <=
                    obstacle.y +
                    obstacle.height

            ){

                // Bullet hits wall.
                // Destroy the bullet.

                bullet.active = false;

                break;

            }

        }


        // =====================================
        // DON'T CHECK ENEMY IF
        // BULLET ALREADY HIT A WALL
        // =====================================

        if(!bullet.active){

            continue;

        }


        // =====================================
        // HIT ENEMY
        // =====================================

        const enemy =
            bullet.target;


        if(

            enemy &&

            enemy.alive &&

            !enemy.dead &&

            !enemy.dying

        ){

            const dx =
                bullet.x -
                enemy.x;


            const dy =
                bullet.y -
                enemy.y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if(
                distance <
                enemy.radius
            ){

                bullet.active = false;


                // Enemy takes one shot

                enemy.health--;


                // =====================================
                // ENEMY KILLED
                // =====================================

                if(
					enemy.health <= 0
				){

					enemy.health = 0;

					// =====================================
					// ENEMY DEATH SOUND
					// =====================================

					playMonsterSound(
						enemy.type,
						"death"
					);


					enemy.dying = true;

					enemy.alive = false;

					enemy.fallingFrame = 0;

					enemy.fallingFrameTimer = 0;

				}

            }

        }


        // =====================================
        // BULLET OUTSIDE MAP
        // =====================================

        if(

            bullet.x < -20 ||

            bullet.x >
                canvas.width + 20 ||

            bullet.y < -20 ||

            bullet.y >
                canvas.height + 20

        ){

            bullet.active = false;

        }

    }


    // =====================================
    // REMOVE INACTIVE BULLETS
    // =====================================

    for(

        let i =
            soldierBullets.length - 1;

        i >= 0;

        i--

    ){

        if(
            !soldierBullets[i].active
        ){

            soldierBullets.splice(i, 1);

        }

    }

}

// =====================================
// DRAW SOLDIER BULLETS
// =====================================

function drawSoldierBullets(){

    for(let bullet of soldierBullets){

        if(!bullet.active){

            continue;

        }


        const image =
            soldierBulletSprites[
                bullet.frame
            ];


        if(

            !image ||

            !image.complete ||

            image.naturalWidth === 0

        ){

            continue;

        }


        ctx.drawImage(

            image,

            bullet.x - 5,

            bullet.y - 5,

            10,

            10

        );

    }

}


function updateSoldiers(){

    if(
        level.current !== 12 ||
        !soldiers.active
    ){

        return;

    }


    // =====================================
    // UPDATE EACH SOLDIER
    // =====================================

    for(let soldier of soldiers.list){

        // Dead soldier does nothing

        if(
            soldier.alive === false
        ){

            continue;

        }


        // =====================================
        // FIND VISIBLE ENEMY
        // =====================================

        const enemyTarget =
            findSoldierTarget(soldier);


        // =====================================
        // SHOOT IF ENEMY IS VISIBLE
        // =====================================

        if(enemyTarget){

            soldier.target =
                enemyTarget;

            soldier.shooting =
                true;


            // Turn toward enemy

            soldierFaceEnemy(
                soldier,
                enemyTarget
            );


            // Shooting cooldown

            if(
                soldier.shootCooldown > 0
            ){

                soldier.shootCooldown--;

            }


            if(
                soldier.shootCooldown <= 0
            ){

                soldierShoot(
                    soldier,
                    enemyTarget
                );


                soldier.shootCooldown =
                    45;

            }

        }

        else{

            soldier.target = null;

            soldier.shooting = false;

        }


        // =====================================
        // SOLDIER ALWAYS KEEPS WALKING
        // =====================================

        if(

            soldier.pathIndex >=
            soldier.path.length

        ){

            continue;

        }


        const target =
            soldier.path[
                soldier.pathIndex
            ];


        const dx =
            target.x -
            soldier.x;


        const dy =
            target.y -
            soldier.y;


        // =====================================
        // DIRECTION
        // =====================================

        // Only change walking direction
        // when the soldier is NOT shooting.

        if(!soldier.shooting){

            if(Math.abs(dx) > Math.abs(dy)){

                if(dx > 0){

                    soldier.direction =
                        "right";

                }
                else{

                    soldier.direction =
                        "left";

                }

            }
            else{

                if(dy > 0){

                    soldier.direction =
                        "down";

                }
                else{

                    soldier.direction =
                        "up";

                }

            }

        }


        // =====================================
        // WALKING ANIMATION
        // =====================================

        soldier.frameTimer++;


        if(
            soldier.frameTimer >= 8
        ){

            soldier.frameTimer = 0;

            soldier.frame++;


            if(
                soldier.frame >= 3
            ){

                soldier.frame = 0;

            }

        }


        // =====================================
        // DISTANCE TO WAYPOINT
        // =====================================

        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        if(distance < 5){

            soldier.pathIndex++;

            continue;

        }


        // =====================================
        // MOVE
        // =====================================

        soldier.x +=
            (dx / distance) *
            soldier.speed;


        soldier.y +=
            (dy / distance) *
            soldier.speed;

    }


    // =====================================
    // SPAWN SECOND PAIR
    // =====================================

    if(

        soldiers.spawnStage === 1 &&

        soldiers.list.length >= 2 &&

        soldiers.list[0].x >= 150

    ){

        soldiers.list.push(

            {

                x: 48,

                y: 257,

                width: 15,

                height: 15,

                color: "#00aa00",

                speed: 2,

                path: soldierPath1,

                pathIndex: 1,

                direction: "right",

                frame: 0,

                frameTimer: 0,

                shooting: false,

                target: null,

                shootCooldown: 0,

                health: 3,

                alive: true,

                attackCooldown: 0

            },

            {

                x: 47,

                y: 297,

                width: 15,

                height: 15,

                color: "#00aa00",

                speed: 2,

                path: soldierPath2,

                pathIndex: 1,

                direction: "right",

                frame: 0,

                frameTimer: 0,

                shooting: false,

                target: null,

                shootCooldown: 0,

                health: 3,

                alive: true,

                attackCooldown: 0

            }

        );


        soldiers.spawnStage = 2;

    }

}
