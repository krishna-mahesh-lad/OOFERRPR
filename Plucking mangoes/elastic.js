class Elastic {
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.02,
            length : 1
        }
        this.pointB = pointB;
        this.elastic = Matter.Constraint.create(options);
        World.add(world,this.elastic);
    }

    fly() {
        this.elastic.bodyA = null;
    }

    display() {
        if (this.elastic.bodyA) {
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}