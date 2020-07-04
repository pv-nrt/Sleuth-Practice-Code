/*
The case of the Python Syndicate
Stage 3


Officer: 3463827
CaseNum: 301-2-74373044-3463827

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Pawel karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Pawel karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var anna_karpinski_img;
var bones_karpinski_img;
var robbie_kray_img;
var pawel_karpinski_img;
var cecil_karpinski_img;
var rocky_kray_img;

var pawel_karpinski_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	rocky_kray_img = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	pawel_karpinski_object = {
		x: 115,
		y: 309,
		image: pawel_karpinski_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_object.image, pawel_karpinski_object.x, pawel_karpinski_object.y);
	image(anna_karpinski_img, pawel_karpinski_object.x, pawel_karpinski_object.y-269);
	image(bones_karpinski_img, pawel_karpinski_object.x+293, pawel_karpinski_object.y-269);
	image(robbie_kray_img, pawel_karpinski_object.x+586, pawel_karpinski_object.y-269);
	image(cecil_karpinski_img, pawel_karpinski_object.x+293, pawel_karpinski_object.y);
	image(rocky_kray_img, pawel_karpinski_object.x+586, pawel_karpinski_object.y);
	

	//image(anna_karpinski_img, 115, 40);
	//image(bones_karpinski_img, 408, 40);
	//image(robbie_kray_img, 701, 40);
	//image(cecil_karpinski_img, 408, 309);
	//image(rocky_kray_img, 701, 309);

}