const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,50,50);

    box2 = new Box(900,300,50,50);
    
    box3= new Box(700,280,50,50)
    
    box5=new Box(800, 220,60,60)



    box4 = new Box(900,280,50,50)

    ground = new Ground(500,height,1000,20)

    pig1 = new Pig(800,340)
    pig2 = new Pig(800, 280);

log1 = new Log(800,285,260,PI/2)

log2 = new Log(800,260,260,PI/2)

log3 = new Log(760,230,120,PI/6)

log4 = new Log (860,230,120,-PI/6)
}

function draw(){
    background(230,mouseX,mouseY);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    console.log(box2.body.angle);

    textSize(25);
    text(" x : "+mouseX+" y : "+mouseY,mouseX,mouseY);



    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display()
    log4.display();
    pig2.display();

}