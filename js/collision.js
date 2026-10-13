function keepPlayerInsideMap() {

    // Left wall
    if (player.x < map.wallThickness) {
        player.x = map.wallThickness;
    }

    // Right wall
    if (player.x + player.width > canvas.width - map.wallThickness) {
        player.x = canvas.width - map.wallThickness - player.width;
    }

    // Top wall
    if (player.y < map.wallThickness) {
        player.y = map.wallThickness;
    }

    // Bottom wall
    if (player.y + player.height > canvas.height - map.wallThickness) {
        player.y = canvas.height - map.wallThickness - player.height;
    }

}

function keepPlayerOutOfObstacles(){

    // =====================================
    // WALLS
    // =====================================

    for(let obstacle of map.obstacles){

        if(

            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y

        ){

            // Coming from left
            if(player.x + player.width - player.speed <= obstacle.x){

                player.x = obstacle.x - player.width;

            }

            // Coming from right
            else if(player.x + player.speed >= obstacle.x + obstacle.width){

                player.x = obstacle.x + obstacle.width;

            }

            // Coming from top
            else if(player.y + player.height - player.speed <= obstacle.y){

                player.y = obstacle.y - player.height;

            }

            // Coming from bottom
            else if(player.y + player.speed >= obstacle.y + obstacle.height){

                player.y = obstacle.y + obstacle.height;

            }

        }

    }


	// =====================================
	// FURNITURE
	// =====================================

	for(let furniture of map.furniture){

		if(

			player.x < furniture.x + furniture.width &&
			player.x + player.width > furniture.x &&
			player.y < furniture.y + furniture.height &&
			player.y + player.height > furniture.y

		){

			// Coming from left
			if(player.x + player.width - player.speed <= furniture.x){

				player.x = furniture.x - player.width;

			}

			// Coming from right
			else if(player.x + player.speed >= furniture.x + furniture.width){

				player.x = furniture.x + furniture.width;

			}

			// Coming from top
			else if(player.y + player.height - player.speed <= furniture.y){

				player.y = furniture.y - player.height;

			}

			// Coming from bottom
			else if(player.y + player.speed >= furniture.y + furniture.height){

				player.y = furniture.y + furniture.height;

			}

		}

	}

}

function keepEnemyOutOfObstacles(enemy){

    // =====================================
    // WALLS
    // =====================================

    for(let obstacle of map.obstacles){

        const closestX = Math.max(
            obstacle.x,
            Math.min(
                enemy.x,
                obstacle.x + obstacle.width
            )
        );

        const closestY = Math.max(
            obstacle.y,
            Math.min(
                enemy.y,
                obstacle.y + obstacle.height
            )
        );

        const dx =
            enemy.x - closestX;

        const dy =
            enemy.y - closestY;

        const distanceSquared =
            dx * dx +
            dy * dy;

        // No collision
        if(
            distanceSquared >=
            enemy.radius * enemy.radius
        ){

            continue;

        }

        // =====================================
        // PUSH OUT HORIZONTALLY
        // =====================================

        if(Math.abs(dx) > Math.abs(dy)){

            if(enemy.x < obstacle.x){

                enemy.x =
                    obstacle.x -
                    enemy.radius;

            }
            else{

                enemy.x =
                    obstacle.x +
                    obstacle.width +
                    enemy.radius;

            }

        }

        // =====================================
        // PUSH OUT VERTICALLY
        // =====================================

        else{

            if(enemy.y < obstacle.y){

                enemy.y =
                    obstacle.y -
                    enemy.radius;

            }
            else{

                enemy.y =
                    obstacle.y +
                    obstacle.height +
                    enemy.radius;

            }

        }

    }


    // =====================================
    // FURNITURE
    // =====================================

    for(let furniture of map.furniture){

        const closestX = Math.max(
            furniture.x,
            Math.min(
                enemy.x,
                furniture.x + furniture.width
            )
        );

        const closestY = Math.max(
            furniture.y,
            Math.min(
                enemy.y,
                furniture.y + furniture.height
            )
        );

        const dx =
            enemy.x - closestX;

        const dy =
            enemy.y - closestY;

        const distanceSquared =
            dx * dx +
            dy * dy;

        // No collision
        if(
            distanceSquared >=
            enemy.radius * enemy.radius
        ){

            continue;

        }

        // =====================================
        // PUSH OUT HORIZONTALLY
        // =====================================

        if(Math.abs(dx) > Math.abs(dy)){

            if(enemy.x < furniture.x){

                enemy.x =
                    furniture.x -
                    enemy.radius;

            }
            else{

                enemy.x =
                    furniture.x +
                    furniture.width +
                    enemy.radius;

            }

        }

        // =====================================
        // PUSH OUT VERTICALLY
        // =====================================

        else{

            if(enemy.y < furniture.y){

                enemy.y =
                    furniture.y -
                    enemy.radius;

            }
            else{

                enemy.y =
                    furniture.y +
                    furniture.height +
                    enemy.radius;

            }

        }

    }

}
// =====================================
// KEEP SURVIVOR OUT OF OBSTACLES
// =====================================

function keepSurvivorOutOfObstacles(survivor){

    for(let obstacle of map.obstacles){

        if(

            survivor.x - 10 < obstacle.x + obstacle.width &&
            survivor.x + 10 > obstacle.x &&
            survivor.y - 10 < obstacle.y + obstacle.height &&
            survivor.y + 10 > obstacle.y

        ){

            // Hit from left
            if(survivor.x < obstacle.x){

                survivor.x = obstacle.x - 10;

            }

            // Hit from right
            else if(survivor.x > obstacle.x + obstacle.width){

                survivor.x = obstacle.x + obstacle.width + 10;

            }

            // Hit from top
            if(survivor.y < obstacle.y){

                survivor.y = obstacle.y - 10;

            }

            // Hit from bottom
            else if(survivor.y > obstacle.y + obstacle.height){

                survivor.y = obstacle.y + obstacle.height + 10;

            }

        }

    }

}

// =====================================
// SURVIVOR WALL CHECK
// =====================================

function survivorHitsWall(nextX, nextY){

    for(let obstacle of map.obstacles){

        if(

            nextX - 10 < obstacle.x + obstacle.width &&
            nextX + 10 > obstacle.x &&
            nextY - 10 < obstacle.y + obstacle.height &&
            nextY + 10 > obstacle.y

        ){

            return true;

        }

    }

    return false;

}
