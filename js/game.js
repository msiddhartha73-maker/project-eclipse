

// =====================================
// PAUSE SYSTEM
// =====================================

let gamePaused = false;

let blackout = {

    active: false,

    warning: false,

    timer: 0,

    warningTimer: 120,      // 2 seconds

    duration: 180,          // 3 seconds

    interval: 600,

    cooldown: 600

};

let developerMode = false;

let lastSpawnTime = Date.now();

const spawnInterval = 20000;


// =====================================
// AUDIO SYSTEM
// =====================================

// =====================================
// MONSTER SOUNDS
// =====================================

const monsterSounds = {

    Runner: {

        attacked:
            new Audio(
                "assets/monster_sounds/runner_attacked.mp3"
            ),

        death:
            new Audio(
                "assets/monster_sounds/runner_death.mp3"
            )

    },

    Walker: {
        attacked:
            new Audio(
                "assets/monster_sounds/walker_attacked.mp3"
            ),

        death:
            new Audio(
                "assets/monster_sounds/walker_death.mp3"
            )

    },

    Tank: {

        attacked:
            new Audio(
                "assets/monster_sounds/tank_attacked.mp3"
            ),

        death:
            new Audio(
                "assets/monster_sounds/tank_death.mp3"
            )

    }

};


// =====================================
// BACKGROUND MUSIC
// =====================================

const backgroundMusic = [

    new Audio(
        "assets/background_sounds/background1.wav"
    ),

    new Audio(
        "assets/background_sounds/background2.wav"
    ),

    new Audio(
        "assets/background_sounds/background3.wav"
    ),

    new Audio(
        "assets/background_sounds/background4.wav"
    ),

    new Audio(
        "assets/background_sounds/background5.wav"
    ),

    new Audio(
        "assets/background_sounds/background6.wav"
    )

];


// =====================================
// PLAYER SOUNDS
// =====================================

const playerSounds = {

    death:
        new Audio(
            "assets/player/death_sound.mp3"
        )

};


// =====================================
// SOLDIER SOUNDS
// =====================================

const soldierSounds = {

    gunshot:
        "assets/soldiers/gun_shot.wav"

};


// =====================================
// AUDIO STATE
// =====================================
let backgroundMusicIndex = 0;

let backgroundMusicStarted = false;

let backgroundMusicMuted = true;


// =====================================
// INITIAL BACKGROUND MUSIC STATE
// =====================================

// Always begin a fresh game muted

for(let track of backgroundMusic){

    track.pause();

    track.currentTime = 0;

    track.volume = 0;

}

// =====================================
// BACKGROUND MUSIC PLAYLIST
// =====================================
function playNextBackgroundTrack(){
	
	if(backgroundMusicMuted){

		return;

	}

    const currentTrack =
        backgroundMusic[backgroundMusicIndex];

    currentTrack.currentTime = 0;

    currentTrack.volume = 0.35;

    currentTrack.onended = function(){

        backgroundMusicIndex++;

        if(
            backgroundMusicIndex >=
            backgroundMusic.length
        ){

            backgroundMusicIndex = 0;

        }

        playNextBackgroundTrack();

    };

    currentTrack
        .play()
        .then(function(){

            backgroundMusicStarted = true;

        })
        .catch(function(error){

            backgroundMusicStarted = false;

            console.log(
                "Background music could not start:",
                error
            );

        });

}

// =====================================
// START BACKGROUND MUSIC AFTER
// FIRST PLAYER INTERACTION
// =====================================

function startBackgroundMusic(){

    if(backgroundMusicMuted){

        return;

    }

    if(backgroundMusicStarted){

        return;

    }

    playNextBackgroundTrack();

}

// =====================================
// VOLUME BUTTON
// =====================================

const volumeButton =
    document.createElement("button");

volumeButton.id = "volumeButton";

volumeButton.textContent = "🔇";

document.body.appendChild(volumeButton);

volumeButton.style.display = "none";

// =====================================
// RESET BACKGROUND MUSIC
// =====================================

function resetBackgroundMusic(){

    backgroundMusicMuted = true;

    backgroundMusicStarted = false;

    backgroundMusicIndex = 0;

    for(let track of backgroundMusic){

        track.pause();

        track.onended = null;

        try{

            track.currentTime = 0;

        }

        catch(error){

        }

        track.volume = 0;

        // Completely reset the media element
        track.load();

    }

    if(volumeButton){

        volumeButton.textContent = "🔇";

    }

}

resetBackgroundMusic();

// =====================================
// HANDLE PAGE RELOAD / RESTORE
// =====================================

window.addEventListener(
    "pageshow",
    function(){

        console.log("PAGE SHOW - RESETTING AUDIO");

        resetBackgroundMusic();

    }
);

window.addEventListener(
    "pagehide",
    function(){

        console.log("PAGE HIDE - STOPPING AUDIO");

        for(let track of backgroundMusic){

            track.pause();

            track.onended = null;

            try{

                track.currentTime = 0;

            }

            catch(error){

            }

            track.volume = 0;

        }

        backgroundMusicStarted = false;

        backgroundMusicMuted = true;

        backgroundMusicIndex = 0;

    }
);

// =====================================
// BUTTON CLICK
// =====================================

volumeButton.addEventListener(
    "click",
    function(){

        toggleBackgroundMusic();

        if(backgroundMusicMuted){

            volumeButton.textContent = "🔇";

        }

        else{

            volumeButton.textContent = "🔊";

        }

    }
);

// =====================================
// TOGGLE BACKGROUND MUSIC
// =====================================

function toggleBackgroundMusic(){

    backgroundMusicMuted =
        !backgroundMusicMuted;


    // =================================
    // MUTE
    // =================================

    if(backgroundMusicMuted){

		for(let track of backgroundMusic){

			track.pause();

			track.currentTime = 0;

			track.volume = 0;

		}

		backgroundMusicStarted = false;

		backgroundMusicIndex = 0;

		return;

	}


    // =================================
    // UNMUTE
    // =================================

    if(!backgroundMusicStarted){

		backgroundMusicIndex = 0;

		playNextBackgroundTrack();

	}

}



let playerDeathSoundPlayed = false;


// =====================================
// PLAY MONSTER SOUND
// =====================================

function playMonsterSound(type, soundType){

    if(
        !monsterSounds[type] ||
        !monsterSounds[type][soundType]
    ){

        return;

    }

    const sound =
        monsterSounds[type][soundType];

    sound.currentTime = 0;

    sound.play().catch(() => {});

}


// =====================================
// PLAY SOLDIER GUNSHOT
// =====================================

function playSoldierGunshot(){

    const sound =
        new Audio(
            soldierSounds.gunshot
        );

    sound.currentTime = 0;

    sound.play().catch(() => {});

}


// =====================================
// PLAYER DEATH SOUND
// =====================================

function playPlayerDeath(){

    if(playerDeathSoundPlayed){

        return;

    }

    playerDeathSoundPlayed = true;

    playerSounds.death.currentTime = 0;

    playerSounds.death
        .play()
        .catch(() => {});

}


// =====================================
// RESET PLAYER DEATH SOUND
// =====================================

function resetPlayerDeathSound(){

    playerDeathSoundPlayed = false;

}


function update(){

    if(gamePaused){

        return;

    }


    if(
        gameOver ||
        levelComplete ||
        gameFinished
    ){
        return;
    }


    if(
		level.loading ||
		level.countdown ||
		level.state === "briefing"
	){

		return;

	}


    updatePlayer();

    updateEnemies();
    
    updateSoldiers();
    
    updateSoldierBullets();

    updateBatteryItem();
    
    updateExplosives();
    
    updateLab();
    
    updateGenerators();
    
    updateTerminals();
    
    updateHive();

    updateExitDoor();
    
    updateTransition();
    
    recordPlayerPath();
    
// ===============================
// LEVEL 7 BLACKOUT
// ===============================

if(level.current === 10	){

    if(!blackout.active && !blackout.warning){

        blackout.cooldown--;

        if(blackout.cooldown <= 0){

            blackout.warning = true;

            blackout.timer = blackout.warningTimer;

        }

    }

    else if(blackout.warning){

        blackout.timer--;

        if(blackout.timer <= 0){

            blackout.warning = false;

            blackout.active = true;

            blackout.timer = blackout.duration;

        }

    }

    else if(blackout.active){

        blackout.timer--;

        if(blackout.timer <= 0){

            blackout.active = false;

            blackout.cooldown = blackout.interval;

        }

    }

}


}

function draw(){

    drawMap();

    drawEnemies();

    drawBatteryItem();
    
    drawExplosives();
    
    drawLab();
    
    updateObjectives();
    
    drawObjectives();
    
    drawGenerators();
    
    drawTerminals();
    
    drawHive();
    
    drawHiveGlow();

    if(level.current === 11){

		drawExitDoors();

	}
	else{

		drawExitDoor();

	}

    drawPlayer();
    
    drawSoldierBullets();
    
    drawSoldiers();
    
    // =====================================
	// RESCUE BEACON
	// =====================================

	if(

		level.current === 12 &&

		exitDoor.destroyed

	){

		let pulse =

			80 +

			Math.sin(Date.now() / 250) * 15;

		ctx.fillStyle =

			"rgba(255,0,0,0.25)";

		ctx.beginPath();

		ctx.arc(

			exitDoor.x + 10,

			exitDoor.y + 40,

			pulse,

			0,

			Math.PI * 2

		);

		ctx.fill();

	}


    drawDarkness();

    drawLight();
    
	// =====================================
	// BLAST FLASH
	// =====================================

	if(exitDoor.flashTimer > 0){

		let radius = (181 - exitDoor.flashTimer) * 2;

		let alpha = exitDoor.flashTimer / 8;

		ctx.fillStyle = "rgba(255,60,0," + alpha + ")";

		ctx.beginPath();

		ctx.arc(

			exitDoor.x + 10,

			exitDoor.y + 40,

			radius,

			0,

			Math.PI * 2

		);

		ctx.fill();

	}


    drawBattery();

    drawGameOver();

    drawLoadingScreen();
    
    drawLevelBriefing();
    
    
    drawEditor();
    
    if(

		blackout.warning &&

		level.current === 10

	){

		ctx.fillStyle = "red";

		ctx.font = "40px Arial";

		ctx.textAlign = "center";

		ctx.fillText(

			"⚠ LIGHTS FAILING ⚠",

			canvas.width / 2,

			80

		);

	}

		drawTransition();
		
	// =====================================
	// FAKE EXIT MESSAGE
	// =====================================

	if(fakeDoorMessage > 0){

		fakeDoorMessage--;

		ctx.fillStyle = "red";

		ctx.font = "28px Arial";

		ctx.textAlign = "center";

		ctx.fillText(

			"ACCESS DENIED",

			canvas.width / 2,

			90

		);

	}
	
	// =====================================
	// FINAL SCREEN
	// =====================================

	if(gameFinished){

		// Black background
		if(endingFade < 0.92){

			endingFade += 0.01;

		}

		ctx.fillStyle =

			"rgba(0,0,0," +

			endingFade +

			")";

		ctx.fillRect(

			0,

			0,

			canvas.width,

			canvas.height

		);

		// Title

		ctx.fillStyle =

		"rgba(0,255,0," +

		endingFade +

		")";

		ctx.font = "42px Arial";

		ctx.textAlign = "center";

		ctx.fillText(

			"MISSION ACCOMPLISHED",

			canvas.width / 2,

			canvas.height / 2 - 20

		);

		// Subtitle

		ctx.fillStyle =

		"rgba(255,255,255," +

		endingFade +

		")";

		ctx.font = "28px Arial";

		ctx.fillText(

			"Thank You for Playing",

			canvas.width / 2,

			canvas.height / 2 + 35

		);

	}


}

function gameLoop(){

    update();

    draw();

    requestAnimationFrame(gameLoop);

}
