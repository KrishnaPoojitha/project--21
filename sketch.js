var surface1,surface2,surface3,sueface4;
var box,edges;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1=createSprite(0,580,360,30);
   surface1.shapeColor="blue";

   surface2=createSprite(295,580,200,30);
   surface2.shapeColor="orange";

   surface3=createSprite(515,580,200,30);
   surface3.shapeColor="pink";

   surface4=createSprite(740,580,200,30);
   surface4.shapeColor="yellow";   
    //create box sprite and give velocity
    box=createSprite(random(20,750),100,20,20);
    box.shapeColor="green";
    box.velocityX=4;
    box.velocityY=6;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceoff(edges);
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceoff(surface1)){
        box.shapeColour="blue";
        music.play();
    }
   
    if(surface2.isTouching(box)){
        box.shapeColour="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
       }
       
    if(surface3.isTouching(box) && box.bounceoff(surface3)){
        box.shapeColour="pink";
       
    }
   
        if(surface4.isTouching(box) && box.bounceoff(surface4)){
        box.shapeColour="yellow";
       
        }
        
        drawSprites();
}

