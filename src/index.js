
// Empty array 
const flock = [];
const maxBoids = 1;


function setup() 
{
    createCanvas(800, 600);

    boids = new boid()

}

function draw() 
{
    background(0, 0, 255);
    boids.show()
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}

