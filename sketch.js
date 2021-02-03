const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var ground;
function preload(){

}
function setup(){
 createCanvas(1400,800)
    block1=new Block(600,500,10,20);
    block2=new Block(580,530,10,20);
    block3=new Block(585,530,10,20);
    block4=new Block(590,530,10,20);
    block5=new Block(570,560,10,20);
    block6=new Block(575,560,10,20);
    block7=new Block(585,560,10,20);
    block8=new Block(590,560,10,20);
    block9=new Block(595,560,10,20);

}
function draw(){
    background(0);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    drawSprites();
}