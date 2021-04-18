const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var maxDrops=100;
var drops = [];
var cloudImg;
function preload(){
    
cloudImg = loadImage("cloud.png")
}

function setup(){
    createCanvas(400,900);

    engine = Engine.create();
	world = engine.world;



//creating drops
if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }

}
Engine.run(engine);

    
}

function draw(){
    background("black");
    
     cloudImg.x = 200;
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites()
}   

