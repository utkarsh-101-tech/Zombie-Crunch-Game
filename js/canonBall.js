class CanonBall {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 0,
            density: 10,
            friction: 1.0
        }
        this.image = loadImage("assets/cannonball.png");
        this.smokeImg = loadImage("assets/smoke.png");
        this.r = 28;
        this.path = [];
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();

        var trajectory = [this.body.position.x, this.body.position.y]
        this.path.push(trajectory);
        for (var i = 0; i < this.path.length; i = i + 3) {
            image(this.smokeImg, this.path[i][0], this.path[i][1], 10, 10);
        }

    }

    shoot() {
        var vel = p5.Vector.fromAngle(canon.angle + 0.65);
        vel.mult(windowWidth/70);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: vel.x, y: vel.y });

    }

}