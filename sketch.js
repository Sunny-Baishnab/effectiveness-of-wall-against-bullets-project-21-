var wall , thickness;
var bullet , speed , weight;

function preload(){
  bulletImage = loadAnimation("bullet-clipart-sniper-bullet-12.png");
}
function setup() {
  createCanvas(1600,600);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,300,50,50);
  bullet.addAnimation("bullet", bulletImage);
  bullet.scale = 1;
  bullet.debug = true;
  bullet.setCollider("rectangle",-0,0,50,50);
  bullet.velocityX = speed;

  wall = createSprite(1500,300,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug = true;
  
}

function draw() {
  background("lightblue");  
  drawSprites();
  if(isTouching(wall,bullet))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10)
    {
      bullet.tint = color(255,0,0);
    }

    if(damage<10)
    {
      bullet.tint = color(0,255,0);
    }
  }
}

