/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 3463827
CaseNum: 201-3-95854755-3463827

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
	beginShape();
	vertex(601,484);
	vertex(565,468);
	vertex(531,391);
	vertex(515,374);
	vertex(498,402);
	vertex(497,424);
	vertex(463,424);
	vertex(470,392);
	vertex(508,339);
	vertex(557,352);
	vertex(571,279);
	vertex(566,174);
	vertex(595,165);
	vertex(600,128);
	vertex(609,95);
	vertex(647,88);
	vertex(670,107);
	vertex(708,70);
	vertex(722,73);
	vertex(722,110);
	vertex(689,139);
	vertex(716,143);
	vertex(712,185);
	vertex(696,256);
	vertex(690,303);
	vertex(675,345);
	vertex(672,397);
	vertex(713,408);
	vertex(744,401);
	vertex(810,420);
	vertex(829,441);
	vertex(816,460);
	vertex(784,441);
	vertex(734,438);
	vertex(699,438);
	vertex(662,482);
	vertex(601,484);
	endShape();
}
