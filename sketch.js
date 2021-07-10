var bgImg;
var posY =0;
var snowflakeImg;
var snowflake;
var flakes = [];

function preload() {
    //load the images here
    bgImg = loadImage("snow3.jpg");
    snowflakeImg = loadImage("snow4.webp");
     
}

function setup(){
    createCanvas(1000,800);
 
}

function draw() {
    
    background(bgImg);  
    
    //animate flakes    
    for(i=0; i<flakes.length; i++)
   {
      flakes[i].fall();
      flakes[i].display();
   }
   
    drawSprites();
    
}

function mouseClicked()
{
    snowflake = new Snow(mouseX, mouseY, snowflakeImg);
    //add all snowflake obj to array
    flakes.push(snowflake);
    

}

