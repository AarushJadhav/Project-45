var player, player_Img;
var obstacle, obstacle_Img
var bg_Image;
var ground;

function preload() {
  player_Img = loadAnimation("./images/running_1.png", "./images/running_2.png", "./images/running_3.png", "./images/running_4.png", "./images/running_5.png", "./images/running_6.png");
  obstacle_Img = loadImage("./images/obstacle_1.png");
  bg_Image = loadImage("./images/bg_Img.gif");
}

function setup() {
  createCanvas(650, 450);
  
  player = createSprite(100, 300, 40, 40);
  player.addAnimation("running", player_Img);
  player.scale = 0.6;

  ground = createSprite(200,180,650,650);
  ground.addImage("ground",bg_Image);
  ground.x = ground.width /2;
  ground.scale = 2.5;
}

function draw() {
  background(220);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
   obstacle = createSprite(600, 300, 40, 10);
   obstacle.addImage(obstacle_Img);
   obstacle.scale = 0.1;
   obstacle.velocityX = -3;

   obstacle.depth = ground.depth;
   obstacle.depth = obstacle.depth + 1;
  
   player.depth = ground.depth;
   player.depth = player.depth + 1;

   obstacle.lifetime = 300;
  }
}


