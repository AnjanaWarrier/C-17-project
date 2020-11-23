
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground;

function preload(){
  
  
  monkey_running = loadAnimation ("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(50,370,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,380,400,10);
  ground.x = ground.width/2;
 
  obstaclesGroup=new Group();
  FoodGroup=new Group();
}


function draw() {
  background("white");

  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
    
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.velocityX=0;
    obstaclesGroup.destroyEach();
    FoodGroup.destroyEach();
    ground.velocityX=0;
  
  }
  
  if(frameCount%60===0){
    score=score+1;
  }
  
 text("Score: "+score,200,50) ;
  
  monkey.collide(ground);
  monkey.collide(obstaclesGroup);

  spawnObstacles();
  spawnFruit();
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 200 === 0){
   var obstacle = createSprite(400,340,10,40);
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.velocityX = -6;
   obstacle.scale=0.2;
   
   obstaclesGroup.add(obstacle);
 }
}

function spawnFruit(){
  if (frameCount % 50===0){
    var banana = createSprite(400,150,10,10);
    banana.addImage("fruit",bananaImage);
    banana.velocityX = -6;
    banana.scale=0.05
    FoodGroup.add(banana);
  }
}