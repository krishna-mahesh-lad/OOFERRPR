
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var grnd, treee;
var boiImg, boi;
var m1,m2,m3,m4,m5,m6,m7,m8;
var elastic, slingshot;

function preload()
{
	boiImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	grnd = new Ground (400,680,1000,50);

	treee = new Tree (540,390,0,600);

	m1 = new Mango (590,160,50);
	m2 = new Mango (750,290,50);
	m3 = new Mango (475,215,50);
	m4 = new Mango (370,290,45);
	m5 = new Mango (450,340,45);
	m6 = new Mango (555,270,50);
	m7 = new Mango (675,245,50);
	m8 = new Mango (635,320,50);
	m1.depth = treee.depth + 1;
	m2.depth = treee.depth + 1;
	m3.depth = treee.depth + 1;
	m4.depth = treee.depth + 1;
	m5.depth = treee.depth + 1;
	m6.depth = treee.depth + 1;
	m7.depth = treee.depth + 1;
	m8.depth = treee.depth + 1;	

	rock = new Stone (95,560,50);
	rock.depth = treee.depth + 1;

	boi = createSprite (150,615);
	boi.addImage (boiImg);
	boi.scale = 0.1;

	slingshot = new Elastic (rock.body,{x:95, y:560});

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background("skyblue");

  Engine.update(engine);

  rock.collide(m1);
  rock.collide(m2);
  rock.collide(m3);
  rock.collide(m4);
  rock.collide(m5);
  rock.collide(m6);
  rock.collide(m7);
  rock.collide(m8);

  grnd.display();
  treee.display();
  boi.display();
  rock.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();

  slingshot.display();

  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY})
}

function mouseReleased() {
    slingshot.fly()
}

