var virus,virus2,virus3,virus4,virus5,virus6,virus7,virus8,virus9,virus10;
var bg,button,pl,nt,vr;
var life,lv,life2,life3,pause;
var road,plr,hd,hand;
var vaccine,player2;
var boy,note,r,r2;
var bullet,src;
var player, bgc,bgc2,vc;
var bulletGroup;
var gameState=0;
var virusGroup,bt,screen;
var pause,ps,winpg;
var cns,music;
var wn,winpg,canvas;

//load images 
function preload(){
  bg=loadImage('images/sp.jpg');
  pl=loadImage('images/welcome.png');
  nt=loadImage('images/image.jpg');
  road=loadImage('images/daytime.png');
  plr=loadImage('images/boyLeft.png');
  vr=loadImage('images/virus.png');
  hd=loadImage('images/image.png');
  vc=loadImage('images/vc.png');
  lv=loadImage('images/lives.png');
  ps=loadImage('images/pause.png');
  src=loadImage('images/pauseS.png');
  wn=loadImage('images/wrpg.png');
  cns=loadImage('images/coin.png');
  music=loadSound("sounds/Serious_Cinematic.wav")
}

function setup() {
  canvas=createCanvas(displayWidth,displayHeight);
  bulletGroup=createGroup();
 
  button=createButton("tap to continue")
  button.position(600,500);
   button.mousePressed(()=>{
    
    button.hide();
    gameState=1;
   })
  
   


}

function draw() {
  // background(bg);

if(gameState===0){
 background(bg);

 

 }


  
 if(gameState===1){
   background("white")
   boy=createSprite(100,400,10,10);
   boy.addImage(pl);
   note =createSprite(800,400,10,10);
   note.addImage(nt);
   note.scale=1.5;

   if(keyCode === 32){
    gameState=2;
 }
 if(gameState === 2){
     
  background("white");
  
    bgc=createSprite(500,500,10,10);
    bgc.addImage(road);
    bgc.scale=5.5;

    vaccine=createSprite(900,600,100,100);
   vaccine.addImage(vc);
   vaccine.scale=0.7;
   
  

   
    music.play();
    
  
    // bgc2=createSprite(-1000,500,100,100);
    // bgc2.addImage(road);
    // bgc2.scale=5.5;
    player=createSprite(1000,630,100,100);
   
    r=createSprite(1010,656,15,25);
   r.shapeColor=rgb(225,85,68);
  r2=createSprite(1010,635,15,15);
   r2.shapeColor=rgb(49,42,107);
    hand=createSprite(997,590,10,10);
    hand.addImage(hd);
    hand.scale=1.3;
    
    player.addImage(plr);
    player.scale=0.8;
    virus=createSprite(-10,570,10,10);
    virus.velocityX=4;
    virus.y=random(540,590)
    
    virus.addImage(vr);
  
    virus2=createSprite(-460,570,10,10);
    virus2.velocityX=3;
    virus2.y=random(540,590)
    virus2.addImage(vr);
   
  
    virus3=createSprite(-1020,570,10,10);
    virus3.velocityX=3;
    virus3.y=random(540,590)
    virus3.addImage(vr);
    
  
    virus4=createSprite(-1880,570,10,10);
    virus4.velocityX=3;
    virus4.y=random(540,590)
    virus4.addImage(vr);
    
  
    virus5=createSprite(-2390,570,10,10);
    virus5.velocityX=3.5;
    virus5.y=random(540,590)
    virus5.addImage(vr);
    
  
    virus6=createSprite(-3915,570,10,10);
    virus6.velocityX=4;
    virus6.y=random(540,590)
    virus6.addImage(vr);
    
  
    virus7=createSprite(-3539,570,10,10);
    virus7.velocityX=3;
    virus7.y=random(540,590);
    virus7.addImage(vr);
    
  
    virus8=createSprite(-5170,570,10,10);
    virus8.velocityX=4;
    virus8.y=random(540,590)
    virus8.addImage(vr);
   
  
    virus9=createSprite(-4999,570,10,10);
    virus9.velocityX=3;
    virus9.y=random(540,590)
    virus9.addImage(vr);
    
  
    virus10=createSprite(-5900,570,10,10);
    virus10.velocityX=6.5;
    virus10.y=random(540,590)
    virus10.addImage(vr);
    //player.velocityX=-3;
    life=createSprite(100,250,100,100)
    life.addImage(lv);
    life.scale=0.5;
    life2=createSprite(160,250,100,100)
    life2.addImage(lv);
    life2.scale=0.5;
    life3=createSprite(220,250,100,100)
    life3.addImage(lv);
    life3.scale=0.5;

    // pause=createSprite(1200,250,100,100);
    // pause.addImage(ps);
    // pause.scale=1.0;
    
    

    // if (mousePressedOver(pause)) {

    //   screen=createSprite(600,600,100,100);
    //   screen.addImage(src);
    //   bt=createSprite(580,680,200,50);
    //   //bt.visible=false;
    //   virus.velocityX=0;
    //   virus2.velocityX=0;
    //   virus3.velocityX=0;
    //   virus4.velocityX=0;
    //   virus5.velocityX=0;
    //   virus6.velocityX=0;
    //   virus7.velocityX=0;
    //   virus8.velocityX=0;
    //   virus9.velocityX=0;
    //   virus10.velocityX=0;
     
      
    // }
    
    // if(mousePressedOver(bt)){
    //  screen.destroy();
    //  screen.x=100000;
    //  bt.destroy();
    // }
    
  
    
    
   
     
 
 
  // }
  
  
  
  

 }
  }
  // let x=-100
  // if(virus2.x>=player.x){
  //   life.visible=false;
  // }
  if (keyDown('space')){
    createBullet(vaccine.x);
    
   }
    
   if (bulletGroup.collide(virus)) {
    virus.destroy();
    bulletGroup.destroyEach();
    
  }
  
  if (bulletGroup.isTouching(virus2)) {
    virus2.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus3)) {
    virus3.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus4)) {
    virus4.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus5)) {
    virus5.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus6)) {
    virus6.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus7)) {
    virus7.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus8)) {
    virus8.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus9)) {
    virus9.destroy();
    bulletGroup.destroyEach();
    var winpg=createSprite(displayWidth/2,displayHeight/2,500,500);
    winpg.addImage(wn)
    winpg.scale=0.5;
    if(keyCode===82){
      
      gameState=3;
  }                                 
    
  }
     
if (bulletGroup.isTouching(virus10)) {
  virus10.destroy();
  bulletGroup.destroyEach();
  bgc.destroy();
}
//    if (keyCode===37 ) {
    
//     bgc.velocityX=3;      
// }
// if (keyCode===39 ) {
 
//   bgc.velocityX=0;
// }

 if(gameState===3){
  var note2=createSprite(800,600,1000,1000);
  note2.addImage(nt);
  note2.scale=1.5;
  background(225);


 }

   

 




  drawSprites();
  
  if(gameState===1){
    
    textSize(35);
    fill("red");
    text("Beware",750,300);
     textSize(15)
     fill("black")
     strokeWeight(5)
     text("Your goal is to go to the store and buy groceries for your",640,315);
     text("grandparents.On your way, you will be attacked by corona monsters.",640,330);
     text("You have to defend yourselve from the monsters and reach your goal.",640,345)
     text("Remember to collect bullets,sanitizers and masks on your way.Press",640,360);
     text("space key to shoot.Control the player with the help of arrow keys.",640,375);
     text("Press space to continue to the game.",640,390);
     textSize(35);
     fill("red");
     text("Good luck!!",750,420);
     }
  
}
function createBullet(x) {
  bullet= createSprite(x, 600, 10, 5);
  bullet.y = 600;
  bullet.x = x;                                           
  bullet.shapeColor = "turquoise";
  bullet.velocityX = -5;
  bullet.lifetime = 250;
  bulletGroup.add(bullet);
}





