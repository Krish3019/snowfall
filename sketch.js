const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg
var background
var maxsnow = 100 
var snow  = []


function preload(){
backgroundImg = loadImage("snow3.jpg")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create()
  world = engine.world

background = createSprite(500, 300, 50, 50);
background.addImage("background",backgroundImg);

for(var i= 0;i<maxsnow;i++){
  snow.push(new Snow(random(0,400),random(0,400)));
 }


}

function draw() {
  //background(backgroundImg);

  Engine.update(engine);
    for(var i=0;i<maxsnow;i++){
       snow[i].display();
       console.log(snow[i])
        snow[i].updateY();
    }
  
  drawSprites();
}