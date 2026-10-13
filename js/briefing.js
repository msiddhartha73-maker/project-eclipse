// =====================================================
// PROJECT ECLIPSE
// LEVEL MISSION BRIEFING SYSTEM
// =====================================================


// =====================================================
// MISSION BRIEFINGS
// =====================================================

const levelBriefings = {

    // -------------------------------------------------
    // LEVEL 2
    // -------------------------------------------------

    2: {

        title:
            "DEAD SYSTEMS",

        objective:
            "Restore the remaining power",

        mission:
            "Recover the power sources and reach the terminal",

        survival:
            "Stay out of darkness. Avoid unnecessary contact."

    },


    // -------------------------------------------------
    // LEVEL 3
    // -------------------------------------------------

    3: {

        title:
            "NO RESPONSE",

        objective:
            "Restore access to the facility network",

        mission:
            "Recover power and reach the terminal",

        survival:
            "Movement has been detected nearby."

    },


    // -------------------------------------------------
    // LEVEL 4
    // -------------------------------------------------

    4: {

        title:
            "LOWER SECTOR",

        objective:
            "Enter the lower section of the facility",

        mission:
            "Recover power and reach the terminal",

        survival:
            "The deeper sectors are increasingly unstable."

    },


    // -------------------------------------------------
    // LEVEL 5
    // -------------------------------------------------

    5: {

        title:
            "CONTAINMENT",

        objective:
            "Access the sealed containment sector",

        mission:
            "Recover power and unlock the terminal",

        survival:
            "Something remains inside the containment area."

    },


    // -------------------------------------------------
    // LEVEL 6
    // -------------------------------------------------

    6: {

        title:
            "THE SILENT WING",

        objective:
            "Search the abandoned laboratory wing",

        mission:
            "Recover power and reach the terminal",

        survival:
            "Stay hidden whenever possible."

    },


    // -------------------------------------------------
    // LEVEL 7
    // -------------------------------------------------

    7: {

        title:
            "DEEPER",

        objective:
            "Continue into the underground facility",

        mission:
            "Recover power and reach the terminal",

        survival:
            "Do not allow them to corner you."

    },


    // -------------------------------------------------
    // LEVEL 8
    // -------------------------------------------------

    8: {

        title:
            "POWER RESTORATION",

        objective:
            "Restore power to the lower facility",

        mission:
            "Activate all generators, then reach the terminal",

        survival:
            "Restoring power may awaken dormant systems."

    },


    // -------------------------------------------------
    // LEVEL 9
    // -------------------------------------------------

    9: {

        title:
            "THE EXPERIMENT",

        objective:
            "Prepare explosives from the recovered components",

        mission:
            "Destroy the biological growth structures",

        survival:
            "Altered subjects are being produced nearby."

    },


    // -------------------------------------------------
    // LEVEL 10
    // -------------------------------------------------

    10: {

        title:
            "THE HIVE",

        objective:
            "Destroy the structure producing new subjects",

        mission:
            "Recover power cells and weaken the hive",

        survival:
            "Destroy the hive, then reach the terminal."

    },


    // -------------------------------------------------
    // LEVEL 11
    // -------------------------------------------------

    11: {

        title:
            "NO SAFE TERMINAL",

        objective:
            "Restore access to the facility network",

        mission:
            "Activate the terminals and find the working one",

        survival:
            "Most terminals are no longer responding."

    },


    // -------------------------------------------------
    // LEVEL 12
    // -------------------------------------------------

    12: {

        title:
            "LAST TRANSMISSION",

        objective:
            "Recover the remaining DNA research",

        mission:
            "Upload the research and send a distress signal",

        survival:
            "Remain alive until the rescue team arrives."

    }

};


// =====================================================
// BRIEFING STATE
// =====================================================

let briefingActive = false;

let briefingLevel = 0;

let briefingStartedAt = 0;

let briefingCountdown = false;

let briefingCountdownStartedAt = 0;

let briefingCountdownValue = 3;


// =====================================================
// START LEVEL BRIEFING
// =====================================================

function startLevelBriefing(levelNumber){

    const briefing =
        levelBriefings[levelNumber];


    if(!briefing){

        briefingActive = false;

        return;

    }


    briefingLevel =
        levelNumber;

    briefingActive =
        true;

    briefingCountdown =
        false;

    briefingCountdownValue =
        3;

    briefingStartedAt =
        Date.now();

    level.state =
        "briefing";

}


// =====================================================
// DRAW LEVEL BRIEFING
// =====================================================

function drawLevelBriefing(){

    if(!briefingActive){

        return;

    }


    const briefing =
        levelBriefings[briefingLevel];


    if(!briefing){

        return;

    }


    ctx.save();


    // =================================================
    // FULL SCREEN DARK OVERLAY
    // =================================================

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.94)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // =================================================
    // BRIEFING / COUNTDOWN
    // =================================================

    if(!briefingCountdown){

        drawBriefingContent(
            briefing
        );

    }

    else{

        drawBriefingCountdown();

    }


    ctx.restore();


    // =================================================
    // UPDATE COUNTDOWN
    // =================================================

    if(briefingCountdown){

        updateBriefingCountdown();

    }

}


// =====================================================
// DRAW BRIEFING CONTENT
// =====================================================

function drawBriefingContent(briefing){

    const centerX =
        canvas.width / 2;


    // =================================================
    // FIXED BRIEFING BOX
    // =================================================

    const boxMarginX =
        Math.max(
            45,
            canvas.width * 0.10
        );


    const boxTop =
        Math.max(
            28,
            canvas.height * 0.07
        );


    const boxWidth =
        canvas.width -
        (boxMarginX * 2);


    const boxHeight =
        canvas.height -
        boxTop -
        Math.max(
            28,
            canvas.height * 0.07
        );


    const boxBottom =
        boxTop +
        boxHeight;


    // =================================================
    // OUTER BOX
    // =================================================

    ctx.fillStyle =
        "#080A0D";

    ctx.fillRect(
        boxMarginX,
        boxTop,
        boxWidth,
        boxHeight
    );


    // =================================================
    // BOX BORDER
    // =================================================

    ctx.strokeStyle =
        "#383D44";

    ctx.lineWidth =
        1;

    ctx.strokeRect(
        boxMarginX + 0.5,
        boxTop + 0.5,
        boxWidth - 1,
        boxHeight - 1
    );


    // =================================================
    // INNER BORDER
    // =================================================

    ctx.strokeStyle =
        "#1D2126";

    ctx.strokeRect(
        boxMarginX + 10.5,
        boxTop + 10.5,
        boxWidth - 21,
        boxHeight - 21
    );


    // =================================================
    // HEADER
    // =================================================

    let y =
        boxTop + 38;


    ctx.textAlign =
        "center";


    ctx.textBaseline =
        "alphabetic";


    ctx.fillStyle =
        "#777D84";

    ctx.font =
        "bold 12px Arial";


    ctx.fillText(
        "PROJECT ECLIPSE // MISSION BRIEFING",
        centerX,
        y
    );


    // =================================================
    // HEADER LINE
    // =================================================

    ctx.strokeStyle =
        "#292E34";

    ctx.lineWidth =
        1;


    ctx.beginPath();

    ctx.moveTo(
        boxMarginX + 28,
        y + 18
    );

    ctx.lineTo(
        boxMarginX + boxWidth - 28,
        y + 18
    );

    ctx.stroke();


    // =================================================
    // LEVEL
    // =================================================

    y += 48;


    ctx.fillStyle =
        "#8C9299";

    ctx.font =
        "bold 13px Arial";


    ctx.fillText(
        "LEVEL " + briefingLevel,
        centerX,
        y
    );


    // =================================================
    // TITLE
    // =================================================

    y += 39;


    ctx.fillStyle =
        "#FFFFFF";

    ctx.font =
        "bold 32px Arial";


    ctx.fillText(
        briefing.title,
        centerX,
        y
    );


    // =================================================
    // TITLE LINE
    // =================================================

    ctx.strokeStyle =
        "#343A41";


    ctx.beginPath();

    ctx.moveTo(
        centerX - 95,
        y + 17
    );

    ctx.lineTo(
        centerX + 95,
        y + 17
    );

    ctx.stroke();


    // =================================================
    // INSTRUCTION AREA
    // =================================================

    const instructionStart =
        y + 55;


    const sectionHeight =
        70;


    drawBriefingSection(
        "OBJECTIVE",
        briefing.objective,
        centerX,
        instructionStart
    );


    drawBriefingSection(
        "MISSION",
        briefing.mission,
        centerX,
        instructionStart + sectionHeight
    );


    drawBriefingSection(
        "SURVIVAL",
        briefing.survival,
        centerX,
        instructionStart + (sectionHeight * 2)
    );


    // =================================================
    // FOOTER DIVIDER
    // =================================================

    const footerLineY =
        boxBottom - 66;


    ctx.strokeStyle =
        "#292E34";


    ctx.beginPath();

    ctx.moveTo(
        boxMarginX + 28,
        footerLineY
    );

    ctx.lineTo(
        boxMarginX + boxWidth - 28,
        footerLineY
    );

    ctx.stroke();


    // =================================================
    // PRESS ENTER
    // =================================================

    const pulse =
        Math.sin(
            Date.now() / 450
        );


    const alpha =
        0.55 +
        ((pulse + 1) * 0.20);


    ctx.globalAlpha =
        alpha;


    ctx.fillStyle =
        "#FFFFFF";

    ctx.font =
        "bold 14px Arial";


    ctx.fillText(
        "PRESS ENTER TO CONTINUE",
        centerX,
        boxBottom - 34
    );


    ctx.globalAlpha =
        1;

}


// =====================================================
// DRAW BRIEFING SECTION
// =====================================================

function drawBriefingSection(
    label,
    text,
    centerX,
    y
){

    // =================================================
    // SECTION LABEL
    // =================================================

    ctx.textAlign =
        "center";


    ctx.fillStyle =
        "#737980";

    ctx.font =
        "bold 11px Arial";


    ctx.fillText(
        label,
        centerX,
        y
    );


    // =================================================
    // SECTION TEXT
    // =================================================

    ctx.fillStyle =
        "#D2D5D8";

    ctx.font =
        briefingLevel >= 8
            ? "15px Arial"
            : "16px Arial";


    const lines =
        text.split("\n");


    for(
        let i = 0;
        i < lines.length;
        i++
    ){

        ctx.fillText(
            lines[i],
            centerX,
            y + 25 + (i * 21)
        );

    }

}


// =====================================================
// ENTER → START COUNTDOWN
// =====================================================

function continueFromBriefing(){

    if(!briefingActive){

        return;

    }


    if(briefingCountdown){

        return;

    }


    briefingCountdown =
        true;


    briefingCountdownStartedAt =
        Date.now();


    briefingCountdownValue =
        3;

}


// =====================================================
// UPDATE BRIEFING COUNTDOWN
// =====================================================

function updateBriefingCountdown(){

    const elapsed =
        Date.now() -
        briefingCountdownStartedAt;


    const second =
        Math.floor(
            elapsed / 1000
        );


    briefingCountdownValue =
        3 - second;


    if(
        briefingCountdownValue <= 0
    ){

        briefingCountdown =
            false;


        briefingActive =
            false;


        level.state =
            "playing";


        level.countdown =
            false;


        level.countdownValue =
            3;

    }

}


// =====================================================
// DRAW COUNTDOWN
// =====================================================

function drawBriefingCountdown(){

    const centerX =
        canvas.width / 2;


    const centerY =
        canvas.height / 2;


    ctx.textAlign =
        "center";


    ctx.textBaseline =
        "middle";


    // =================================================
    // COUNTDOWN BOX
    // =================================================

    const boxWidth =
        canvas.width * 0.55;


    const boxHeight =
        canvas.height * 0.48;


    const boxX =
        centerX -
        (boxWidth / 2);


    const boxY =
        centerY -
        (boxHeight / 2);


    ctx.fillStyle =
        "#080A0D";


    ctx.fillRect(
        boxX,
        boxY,
        boxWidth,
        boxHeight
    );


    ctx.strokeStyle =
        "#383D44";


    ctx.lineWidth =
        1;


    ctx.strokeRect(
        boxX + 0.5,
        boxY + 0.5,
        boxWidth - 1,
        boxHeight - 1
    );


    // =================================================
    // LEVEL
    // =================================================

    ctx.fillStyle =
        "#777D84";

    ctx.font =
        "bold 13px Arial";


    ctx.fillText(
        "LEVEL " + briefingLevel,
        centerX,
        centerY - 105
    );


    // =================================================
    // COUNTDOWN NUMBER
    // =================================================

    ctx.fillStyle =
        "#FFFFFF";

    ctx.font =
        "bold 88px Arial";


    ctx.fillText(
        briefingCountdownValue,
        centerX,
        centerY
    );


    // =================================================
    // STATUS
    // =================================================

    ctx.fillStyle =
        "#888E94";

    ctx.font =
        "bold 12px Arial";


    ctx.fillText(
        "INITIALIZING",
        centerX,
        centerY + 82
    );


    ctx.textBaseline =
        "alphabetic";

}


// =====================================================
// ENTER KEY
// =====================================================

window.addEventListener(
    "keydown",
    function(event){

        if(!briefingActive){

            return;

        }


        if(event.key === "Enter"){

            event.preventDefault();

            continueFromBriefing();

        }

    },
    true
);
