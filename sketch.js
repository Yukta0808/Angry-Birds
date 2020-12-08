const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1 = new Box(800,580,70,70);
    box2 = new Box(1000,580,70,70);
    pig1 = new Pig(900,580)
    log1 = new Log(900 ,540, 300, PI/2)
    
    box3 = new Box(800,500,70,70);
    box4 = new Box(1000,500,70,70);
    pig2 = new Pig(900,500)
    log2 = new Log(900 ,480, 300, PI/2)

    box5 = new Box(900,420,70,70);

    log3 = new Log(860 ,420, 150, PI/7)
    log4 = new Log(960 ,420, 150, -PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

}