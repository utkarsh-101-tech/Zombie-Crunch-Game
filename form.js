class Form {
    constructor() {
this.volumeUp=createImg("assets/gui/volumeUp.png");
this.volumeDown=createImg("assets/gui/volumeDown.png");
        this.play = createImg("assets/gui/play.png");
        this.instructions = createImg("assets/gui/instructions.png");
        this.levelIcon = createImg("assets/gui/levelicon.png");
       this.title= createImg("assets/title.png")
    }

    hide() {
        this.play.hide();
        this.title.hide();
        this.volumeUp.hide();
        this.volumeDown.hide();
    }

    display() {
        this.title.position(windowWidth / 2-this.title.width/2  ,  windowHeight / 50);
        this.title.size(500,234);

 this.volumeUp.position(8.2*windowWidth/10,windowHeight/10);
 this.volumeUp.size(windowWidth/15,windowWidth/15);
 this.volumeUp.mousePressed(()=>{
    click.play();
    lobby.setVolume(1);
})

 this.volumeDown.position(9*windowWidth/10,windowHeight/10);
 this.volumeDown.size(windowWidth/15,windowWidth/15);
 this.volumeDown.mousePressed(()=>{
     click.play();
     lobby.setVolume(0);
 })

        this.play.position(windowWidth / 2-this.play.width/2, windowHeight / 2-this.play.height/2);
        this.play.size(windowWidth/4,windowHeight/6);
        this.play.mousePressed(() => {
            click.play();       
            lobby.stop();
            playingLevel=level;
            gameState = GameState.load;
            this.play.hide();
            this.instructions.hide();
            this.levelIcon.hide();
            this.title.hide();
            this.volumeUp.hide();
            this.volumeDown.hide();
        });

        this.instructions.position(windowWidth / 3-this.instructions.width/2, 2*windowHeight / 3);
        this.instructions.size(windowWidth/4,windowHeight/6);
        this.instructions.mousePressed(() => {
            click.play();       
            lobby.stop();
            this.instructions.hide();
            this.play.hide();
            this.levelIcon.hide();
            this.title.hide();
            this.volumeUp.hide();
            this.volumeDown.hide();
            instruct();            
        });

        this.levelIcon.position(windowWidth / 3+2*this.levelIcon.width/3, 2*windowHeight / 3);
        this.levelIcon.size(windowWidth/4,windowHeight/6);
        this.levelIcon.mousePressed(() => {
            click.play();       
            lobby.stop();
            this.title.hide();
            this.volumeUp.hide();
            this.volumeDown.hide();
            this.levelIcon.hide();
            this.play.hide();
            this.instructions.hide();            
            levelFunc();
        });

    }
}
function levelFunc(){   //levels buttons
    if(levelSelector===1){                
        intructionOpen=0;
     
        for(var i=1;i<level+1;i++){      //unlocked icons above
            if(i<4){
          var levelChoose = createImg("assets/gui/level/"+i+".png");
          levelChoose.position(i*windowWidth/5,3*windowHeight/8);
          levelChoose.size(windowWidth/10,windowHeight/5);          
          levelsUnlocked.push(levelChoose);
            }else if(i<7 && i>3){
                var t =i-3;
                var leveldown = createImg("assets/gui/level/"+i+".png");
                leveldown.position(t*windowWidth/5,5*windowHeight/8);
                leveldown.size(windowWidth/10,windowHeight/5);          
                levelsUnlocked.push(leveldown);
            }
 
    }

     
        levelsUnlocked[0].mousePressed(()=>{ 
          click.play();
          for(var a=0;a<levels.length;a++){
              levels[a].hide();                
          }
          for(var j=0;j<levelsUnlocked.length;j++){
              levelsUnlocked[j].hide();                
          }
          levels=[];
          levelsUnlocked=[];
           playingLevel = 1;
          homeBtn.hide();
          levelSelector=1;
          gameState = GameState.load;            
        })

if(level===2){
        levelsUnlocked[1].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 2;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })
        }

        if(level===3){         

          levelsUnlocked[2].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 3;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })

          levelsUnlocked[1].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 2;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })
        }

        if(level===4){
        
          levelsUnlocked[3].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 4;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })

          levelsUnlocked[2].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 3;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })

          levelsUnlocked[1].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 2;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })
        }
        if(level===5){
          levelsUnlocked[4].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 5;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })
          levelsUnlocked[3].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 4;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })

          levelsUnlocked[2].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 3;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })

          levelsUnlocked[1].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 2;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })
        }

        if(level===6){
          levelsUnlocked[5].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 6;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          });

          levelsUnlocked[4].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 5;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })

          levelsUnlocked[3].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 4;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })

          levelsUnlocked[2].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 3;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })

          levelsUnlocked[1].mousePressed(()=>{ 
            click.play();
            for(var a=0;a<levels.length;a++){
                levels[a].hide();                
            }
            for(var j=0;j<levelsUnlocked.length;j++){
                levelsUnlocked[j].hide();                
            }
            levels=[];
            levelsUnlocked=[];
             playingLevel = 2;
            homeBtn.hide();
            levelSelector=1;
            gameState = GameState.load;            
          })
        }
        
      


        for(var i = level+ 1; i<7 ; i++){ //locked icon above
            if(i<4){
          var levelChoose = createImg("assets/gui/Asset 107.png");
          levelChoose.position(i*windowWidth/5,3*windowHeight/8);
          levelChoose.size(windowWidth/10,windowHeight/5);
          levels.push(levelChoose);
          levelChoose.mousePressed(()=>{ 
          click.play();
             text("Not Available",windowWidth/2-50,windowHeight-30);
        })}
        else if(i<7 && i>3){ var levelChoose = createImg("assets/gui/Asset 107.png");
        var l=i-3;
        levelChoose.position(l*windowWidth/5,5*windowHeight/8);
        levelChoose.size(windowWidth/10,windowHeight/5);
        levels.push(levelChoose);
        levelChoose.mousePressed(()=>{ 
        click.play();
           text("Not Available",windowWidth/2-50,windowHeight-30);
      })}
    }


//    var totalbtn=6;
//    var xpos=[1*windowWidth/5,2*windowWidth/5,3*windowWidth/5];

//    if()
//    for(var i=1;i<level+1;i++){      //unlocked icons above
//             if(i<4){
//           var levelChoose = createImg("assets/gui/level/"+i+".png");
//           levelChoose.position(i*windowWidth/5,3*windowHeight/8);
//           levelChoose.size(windowWidth/10,windowHeight/5);          
//           levelsUnlocked.push(levelChoose);
//             }else if(i<7 && i>3){
//                 var t =i-3;
//                 var levelChoose = createImg("assets/gui/level/"+i+".png");
//                 levelChoose.position(t*windowWidth/5,5*windowHeight/8);
//                 levelChoose.size(windowWidth/10,windowHeight/5);          
//                 levelsUnlocked.push(levelChoose);
//             }


 var homeBtn =createImg("assets/gui/Home.png");
 homeBtn.size(windowWidth / 5 , 0.75* windowHeight / 5);
 homeBtn.position(3/4*windowWidth,10);
 levelSelector=0;
    homeBtn.mousePressed(()=>{
        click.play();
        fill(255);
        textFont('scoreFont',40);
        text("Select Level",windowWidth/2,windowHeight/2);
         for(var i=0;i<levels.length;i++){
         levels[i].hide();
         }
         for(var j=0;j<levelsUnlocked.length;j++){
            levelsUnlocked[j].hide();
        }
     homeBtn.hide();
     levelSelector=1;
     flag="start";
     formFlag=1;
     home();
 })
}
    
}

function instruct(){  //instructions
    if(intructionOpen=1){
        pamphlet = createImg("assets/gui/Untitled.png");
        intructionOpen=0;
   pamphlet.position(windowWidth/3,10);
 pamphlet.size(windowWidth/3,windowHeight-15);
 var homeBtn =createImg("assets/gui/Home.png");
 homeBtn.size(windowWidth / 5 , 0.75* windowHeight / 5);
 homeBtn.position(3/4*windowWidth,10);
 homeBtn.mousePressed(()=>{
     click.play();
     pamphlet.hide();
     homeBtn.hide();
     intructionOpen=1;
     flag="start";
     formFlag=1;
     home();
 })
}}