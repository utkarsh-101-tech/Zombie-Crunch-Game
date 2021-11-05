class Bat {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true,
            density:100
        }
        this.bat = loadAnimation("assets/bat1.png","assets/bat2.png","assets/bat3.png","assets/bat4.png")

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;        
        animation(this.bat,pos.x,pos.y);
        Matter.Body.translate(this.body, { x: -3.7, y:0 });
    }

}