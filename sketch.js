var bullet ,wall,weight,speed,thickness;

function setup() {
  createCanvas(800,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
 bullet = createSprite(100, 200, 50, 5);
 wall = createSprite(700, 200,thickness,height/2);
wall.shapeColor=color(80,80,80);
bullet.shapeColor=color("white")
}

function draw() {
  background(0,0,0); 
  carSpeed();
  deformation();
  drawSprites();
}

function carSpeed(){
  if(keyDown("space")){
  bullet.velocityX=speed;
  }
}

function deformation(){
var damage=0.5*weight*speed*speed/thickness*thickness*thickness
  if(wall.x-bullet.x <bullet.width/2+wall.width/2){
    bullet.velocityX=0;
 if(damage<10){
   wall.shapeColor="red";
 }
 else if(damage>10){
wall.shapeColor="green"
 }
  }
}