class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        image(this.sling2,172,20)
        image(this.sling1,200,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
             strokeWeight(8);  
            } else{
                strokeWeight(5);
            }
            
            stroke("#301608");
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+10);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+10);
            image(this.sling3,pointA.x-25,pointA.y-15,15,25);
        }
    }
    
}