// P5.JS TEMPLATE

// Global Variables
let player1;
let platform1;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(600, 400);
    
    // Initialize Global Variables
    player1 = {
        x: 200,
        y: 380,
        sz: 20,
        col: "red",
        dy: 0,
        accel: 1
    }
    
    if (localStorage.jumps === undefined) {
        localStorage.jumps = 0;
    }
    
    platform1 = {
        x: 300,
        y: 250,
        w: 100,
        h: 20
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // LOGIC
    player1.y += player1.dy; // Move vertically
    player1.dy += player1.accel; // Apply Gravity
    if (player1.y + player1.sz > height) {
        player1.y = height - player1.sz;
    }
    
    
    // DRAW
    // Draw Player
    background(255);
    noStroke();
    fill(player1.col);
    rect(player1.x, player1.y, player1.sz, player1.sz);
    
    // Draw Platform
    fill("grey");
    rect(platform1.x, platform1.y, platform1.w, platform1.h);
    
    // Draw Jumps
    fill(0);
    textSize(48);
    text(localStorage.jumps, 100, 50);
}

// EVENT FUNCTIONS
function keyPressed() {
    if (keyCode == UP_ARROW) {
        player1.dy = -30;
        localStorage.jumps++;
    }
}