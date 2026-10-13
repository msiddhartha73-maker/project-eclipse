
// =====================================
// PLAYER SPRITES
// =====================================

const playerSprites = {

    down: [
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
    ],

    right: [
        new Image(),
        new Image(),
        new Image()
    ]

};


// =====================================
// IMAGE FILES
// =====================================

playerSprites.down[0].src = "assets/player/player_facing_down.png"; //player_facing_down.png
playerSprites.down[1].src = "assets/player/player_moving_down1.png"; //player_moving_down1.png
playerSprites.down[2].src = "assets/player/player_moving_down2.png"; //player_moving_down2.png

playerSprites.up[0].src = "assets/player/player_facing_up.png"; //player_facing_up.png
playerSprites.up[1].src = "assets/player/player_moving_up1.png"; //player_moving_up1.png
playerSprites.up[2].src = "assets/player/player_moving_up2.png"; //player_moving_up2.png

playerSprites.left[0].src = "assets/player/player_facing_left.png"; //player_facing_left.png
playerSprites.left[1].src = "assets/player/player_moving_left1.png"; //player_moving_left1.png
playerSprites.left[2].src = "assets/player/player_moving_left2.png"; //player_moving_left2.png

playerSprites.right[0].src = "assets/player/player_facing_right.png"; //player_facing_right.png
playerSprites.right[1].src = "assets/player/player_moving_right1.png"; //player_moving_right1.png
playerSprites.right[2].src = "assets/player/player_moving_right2.png"; //player_moving_right2.png

// =====================================
// CHECK PLAYER IMAGES
// =====================================

for(let direction in playerSprites){

    playerSprites[direction].forEach(function(image, index){

        image.onload = function(){

            console.log(
                "LOADED:",
                direction,
                index
            );

        };

        image.onerror = function(){

            console.error(
                "FAILED TO LOAD:",
                direction,
                index,
                image.src
            );

        };

    });

}

const player = {

    x: 400,
    y: 300,
    width: 18,
    height: 18,
    speed: 5,
    angle: 0,
    hasBattery: false,
    color: "white"

};

let playerDirection = "down";

let playerFrame = 0;

let playerFrameTimer = 0;

function updatePlayer(){

    if(keys["ArrowUp"]){

        player.y -= player.speed;

    }

    if(keys["ArrowDown"]){

        player.y += player.speed;

    }

    if(keys["ArrowLeft"]){

        player.x -= player.speed;

    }

    if(keys["ArrowRight"]){

        player.x += player.speed;

    }

    // Keep the player inside the screen
	
	const dx = mouse.x - (player.x + player.width / 2);
	const dy = mouse.y - (player.y + player.height / 2);

	player.angle = Math.atan2(dy, dx);
	
	keepPlayerInsideMap();
	
	keepPlayerOutOfObstacles();
	
	updatePlayerAnimation();

}


function updatePlayerAnimation(){

    let moving = false;


    if(keys["ArrowUp"]){

        playerDirection = "up";

        moving = true;

    }

    else if(keys["ArrowDown"]){

        playerDirection = "down";

        moving = true;

    }

    else if(keys["ArrowLeft"]){

        playerDirection = "left";

        moving = true;

    }

    else if(keys["ArrowRight"]){

        playerDirection = "right";

        moving = true;

    }


    // Player is standing still
    if(!moving){

        playerFrame = 0;

        playerFrameTimer = 0;

        return;

    }


    // Player is walking
    playerFrameTimer++;


    if(playerFrameTimer >= 20){

        playerFrameTimer = 0;

        playerFrame++;

        if(playerFrame >= 3){

            playerFrame = 0;

        }

    }

}


function drawPlayer(){

    const sprite =
        playerSprites[playerDirection][playerFrame];


    // If the current image is not loaded,
    // use the first frame of the same direction.

    if(!sprite.complete || sprite.naturalWidth === 0){

        const fallback =
            playerSprites[playerDirection][0];

        if(fallback.complete && fallback.naturalWidth > 0){

            ctx.drawImage(
                fallback,
                player.x,
                player.y,
                player.width,
                player.height
            );

        }

        return;

    }


    ctx.drawImage(

        sprite,

        player.x,
        player.y,
        player.width,
        player.height

    );

}
