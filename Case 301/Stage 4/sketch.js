/*
The case of the Python Syndicate
Stage 4

Officer: 3463827
CaseNum: 301-3-74908573-3463827

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var bonesKarpinskiImg;
var cecilKarpinskiImg;
var robbieKrayImg;
var linaLovelaceImg;
var pawelKarpinskiImg;
var annaKarpinskiImg;

var cecilKarpinskiObj;
var bonesKarpinskiObj;
var robbieKrayObj;
var linaLovelaceObj;
var pawelKarpinskiObj;
var annaKarpinskiObj;


//declare your new objects below


/*var bonesKarpinskiPosX = 115;
var bonesKarpinskiPosY = 40;
var robbieKrayPosX = 701;
var robbieKrayPosY = 40;
var linaLovelacePosX = 115;
var linaLovelacePosY = 309;
var pawelKarpinskiPosX = 408;
var pawelKarpinskiPosY = 309;
var annaKarpinskiPosX = 701;
var annaKarpinskiPosY = 309;*/


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	linaLovelaceImg = loadImage("lina.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecilKarpinskiObj = {
		x: 408,
		y: 40,
		image: cecilKarpinskiImg
	};

	bonesKarpinskiObj = {
		x: 115,
		y: 40,
		image: bonesKarpinskiImg
	};

	robbieKrayObj = {
		x: 701,
		y: 40,
		image: robbieKrayImg
	};

	linaLovelaceObj = {
		x: 115,
		y: 309,
		image: linaLovelaceImg
	};
	
	pawelKarpinskiObj = {
		x: 408,
		y: 309,
		image: pawelKarpinskiImg
	};
	
	annaKarpinskiObj = {
		x: 701,
		y: 309,
		image: annaKarpinskiImg
	};


	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	//image(bonesKarpinskiImg, bonesKarpinskiPosX, bonesKarpinskiPosY);
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);
	image(robbieKrayObj.image, robbieKrayObj.x, robbieKrayObj.y);
	image(linaLovelaceObj.image, linaLovelaceObj.x, linaLovelaceObj.y);
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);
	//image(robbieKrayImg, robbieKrayPosX, robbieKrayPosY);
	//image(linaLovelaceImg, linaLovelacePosX, linaLovelacePosY);
	//image(pawelKarpinskiImg, pawelKarpinskiPosX, pawelKarpinskiPosY);
	//image(annaKarpinskiImg, annaKarpinskiPosX, annaKarpinskiPosY);


}