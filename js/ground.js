class Ground {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }

        this.img = loadImage("assets/tile.png");

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        fill("black");
            imageMode(CENTER);
            image(this.img, 0, 0, this.width, this.height+50);
        pop();

    }
}