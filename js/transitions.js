// =====================================
// TRANSITION SYSTEM
// =====================================

let transition = {

    active: false,

    title: "",

    subtitle: "",

    duration: 0,

    callback: null

};


// =====================================
// SHOW TRANSITION
// =====================================

function showTransition(title, subtitle, duration, callback){

    transition.active = true;

    transition.title = title;

    transition.subtitle = subtitle;

    transition.duration = duration;

    transition.callback = callback;

}


// =====================================
// UPDATE
// =====================================

function updateTransition(){

    if(!transition.active){

        return;

    }

    transition.duration--;

    if(transition.duration <= 0){

        transition.active = false;

        if(transition.callback){

            transition.callback();

        }

    }

}


// =====================================
// DRAW
// =====================================

function drawTransition(){

    if(!transition.active){

        return;

    }

    ctx.fillStyle = "rgba(0,0,0,0.80)";

    ctx.fillRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    ctx.textAlign = "center";

    ctx.fillStyle = "white";

    ctx.font = "52px Arial";

    ctx.fillText(

        transition.title,

        canvas.width / 2,

        canvas.height / 2 - 30

    );

    if(transition.subtitle !== ""){

        ctx.font = "30px Arial";

        ctx.fillText(

            transition.subtitle,

            canvas.width / 2,

            canvas.height / 2 + 40

        );

    }

}
