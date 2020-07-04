/*
The case of the Python Syndicate
Stage 1

Officer: 3463827
CaseNum: 301-0-92730451-3463827

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var bones_karpinski_image;
var robbie_kray_image;
var anna_karpinski_image;
var lina_lovelace_image;
var countess_hamilton_image;
var cecil_karpinski_image;



//declare your new variables below
var lina_lovelace_location_x = 115;
var lina_lovelace_location_y = 309;

var bones_karpinski_location_x = 115;
var bones_karpinski_location_y = 40;

var robbie_kray_location_x = 408;
var robbie_kray_location_y = 40;

var anna_karpinski_location_x = 701;
var anna_karpinski_location_y = 40;

var countess_hamilton_location_x = 408;
var countess_hamilton_location_y = 309;

var cecil_karpinski_location_x = 701;
var cecil_karpinski_location_y = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_image = loadImage("karpinskiDog.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	lina_lovelace_image = loadImage("lina.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(lina_lovelace_image, lina_lovelace_location_x, lina_lovelace_location_y);
	image(bones_karpinski_image, bones_karpinski_location_x, bones_karpinski_location_y);
	image(robbie_kray_image, robbie_kray_location_x, robbie_kray_location_y);
	image(anna_karpinski_image, anna_karpinski_location_x, anna_karpinski_location_y);
	image(countess_hamilton_image, countess_hamilton_location_x, countess_hamilton_location_y);
	image(cecil_karpinski_image, cecil_karpinski_location_x, cecil_karpinski_location_y);

	//image(bones_karpinski_image, 115, 40);
	//image(robbie_kray_image, 408, 40);
	//image(anna_karpinski_image, 701, 40);
	//image(countess_hamilton_image, 408, 309);
	//image(cecil_karpinski_image, 701, 309);

}