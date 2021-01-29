var wall,thickness;
var speed,weight,bullet;
var damage,bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(800,400);
  speed=random(223,321)
  weight=random(30,52) 
  thickness=random(22,83)
  wall=createSprite(700, 200, thickness, height/2);
  bullet=createSprite(100,200,40,20);
  bullet.velocityX=speed;
  bullet.shapeColor="white"
  
}

function draw() {
  background("black");
   if(hasCollided(bullet,wall)){
     bullet.velocityX=0
     bullet.x=wall.x-thickness/2 -18
     damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
     if(damage>10){
       wall.shapeColor="red"
     }
     if(damage<10){
      wall.shapeColor="green"
    }
   }
  hasCollided();
  drawSprites();
}

function hasCollided(lbullet,lwall){
    bulletRightEdge=bullet.x+bullet.width
    wallLeftEdge=wall.x
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    else {
     return false
    }
}