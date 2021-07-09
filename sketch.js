
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
plane1=new plane(600,600,1200,20)
stone1=new stone(700,320,100,100)
iron1=new iron(300,350)
rubber1= new rubber(900,450,70)
hammer1=new hammer(10,100)
stand2= new stand(510,450,10)
stand3= new stand(515,450,10)
stand4= new stand(520,450,10)
stand5= new stand(525,450,10)

	
}


function draw() {
  rectMode(CENTER);
  Engine.run(engine)
  background(0);
  plane1.display()
  stone1.display()
hammer1.display()
iron1.display()
stand2.display()
rubber1.display()
stand3.display()
stand4.display()
stand5.display()
  
 
}



