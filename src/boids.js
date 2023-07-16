
class boid
{
    constructor()
    {
        this.pos = createVector(300, 300);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1.5));
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
        stroke(255, 255, 255);
        point(this.pos.x, this.pos.y);
    }
}



