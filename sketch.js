const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

//variables for game
var engine,world
var ball,ground

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

 var options={
   isStatic:true
 }

 ground=Bodies.rectangle(400,400,800,20,options);
 World.add(world,ground);

 var options={
   restitution:0.8
 }

 ball=Bodies.circle(100,15,20,options);
 World.add(world,ball);



 console.log(ground)
}


function draw() {
  background(0);  

  Engine.update(engine);

 rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}