var wall, thickness
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);


  spped=random(55,90)
  weight=(400,1500)

bullet = createSprite(50,200,50,5)
bullet.VelocityX=Speed 
bullet.shapeColor=color(255)

wall=createSprite(1500,200,60,height/2)
wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  
  if(wall.x-bullet.x) < (bullet.width + wall.width/2)
  bullet.velocityX=0;

  var damage = 0.5 * weight * speed * speed/22509
  if(damage>12.45)
  bullet.shapeColor=color(255,0,0)

if(damage<12.45 && >8.75)
bullet.shapeColor=color(230,230,0)

if(damage<8.75)
bullet.shapeColor=color(0,230,0)




  drawSprites();
}