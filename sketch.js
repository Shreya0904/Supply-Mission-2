var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxCenter,boxCenterSprite,boxRight,boxRightSprite,boxLeft,boxLeftSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
boxCenterSprite= createSprite(370,650,150,20);
boxCenterSprite.shapeColor="red";	

boxRightSprite= createSprite(450,610,30,100);
boxRightSprite.shapeColor="red";	

boxLeftSprite= createSprite(290,610,30,100);
boxLeftSprite.shapeColor="red";	

     ground = new Ground(400,665,800,30);
	 boxCenter = new Ground(370,650,150,20);
	 boxRight = new Ground(400,700,200,20);
	 boxLeft = new Ground(290,610,30,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  drawSprites();
  
  text(mouseX+","+ mouseY,mouseX,mouseY);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);

    
  }
}



