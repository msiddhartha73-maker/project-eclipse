// =====================================
// NAVIGATION GRID
// =====================================

const navigation = {

    cellSize: 40,

    cols: 0,

    rows: 0,

    grid: []

};


// =====================================
// BUILD NAVIGATION GRID
// =====================================

function buildNavigationGrid(){

    navigation.cols = Math.floor(map.width / navigation.cellSize);

    navigation.rows = Math.floor(map.height / navigation.cellSize);

    navigation.grid = [];

    for(let y = 0; y < navigation.rows; y++){

        navigation.grid[y] = [];

        for(let x = 0; x < navigation.cols; x++){

            navigation.grid[y][x] = 0;

        }

    }

    for(let obstacle of map.obstacles){

        let gx = Math.floor(obstacle.x / navigation.cellSize);

        let gy = Math.floor(obstacle.y / navigation.cellSize);

        if(

            gx >= 0 &&
            gx < navigation.cols &&
            gy >= 0 &&
            gy < navigation.rows

        ){

            navigation.grid[gy][gx] = 1;

        }

    }

}

// =====================================
// IS THIS CELL WALKABLE?
// =====================================

function isWalkable(col, row){

    if(

        col < 0 ||
        row < 0 ||
        col >= navigation.cols ||
        row >= navigation.rows

    ){

        return false;

    }

    return navigation.grid[row][col] === 0;

}

// =====================================
// WORLD TO GRID
// =====================================

function worldToGrid(x, y){

    return{

        col: Math.floor(x / navigation.cellSize),

        row: Math.floor(y / navigation.cellSize)

    };

}

// =====================================
// GRID TO WORLD
// =====================================

function gridToWorld(col, row){

    return{

        x: col * navigation.cellSize + navigation.cellSize / 2,

        y: row * navigation.cellSize + navigation.cellSize / 2

    };

}
