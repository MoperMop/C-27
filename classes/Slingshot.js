class Slingshot{
    constructor(body1,body2,color){
        var options = {
            bodyA: body1,
            bodyB: body2,
            length: 10,
            stiffness: 0.04
        };
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.color = color;
    }
    display(){
        var A = this.sling.bodyA.position;
        var B = this.sling.bodyB.position;

        strokeWeight(3.258);
        stroke(this.color);
        line(A.x,A.y,B.x,B.y);
    }
}