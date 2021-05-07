const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var Snow = [];
var bg;


function preload(){

  bg = loadImage("snow2.jpg");


}

function setup(){

    engine = Engine.create();
    world = engine.world;

    createCanvas(1000,800)

   
 

    for(var i=0;i<100;i++){
      Snow.push(new snow(random(0,800),random(0,800) ));
         }

   
    
}

function draw(){
  
  background(bg);
    Engine.update(engine);


   

    for(var i=0;i<100;i++){
        Snow[i].display();
        Snow[i].update();
    }
   

    drawSprites();
}   

