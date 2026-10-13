
// =====================================
// ENEMY SPRITES
// =====================================

const enemySprites = {

    Walker: {
        down: [new Image(), new Image(), new Image()],
        up: [new Image(), new Image(), new Image()],
        left: [new Image(), new Image(), new Image()],
        right: [new Image(), new Image(), new Image()]
    },

    Runner: {
        down: [new Image(), new Image(), new Image()],
        up: [new Image(), new Image(), new Image()],
        left: [new Image(), new Image(), new Image()],
        right: [new Image(), new Image(), new Image()]
    },

    Tank: {
        down: [new Image(), new Image(), new Image()],
        up: [new Image(), new Image(), new Image()],
        left: [new Image(), new Image(), new Image()],
        right: [new Image(), new Image(), new Image()]
    }

};

// =====================================
// FALLING / DEAD ENEMY SPRITES
// =====================================

const enemyFallingSprites = {

    Walker: [
        new Image(),
        new Image(),
        new Image()
    ],

    Runner: [
        new Image(),
        new Image(),
        new Image()
    ],

    Tank: [
        new Image(),
        new Image(),
        new Image()
    ]

};


// =====================================
// WALKER FALLING
// =====================================

enemyFallingSprites.Walker[0].src =
    "assets/monsters/walker_falling_down1.png";

enemyFallingSprites.Walker[1].src =
    "assets/monsters/walker_falling_down2.png";

enemyFallingSprites.Walker[2].src =
    "assets/monsters/walker_falling_down3.png";


// =====================================
// RUNNER FALLING
// =====================================

enemyFallingSprites.Runner[0].src =
    "assets/monsters/runner_falling_down1.png";

enemyFallingSprites.Runner[1].src =
    "assets/monsters/runner_falling_down2.png";

enemyFallingSprites.Runner[2].src =
    "assets/monsters/runner_falling_down3.png";


// =====================================
// TANK FALLING
// =====================================

enemyFallingSprites.Tank[0].src =
    "assets/monsters/tank_falling_down1.png";

enemyFallingSprites.Tank[1].src =
    "assets/monsters/tank_falling_down2.png";

enemyFallingSprites.Tank[2].src =
    "assets/monsters/tank_falling_down3.png";


// =====================================
// WALKER IMAGES
// =====================================

enemySprites.Walker.down[0].src =
    "assets/monsters/walker_facing_down.png";

enemySprites.Walker.down[1].src =
    "assets/monsters/walker_moving_down1.png";

enemySprites.Walker.down[2].src =
    "assets/monsters/walker_moving_down2.png";


enemySprites.Walker.up[0].src =
    "assets/monsters/walker_facing_up.png";

enemySprites.Walker.up[1].src =
    "assets/monsters/walker_moving_up1.png";

enemySprites.Walker.up[2].src =
    "assets/monsters/walker_moving_up2.png";


enemySprites.Walker.left[0].src =
    "assets/monsters/walker_facing_left.png";

enemySprites.Walker.left[1].src =
    "assets/monsters/walker_moving_left1.png";

enemySprites.Walker.left[2].src =
    "assets/monsters/walker_moving_left2.png";


enemySprites.Walker.right[0].src =
    "assets/monsters/walker_facing_right.png";

enemySprites.Walker.right[1].src =
    "assets/monsters/walker_moving_right1.png";

enemySprites.Walker.right[2].src =
    "assets/monsters/walker_moving_right2.png";
    
// =====================================
// RUNNER IMAGES
// =====================================

enemySprites.Runner.down[0].src =
    "assets/monsters/runner_facing_down.png";

enemySprites.Runner.down[1].src =
    "assets/monsters/runner_moving_down1.png";

enemySprites.Runner.down[2].src =
    "assets/monsters/runner_moving_down2.png";


enemySprites.Runner.up[0].src =
    "assets/monsters/runner_facing_up.png";

enemySprites.Runner.up[1].src =
    "assets/monsters/runner_moving_up1.png";

enemySprites.Runner.up[2].src =
    "assets/monsters/runner_moving_up2.png";


enemySprites.Runner.left[0].src =
    "assets/monsters/runner_facing_left.png";

enemySprites.Runner.left[1].src =
    "assets/monsters/runner_moving_left1.png";

enemySprites.Runner.left[2].src =
    "assets/monsters/runner_moving_left2.png";


enemySprites.Runner.right[0].src =
    "assets/monsters/runner_facing_right.png";

enemySprites.Runner.right[1].src =
    "assets/monsters/runner_moving_right1.png";

enemySprites.Runner.right[2].src =
    "assets/monsters/runner_moving_right2.png";
    
    
// =====================================
// TANK IMAGES
// =====================================

enemySprites.Tank.down[0].src =
    "assets/monsters/tank_facing_down.png";

enemySprites.Tank.down[1].src =
    "assets/monsters/tank_moving_down1.png";

enemySprites.Tank.down[2].src =
    "assets/monsters/tank_moving_down2.png";


enemySprites.Tank.up[0].src =
    "assets/monsters/tank_facing_up.png";

enemySprites.Tank.up[1].src =
    "assets/monsters/tank_moving_up1.png";

enemySprites.Tank.up[2].src =
    "assets/monsters/tank_moving_up2.png";


enemySprites.Tank.left[0].src =
    "assets/monsters/tank_facing_left.png";

enemySprites.Tank.left[1].src =
    "assets/monsters/tank_moving_left1.png";

enemySprites.Tank.left[2].src =
    "assets/monsters/tank_moving_left2.png";


enemySprites.Tank.right[0].src =
    "assets/monsters/tank_facing_right.png";

enemySprites.Tank.right[1].src =
    "assets/monsters/tank_moving_right1.png";

enemySprites.Tank.right[2].src =
    "assets/monsters/tank_moving_right2.png";

const enemies = [];


function updateEnemies(){

    // =====================================
    // LEVEL 12 - UPDATE DYING ENEMIES
    // =====================================

    if(level.current === 12){

        for(let enemy of enemies){

            if(!enemy.dying){

                continue;

            }


            enemy.fallingFrameTimer++;


            if(enemy.fallingFrameTimer >= 8){

                enemy.fallingFrameTimer = 0;

                enemy.fallingFrame++;


                // =====================================
                // FALLING ANIMATION FINISHED
                // =====================================

                if(enemy.fallingFrame >= 3){

                    enemy.fallingFrame = 2;

                    enemy.dying = false;

                    enemy.dead = true;

                    enemy.alive = false;

                }

            }

        }

    }


    // ===============================
    // LEVEL 9 - SPAWN PODS
    // ===============================

    if(level.current === 9){

        // Wait until spawn pods are activated

        if(!explosives.spawnActive){

            return;

        }


        if(Date.now() - spawnTimer >= SPAWN_INTERVAL){

            let checked = 0;


            while(checked < generators.length){

                let generator =
                    generators[currentSpawnPod];


                currentSpawnPod++;


                if(
                    currentSpawnPod >=
                    generators.length
                ){

                    currentSpawnPod = 0;

                }


                checked++;


                if(generator.online){

                    createEnemyAt(

                        "Walker",

                        generator.x,

                        generator.y

                    );

                    break;

                }

            }


            spawnTimer = Date.now();

            SPAWN_INTERVAL = 40000;

        }

    }


    // ===============================
    // UPDATE ENEMIES
    // ===============================

    for(let enemy of enemies){


        // =====================================
        // LEVEL 12 - DEAD ENEMIES
        // =====================================

        if(
            level.current === 12 &&
            enemy.dead
        ){

            continue;

        }


        // =====================================
        // LEVEL 12 - DYING ENEMIES
        // =====================================

        if(
            level.current === 12 &&
            enemy.dying
        ){

            continue;

        }


        const centerX =
            player.x +
            player.width / 2;


        const centerY =
            player.y +
            player.height / 2;


        const dx =
            centerX - enemy.x;


        const dy =
            centerY - enemy.y;


        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        let currentSpeed =
            enemy.normalSpeed;


        // ===============================
        // BLACKOUT SPEED BONUS
        // ===============================

        if(blackout.active){

            if(enemy.type === "Runner"){

                currentSpeed *= 1.8;

            }

            else if(enemy.type === "Tank"){

                currentSpeed *= 1.3;

            }

        }


        // ===============================
        // LIGHT EFFECT
        // ===============================

        if(light.active){

            const enemyAngle =
                Math.atan2(
                    enemy.y - centerY,
                    enemy.x - centerX
                );


            let angleDifference =
                Math.abs(
                    enemyAngle -
                    player.angle
                );


            if(angleDifference > Math.PI){

                angleDifference =
                    (Math.PI * 2) -
                    angleDifference;

            }


            const insideBeam =
                distance <= light.length &&
                angleDifference <= light.width;


            if(insideBeam){

                if(enemy.type === "Walker"){

                    currentSpeed = 0;

                }

                else if(enemy.type === "Runner"){

                    currentSpeed =
                        level.current >= 3
                            ? 1
                            : 0;

                }

                else if(enemy.type === "Tank"){

                    currentSpeed =
                        enemy.normalSpeed *
                        enemy.lightResistance;

                }

            }

        }


        // ===============================
        // TARGET POSITION
        // ===============================

        let targetX = centerX;

        let targetY = centerY;


        // ===============================
        // MOVE
        // ===============================

        const moveDX =
            targetX - enemy.x;


        const moveDY =
            targetY - enemy.y;


        const moveDistance =
            Math.sqrt(
                moveDX * moveDX +
                moveDY * moveDY
            );


        if(moveDistance > 0){

            enemy.x +=
                (moveDX / moveDistance) *
                currentSpeed;


            keepEnemyOutOfObstacles(enemy);


            enemy.y +=
                (moveDY / moveDistance) *
                currentSpeed;


            keepEnemyOutOfObstacles(enemy);

        }


        // ===============================
        // ENEMY ANIMATION
        // ===============================

        updateEnemyAnimation(

            enemy,

            moveDX,

            moveDY,

            currentSpeed

        );


        // ===============================
        // RUNNER SEPARATION
        // ===============================

        if(enemy.type === "Runner"){

            for(let other of enemies){

                if(other === enemy){

                    continue;

                }


                if(other.type !== "Runner"){

                    continue;

                }


                // Level 12 dead/dying enemies
                // should not participate.

                if(
                    level.current === 12 &&
                    (
                        other.dead ||
                        other.dying
                    )
                ){

                    continue;

                }


                const rx =
                    enemy.x - other.x;


                const ry =
                    enemy.y - other.y;


                const rDist =
                    Math.sqrt(
                        rx * rx +
                        ry * ry
                    );


                if(
                    rDist > 0 &&
                    rDist < 28
                ){

                    enemy.x +=
                        (rx / rDist) * 1.2;


                    enemy.y +=
                        (ry / rDist) * 1.2;

                }

            }

        }


        // =====================================
        // PLAYER HIT
        // =====================================

        const playerLeft =
            centerX -
            player.width / 2;


        const playerRight =
            centerX +
            player.width / 2;


        const playerTop =
            centerY -
            player.height / 2;


        const playerBottom =
            centerY +
            player.height / 2;


        // Enemy collision box

        const enemyLeft =
            enemy.x -
            enemy.collisionRadius;


        const enemyRight =
            enemy.x +
            enemy.collisionRadius;


        const enemyTop =
            enemy.y -
            enemy.collisionRadius;


        const enemyBottom =
            enemy.y +
            enemy.collisionRadius;


        // Check if the two boxes overlap

        if(

			enemyRight > playerLeft &&
			enemyLeft < playerRight &&
			enemyBottom > playerTop &&
			enemyTop < playerBottom

		){

			// =====================================
			// ENEMY ATTACK SOUND
			// =====================================

			playMonsterSound(
				enemy.type,
				"attacked"
			);


			// =====================================
			// PLAYER DEATH SOUND
			// =====================================

			playPlayerDeath();


			// =====================================
			// GAME OVER
			// =====================================

			gameOver = true;

		}

    }


    // =====================================
    // KEEP ENEMIES APART
    // =====================================

    keepEnemiesApart();

}


function keepEnemiesApart(){

    for(let i = 0; i < enemies.length; i++){

        // Ignore dead or dying enemies
        if(
            enemies[i].dead ||
            enemies[i].dying
        ){

            continue;

        }


        for(let j = i + 1; j < enemies.length; j++){

            // Ignore dead or dying enemies
            if(
                enemies[j].dead ||
                enemies[j].dying
            ){

                continue;

            }


            const enemyA = enemies[i];

            const enemyB = enemies[j];


            const dx =
                enemyB.x - enemyA.x;

            const dy =
                enemyB.y - enemyA.y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            const minimumDistance =
                enemyA.radius +
                enemyB.radius +
                4;


            if(
                distance > 0 &&
                distance < minimumDistance
            ){

                const overlap =
                    minimumDistance -
                    distance;


                const pushX =
                    (dx / distance) *
                    overlap / 2;


                const pushY =
                    (dy / distance) *
                    overlap / 2;


                enemyA.x -= pushX;

                enemyA.y -= pushY;


                enemyB.x += pushX;

                enemyB.y += pushY;


                // Prevent pushing through walls

                keepEnemyOutOfObstacles(
                    enemyA
                );

                keepEnemyOutOfObstacles(
                    enemyB
                );

            }

        }

    }

}

// =====================================
// UPDATE ENEMY ANIMATION
// =====================================

function updateEnemyAnimation(enemy, moveDX, moveDY, currentSpeed){

    // Enemy is stopped
    if(currentSpeed === 0){

        enemy.frame = 0;
        enemy.frameTimer = 0;

        return;

    }


    // =====================================
    // DETERMINE FACING DIRECTION
    // =====================================

    if(Math.abs(moveDX) > Math.abs(moveDY)){

        if(moveDX > 0){

            enemy.direction = "right";

        }
        else{

            enemy.direction = "left";

        }

    }
    else{

        if(moveDY > 0){

            enemy.direction = "down";

        }
        else{

            enemy.direction = "up";

        }

    }


    // =====================================
    // CHANGE WALKING FRAME
    // =====================================

    enemy.frameTimer++;


    if(enemy.frameTimer >= 12){

        enemy.frameTimer = 0;

        enemy.frame++;


        if(enemy.frame >= 3){

            enemy.frame = 0;

        }

    }

}

function drawEnemies(){

    for(let enemy of enemies){

        let sprite;


        // =====================================
        // DYING OR DEAD ENEMY
        // =====================================

        if(
            enemy.dying ||
            enemy.dead
        ){

            sprite =
                enemyFallingSprites[
                    enemy.type
                ][
                    enemy.fallingFrame
                ];

        }


        // =====================================
        // NORMAL LIVING ENEMY
        // =====================================

        else{

            sprite =
                enemySprites[
                    enemy.type
                ][
                    enemy.direction
                ][
                    enemy.frame
                ];

        }


        // =====================================
        // IMAGE NOT READY
        // =====================================

        if(
            !sprite ||
            !sprite.complete ||
            sprite.naturalWidth === 0
        ){

            continue;

        }


        // =====================================
        // DRAW ENEMY
        // =====================================

        ctx.drawImage(

            sprite,

            enemy.x - enemy.radius,

            enemy.y - enemy.radius,

            enemy.radius * 2,

            enemy.radius * 2

        );

    }

}

function createEnemy(type){

    const spawnPoints = [

        { x: 80, y: 80 },                                   // Top Left

        { x: canvas.width - 80, y: 80 },                    // Top Right

        { x: 80, y: canvas.height - 80 },                   // Bottom Left

        { x: canvas.width - 80, y: canvas.height - 80 }     // Bottom Right

    ];


    let chosenSpawn;

    let validSpawn = false;
    
    while(!validSpawn){

    chosenSpawn = spawnPoints[
        Math.floor(Math.random() * spawnPoints.length)
    ];

    const dx = chosenSpawn.x - (player.x + player.width / 2);

    const dy = chosenSpawn.y - (player.y + player.height / 2);

    const distance = Math.sqrt(dx * dx + dy * dy);

    if(distance > 400){

        validSpawn = true;

    }

}


    
    


    let enemy = {

        x: chosenSpawn.x,

        y: chosenSpawn.y,

        startX: chosenSpawn.x,

        startY: chosenSpawn.y,

        radius: 15,
        
        health: 2,
		alive: true,
		dying: false,
		dead: false,
		fallingFrame: 0,
		fallingFrameTimer: 0,
        
        collisionRadius: 5,

        speed: 2,

        normalSpeed: 2,

        color: "red",

        type: type,

        lightResistance: 0,

        slowedByLight: false,

        lightSlowTimer: 0,
        
        direction: "down",
		frame: 0,
		frameTimer: 0

    };


    if(type === "Runner"){

        enemy.radius = 12;

        enemy.speed = 2.5;

        enemy.normalSpeed = 2.5;

        enemy.color = "orange";

    }


    if(type === "Tank"){

        enemy.radius = 20;

        enemy.speed = 1;

        enemy.normalSpeed = 1;

        enemy.color = "purple";

        enemy.lightResistance = 0.7;

    }


    enemies.push(enemy);

}

function createEnemyAt(type, x, y){

    let enemy = {

        x: x,

        y: y,

        startX: x,

        startY: y,

        radius: 15,
        
        health: 2,
		alive: true,
		dying: false,
		dead: false,
		fallingFrame: 0,
		fallingFrameTimer: 0,
        
        collisionRadius: 5,

        speed: 2,

        normalSpeed: 2,

        color: "red",

        type: type,

        lightResistance: 0,

        slowedByLight: false,

        lightSlowTimer: 0,

		direction: "down",
		frame: 0,
		frameTimer: 0

    };


    if(type === "Runner"){

        enemy.radius = 12;

        enemy.speed = 2.5;

        enemy.normalSpeed = 2.5;

        enemy.color = "orange";

    }


    if(type === "Tank"){

        enemy.radius = 20;

        enemy.speed = 1;

        enemy.normalSpeed = 1;

        enemy.color = "purple";

        enemy.lightResistance = 0.7;

    }


    enemies.push(enemy);

}
