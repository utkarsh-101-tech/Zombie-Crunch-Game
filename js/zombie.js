class Zombie {
    constructor(x, y, w, h, pos) {
        var options = {
            isStatic: false,
            density:100
        }
        this.bossZomb = loadAnimation("assets/wlk/boss/(1).png","assets/wlk/boss/(2).png","assets/wlk/boss/(3).png","assets/wlk/boss/(4).png","assets/wlk/boss/(5).png","assets/wlk/boss/(6).png","assets/wlk/boss/(7).png","assets/wlk/boss/(8).png","assets/wlk/boss/(9).png","assets/wlk/boss/(10).png")
        this.zombieImg = loadAnimation("assets/wlk/(1).png", "assets/wlk/(2).png", "assets/wlk/(3).png", "assets/wlk/(4).png", "assets/wlk/(5).png", "assets/wlk/(6).png", "assets/wlk/(7).png", "assets/wlk/(8).png", "assets/wlk/(9).png", "assets/wlk/(10).png");
        this.body = Bodies.rectangle(x, y, w, 206, options);
        this.width = w;
        this.height = h;
        this.life = 100;
        this.hpBar;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        if(playingLevel<4){
            animation(this.zombieImg, 0, 0);
            }
            else{
                animation(this.bossZomb, 0, 0);  
            }
       
        
    noFill();
    strokeWeight(3);
    stroke("black");   
    rect(-25,-90,50,10);
    if(this.life>40){
    fill("#3DDA48");
    }
    else{
    fill("#F10000");
    }
   this.hpBar= rect(-25,-90,this.life/2,10);
   image(heartImg,-25,-85,15,15);
    pop();
    }

    move() {
        if(this.life>60){
            Matter.Body.translate(this.body, { x: -1.75, y: 0 });
        }
        else if(this.life<60){
            Matter.Body.translate(this.body, { x: -3, y: 0 });
        }
       
    }
    
}