const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase, playerBase, player, computerPlayer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new ComputerBase(300, random(450, height), 180, 500);
   playerBase = new Playerbase(300, random(450, height-300), 180, 500);
   player = new Player(285, playerBase.body.position.y-153, 50, 180);
   computerPlayer = new ComputerPlayer(285, computerBase.position.y-153, 50, 180);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    Playerbase.display();
    ComputerBase.display();

   //display Player and computerplayer
    Player.display();
    ComputerPlayer.display();

}
