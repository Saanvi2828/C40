var allPlayers;
var hypnoticBall, database;
var position;
var gameState=0;
var form,player,game,playerCount;
var car1,car2,car3,car4,cars;
var car1Image,car2Image,car3Image,car4Image,track,ground

function preload(){
 car1Image=loadImage("images/car1.png")
 car2Image=loadImage("images/car2.png")
 car3Image=loadImage("images/car3.png")
 car4Image=loadImage("images/car4.png")
 ground=loadImage("images/ground.png")
 track=loadImage("images/track.jpg")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-30,displayHeight-30);
game=new Game()
game.getState()
game.start()
}

function draw(){
if (playerCount===4){
  game.update(1)
}
if (gameState===1){
  clear()
  game.play();
}
if (gameState===2){
  game.end()
}
}
