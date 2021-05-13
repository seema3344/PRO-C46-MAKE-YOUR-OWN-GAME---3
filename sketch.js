var PLAY = 1;
var END = 0;
var gameState = PLAY;
var Score;
var bg ,bgImg;
var lose, loseImg;
var restart, restartImg;
var player ,playerImg;
var asteroids ,asteroid ,asteroid1Img , asteroid2Img , asteroid3Img, asteroid4Img, asteroid5mg, asteroid6Img, asteroid7Img;
var fires, fire1Img, fire2Img, fire3Img, fire4Img, fire5Img;

function preload(){
lasersound = loadSound("sounds/laser.mp3");
bgsound = loadSound("sounds/background.mp3");
bgImg = loadImage("space.png");
playerImg = loadImage("rocket.png");
restartImg = loadImage("restart.png");
loseImg = loadImage("lose.png");
asteroid1Img = loadImage("asteroids/asteroid1.png");
asteroid2Img = loadImage("asteroids/asteroid2.png");
asteroid3Img = loadImage("asteroids/asteroid3.png");
asteroid4Img = loadImage("asteroids/asteroid4.png");
asteroid5Img = loadImage("asteroids/asteroid5.png");
asteroid6Img = loadImage("asteroids/asteroid6.png");
asteroid7Img = loadImage("asteroids/asteroid7.png");
fire1Img = loadImage("fires/fire1.png");
fire2Img = loadImage("fires/fire2.png");
fire3Img = loadImage("fires/fire3.png");
fire4Img = loadImage("fires/fire4.png");
fire5Img = loadImage("fires/fire5.png");
}
function setup(){
    createCanvas(1536,720);

    bgsound.play();

    bg = createSprite(768,360);
    bg.addImage(bgImg);
    bg.rotation = 90;
    bg.scale = 0.7;
    bg.visible = true;
    
    player = createSprite(768,620);
    player.addImage(playerImg);
    player.scale = 0.08;
    player.visible = true;

    restart = createSprite(768,400);
    restart.addImage(restartImg);

    lose = createSprite(761,167);
    lose.addImage(loseImg);

    lose.scale =  2;
    restart.scale = 0.2

    asteroids = new Group();
    fires= new Group();
    Score = 0;

}
function draw() {
        background("lightblue");
        textSize(50);
        fill("indigo");
        stroke("black");
        strokeWeight(6);
        text("Score:"+Score,100,100);
    if(gameState === PLAY){
        
        lose.visible = false;
        restart.visible = false;

     player.x = World.mouseX
     if(keyDown("space")){
             Fires();
     }
if(asteroids.isTouching(fires)){
        asteroids.destroyEach();
        fire.destroy();
        Score = Score+10
}
if(asteroids.isTouching(player)){
        gameState = END
}
}else if(gameState === END){
        bgsound.stop();
        strokeWeight(6);
        stroke("black");
        fill("green");
        textSize(50);
        text("press resart button to play once more",400,600);
        bg.visible = false;
        lose.visible = true;
        restart.visible = true;
        player.visible = false;
        asteroids.destroyEach();
        fires.destroyEach();

        if(mousePressedOver(restart)) {
                reset();
              }
}
    Asteroid();
drawSprites();    
}

function reset(){
        bgsound.play();
        gameState = PLAY;
        bg.visible = true;
        lose.visible = false;
        restart.visible = false;
        player.visible = true;
        Score = 0;
      }
      function Fires() {
        if(frameCount % 5 === 0){
        fire = createSprite(768,500);
        fire.velocityY = -21;
        var rand = Math.round(random(1,5));
        switch(rand) {
          case 1: fire.addImage(fire1Img);
                  break;
          case 2: fire.addImage(fire2Img);
                  break;
          case 3: fire.addImage(fire3Img);
                  break;
          case 4: fire.addImage(fire4Img);
                  break;
          case 5: fire.addImage(fire5Img);
                  break;
          default: break;
        }
        lasersound.play();
        fire.x = player.x;
        fire.scale = 0.02
        fires.add(fire);
        }
}
function Asteroid() {
        if(frameCount %20 === 0){
        asteroid = createSprite(0,0);
        asteroid.velocityY = 26;
        asteroid.rotationSpeed = 5;
        asteroid.x = Math.round(random(1536,0));
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: asteroid.addImage(asteroid1Img);
                  break;
          case 2: asteroid.addImage(asteroid2Img);
                  break;
          case 3: asteroid.addImage(asteroid3Img);
                  break;
          case 4: asteroid.addImage(asteroid4Img);
                  break;
          case 5: asteroid.addImage(asteroid5Img);
                  break;
          case 6: asteroid.addImage(asteroid6Img);
                  break;
          case 7: asteroid.addImage(asteroid7Img);
                  break;
          default: break;
        }
        
        asteroid.scale = 0.2
        asteroids.add(asteroid);
   }
}