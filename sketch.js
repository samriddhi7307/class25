const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    box3 = new box(720,200,70,70);
    box4 = new box(920,240,70,70);
    box5 = new box(820,90,70,70);
    pig1 = new pig(810, 350);
    pig2 = new pig(810,220);
    log1 = new log(810,260,300, PI/2);
    log2 = new log(810,180,300,PI/2);  
    bird1 = new bird(100,100);
    log3 = new log(760,120,120,PI/7);
    log4 = new log(870,120,120,PI/-7);
}
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}