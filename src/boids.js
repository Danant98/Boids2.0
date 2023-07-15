
class boid
{
    constructor()
    {
        this.pos = createVector(150, 150);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1.5));
        this.color = "#FFFFFF";
    }

    move()
    {   
        // TO BE IMPLEMENTED
        return -1;
    }

    alignment(boid)
    {   
        // TO BE IMPLEMENTED
        return -1; 
    }

    show()
    {
        strokeWeight(10);
        stroke(75, 235, 255);
        point(this.pos.x, this.pos.y)

    }
}



