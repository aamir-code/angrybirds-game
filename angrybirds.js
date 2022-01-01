const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg;
var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,angryBird,angryBird2;
var slingStand,bird,launcher,OakPlank;

function preload() {
    bg = loadImage("bg.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(windowWidth/2,1000,1500,1000);

    //flat blocks
    block1 = new Wood(950,485,485,30);
    block2 = new Wood(950,440,485,30);
    block5 = new Wood(950,395,50,200);
    block8 = new Wood(950,300,130,30);
    //fat blocks
    block3 = new Wood(775,470,50,50);
    block4 = new Wood(1125,470,50,50);

    //angrybirds
    angryBird = new piggy(909,442,22);
    angryBird2 = new Apiggy(939,293,30);
    //stand
    slingStand = new Stand(200,300,80,30);

    bird = new Bird(200,200,40);
    launcher = new Launcher(bird.body,{x:200,y:200});

    OakPlank = new Oak(200,206,20,158);
    
    Engine.run(engine);

}
function draw() { 
    background(bg);
    

    fill("brown");
    ground.display();

    fill("red");
    block1.display();
    block2.display();
    block8.display();

    fill("grey");
    block3.display();
    block4.display();
    block5.display();

    fill("white");
    angryBird.display();
    angryBird2.display();

    fill("purple");
    slingStand.show();

    fill("white");
    OakPlank.display();

    fill("yellow");
    bird.show();
    launcher.display();

    drawSprites();
}
function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased() {
    launcher.fly();
  }