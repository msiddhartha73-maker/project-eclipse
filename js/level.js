const level = {

    current: 1,

    maxLevel: 12,

    batteryGoal: 3,

    totalLevels: 12,

    loading: false,

    loadingMessage: "",

    countdown: false,

    countdownValue: 3,

    countdownScale: 1,

    countdownAlpha: 1,

    // =====================================
    // LEVEL TRANSITIONS
    // =====================================

    state: "playing",

    transitionTimer: 0

};

const WALL_SIZE = 40;

// ======================================
// WALL BUILDING HELPERS
// ======================================

function addHorizontalWall(array, startX, endX, y){

    for(let x = startX; x <= endX; x += WALL_SIZE){

        array.push([x, y]);

    }

}

function addVerticalWall(array, x, startY, endY){

    for(let y = startY; y <= endY; y += WALL_SIZE){

        array.push([x, y]);

    }

}


function shuffleArray(array){

    for(let i = array.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        const temp = array[i];

        array[i] = array[j];

        array[j] = temp;

    }

}


function loadLevel(number){
	
	// =====================================
    // RESET BACKGROUND MUSIC FOR NEW GAME
    // =====================================

    resetBackgroundMusic();

    level.current = number;
    
    resetPlayerDeathSound();

    exitDoor.unlocked = false;

    battery.collected = 0;

    light.battery = 100;

    light.active = true;

    battery.active = true;
    
    player.hasBattery = false;

    enemies.length = 0;
    
    map.furniture.length = 0;
    
    map.deadBodies.length = 0;
    
    // =====================================
	// RESET SOLDIERS
	// =====================================

	soldiers.active = false;

	soldiers.arrived = false;

	soldiers.spawning = false;

	soldiers.spawnStage = 0;

	soldiers.spawnDelay = 0;

	soldiers.spawnTimer = 120;

	soldiers.message = "";

	soldiers.messageTimer = 0;

	soldiers.list = [];



if(number === 1){

    map.wallThickness = 40;

    level.batteryGoal = 3;

    battery.locations = [

		{ x:164, y:481 },

		{ x:504, y:199 },

		{ x:734, y:461 }

	];

	// Randomize the order of the three predefined locations
	shuffleArray(battery.locations);

	battery.currentIndex = 0;

	battery.x = battery.locations[0].x;

	battery.y = battery.locations[0].y;
    // =====================================
    // LEVEL 1 MAP
    // =====================================

    const level1Walls = [
		
	[440, 240],
    [240, 240],
    [320, 240],
    [360, 240],
    [400, 240],
    [240, 280],
    [240, 320],
    [200, 320],
    [160, 320],
    [280, 240],
    [240, 40],
    [240, 80],
    [240, 120],
    [440, 200],
    [440, 120],
    [440, 160],
    [480, 240],
    [680, 240],
    [640, 240],
    [600, 240],
    [880, 240],
    [680, 40],
    [680, 80],
    [520, 240],
    [560, 240],
    [680, 120],
    [680, 440],
    [680, 480],
    [680, 400],
    [680, 360],
    [840, 240]
    
	];

    map.obstacles = level1Walls.map(function(wall){

        return{

            x: wall[0],

            y: wall[1],

            width: WALL_SIZE,

            height: WALL_SIZE

        };

    });

    
    // =====================================
	// TEST FURNITURE
	// =====================================
	
	map.furniture = [
	
	createFurniture(
        "medical_cylinder",
        220,
        40,
        20,
        20
    ),
    
    createFurniture(
        "medical_cylinder",
        220,
        60,
        20,
        20
    ),
    
    createFurniture(
        "medical_cylinder",
        220,
        80,
        20,
        20
    ),
    
    createFurniture(
        "medical_cylinder",
        220,
        100,
        20,
        20
    ),
    
    createFurniture(
        "medical_cylinder",
        220,
        120,
        20,
        20
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        45,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        65,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        85,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        105,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        125,
        45,
        20,
        35
    ),
    createFurniture(
        "chemical_storage_cabinet",
        145,
        45,
        20,
        35
    ),
    
    createFurniture(
        "lab_research_table",
        65,
        105,
        80,
        30
    ),
	
	createFurniture(
        "chemical_storage_cabinet",
        285,
        45,
        20,
        35
    ),
	
	createFurniture(
        "chemical_storage_cabinet",
        305,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        325,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        350,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        720,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        740,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        760,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        780,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        800,
        45,
        20,
        35
    ),
    
    createFurniture(
        "lab_cabinets",
        420,
        170,
        20,
        60
    ),
    
	createFurniture(
        "medical_bed",
        300,
        285,
        60,
        20
    ),
	
	createFurniture(
        "medical_bed",
        459,
        285,
        60,
        20
    ),
    
    createFurniture(
        "medical_bed",
        525,
        285,
        60,
        20
    ),

    createFurniture(
        "lab_table",
        574,
        40,
        60,
        20
    ),

    createFurniture(
        "refrigerator",
        660,
        95,
        20,
        35
    ),

    createFurniture(
        "storage_rack",
        800,
        474,
        70,
        25
    ),
    
        createFurniture(
        "gas_cylinder",
        905,
        110,
        15,
        15
    ),


    createFurniture(
        "gas_cylinder",
        905,
        86,
        15,
        15
    ),

    createFurniture(
        "gas_cylinder",
        905,
        180,
        15,
        15
    ),

    createFurniture(
        "gas_cylinder",
        905,
        211,
        15,
        15
    )

];

	// =====================================
	// DEAD BODIES
	// =====================================

	map.deadBodies = [];

	map.deadBodies.push({

		image: deadBodyImages.body,

		x: 300,
		y: 200,

		width: 40,
		height: 20

	},
	{

		image: deadBodyImages.body1,

		x: 824,
		y: 414,

		width: 20,
		height: 40

	},
	{

		image: deadBodyImages.bloodsplats1,

		x: 800,
		y: 414,

		width: 20,
		height: 20

	},
	{

		image: deadBodyImages.bloodsplats2,

		x: 280,
		y: 200,

		width: 20,
		height: 20

	},
	{

		image: deadBodyImages.bloodsplats5,

		x: 500,
		y: 380,

		width: 30,
		height: 30

	}
	);
    
       buildNavigationGrid();

    // =====================================
    // PLAYER
    // =====================================

    player.x = 60;

    player.y = 60;
    
    // =====================================
	// EXIT DOOR
	// =====================================

	exitDoor.x = 454;

	exitDoor.y = 499;
	
	exitDoor.width = 80;

	exitDoor.height = 40;

	exitDoor.unlocked = false;

	exitDoor.destroyed = false;

    // =====================================
	// ENEMIES
	// =====================================

	createEnemyAt("Walker", 379, 206);

	//createEnemyAt("Runner", 851, 159);

	createEnemyAt("Tank", 774, 451);

	}


 if(number === 2){

    map.wallThickness = 40;

    level.batteryGoal = 5;

    battery.locations = [

        { x:609, y:479 },

        { x:214, y:294 },

        { x:614, y:54 },
        
        { x:706, y:484 },
        
        { x:54, y:389 }

    ];
    
    shuffleArray(battery.locations);

    battery.currentIndex = 0;

    battery.x = battery.locations[0].x;

    battery.y = battery.locations[0].y;

    // =====================================
    // LEVEL 2 MAP
    // =====================================

    const level2Walls = [
    [440, 240, 40, 40], [240, 240, 40, 40],
    [320, 240, 40, 40], [360, 240, 40, 40],
    [400, 240, 40, 40], [560, 240, 40, 40],
    [240, 280, 40, 40], [240, 320, 40, 40],
    [200, 320, 40, 40], [160, 320, 40, 40],
    [280, 240, 40, 40], [640, 360, 40, 40],
    [640, 440, 40, 40], [640, 480, 40, 40],
    [640, 400, 40, 40], [240, 40, 40, 40],
    [240, 80, 40, 40], [240, 120, 40, 40],
    [880, 260, 40, 20], [840, 260, 40, 20],
    [800, 260, 40, 20], [760, 260, 40, 20],
    [720, 260, 40, 20], [680, 260, 40, 20],
    [600, 260, 40, 20], [720, 240, 40, 20],
    [760, 240, 40, 20], [800, 240, 40, 20],
    [840, 240, 40, 20], [880, 240, 40, 20],
    [560, 40, 20, 40], [560, 80, 20, 40],
    [560, 120, 20, 40], [560, 200, 20, 40],
    [580, 40, 20, 40], [580, 80, 20, 40],
    [460, 40, 20, 40], [460, 120, 20, 40],
    [460, 160, 20, 40], [460, 200, 20, 40],
    [440, 160, 20, 40], [440, 200, 20, 40],
    [440, 40, 20, 40]
];

    map.obstacles = level2Walls.map(function(wall){

		return{

			x: wall[0],

			y: wall[1],

			width: wall[2],

			height: wall[3]

		};

	});
	
	map.furniture = [
	
	//lab research table
	createFurniture(
        "lab_research_table",
        769,
        149,
        80,
        30
       ),
	
	
	//Lab Cabinetets
	createFurniture(
        "lab_cabinets",
        902,
        134,
        20,
        60
    ),
    
    //Storage Rack
    
    createFurniture(
        "storage_rack",
        340,
        39,
        60,
        20
    ),
    
    //Medical Cylinder
    
    createFurniture(
        "medical_cylinder",
        895,
        221,
        20,
        20
    ),
    
    createFurniture(
        "medical_cylinder",
        875,
        221,
        20,
        20
    ),
    
    createFurniture(
        "medical_cylinder",
        855,
        221,
        20,
        20
    ),
    
    createFurniture(
        "medical_cylinder",
        835,
        221,
        20,
        20
    ),
    
    //--------------------------
    
    createFurniture(
        "medical_cylinder",
        420,
        164,
        20,
        20
    ),
    
    createFurniture(
        "medical_cylinder",
        420,
        184,
        20,
        20
    ),
    
    createFurniture(
        "medical_cylinder",
        420,
        204,
        20,
        20
    ),
    

    // =====================================
    // CHEMICAL STORAGE CABINETS
    // =====================================
	
	createFurniture(
        "chemical_storage_cabinet",
        840,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        820,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        800,
        45,
        20,
        35
    ),
	
    createFurniture(
        "chemical_storage_cabinet",
        897,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        880,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        860,
        45,
        20,
        35
    ),

    createFurniture(
        "chemical_storage_cabinet",
        620,
        400,
        20,
        35
    ),

    createFurniture(
        "chemical_storage_cabinet",
        217,
        45,
        20,
        35
    ),
    
    createFurniture(
        "chemical_storage_cabinet",
        200,
        45,
        20,
        35
    ),


    // =====================================
    // GAS CYLINDERS
    // =====================================

    createFurniture(
        "gas_cylinder",
        900,
        485,
        15,
        15
    ),

    createFurniture(
        "gas_cylinder",
        876,
        485,
        15,
        15
    ),

    createFurniture(
        "gas_cylinder",
        905,
        459,
        15,
        15
    ),
    
    //Lab Waste Container
    createFurniture(
        "lab_waste_container",
        285,
        283,
        30,
        30
    ),
    
    createFurniture(
        "lab_waste_container",
        325,
        283,
        30,
        30
    ),
    
    //Crate
    createFurniture(
        "crate",
        689,
        364,
        40,
        40
    ),
    
    createFurniture(
        "crate",
        689,
        410,
        40,
        40
    ),


    // =====================================
    // MEDICAL BEDS
    // =====================================
	
	createFurniture(
        "medical_bed",
        340,
        469,
        60,
        20
    ),
	
    createFurniture(
        "medical_bed",
        400,
        469,
        60,
        20
    ),

    createFurniture(
        "medical_bed",
        489,
        469,
        60,
        20
    ),
    
    //Fire Extinguisher
    
    createFurniture(
		"fire_extinguisher",
		784,
		231,
		7,
		7
	),
	
	createFurniture(
		"fire_extinguisher",
		770,
		231,
		7,
		7
	),
	
	createFurniture(
		"fire_extinguisher",
		760,
		231,
		7,
		7
	),
	
	createFurniture(
		"fire_extinguisher",
		750,
		231,
		7,
		7
	),




];
	map.deadBodies = [];

	map.deadBodies.push({

		image: deadBodyImages.body,

		x: 850,
		y: 160,

		width: 40,
		height: 20

	},
	{

		image: deadBodyImages.body5,

		x: 206,
		y: 260,

		width: 20,
		height: 40

	},
	{

		image: deadBodyImages.bloodsplats3,

		x: 830,
		y: 175,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats5,

		x: 180,
		y: 270,

		width: 30,
		height: 30

	}
	
	)

    buildNavigationGrid();
    
    

    // =====================================
    // PLAYER
    // =====================================

    player.x = 60;

    player.y = 60;
    
    // =====================================
	// EXIT DOOR
	// =====================================

	exitDoor.x = 1;

	exitDoor.y = 199;

	exitDoor.width = 40;      // Horizontal door

	exitDoor.height = 80;

	exitDoor.unlocked = false;

	exitDoor.destroyed = false;

    // =====================================
    // ENEMIES
    // =====================================

    // Replace these positions with the ones
    // you choose in the editor.

    createEnemyAt("Walker", 834, 114);

    createEnemyAt("Runner", 79, 124);

    createEnemyAt("Tank", 879, 314);

}


if(number === 3){

    map.wallThickness = 40;

    level.batteryGoal = 5;

    battery.locations = [

        { x:379, y:119 },

        { x:874, y:471 },

        { x:201, y:286 },

        { x:521, y:256 },

        { x:881, y:136 }

    ];

    shuffleArray(battery.locations);

    battery.currentIndex = 0;

    battery.x = battery.locations[0].x;

    battery.y = battery.locations[0].y;
    // =====================================
    // LEVEL 3 MAP
    // =====================================

    const level3Walls = [
    [440, 240],
    [240, 240],
    [320, 240],
    [360, 240],
    [400, 240],
    [560, 240],
    [600, 240],
    [720, 240],
    [760, 240],
    [240, 280],
    [240, 320],
    [200, 320],
    [160, 320],
    [280, 240],
    [240, 40],
    [240, 80],
    [560, 200],
    [800, 240],
    [840, 240],
    [880, 240],
    [240, 120],
    [560, 160],
    [560, 480],
    [560, 440],
    [600, 480],
    [560, 40],
    [560, 400],
    [560, 360]
];

    map.obstacles = level3Walls.map(function(wall){

        return{

            x: wall[0],

            y: wall[1],

            width: WALL_SIZE,

            height: WALL_SIZE

        };

    });
    
    map.furniture = [
    //Chemical Storage Cabs
    createFurniture(
        "chemical_storage_cabinet",
        45,
        45,
        20,
        35
    ),
    createFurniture(
        "chemical_storage_cabinet",
        65,
        45,
        20,
        35
    ),
    createFurniture(
        "chemical_storage_cabinet",
        85,
        45,
        20,
        35
    ),
    createFurniture(
        "chemical_storage_cabinet",
        105,
        45,
        20,
        35
    ),
    createFurniture(
        "chemical_storage_cabinet",
        125,
        45,
        20,
        35
    ),
    createFurniture(
        "chemical_storage_cabinet",
        150,
        45,
        20,
        35
    ),
    createFurniture(
        "chemical_storage_cabinet",
        215,
        45,
        20,
        35
    ),
    
    //Lab Cabinets
    createFurniture(
        "lab_cabinets",
        280,
        45,
        20,
        60
    ),
    
    //Generators
    createFurniture(
        "generator",
        600,
        40,
        30,
        30		
    ),
    createFurniture(
        "generator",
        530,
        40,
        30,
        30		
    ),
    createFurniture(
        "generator",
        500,
        40,
        30,
        30		
    ),
    createFurniture(
        "generator",
        460,
        40,
        30,
        30		
    ),
    createFurniture(
        "generator",
        430,
        40,
        30,
        30		
    ),
    
    //Server Racks
    
    createFurniture(
        "server_rack",
        900,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        880,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        860,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        840,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        820,
        40,
        20,
        60	
    ),
    
    //computer_table
    createFurniture(
        "computer_table",
        700,
        40,
        60,
        20		
    ),
    createFurniture(
        "chair",
        720,
        60,
        20,
        20	
    ),
    
    //Research Table
    createFurniture(
        "lab_research_table",
        809,
        384,
        80,
        30	
    ),
    createFurniture(
        "lab_research_table",
        670,
        384,
        80,
        30	
    ),
    createFurniture(
        "lab_research_table",
        670,
        420,
        80,
        30	
    ),
    createFurniture(
        "lab_research_table",
        809,
        420,
        80,
        30	
    ),
    
    //Medical Beds
    createFurniture(
        "medical_bed",
        434,
        466,
        60,
        20	
    ),
    createFurniture(
        "medical_bed",
        370,
        466,
        60,
        20	
    ),
    createFurniture(
        "medical_bed",
        310,
        466,
        60,
        20	
    ),
    createFurniture(
        "medical_bed",
        245,
        466,
        60,
        20	
    ),
    createFurniture(
        "medical_bed",
        182,
        466,
        60,
        20	
    ),
    createFurniture(
        "medical_bed",
        280,
        444,
        60,
        20	
    ),
    createFurniture(
        "medical_bed",
        200,
        444,
        60,
        20	
    ),
    
    //Laboratory sink
    createFurniture(
        "laboratory_sink",
        280,
        280,
        20,
        20	
    ),
    
    
    ];
    
    map.deadBodies = [];

	map.deadBodies.push(
	{

		image: deadBodyImages.bloodsplats1,

		x: 159,
		y: 249,

		width: 40,
		height: 40

	},
	{

		image: deadBodyImages.bloodsplats6,

		x: 690,
		y: 94,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats4,

		x: 326,
		y: 79,

		width: 20,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats3,

		x: 493,
		y: 422,

		width: 20,
		height: 20

	},
	{

		image: deadBodyImages.body6,

		x: 701,
		y: 94,

		width: 20,
		height: 40

	},
	{

		image: deadBodyImages.body9,

		x: 326,
		y: 79,

		width: 20,
		height: 40

	},
	
	{

		image: deadBodyImages.body2,

		x: 473,
		y: 422,

		width: 40,
		height: 20

	}
	
	
	
	)

    buildNavigationGrid();
    
   

    // =====================================
    // PLAYER
    // =====================================

    player.x = 60;

    player.y = 60;

    // =====================================
    // ENEMIES
    // =====================================

    // Replace these positions with the
    // coordinates from your editor.

    createEnemyAt("Walker", 861, 151);

    createEnemyAt("Runner", 201, 116);

    createEnemyAt("Tank", 518, 472);

}
    
    if(number === 4){

    map.wallThickness = 40;

    level.batteryGoal = 6;

    battery.locations = [

        { x:199, y:84 },

        { x:204, y:464 },

        { x:679, y:186 },

        { x:374, y:256 },

        { x:729, y:466 },

        { x:284, y:214 }

    ];

    shuffleArray(battery.locations);

    battery.currentIndex = 0;

    battery.x = battery.locations[0].x;

    battery.y = battery.locations[0].y;

    // =====================================
    // LEVEL 4 MAP
    // =====================================

    const level4Walls = [

    [240, 240],
    [560, 240],
    [600, 240],
    [720, 240],
    [760, 240],
    [240, 280],
    [240, 320],
    [200, 320],
    [160, 320],
    [240, 40],
    [240, 80],
    [240, 120],
    [560, 80],
    [560, 40],
    [560, 200],
    [800, 240],
    [560, 400],
    [560, 360],
    [560, 440],
    [560, 480],
    [520, 240],
    [280, 240],
    [240, 440],
    [240, 480],
    [200, 120],
    [160, 120]

    ];

    map.obstacles = level4Walls.map(function(wall){

        return{

            x: wall[0],

            y: wall[1],

            width: WALL_SIZE,

            height: WALL_SIZE

        };

    });
    
    map.furniture = [
    
    //X-ray Machine
    createFurniture(
        "x_ray_machine_vertical",
        761,
        49,
        60,
        120	
    ),
    //Chair
    createFurniture(
        "chair",
        750,
        108,
        20,
        20	
    ),
    
    //Computer
    createFurniture(
        "computer_table2",
        621,
        49,
        55,
        30	
    ),
    
    //Xerox Machine
    
    createFurniture(
        "xerox_machine",
        282,
        49,
        55,
        30	
    ),
    //Sink
    
    createFurniture(
        "laboratory_sink",
        205,
        40,
        30,
        20	
    ),
    
    //Lab Waste Container
    createFurniture(
        "lab_waste_container",
        530,
        470,
        30,
        30	
    ),
    createFurniture(
        "lab_waste_container",
        602,
        210,
        30,
        30	
    ),
    
    //Medical Bed
    
    createFurniture(
        "medical_bed",
        300,
        455,
        80,
        40	
    ),
    
    //Wheel Chair
    createFurniture(
        "wheel_chair_vertical",
        400,
        460,
        30,
        30	
    ),
    
    //Research Table
    createFurniture(
        "lab_research_table",
        814,
        449,
        80,
        30	
    ),
    
    createFurniture(
        "lab_research_table_vertical",
        885,
        340,
        30,
        80	
    ),
    
    ];
    
    map.deadBodies = [];

	map.deadBodies.push(
	{

		image: deadBodyImages.bloodsplats5,

		x: 770,
		y: 194,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats7,

		x: 485,
		y: 444,

		width: 30,
		height: 30

	},
	
	{

		image: deadBodyImages.bloodsplats2,

		x: 319,
		y: 99,

		width: 30,
		height: 40

	},
	
	{

		image: deadBodyImages.bloodsplats2,

		x: 500,
		y: 300,

		width: 30,
		height: 40

	},
	{

		image: deadBodyImages.bloodsplats3,

		x: 170,
		y: 200,

		width: 30,
		height: 40

	},
	
	{

		image: deadBodyImages.body13,

		x: 770,
		y: 194,

		width: 60,
		height: 30

	},
	{

		image: deadBodyImages.body,

		x: 461,
		y: 444,

		width: 60,
		height: 30

	},
	
	{

		image: deadBodyImages.body8,

		x: 319,
		y: 99,

		width: 30,
		height: 60

	}
	
	
	)

    buildNavigationGrid();
    
   

    // =====================================
    // PLAYER
    // =====================================

    player.x = 60;

    player.y = 60;
    
    // =====================================
	// EXIT DOOR
	// =====================================

	exitDoor.x = 390;

	exitDoor.y = 2;

	exitDoor.width = 80;      // Vertical door

	exitDoor.height = 40;

	exitDoor.unlocked = false;

	exitDoor.destroyed = false;

    // =====================================
    // ENEMIES
    // =====================================

    createEnemyAt("Walker", 861, 151);
    
    createEnemyAt("Runner", 646, 469);
    
    createEnemyAt("Walker", 71, 74);
    
    createEnemyAt("Tank", 186, 469);

}
    
    
	if(number === 5){

    map.wallThickness = 40;

    level.batteryGoal = 6;

	battery.locations = [

    { x:414,  y:209 },

    { x:874, y:89 },

    { x:189, y:469 },

    { x:519,  y:124 },

    { x:119, y:89 },

    { x:656, y:466 }

	];

    shuffleArray(battery.locations);

    battery.currentIndex = 0;

    battery.x = battery.locations[0].x;

    battery.y = battery.locations[0].y;

	const level5Walls = [

    [440, 240],
    [240, 240],
    [400, 240],
    [560, 240],
    [600, 240],
    [240, 40],
    [240, 80],
    [240, 120],
    [560, 200],
    [560, 120],
    [440, 200],
    [440, 120],
    [440, 160],
    [200, 240],
    [160, 240],
    [120, 240],
    [280, 240],
    [560, 360],
    [560, 400],
    [560, 440],
    [560, 480],
    [760, 360],
    [560, 160],
    [600, 360],
    [760, 200],
    [760, 240],
    [760, 280],
    [760, 320],
    [760, 160],
    [240, 280],
    [240, 440],
    [240, 480],
    [240, 320]

];


map.obstacles = level5Walls.map(function(wall){

    return {

        x: wall[0],

        y: wall[1],

        width: WALL_SIZE,

        height: WALL_SIZE

    };

});

	map.furniture = [
	//lab cabinets
	createFurniture(
        "lab_cabinets",
        600,
        174,
        20,
        60
    ),
    createFurniture(
        "lab_cabinets",
        480,
        174,
        20,
        60
    ),
    createFurniture(
        "lab_cabinets",
        280,
        90,
        20,
        60
    ),
    createFurniture(
        "lab_cabinets",
        220,
        50,
        20,
        60
    ),
    
    createFurniture(
        "lab_cabinets2",
        278,
        280,
        25,
        50
    ),
    createFurniture(
        "lab_cabinets2_vertical",
        300,
        477,
        60,
        25
    ),
    createFurniture(
        "lab_cabinets2_vertical",
        380,
        477,
        60,
        25
    ),
    createFurniture(
        "lab_cabinets2_vertical",
        470,
        477,
        60,
        25
    ),
    createFurniture(
        "lab_cabinets2_vertical",
        175,
        218,
        60,
        25
    ),
    
    //Microscope
    createFurniture(
        "microscope",
        174,
        280,
        60,
        30
    ),
    
    //Chair
    createFurniture(
        "chair",
        185,
        310,
        20,
        20
    ),
    
    //Lab Sink
    createFurniture(
        "laboratory_sink",
        605,
        400,
        30,
        20
    ),
	
	
	];
	
	map.deadBodies = [];

	map.deadBodies.push(
	{

		image: deadBodyImages.bloodsplats6,

		x: 185,
		y: 335,

		width: 20,
		height: 20

	},
	
	{

		image: deadBodyImages.bloodsplats5,

		x: 656,
		y: 165,

		width: 30,
		height: 30

	},
	
	{

		image: deadBodyImages.bloodsplats1,

		x: 200,
		y: 165,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.body3,

		x: 185,
		y: 335,

		width: 50,
		height: 20

	},
	
	{

		image: deadBodyImages.body9,

		x: 656,
		y: 165,

		width: 30,
		height: 50

	}
	
	)

	buildNavigationGrid();
	
	
	
	// =====================================
	// EXIT DOOR
	// =====================================

	exitDoor.x = 919;

	exitDoor.y = 240;

	exitDoor.width = 40;

	exitDoor.height = 80;

	exitDoor.unlocked = false;

	exitDoor.destroyed = false;
	
	// =====================================
	// ENEMIES
	// =====================================
	
	createEnemyAt("Walker", 519, 129);

	createEnemyAt("Walker", 854, 229);

	createEnemyAt("Runner", 644, 316);

	createEnemyAt("Runner", 114, 91);



    
}


	if(number === 6){

    map.wallThickness = 40;

    level.batteryGoal = 7;

    battery.locations = [

        { x:561, y:84 },

        { x:241, y:466 },

        { x:599, y:249 },

        { x:204, y:109 },

        { x:841, y:129 },

        { x:836, y:391 },

        { x:494, y:266 }

    ];

    shuffleArray(battery.locations);

    battery.currentIndex = 0;

    battery.x = battery.locations[0].x;

    battery.y = battery.locations[0].y;
    
	const level6Walls = [
    [720, 360, 40, 40], [320, 120, 40, 40],
    [320, 80, 40, 40], [720, 320, 40, 40],
    [720, 280, 40, 40], [520, 120, 40, 40],
    [520, 160, 40, 40], [520, 200, 40, 40],
    [520, 240, 40, 40], [520, 280, 40, 40],
    [320, 280, 40, 40], [320, 320, 40, 40],
    [320, 360, 40, 40], [320, 400, 40, 40],
    [280, 400, 40, 40], [240, 400, 40, 40],
    [720, 400, 40, 40], [720, 160, 40, 40],
    [520, 320, 40, 40], [520, 360, 40, 40],
    [320, 160, 40, 40], [120, 160, 40, 40],
    [120, 400, 40, 40], [120, 280, 40, 40],
    [120, 320, 40, 40], [120, 360, 40, 40],
    [120, 80, 40, 40], [120, 120, 40, 40],
    [320, 40, 40, 40], [120, 40, 40, 40],
    [560, 120, 40, 40], [480, 360, 40, 40],
    [280, 280, 40, 20], [160, 280, 40, 20],
    [200, 280, 40, 20], [200, 420, 40, 20],
    [280, 180, 40, 20], [200, 180, 40, 20],
    [800, 180, 40, 20], [720, 80, 20, 40],
    [720, 120, 20, 40], [840, 180, 40, 20],
    [880, 180, 40, 20], [760, 280, 40, 20],
    [800, 280, 40, 20], [840, 280, 40, 20],
    [800, 420, 40, 20], [840, 420, 40, 20],
    [880, 420, 40, 20], [160, 180, 40, 20],
    [160, 160, 40, 20]
];

	map.obstacles = level6Walls.map(function(wall){

		return{

			x: wall[0],

			y: wall[1],

			width: wall[2] || WALL_SIZE,

			height: wall[3] || WALL_SIZE

		};

	});
	
	map.furniture = [
	
	//Toilet
	createFurniture(
        "commode3",
        885,
        450,
        35,
        30
    ),
    
    //sink
	createFurniture(
        "laboratory_sink",
        810,
        440,
        25,
        15
    ),
	
	//Microscope
    createFurniture(
        "microscope",
        246,
        40,
        60,
        30
    ),
    
    createFurniture(
        "microscope",
        780,
        300,
        60,
        30
    ),
    
    //Chair
    createFurniture(
        "chair",
        256,
        70,
        20,
        20
    ),
    
    //Chair
    createFurniture(
        "chair",
        800,
        330,
        20,
        20
    ),
    
    //Computer Table
    createFurniture(
        "computer_table2",
        165,
        300,
        60,
        30
    ),
    
    //Xerox Machine
    createFurniture(
        "xerox_machine",
        490,
        400,
        55,
        30
    ),
    
    //LabCabinets
    createFurniture(
        "lab_cabinets2_vertical",
        864,
        162,
        55,
        20
    ),
    createFurniture(
        "lab_cabinets2",
        900,
        90,
        20,
        55
    ),
    createFurniture(
        "lab_cabinets",
        740,
        90,
        20,
        55
    ),
    createFurniture(
        "lab_cabinets",
        501,
        184,
        20,
        55
    ),
    createFurniture(
        "lab_cabinets2",
        498,
        300,
        25,
        55
    )
    
	
	];
	
	map.deadBodies = [];

	map.deadBodies.push(
	{

		image: deadBodyImages.bloodsplats1,

		x: 274,
		y: 85,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats4,

		x: 820,
		y: 339,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats5,

		x: 810,
		y: 455,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats2,

		x: 510,
		y: 455,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats6,

		x: 450,
		y: 200,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.body8,

		x: 274,
		y: 85,

		width: 30,
		height: 50

	},
	{

		image: deadBodyImages.body14,

		x: 820,
		y: 339,

		width: 60,
		height: 30

	},
	{

		image: deadBodyImages.body2,

		x: 810,
		y: 455,

		width: 50,
		height: 30

	}
	
	)

	buildNavigationGrid();
	
	
	
	// =====================================
	// EXIT DOOR
	// =====================================

	exitDoor.x = 919;

	exitDoor.y = 200;

	exitDoor.width = 40;

	exitDoor.height = 80;

	exitDoor.unlocked = false;

	exitDoor.destroyed = false;
	

	createEnemyAt("Walker", 844, 134);

	createEnemyAt("Walker", 784, 476);

	createEnemyAt("Runner", 84, 381);

	createEnemyAt("Runner", 259, 161);

	createEnemyAt("Tank", 259, 361);

}



	if(number === 7){

		map.wallThickness = 40;

		level.batteryGoal = 7;

		battery.locations = [

			{ x:619, y:466 },

			{ x:303, y:189 },

			{ x:239, y:456 },

			{ x:751, y:106 },

			{ x:886, y:461 },

			{ x:569, y:74 },

			{ x:459, y:324 }

		];

		shuffleArray(battery.locations);

		battery.currentIndex = 0;

		battery.x = battery.locations[0].x;

		battery.y = battery.locations[0].y;
		
		const level7Walls = [
    [160, 120, 40, 40], [360, 120, 40, 40], [680, 120, 40, 40],
    [520, 520, 40, 40], [560, 520, 40, 40], [600, 520, 40, 40],
    [640, 520, 40, 40], [680, 520, 40, 40], [720, 520, 40, 40],
    [840, 520, 40, 40], [920, 120, 40, 40], [960, 120, 40, 40],
    [1000, 120, 40, 40], [1040, 120, 40, 40], [880, 520, 40, 40],
    [920, 520, 40, 40], [960, 520, 40, 40], [1000, 520, 40, 40],
    [1040, 520, 40, 40], [1040, 160, 40, 40], [1040, 200, 40, 40],
    [1040, 240, 40, 40], [1040, 280, 40, 40], [1040, 320, 40, 40],
    [1040, 360, 40, 40], [1040, 400, 40, 40], [1040, 440, 40, 40],
    [1040, 480, 40, 40], [800, 120, 40, 40], [800, 160, 40, 40],
    [800, 200, 40, 40], [800, 240, 40, 40], [840, 240, 40, 40],
    [360, 160, 40, 40], [360, 200, 40, 40], [360, 240, 40, 40],
    [160, 160, 40, 40], [160, 200, 40, 40], [280, 240, 40, 40],
    [320, 240, 40, 40], [480, 360, 40, 40], [480, 400, 40, 40],
    [480, 440, 40, 40], [480, 480, 40, 40], [680, 80, 40, 40],
    [480, 80, 40, 40], [480, 40, 40, 40], [800, 80, 40, 40],
    [360, 80, 40, 40], [320, 120, 40, 40], [160, 360, 40, 40],
    [200, 360, 40, 40], [240, 360, 40, 40], [280, 360, 40, 40],
    [320, 360, 40, 40], [360, 360, 40, 40], [360, 400, 40, 40],
    [200, 120, 40, 40], [480, 120, 40, 40], [680, 160, 40, 40],
    [520, 120, 40, 40], [560, 120, 40, 40], [600, 120, 40, 40],
    [640, 120, 40, 40], [680, 360, 40, 40], [680, 400, 40, 40],
    [680, 440, 40, 40], [680, 480, 40, 40], [160, 320, 20, 40],
    [160, 240, 20, 40], [880, 120, 40, 20], [600, 360, 40, 20],
    [720, 360, 40, 20], [800, 360, 40, 20], [560, 360, 40, 20],
    [520, 360, 40, 20], [880, 360, 40, 20], [840, 360, 40, 20],
    [480, 320, 20, 40], [480, 160, 20, 40]
];



    // =====================================
    // CONVERT TO OBSTACLES
    // =====================================

		map.obstacles = level7Walls.map(function(wall){

		return{

			x: wall[0],

			y: wall[1],

			width: wall[2] || WALL_SIZE,

			height: wall[3] || WALL_SIZE

		};

	});
    
    map.furniture = [
    
    
    //Computer Tables
    createFurniture(
        "computer_table",
        861,
        380,
        50,
        25
    ),
    createFurniture(
        "computer_table2",
        530,
        380,
        50,
        25
    ),
    
    //Chair
    createFurniture(
        "chair",
        875,
        405,
        20,
        20
    ),
    createFurniture(
        "chair",
        545,
        405,
        20,
        20
    ),
    
    //lab cabinet
    createFurniture(
        "lab_cabinets",
        720,
        420,
        20,
        60
    ),
    createFurniture(
        "lab_cabinets",
        840,
        180,
        20,
        60
    ),
    createFurniture(
        "lab_cabinets2",
        663,
        420,
        20,
        60
    ),
    createFurniture(
        "lab_cabinets2",
        342,
        165,
        20,
        60
    ),
    createFurniture(
        "lab_cabinets2",
        142,
        165,
        20,
        60
    ),
    createFurniture(
        "lab_cabinets",
        520,
        55,
        20,
        60
    ),
    //Refrigerator
    createFurniture(
        "refrigerator",
        400,
        165,
        20,
        50
    ),
    //Lab Sink
    createFurniture(
        "laboratory_sink",
        890,
        40,
        30,
        20
    ),
    
    //Storage rack
    createFurniture(
        "storage_rack",
        200,
        342,
        50,
        20
    ),
    
    //Generator
    createFurniture(
        "generator",
        596,
        92,
        30,
        30
    ),
    createFurniture(
        "generator",
        624,
        92,
        30,
        30
    ),
    createFurniture(
        "generator",
        654,
        92,
        30,
        30
    ),
    ];
    
    map.deadBodies = [];

	map.deadBodies.push(
	{

		image: deadBodyImages.bloodsplats1,

		x: 564,
		y: 451,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats7,

		x: 449,
		y: 211,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats3,

		x: 199,
		y: 50,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats6,

		x: 450,
		y: 450,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats4,

		x: 749,
		y: 299,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats1,

		x: 99,
		y: 398,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.body4,

		x: 564,
		y: 451,

		width: 50,
		height: 30

	},
	{

		image: deadBodyImages.body10,

		x: 449,
		y: 211,

		width: 50,
		height: 30

	},
	{

		image: deadBodyImages.body7,

		x: 199,
		y: 50,

		width: 30,
		height: 50

	}
	
	
	)
    
    buildNavigationGrid();
    
    
    
    // =====================================
	// EXIT DOOR
	// =====================================

	exitDoor.x = 919;

	exitDoor.y = 279;

	exitDoor.width = 40;

	exitDoor.height = 80;

	exitDoor.unlocked = false;

	exitDoor.destroyed = false;



    // =====================================
    // ENEMIES
    // =====================================
	createEnemyAt("Walker",74, 469);

    createEnemyAt("Walker",94, 69);

    createEnemyAt("Walker",444, 84);

    createEnemyAt("Runner",764,89);

    createEnemyAt("Runner",876,314);
    
    
}


	if(number === 8){

		map.wallThickness = 40;

		level.batteryGoal = 7;

		battery.locations = [

		{ x: 671, y: 419 },   // Battery 1

		{ x: 61, y: 269 },   // Battery 2

		{ x: 899, y: 194 },   // Battery 3

		{ x: 216, y: 74 },    // Battery 4

		{ x: 86, y: 459 },   // Battery 5

		{ x: 714, y: 329 },   // Battery 6

		{ x: 476, y: 224 }     // Battery 7

	];

		battery.currentIndex = 1;

		battery.x = battery.locations[0].x;
		battery.y = battery.locations[0].y;

    
		battery.currentIndex = 1;

		battery.x = battery.locations[0].x;

		battery.y = battery.locations[0].y;

		const level8Walls = [
    [520, 520, 40, 40], [560, 520, 40, 40], [600, 520, 40, 40], [640, 520, 40, 40],
    [680, 520, 40, 40], [720, 520, 40, 40], [840, 520, 40, 40], [880, 520, 40, 40],
    [920, 520, 40, 40], [960, 520, 40, 40], [1000, 520, 40, 40], [1040, 520, 40, 40],
    [920, 120, 40, 40], [960, 120, 40, 40], [1000, 120, 40, 40], [1040, 120, 40, 40],
    [1040, 160, 40, 40], [1040, 200, 40, 40], [1040, 240, 40, 40], [1040, 280, 40, 40],
    [1040, 320, 40, 40], [1040, 360, 40, 40], [1040, 400, 40, 40], [1040, 440, 40, 40],
    [1040, 480, 40, 40], [520, 360, 40, 40], [520, 400, 40, 40], [520, 440, 40, 40],
    [520, 480, 40, 40], [400, 360, 40, 40], [400, 400, 40, 40], [400, 440, 40, 40],
    [400, 480, 40, 40], [440, 400, 40, 40], [440, 440, 40, 40], [440, 480, 40, 40],
    [480, 400, 40, 40], [480, 440, 40, 40], [480, 480, 40, 40], [720, 360, 40, 40],
    [720, 400, 40, 40], [720, 440, 40, 40], [720, 480, 40, 40], [200, 360, 40, 40],
    [200, 400, 40, 40], [200, 440, 40, 40], [200, 480, 40, 40], [240, 360, 40, 40],
    [280, 360, 40, 40], [760, 360, 40, 40], [280, 40, 40, 40], [280, 80, 40, 40],
    [280, 120, 40, 40], [280, 160, 40, 40], [280, 200, 40, 40], [600, 40, 40, 40],
    [600, 80, 40, 40], [600, 120, 40, 40], [600, 160, 40, 40], [600, 200, 40, 40],
    [40, 200, 40, 40], [80, 200, 40, 40], [400, 200, 40, 40], [520, 200, 40, 40],
    [920, 200, 40, 40], [400, 160, 40, 40], [440, 160, 40, 40], [480, 160, 40, 40],
    [520, 160, 40, 40], [320, 220, 40, 20], [800, 220, 40, 20], [880, 220, 40, 20],
    [640, 220, 40, 20], [680, 220, 40, 20], [720, 220, 40, 20], [760, 220, 40, 20],
    [800, 360, 40, 20], [880, 360, 40, 20], [640, 360, 40, 20], [560, 360, 40, 20],
    [320, 360, 40, 20], [680, 360, 40, 20], [200, 220, 40, 20], [160, 220, 40, 20],
    [120, 220, 40, 20]
];
		 
	// =====================================
	// CONVERT TO OBSTACLES
	// =====================================

	map.obstacles = level8Walls.map(function(wall){

		return{

			x: wall[0],

			y: wall[1],

			width: wall[2] || WALL_SIZE,

			height: wall[3] || WALL_SIZE

		};

	});
	
	map.furniture = [
	//server Rack
	createFurniture(
        "server_rack",
        900,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        880,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        860,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        840,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        820,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        800,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        780,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        760,
        40,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        900,
        100,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        880,
        100,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        860,
        100,
        20,
        60	
    ),
    createFurniture(
        "server_rack",
        840,
        100,
        20,
        60	
    ),
    
    //Computer
    createFurniture(
        "computer_table",
        660,
        40,
        50,
        20	
    ),
    createFurniture(
        "computer_table",
        450,
        40,
        50,
        20	
    ),
    //Chair
    createFurniture(
        "chair",
        675,
        65,
        20,
        20	
    ),
    createFurniture(
        "chair",
        463,
        65,
        20,
        20	
    ),
    //lab cabinets
    createFurniture(
        "lab_cabinets",
        700,
        426,
        20,
        60	
    ),
    createFurniture(
        "lab_cabinets2",
        440,
        140,
        80,
        20	
    ),
    createFurniture(
        "lab_cabinets2",
        115,
        200,
        80,
        20	
    ),
    createFurniture(
        "lab_cabinets",
        260,
        100,
        20,
        60	
    ),
    createFurniture(
        "lab_cabinets",
        380,
        420,
        20,
        60	
    ),
    
    //lab table
    createFurniture(
        "lab_table",
        80,
        90,
        65,
        30	
    ),
    
    //Generators
    createFurniture(
		"generator",
		325,
		45,
		30,
		30
	),
	createFurniture(
		"generator",
		765,
		405,
		30,
		30
	),

	createFurniture(
		"generator",
		245,
		405,
		30,
		30
	),
    
	];
	
	map.deadBodies = [];

	map.deadBodies.push(
	{

		image: deadBodyImages.bloodsplats7,

		x: 689,
		y: 144,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats3,

		x: 641,
		y: 456,

		width: 30,
		height: 30

	},
	
	{

		image: deadBodyImages.bloodsplats6,

		x: 391,
		y: 59,

		width: 40,
		height: 40

	},
	
	{

		image: deadBodyImages.bloodsplats2,

		x: 111,
		y: 154,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats1,

		x: 500,
		y: 300,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.body1,

		x: 689,
		y: 144,

		width: 30,
		height: 50

	},
	{

		image: deadBodyImages.body11,

		x: 641,
		y: 456,

		width: 50,
		height: 30

	},
	
	{

		image: deadBodyImages.body12,

		x: 391,
		y: 59,

		width: 50,
		height: 30

	},
	
	{

		image: deadBodyImages.body,

		x: 111,
		y: 154,

		width: 50,
		height: 30

	}
	
	)
    
    buildNavigationGrid();
    
   
    
    // =====================================
	// GENERATORS
	// =====================================

	generators.length = 0;

	generators.push(

		{
			x: 340,
			y: 60,
			current: 0,
			required: 3,
			online: false
		},

		{
			x: 260,
			y: 420,
			current: 0,
			required: 2,
			online: false
		},

		{
			x: 780,
			y: 420,
			current: 0,
			required: 2,
			online: false
		}

	);  

    // =====================================
    // ENEMIES
    // =====================================

    createEnemyAt("Walker",599,461);

    createEnemyAt("Runner",756,181);

    createEnemyAt("Walker",166,471);

    createEnemyAt("Walker",206,59);

    createEnemyAt("Tank",569,104);
    
    
    // =====================================
	// EXIT DOOR
	// =====================================

	exitDoor.x = 919;
	exitDoor.y = 265;
	exitDoor.unlocked = false;

}

if(number === 9){

	map.wallThickness = 40;

// =====================================
// LEVEL 9 SETTINGS
// =====================================

	level.batteryGoal = 7;

	battery.locations = [

		{ x: 894, y: 331 },

		{ x: 419,  y: 259 },

		{ x: 84, y: 334 },

		{ x: 324, y: 59 },

		{ x: 534, y: 456 },

		{ x: 874, y: 451 },

		{ x: 871,  y: 64 }

	];

	battery.currentIndex = 0;

	battery.active = true;

	battery.collected = 0;

	battery.x = battery.locations[0].x;

	battery.y = battery.locations[0].y;
	
	explosives.spawnDelay = 3600;

	explosives.spawnActive = false;

	// =====================================
	// MAP
	// (Paste your wall array here later)
	// =====================================

	const level9Walls = [
    [520, 520, 40, 40], [560, 520, 40, 40], [600, 520, 40, 40], [640, 520, 40, 40],
    [680, 520, 40, 40], [720, 520, 40, 40], [840, 520, 40, 40], [880, 520, 40, 40],
    [920, 520, 40, 40], [960, 520, 40, 40], [1000, 520, 40, 40], [1040, 520, 40, 40],
    [920, 120, 40, 40], [960, 120, 40, 40], [1000, 120, 40, 40], [1040, 120, 40, 40],
    [1040, 160, 40, 40], [1040, 200, 40, 40], [1040, 240, 40, 40], [1040, 280, 40, 40],
    [1040, 320, 40, 40], [1040, 360, 40, 40], [1040, 400, 40, 40], [1040, 440, 40, 40],
    [1040, 480, 40, 40], [440, 40, 40, 40], [440, 80, 40, 40], [400, 200, 40, 40],
    [440, 200, 40, 40], [440, 240, 40, 40], [440, 360, 40, 40], [440, 400, 40, 40],
    [440, 440, 40, 40], [440, 480, 40, 40], [240, 40, 40, 40], [240, 80, 40, 40],
    [240, 120, 40, 40], [240, 160, 40, 40], [240, 360, 40, 40], [240, 480, 40, 40],
    [560, 360, 40, 40], [560, 400, 40, 40], [560, 440, 40, 40], [560, 480, 40, 40],
    [600, 360, 40, 40], [640, 360, 40, 40], [680, 0, 40, 40], [720, 40, 40, 40],
    [720, 80, 40, 40], [720, 120, 40, 40], [720, 160, 40, 40], [720, 200, 40, 40],
    [40, 360, 40, 40], [80, 360, 40, 40], [120, 360, 40, 40], [160, 360, 40, 40],
    [200, 360, 40, 40], [460, 120, 20, 40], [840, 220, 40, 20], [840, 360, 40, 20],
    [760, 220, 40, 20], [880, 220, 40, 20], [880, 360, 40, 20], [760, 360, 40, 20],
    [720, 360, 40, 20], [680, 360, 40, 20]
];


	map.obstacles = level9Walls.map(function(wall){

		return{

			x: wall[0],

			y: wall[1],

			width: wall[2] || WALL_SIZE,

			height: wall[3] || WALL_SIZE

		};

	});
	
	map.furniture = [
	
	createFurniture(
		"computer_table3",
		580,
		91,
		140,
		60
	),
	
	//lab cabinets
	createFurniture(
		"lab_cabinets",
		900,
		159,
		20,
		60
	),
	createFurniture(
		"lab_cabinets2",
		900,
		90,
		20,
		60
	),
	createFurniture(
		"lab_cabinets",
		420,
		435,
		20,
		60
	),
	createFurniture(
		"lab_cabinets",
		220,
		130,
		20,
		60
	),
	createFurniture(
		"lab_cabinets2",
		40,
		300,
		20,
		60
	),
	createFurniture(
		"lab_cabinets2_vertical",
		744,
		478,
		80,
		25
	),
	createFurniture(
		"lab_cabinets",
		600,
		440,
		20,
		60
	),
	
	createFurniture(
		"lab_cabinets",
		40,
		430,
		20,
		60
	),
	createFurniture(
		"lab_cabinets2_vertical",
		70,
		478,
		80,
		25
	),
	
	createFurniture(
		"lab_cabinets2_vertical",
		140,
		395,
		80,
		25
	),
	//Computer Table
	createFurniture(
		"computer_table",
		715,
		380,
		50,
		25
	),
	
	//Chair
	createFurniture(
		"chair",
		725,
		410,
		20,
		20
	),
	
	//Refrigerator
	createFurniture(
		"refrigerator",
		480,
		220,
		20,
		50
	),
	
	//Wheel Chairs
	createFurniture(
		"wheel_chair",
		40,
		234,
		30,
		30
	),
	createFurniture(
		"wheel_chair",
		40,
		204,
		30,
		30
	),
	createFurniture(
		"wheel_chair",
		40,
		175,
		30,
		30
	),
	createFurniture(
		"wheel_chair",
		40,
		140,
		30,
		30
	),
	createFurniture(
		"wheel_chair",
		40,
		110,
		30,
		30
	)
	
	];
	
	map.deadBodies = [];

	map.deadBodies.push(
	{

		image: deadBodyImages.bloodsplats4,

		x: 840,
		y: 144,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats1,

		x: 539,
		y: 289,

		width: 40,
		height: 40

	},
	{

		image: deadBodyImages.bloodsplats6,

		x: 364,
		y: 430,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats3,

		x: 739,
		y: 440,

		width: 40,
		height: 40

	},
	{

		image: deadBodyImages.body4,

		x: 840,
		y: 144,

		width: 50,
		height: 30

	},
	{

		image: deadBodyImages.body10,

		x: 539,
		y: 289,

		width: 60,
		height: 30

	},
	{

		image: deadBodyImages.body6,

		x: 364,
		y: 430,

		width: 30,
		height: 50

	},
	{

		image: deadBodyImages.body13,

		x: 739,
		y: 440,

		width: 50,
		height: 30

	}
	
	
	
	
	)
	
		
		buildNavigationGrid();
		
		

// =====================================
// GENERATORS
// (We'll place these later)
// =====================================

		generators.length = 0;

		generators.push(
			{
				x: 420,
				y: 60,
				current: 1,
				required: 1,
				online: true
			},
			{
				x: 220,
				y: 480,
				current: 1,
				required: 1,
				online: true
			},
			{
				x: 70,
				y: 60,
				current: 1,
				required: 1,
				online: true
			},
			{
				x: 800,
				y: 70,
				current: 1,
				required: 1,
				online: true
			},
			{
				x: 620,
				y: 420,
				current: 1,
				required: 1,
				online: true
			}
		);
		

		// =====================================
		// CHEMICALS
		// =====================================

		explosives.chemicalsCollected = 0;

		explosives.carryingExplosive = false;

		explosives.manufacturing = false;

		explosives.progress = 0;

		explosives.completedPods = 0;

		explosives.locations = [

			{
				x: 500,
				y: 100,
				collected: false
			},

			{
				x: 500,
				y: 70,
				collected: false
			},

			{
				x: 530,
				y: 70,
				collected: false
			},

			{
				x: 560,
				y: 70,
				collected: false
			}

		];
		

		// =====================================
		// EXIT DOOR
		// (We'll place it later)
		// =====================================
			exitDoor.x = 480;
			exitDoor.y = 496;
		
			exitDoor.width = 80;
			exitDoor.height = 40;
			exitDoor.unlocked = false;

		// =====================================
		// ENEMIES
		// (We'll place them later)
		// =====================================

			
	}
	
	if(number === 10){

		map.wallThickness = 40;

		level.batteryGoal = 20;

		battery.locations = [

		{ x: 80,  y: 460 },
		{ x: 890, y: 320 },
		{ x: 570, y: 80  },
		{ x: 290, y: 440 },
		{ x: 800, y: 440 },

		{ x: 220, y: 70  },
		{ x: 490, y: 370 },
		{ x: 880, y: 170 },
		{ x: 70,  y: 380 },
		{ x: 270, y: 440 },

		{ x: 750, y: 330 },
		{ x: 140, y: 110 },
		{ x: 680, y: 440 },
		{ x: 350, y: 170 },
		{ x: 120, y: 450 },

		{ x: 490, y: 240 },
		{ x: 880, y: 460 },
		{ x: 80,  y: 280 },
		{ x: 880, y: 80  },
		{ x: 300, y: 280 }

	];
	
		shuffleArray(battery.locations);

		battery.currentIndex = 0;

		battery.collected = 0;

		player.hasBattery = false;

		battery.active = true;

		battery.x = battery.locations[0].x;

		battery.y = battery.locations[0].y;

		const level10Walls = [
    [520, 520, 40, 40], [560, 520, 40, 40], [600, 520, 40, 40], [640, 520, 40, 40],
    [680, 520, 40, 40], [720, 520, 40, 40], [840, 520, 40, 40], [920, 120, 40, 40],
    [960, 120, 40, 40], [1000, 120, 40, 40], [1040, 120, 40, 40], [880, 520, 40, 40],
    [920, 520, 40, 40], [960, 520, 40, 40], [1000, 520, 40, 40], [1040, 520, 40, 40],
    [1040, 160, 40, 40], [1040, 200, 40, 40], [1040, 240, 40, 40], [1040, 280, 40, 40],
    [1040, 320, 40, 40], [1040, 360, 40, 40], [1040, 400, 40, 40], [1040, 440, 40, 40],
    [1040, 480, 40, 40], [520, 360, 40, 40], [520, 400, 40, 40], [520, 440, 40, 40],
    [520, 480, 40, 40], [400, 360, 40, 40], [400, 400, 40, 40], [440, 400, 40, 40],
    [480, 400, 40, 40], [400, 440, 40, 40], [440, 440, 40, 40], [480, 440, 40, 40],
    [400, 480, 40, 40], [440, 480, 40, 40], [480, 480, 40, 40], [720, 360, 40, 40],
    [720, 400, 40, 40], [720, 440, 40, 40], [720, 480, 40, 40], [200, 360, 40, 40],
    [200, 400, 40, 40], [200, 440, 40, 40], [200, 480, 40, 40], [240, 360, 40, 40],
    [280, 360, 40, 40], [560, 360, 40, 40], [680, 360, 40, 40], [760, 360, 40, 40],
    [280, 40, 40, 40], [280, 80, 40, 40], [280, 120, 40, 40], [280, 160, 40, 40],
    [280, 200, 40, 40], [600, 40, 40, 40], [600, 80, 40, 40], [600, 120, 40, 40],
    [600, 160, 40, 40], [600, 200, 40, 40], [40, 200, 40, 40], [80, 200, 40, 40],
    [120, 200, 40, 40], [160, 200, 40, 40], [520, 200, 40, 40], [640, 200, 40, 40],
    [720, 200, 40, 40], [760, 200, 40, 40], [920, 200, 40, 40], [440, 160, 40, 40],
    [480, 160, 40, 40], [400, 160, 40, 40], [400, 200, 40, 40], [520, 160, 40, 40],
    [680, 200, 40, 40], [880, 220, 40, 20], [800, 220, 40, 20], [320, 220, 40, 20],
    [320, 360, 40, 20], [640, 360, 40, 20], [800, 360, 40, 20], [880, 360, 40, 20]
];
	// =====================================
	// CONVERT TO OBSTACLES
	// =====================================

		map.obstacles = level10Walls.map(function(wall){

			return{

				x: wall[0],

				y: wall[1],

				width: wall[2] || WALL_SIZE,

				height: wall[3] || WALL_SIZE

			};

		});
		
		map.furniture = [
		//X-Ray Machine
		createFurniture(
			"x_ray_machine",
			800,
			90,
			120,
			60
		),
		
		//computer table
		createFurniture(
			"computer_table2",
			660,
			40,
			50,
			20
		),
		
		//Xerox Machine
		createFurniture(
			"xerox_machine",
			235,
			327,
			60,
			35
		),
		
		//Research Table
		createFurniture(
			"lab_research_table",
			150,
			89,
			80,
			35
		),
		createFurniture(
			"lab_research_table_vertical",
			60,
			89,
			35,
			80
		),
		//Crate
		createFurniture(
			"crate",
			369,
			40,
			35,
			35
		),
		//Lab Cabinets
		createFurniture(
			"lab_cabinets",
			380,
			420,
			20,
			60
		),
		createFurniture(
			"lab_cabinets",
			700,
			420,
			20,
			60
		),
		createFurniture(
			"lab_cabinets2",
			760,
			420,
			20,
			60
		),
		//Fire Extinguisher
		createFurniture(
			"fire_extinguisher",
			744,
			350,
			10,
			10
		),
		createFurniture(
			"fire_extinguisher",
			755,
			350,
			10,
			10
		),
		createFurniture(
			"fire_extinguisher",
			766,
			350,
			10,
			10
		),
		createFurniture(
			"fire_extinguisher",
			777,
			350,
			10,
			10
		),
		createFurniture(
			"fire_extinguisher",
			788,
			350,
			10,
			10
		),
		//Refrigerator
		createFurniture(
			"refrigerator",
			560,
			420,
			20,
			50
		),
		];
		
		map.deadBodies = [];

		map.deadBodies.push(
		{

			image: deadBodyImages.bloodsplats3,

			x: 179,
			y: 159,

			width: 30,
			height: 30

		},
		{

			image: deadBodyImages.bloodsplats6,

			x: 689,
			y: 284,

			width: 30,
			height: 30

		},
		{

			image: deadBodyImages.bloodsplats2,

			x: 350,
			y: 124,

			width: 30,
			height: 30

		},
		{

			image: deadBodyImages.bloodsplats5,

			x: 850,
			y: 134,

			width: 30,
			height: 30

		},
		{

			image: deadBodyImages.bloodsplats4,

			x: 669,
			y: 444,

			width: 30,
			height: 35

		},
		
		{

			image: deadBodyImages.body7,

			x: 350,
			y: 124,

			width: 30,
			height: 50

		},
		{

			image: deadBodyImages.body8,

			x: 850,
			y: 134,

			width: 30,
			height: 50

		},
		{

			image: deadBodyImages.body9,

			x: 669,
			y: 444,

			width: 30,
			height: 45

		}
		
		)
		
		buildNavigationGrid();
		
		

		// =====================================
		// ENEMIES
		// =====================================

		createEnemyAt("Walker", 734, 124);
		
		createEnemyAt("Tank", 636, 461);
		
		createEnemyAt("Runner", 191, 64);

		// =====================================
		// EXIT DOOR
		// =====================================

		exitDoor.x = 919;

		exitDoor.y = 240;
		
		exitDoor.width = 40;

		exitDoor.height = 80;

		exitDoor.unlocked = false;
		
		walkerSpawnTimer = Date.now();

		runnerSpawnTimer = Date.now();

		tankSpawnTimer = Date.now();
		
		// =====================================
		// RESET HIVE
		// =====================================

		hive.health = hive.maxHealth;

		hive.alive = true;

		hive.pulse = 0;

		hiveFlash = 0;

		hiveShake = 0;

		hiveShakeOffset = 0;

		hiveRecoil = 0;

	}
	
	
	if(number === 11){

    map.wallThickness = 40;

    // =====================================
    // POWER CELLS
    // =====================================

    level.batteryGoal = 5;

	battery.locations = [
		{ x:450, y:470 },
		{ x:550, y:320 },
		{ x:760, y:440 },
		{ x:640, y:90 },
		{ x:80, y:340 }
	];

	shuffleArray(battery.locations);

	battery.currentIndex = 0;

	battery.x = battery.locations[0].x;
	battery.y = battery.locations[0].y;

	battery.active = true;
	battery.collected = 0;

    // =====================================
    // MAP
    // (Paste your wall array here)
    // =====================================

    const level11Walls = [
    [520, 520, 40, 40], [560, 520, 40, 40], [600, 520, 40, 40], [640, 520, 40, 40],
    [680, 520, 40, 40], [720, 520, 40, 40], [840, 520, 40, 40], [880, 520, 40, 40],
    [920, 520, 40, 40], [960, 520, 40, 40], [1000, 520, 40, 40], [1040, 520, 40, 40],
    [920, 120, 40, 40], [960, 120, 40, 40], [1000, 120, 40, 40], [1040, 120, 40, 40],
    [1040, 160, 40, 40], [1040, 200, 40, 40], [1040, 240, 40, 40], [1040, 280, 40, 40],
    [1040, 320, 40, 40], [1040, 360, 40, 40], [1040, 400, 40, 40], [1040, 440, 40, 40],
    [1040, 480, 40, 40], [480, 40, 40, 40], [480, 80, 40, 40], [480, 120, 40, 40],
    [480, 160, 40, 40], [480, 200, 40, 40], [480, 320, 40, 40], [480, 360, 40, 40],
    [480, 400, 40, 40], [480, 440, 40, 40], [480, 480, 40, 40], [360, 40, 40, 40],
    [360, 80, 40, 40], [360, 120, 40, 40], [360, 160, 40, 40], [360, 200, 40, 40],
    [680, 160, 40, 40], [680, 360, 40, 40], [680, 400, 40, 40], [680, 440, 40, 40],
    [680, 480, 40, 40], [920, 200, 40, 40], [920, 280, 40, 40], [920, 320, 40, 40],
    [520, 360, 40, 40], [560, 360, 40, 40], [120, 120, 40, 40], [120, 160, 40, 40],
    [120, 200, 40, 40], [120, 320, 40, 40], [120, 360, 40, 40], [120, 480, 40, 40],
    [160, 120, 40, 40], [200, 120, 40, 40], [240, 120, 40, 40], [160, 320, 40, 40],
    [200, 320, 40, 40], [240, 320, 40, 40], [280, 320, 40, 40], [320, 320, 40, 40],
    [360, 320, 40, 40], [280, 480, 40, 40], [40, 200, 40, 40], [80, 200, 40, 40],
    [120, 400, 20, 40], [300, 400, 20, 40], [600, 360, 40, 20], [760, 360, 40, 20],
    [800, 360, 40, 20], [840, 360, 40, 20], [760, 180, 40, 20], [800, 180, 40, 20],
    [840, 180, 40, 20], [560, 180, 40, 20], [600, 180, 40, 20], [520, 180, 40, 20],
    [700, 40, 20, 40], [700, 80, 20, 40], [300, 440, 20, 40], [120, 80, 20, 40]
];

    map.obstacles = level11Walls.map(function(wall){

        return{

            x: wall[0],

            y: wall[1],

            width: wall[2] || WALL_SIZE,

			height: wall[3] || WALL_SIZE
        };

    });
    
    map.furniture = [
    //x-Ray Machine
    createFurniture(
		"x_ray_machine",
		800,
		420,
		120,
		60
	),
	//Chair
	createFurniture(
		"chair",
		800,
		380,
		20,
		20
	),
	//Refrigerator	
	createFurniture(
		"refrigerator",
		320,
		420,
		20,
		50
	),
	
	//Xerox Machine
	createFurniture(
		"xerox_machine",
		160,
		360,
		50,
		30
	),
	
	//Lab_Cabinets
	createFurniture(
		"lab_cabinets2",
		180,
		160,
		80,
		20
	),
	createFurniture(
		"lab_cabinets2",
		540,
		160,
		80,
		20
	),
	createFurniture(
		"lab_cabinets",
		100,
		360,
		20,
		60
	),
	createFurniture(
		"lab_cabinets",
		660,
		420,
		20,
		60
	),
	createFurniture(
		"lab_cabinets",
		900,
		80,
		20,
		60
	),
	
	//computer table
	createFurniture(
		"computer_table2",
		540,
		40,
		50,
		25
	),
					
    
    ];
    
    map.deadBodies = [];

	map.deadBodies.push(
	
	{

		image: deadBodyImages.bloodsplats7,

		x: 829,
		y: 304,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats6,

		x: 759,
		y: 439,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats3,

		x: 350,
		y: 439,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.bloodsplats5,

		x: 574,
		y: 94,

		width: 40,
		height: 40

	},
	{

		image: deadBodyImages.body6,

		x: 759,
		y: 439,

		width: 30,
		height: 50

	},
	{

		image: deadBodyImages.body8,

		x: 350,
		y: 439,

		width: 30,
		height: 50

	},
	{

		image: deadBodyImages.body11,

		x: 574,
		y: 94,

		width: 60,
		height: 40

	}
	
	)
    
    buildNavigationGrid();
    
   
    

    // =====================================
    // GENERATORS
    // =====================================

    generators.length = 0;

    generators.push(

        {
            x: 150,
            y: 120,
            current: 0,
            required: 1,
            online: false
        },

        {
            x: 600,
            y: 420,
            current: 0,
            required: 1,
            online: false
        },

        {
            x: 980,
            y: 200,
            current: 0,
            required: 1,
            online: false
        }

    );

	
	// =====================================
	// NETWORK TERMINALS
	// =====================================

	terminals.connected = 0;

	terminals.locations = [

		{
			x: 220,
			y: 90,
			online: false,
			progress: 0
		},

		{
			x: 750,
			y: 70,
			online: false,
			progress: 0
		},

		{
			x: 550,
			y: 430,
			online: false,
			progress: 0
		}

	];
	
	terminals.progress = 0;

	terminals.connecting = false;

	terminals.current = null;


	// =====================================
	// EXIT DOORS
	// =====================================

	exitDoors.length = 0;

	exitDoors.push(

		{
			x: 200,
			y: 498,
			width: 80,
			height: 40,
			unlocked: false,
			real: false
		},

		{
			x: 2,
			y: 120,
			width: 40,
			height: 80,
			unlocked: false,
			real: false
		},

		{
			x: 919,
			y: 243,
			width: 40,
			height: 80,
			unlocked: false,
			real: false
		}

	);
	
	// =====================================
	// RANDOM REAL EXIT
	// =====================================

	let realDoor = Math.floor(

		Math.random() * exitDoors.length

	);

	exitDoors[realDoor].real = true;

	console.log(

		"Real Exit:",

		realDoor

	);
	
			
    // =====================================
    // PLAYER
    // =====================================

    player.x = 60;

    player.y = 60;

    // =====================================
    // ENEMIES
    // =====================================

    createEnemyAt("Walker",879,269);
    createEnemyAt("Walker",604,461);
    
    createEnemyAt("Runner",561,114);

    createEnemyAt("Tank",79,54);

}

if(number === 12){

    map.wallThickness = 40;

	// =====================================
	// LEVEL 12 BATTERIES
	// =====================================

	level.batteryGoal = 7;

	battery.locations = [

		{ x:260, y:420 },
		{ x:660, y:420 },
		{ x:620, y:100 },
		{ x:420, y:270 },
		{ x:170, y:460 },
		{ x:80, y:130 },
		{ x:320, y:90 }

	];

	shuffleArray(battery.locations);

	battery.currentIndex = 0;

	battery.collected = 0;

	battery.active = true;

	battery.x = battery.locations[0].x;

	battery.y = battery.locations[0].y;
    // =====================================
    // MAP
    // =====================================

    const level12Walls = [
    [520, 520, 40, 40], [560, 520, 40, 40], [600, 520, 40, 40], [640, 520, 40, 40],
    [680, 520, 40, 40], [720, 520, 40, 40], [840, 520, 40, 40], [920, 120, 40, 40],
    [960, 120, 40, 40], [1000, 120, 40, 40], [1040, 120, 40, 40], [880, 520, 40, 40],
    [920, 520, 40, 40], [960, 520, 40, 40], [1000, 520, 40, 40], [1040, 520, 40, 40],
    [1040, 160, 40, 40], [1040, 200, 40, 40], [1040, 240, 40, 40], [1040, 280, 40, 40],
    [1040, 320, 40, 40], [1040, 360, 40, 40], [1040, 400, 40, 40], [1040, 440, 40, 40],
    [1040, 480, 40, 40], [720, 360, 40, 40], [720, 400, 40, 40], [720, 440, 40, 40],
    [720, 480, 40, 40], [600, 200, 40, 40], [880, 200, 40, 40], [920, 200, 40, 40],
    [200, 400, 40, 40], [200, 440, 40, 40], [200, 480, 40, 40], [200, 360, 40, 40],
    [600, 360, 40, 40], [600, 400, 40, 40], [600, 440, 40, 40], [600, 480, 40, 40],
    [400, 40, 40, 40], [400, 80, 40, 40], [400, 120, 40, 40], [400, 160, 40, 40],
    [400, 200, 40, 40], [400, 360, 40, 40], [400, 480, 40, 40], [360, 120, 40, 40],
    [320, 120, 40, 40], [280, 120, 40, 40], [80, 160, 40, 40], [40, 160, 40, 40],
    [240, 360, 40, 40], [280, 360, 40, 40], [320, 360, 40, 40], [360, 360, 40, 40],
    [440, 360, 40, 40], [480, 360, 40, 40], [280, 160, 40, 40], [280, 320, 40, 40],
    [440, 200, 40, 40], [840, 220, 40, 20], [780, 120, 20, 40], [620, 120, 20, 40],
    [520, 220, 40, 20], [620, 40, 20, 40], [780, 80, 20, 40], [780, 40, 20, 40],
    [120, 180, 40, 20], [160, 180, 40, 20], [200, 180, 40, 20], [880, 360, 40, 20],
    [640, 360, 40, 20], [800, 360, 40, 20], [760, 360, 40, 20], [560, 220, 40, 20],
    [620, 160, 20, 40], [720, 220, 40, 20], [760, 220, 40, 20], [760, 200, 40, 20],
    [680, 220, 40, 20], [640, 220, 40, 20], [280, 240, 20, 40], [280, 280, 20, 40],
    [420, 440, 20, 40]
];

    map.obstacles = level12Walls.map(function(wall){

        return{

            x: wall[0],

            y: wall[1],

            width: wall[2] || WALL_SIZE,

			height: wall[3] || WALL_SIZE

        };

    });
    
    map.furniture = [
    //Computer Table
    createFurniture(
		"computer_table2",
		300,
		400,
		50,
		25
	),
	
	//Refrigerator
    createFurniture(
		"refrigerator",
		730,
		70,
		20,
		50
	),
	//Distress Signal
	createFurniture(
		"signal_device",
		70,
		70,
		20,
		30
	),
	
	//Lab_cabinets
	createFurniture(
		"lab_cabinets",
		580,
		439,
		20,
		60
	),
	createFurniture(
		"lab_cabinets",
		900,
		70,
		20,
		60
	),
	createFurniture(
		"lab_cabinets",
		600,
		130,
		20,
		60
	),
	createFurniture(
		"lab_cabinets2",
		800,
		85,
		20,
		60
	),
	createFurniture(
		"lab_cabinets2_vertical",
		320,
		100,
		80,
		20
	),
	//Crate
	createFurniture(
		"crate",
		440,
		439,
		30,
		30
	),
	//Toilet
	createFurniture(
		"commode2",
		650,
		470,
		30,
		35
	),
	//Sink
	createFurniture(
		"laboratory_sink",
		645,
		380,
		30,
		20
	),
	//Bin
	createFurniture(
		"lab_waste_container",
		700,
		430,
		20,
		20
	),
	
	//Microscope
	createFurniture(
		"microscope",
		780,
		375,
		50,
		25
	),
	//Chair
	createFurniture(
		"chair",
		795,
		400,
		20,
		20
	),
	//Wheel Chair
	createFurniture(
		"wheel_chair_vertical",
		445,
		160,
		30,
		30
	),
	createFurniture(
		"wheel_chair_vertical",
		445,
		130,
		30,
		30
	),
	createFurniture(
		"wheel_chair_vertical",
		445,
		100,
		30,
		30
	),

    ];
    
    map.deadBodies = [];

	map.deadBodies.push(
	
	{

		image: deadBodyImages.bloodsplats2,

		x: 689,
		y: 269,

		width: 40,
		height: 40

	},
	{

		image: deadBodyImages.bloodsplats3,

		x: 230,
		y: 300,

		width: 40,
		height: 40

	},
	{

		image: deadBodyImages.bloodsplats3,

		x: 311,
		y: 430,

		width: 40,
		height: 40

	},
	{

		image: deadBodyImages.bloodsplats6,

		x: 811,
		y: 400,

		width: 40,
		height: 40

	},
	{

		image: deadBodyImages.bloodsplats4,

		x: 561,
		y: 160,

		width: 30,
		height: 30

	},
	{

		image: deadBodyImages.body10,

		x: 311,
		y: 430,

		width: 60,
		height: 40

	},
	{

		image: deadBodyImages.body12,

		x: 811,
		y: 400,

		width: 60,
		height: 40

	},
	{

		image: deadBodyImages.body1,

		x: 561,
		y: 160,

		width: 30,
		height: 50

	}
	
	)

    buildNavigationGrid();
    
    

    // =====================================
    // MISSION OBJECTIVES
    // =====================================

    objectives.completed = 0;
    objectives.rescueStarted = false;
	objectives.rescueTimer = 0;

    objectives.locations = [

    {
        type: "research",
        x: 300,
        y: 400,
        completed: false,
        progress: 0
    },

    {
        type: "dna",
        x: 730,
        y: 70,
        completed: false,
        progress: 0
    },

    {
        type: "signal",
        x: 70,
        y: 70,
        completed: false,
        progress: 0
    }

];

    objectives.current = null;

    objectives.nearby = false;

    objectives.interacting = false;

    // =====================================
	// EXIT DOOR
	// =====================================

	exitDoor.x = 3;

	exitDoor.y = 240;

	exitDoor.width = 40;

	exitDoor.height = 80;

	exitDoor.unlocked = false;
	
	exitDoor.destroyed = false;

    // =====================================
    // PLAYER
    // =====================================

    player.x = 60;

    player.y = 60;

	// =====================================
	// LEVEL 12 ENEMIES
	// =====================================

	createEnemyAt("Walker", 509, 466);

	createEnemyAt("Walker", 351, 69);

	createEnemyAt("Runner", 126, 466);

	createEnemyAt("Tank", 824, 464);

}
				

    localStorage.setItem(
        "currentLevel",
        number
    );
    
    // =====================================
	// FLOOR TEXTURE
	// =====================================

	if(number >= 1 && number <= 3){

		currentFloor = floor1;

	}
	else if(number >= 4 && number <= 6){

		currentFloor = floor2;

	}
	else if(number >= 7 && number <= 9){

		currentFloor = floor3;

	}
	else{

		currentFloor = floor4;

	}


    player.x = 400;

    player.y = 300;


    light.battery = 100;

    light.active = true;

}


function loadSavedLevel(){

    const savedLevel = localStorage.getItem("currentLevel");

    if(savedLevel === null){

        loadLevel(1);

    }
    else{

        loadLevel(Number(savedLevel));

    }

}


function startNextLevel(){
	
	level.state = "loading";

    level.loading = true;

    level.loadingMessage =
        "Loading Level " + (level.current + 1) + "...";

    setTimeout(function(){

		loadLevel(level.current + 1);

		levelComplete = false;

		level.loading = false;

		level.state = "briefing";

		startLevelBriefing(level.current);

	},3000);

}


