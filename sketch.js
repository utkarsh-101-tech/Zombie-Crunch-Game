const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground, canon, canonBall,scoreFont,finisher,score=0,intructionOpen=1,pamphlet,levels=[];
var poster,logoScale=0;
var canonAngle = -90;
var balls = [];
var maxZombies,maxBats,levelSelector=1;
var zombies = [];
var shots = 0;
const GameState = {
    intro:1,
    home: 2,
    load: 3,
    play: 4,
    over:5,
    finish:6
};
var w = 0;
var gameState = GameState.intro;
var play, form, zombieImg, dead;
var gamePlay,victory,lobby,zombieNoise,click,explosion,playingLevel=1,plLevelFlag=1;
var flag="start",flag2=1,flagFinish=1,formFlag=1,shotSet=1,heartImg,bats=[];
var level=1,gameStart=false,levelsUnlocked=[],logoFlag=1;
var sign,bush,floor,bone,head,skeleton;

function preload() 
{scoreFont=loadFont("assets/font/Delight Candles .ttf");
    bg = loadImage("assets/BG.png");
    menuBg = loadImage("assets/menubg.jpg");
    heartImg =  loadImage("assets/heart.png")
    logoload = loadImage("assets/logo1.png");
    gameloading = loadImage("assets/loadingBg.jpg");
    lobby = loadSound("assets/audio/lobby.mp3");
    gamePlay = loadSound("assets/audio/inGame.mp3");
victory = loadSound("assets/audio/victory1.mp3");
zombieNoise = loadSound("assets/audio/zombieAudio.mp3");
click = loadSound("assets/audio/click.mp3");
explosion = loadSound("assets/audio/cannon_explosion.mp3");
 sign = loadImage("assets/ArrowSign.png")
bush =loadImage("assets/Bush (1).png");
floor = loadImage("assets/floor.png");
bone =loadImage("assets/Bone (3).png");
head =loadImage("assets/Bone (2).png");
skeleton =loadImage("assets/Skeleton.png");
}
function setup()
 {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(windowWidth / 2, windowHeight * 9/ 10,2*windowWidth, windowHeight / 7);
    angleMode(RADIANS);
    canon = new Canon(windowWidth / 8, windowHeight /2, windowWidth/14, windowHeight/8, -PI / 4);
}

function draw() {
    switch(gameState){
        case GameState.intro:intro()
        break;
        case GameState.home:home()
        break;
        case GameState.load:loadGame()
        break;
        case GameState.play:playGame()
        break;
        case GameState.over:gameOver()
        break;
        case GameState.finish:finish()
        break;
        default : home()
    }
}

function intro()
 { // initial starting graphics
        background("black");
        push();
        translate(windowWidth / 2, windowHeight / 2);       
        imageMode(CENTER);
       image(logoload, 0, 0, windowWidth / 3 + 10, windowWidth / 3 + 10);
        pop();
        
        setTimeout(() => {
            gameState = GameState.home;
        }, 4000);
}

function home() {
    if(victory.isPlaying()){
        victory.stop();
    }
    if(flag==="start"){
    lobby.play();
    lobby.loop();
    flag="end";
    }
    if(formFlag===1){
    form = new Form();
    formFlag=0;
    }
        background(menuBg);
        rectMode(CENTER);
        form.display();
}

function loadGame() { //game's loding screen
    if(form){
    form.hide();
    }
        background(gameloading);
         w = w + 10;
        fill("white");
        rect(0, windowHeight - 20, w, windowHeight / 20);
        if (w > windowWidth) {
         gameState = GameState.play;
        }
}

function playGame() { // main state of game when playing  
if(flag2===1){
    gamePlay.play();
    zombieNoise.loop();
    flag2=0;
}
if(playingLevel===1 &&shotSet!==0){
shots=10;
maxZombies=4;
maxBats=0;
shotSet=0;
}
    if(playingLevel===2 &&shotSet!==0){
        shots=14;
        maxZombies=6;
        maxBats=0;
        shotSet=0;
    }
    if(playingLevel===3 &&shotSet!==0){
        shots=19;
        maxZombies=7;
        maxBats=2;
        shotSet=0;
     }
    if(playingLevel===4 &&shotSet!==0){
        shots=28;
        maxZombies=5;
        maxBats=5;
        shotSet=0;
    }     
    if(playingLevel===5 &&shotSet!==0){
        shots=38;
        maxZombies=7;
        maxBats=7;
        shotSet=0;
    }     
    if(playingLevel===6 &&shotSet!==0){        
        shots=50;
        maxZombies=1;
        maxBats=0;
        shotSet=0;
    }             
        background(bg);
        Engine.update(engine);
        ground.display();
        canon.display();
        sendzombie();
        for (var i = 0; i < balls.length; i++) {
            ballDisplay(balls[i], i);
        }
        for (i = 0; i < zombies.length; i++) {
            zombies[i].display();
            zombies[i].move();            
        }
        for (i = 0; i < bats.length; i++) {
            bats[i].display();           
        }
        fill(255);
        textFont('scoreFont',40);        
        text("Score "+score,7*windowWidth/8,windowHeight/8);
        if(shots<5)
        {
        fill("red");
        stroke(0)
        }else{
            fill(255);
            stroke(0)   
        }
        text("Shots Left "+shots,windowWidth/8,windowHeight/8);
        fill("yellow");
        if(playingLevel<4){stroke("red")}
        else
        {
         stroke(0);
         fill("red")
        }        
        text("Level "+playingLevel,4*windowWidth/8-20,windowHeight/8);
        destroyBoth();
        flagFinish=1;
}

function keyPressed() { //shoots the ball on press of down arrow
    if (keyCode === DOWN_ARROW && shots !== 0) {
        explosion.play();
        canonBall = new CanonBall(canon.x, canon.y );
        balls.push(canonBall);
        balls[balls.length - 1].shoot();
        shots = shots - 1;
    }
}

function sendzombie() { //send zombies with random spacing
    imageMode(CENTER);
    image(sign,windowWidth-182,windowHeight-ground.height-89,86,87);
    image(bush,windowWidth-45,windowHeight-ground.height-90,182,90);

    // ground = new Ground(windowWidth / 2, windowHeight * 9/ 10,2*windowWidth, windowHeight / 7);
    image(bone,windowWidth / 4,windowHeight * 8.7/ 10);
    image(bone,10*windowWidth /15,windowHeight * 9/ 10);
    image(bone,windowWidth -100,windowHeight * 9.5/ 10);
    image(head,windowWidth / 3,windowHeight * 9.3/ 10);
    image(skeleton,8*windowWidth / 9,windowHeight * 9/ 10);
    if(gameStart===false){
    gameStart=true;
    }
    if(maxBats!==0){
        if (bats.length === 0 ) {
          var bat = new Bat(windowWidth, windowHeight/4, 120, 80);
            bats.push(bat);
            space = random([100, 500,300,600]);
            maxBats=maxBats-1;
        }
        if (bats[bats.length - 1].body.position.x < width - space) {
          var bat2 = new Bat(windowWidth, windowHeight/4, 120, 80);
            bats.push(bat2);
            space = random([100, 500,300,600]);
            maxBats=maxBats-1;
         }
        }

    if(maxZombies!==0){
    if (zombies.length === 0 ) {
      var zombie = new Zombie(windowWidth + 10, 6*windowHeight/7, 90, 150);
        zombies.push(zombie);
        space = random([100, 500,300,600]);
        maxZombies=maxZombies-1;
    }
    if (zombies[zombies.length - 1].body.position.x < width - space) {
      var zombie2 = new Zombie(windowWidth + 10, 6*windowHeight/7, 90, 150);
        zombies.push(zombie2);
        space = random([100, 500,300,600]);
        maxZombies=maxZombies-1;
     }
    }

    for (var a = 0; a < zombies.length; a++) {
        if ( zombies[a].body.position.x < 0 ) {
            gameState=GameState.over;
        }}
            for (var b = 0; b < bats.length; b++) {
            if (bats[b].body.position.x < 0 ) {
                gameState=GameState.over;
            }}

    if(maxZombies===0 && zombies.length===0 && maxBats===0 && bats.length===0){
    gameState=GameState.finish;

    switch(playingLevel){
        case 1:level=2;
        break;
        case 2:level=3;
        break;
        case 3:level=4;
        break;
        case 4:level=5;
        break;
        case 5:level=6;
        break;
    }
}

}

function ballDisplay(ball, index) { // display of ball only when ball is inside of canvas
    ball.display();
    if (ball.body.position.x > windowWidth || ball.body.position.y >= windowHeight - 200) {
        Matter.World.remove(world, ball.body);
        balls.splice(index, 1);
    }
}

function destroyBoth() { // destroys both balls and zombies when collided
    for(var b=0; b<balls.length ; b++){
        var collision1= Matter.SAT.collides(balls[b].body,ground.body);
        if(collision1.collided){
            Matter.World.remove(world, balls[b].body);
            balls.splice(b, 1);
        }
    }
    for (var i = 0; i < balls.length; i++) {
        for (var a = 0; a < zombies.length; a++) {
            var collision = Matter.SAT.collides(balls[i].body, zombies[a].body);
            if (collision.collided) {
                score=score+100;
                if(playingLevel<4){
                zombies[a].life=zombies[a].life-50;
                }else{
                    zombies[a].life=zombies[a].life-25;
                }
                
                if(zombies[a].life===0){                 
                Matter.World.remove(world, zombies[a].body);            
                zombies.splice(a, 1);
                Matter.World.remove(world, balls[i].body);
                balls.splice(i, 1);
                break;
                }
                Matter.World.remove(world, balls[i].body);
                balls.splice(i, 1);
                break;
            }
        }}

        for (var k = 0; k < balls.length; k++) {
        for(var b=0 ; b<bats.length ; b++){
            var collision2 = Matter.SAT.collides(balls[k].body, bats[b].body);
            if (collision2.collided) {
                score=score+50;         
                Matter.World.remove(world, bats[b].body);            
                bats.splice(b, 1);
                Matter.World.remove(world, balls[k].body);
                balls.splice(k, 1);
                break;
            }
        }
    }
}

function gameOver() { // brings swal sweet alert when zombie touches the cannon
  
                if(gamePlay.isPlaying()){gamePlay.stop()}
                formFlag=1;
                flag="start";
                flag2=1;
                gameStart=false;                
                w=0;
                shotSet=1;

    if(zombieNoise.isPlaying()) { zombieNoise.stop() }

                swal({
                        title: `Game Over!!!`,
                        text: "SCORE "+score, 
                        imageUrl:"https://static.vecteezy.com/system/resources/previews/000/455/322/non_2x/a-zombie-holding-an-empty-signboard-vector.jpg",
                        imageSize: "250x250",
                        showCancelButton: true,  
                        confirmButtonClass: "btn-danger",  
                        confirmButtonText: " Play Again",  
                        cancelButtonText: "Exit to Home"
                      },  
                      function(isConfirm) {  
                        if (isConfirm) {  
                            score=0;
                            for(var i = 0; i<zombies.length; i++){
                                Matter.World.remove(world, zombies[i].body);
                            }
                            zombies=[];
                            for(var i = 0; i<bats.length; i++){
                                Matter.World.remove(world, bats[i].body);
                            }
                            bats=[];
                            for(var i = 0; i<balls.length; i++){
                                Matter.World.remove(world, balls[i].body);
                            }
                            balls=[];
                            gameState=GameState.play;
                           } 
                        else {  
                            score=0;
                            for(var i = 0; i<zombies.length; i++){
                                Matter.World.remove(world, zombies[i].body);
                            }
                            zombies=[];
                            for(var i = 0; i<bats.length; i++){
                                Matter.World.remove(world, bats[i].body);
                            }
                            bats=[];
                            for(var i = 0; i<balls.length; i++){
                                Matter.World.remove(world, balls[i].body);
                            }
                            balls=[];
                            gameState=GameState.home;
                        }  
                    }
                );
}     

function finish(){ //victory
    if(gamePlay.isPlaying()){gamePlay.stop()}
    if(zombieNoise.isLooping()){zombieNoise.stop()}
    if(flagFinish===1){    //victory sound  
        victory.loop();
        flagFinish=0;
        }        
        for(var b=0; b<balls.length ; b++){
                Matter.World.remove(world, balls[b].body);
                balls.splice(b, 1);
            }
        formFlag=1;
        flag="start";
        flag2=1;
        gameStart=false;        
        w=0;
        shotSet=1;
        if(playingLevel!==6){
    swal({  
        title: "Victory !!!",  
        text: "SCORE "+score, 
        imageUrl: "https://cdn3.vectorstock.com/i/1000x1000/15/12/cartoon-green-zombie-outbreak-infection-emblem-vector-26771512.jpg",
        imageSize: "250x250", 
        showCancelButton: true,  
        confirmButtonClass: "btn-danger",  
        confirmButtonText: " Next Level",  
        cancelButtonText: "Exit to Home"
      },  
      function(isConfirm) {  
        if (isConfirm) {  
            score=0;
            victory.stop();
            level=playingLevel+1;
            playingLevel=level;
            gameState=GameState.play;
        } else {  
            score=0;
            victory.stop();
            gameState=GameState.home;
        }  
      });  
}else{
    swal({  
        title: "Victory !!!",  
        text: "SCORE "+score, 
        imageUrl: "https://cdn3.vectorstock.com/i/1000x1000/15/12/cartoon-green-zombie-outbreak-infection-emblem-vector-26771512.jpg",
        imageSize: "250x250", 
        confirmButtonText: "Back To Home",  
      },  
      function(isConfirm) {  
        if (isConfirm) { 
            score=0;
            victory.stop();
            gameState=GameState.home;
        }  
      });  
}
}
