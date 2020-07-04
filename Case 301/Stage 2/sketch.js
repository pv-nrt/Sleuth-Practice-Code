/*
The case of the Python Syndicate
Stage 2


Officer: 3463827
CaseNum: 301-1-56733528-3463827

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Robbie kray

- The variables for Robbie kray have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Robbie kray for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var countess_hamilton_img;
var robbie_kray_img;
var bones_karpinski_img;
var cecil_karpinski_img;
var anna_karpinski_img;
var pawel_karpinski_img;


var robbie_kray_x_loc = 408;
var robbie_kray_y_loc = 40;

//var countess_hamilton_x_loc = robbie_kray_x_loc - 293;
//var countess_hamilton_y_loc = robbie_kray_y_loc;

//var bones_karpinski_x_loc = robbie_kray_x_loc + 293;
//var bones_karpinski_y_loc = robbie_kray_y_loc;

//var cecil_karpinski_x_loc = robbie_kray_x_loc - 293;
//var cecil_karpinski_y_loc = robbie_kray_y_loc + 269;

//var anna_karpinski_x_loc = robbie_kray_x_loc;
//var anna_karpinski_y_loc = robbie_kray_y_loc + 269;

//var pawel_karpinski_x_loc = robbie_kray_x_loc + 293;
//var pawel_karpinski_y_loc = robbie_kray_y_loc + 269;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_img = loadImage("countessHamilton.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbie_kray_img, robbie_kray_x_loc, robbie_kray_y_loc);
	image(countess_hamilton_img, robbie_kray_x_loc - 293, robbie_kray_y_loc);
	image(bones_karpinski_img, robbie_kray_x_loc + 293, robbie_kray_y_loc);
	image(cecil_karpinski_img, robbie_kray_x_loc - 293, robbie_kray_y_loc + 269);
	image(anna_karpinski_img, robbie_kray_x_loc, robbie_kray_y_loc + 269);
	image(pawel_karpinski_img, robbie_kray_x_loc + 293, robbie_kray_y_loc + 269);

	//image(countess_hamilton_img, 115, 40);
	//image(bones_karpinski_img, 701, 40);
	//image(cecil_karpinski_img, 115, 309);
	//image(anna_karpinski_img, 408, 309);
	//image(pawel_karpinski_img, 701, 309);

}