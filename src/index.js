
// Empty array 
const flock = [];
const maxBoids = 100;


function setup() 
{
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i <= maxBoids; i++)
    {
        flock.push(new boid())
    }
}

function draw() 
{
    background(0);
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}

