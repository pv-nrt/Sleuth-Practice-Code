/*

Officer: 3463827
CaseNum: 303-2-82610994-3463827

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is released:
	- Make classified_store_value_0 equal to the value of mouseX
	- Use the 'min' function to prevent classified_store_value_0 from going above 22

	When the mouse button is pressed:
	- Decrement classified_store_value_1 by 1
	- Use the 'constrain' function to prevent classified_store_value_1 from falling below 3 and going above 21

	Whilst the mouse is being dragged:
	- Make classified_store_value_2 equal to the value of mouseX
	- Use the 'constrain' function to prevent classified_store_value_2 from falling below 2 and going above 11

	When the mouse button is pressed:
	- Decrement classified_store_value_3 by 2
	- Use the 'constrain' function to prevent classified_store_value_3 from falling below 2 and going above 11

	When the mouse button is pressed:
	- Make classified_store_value_4 equal to the value of mouseX
	- Use the 'min' function to prevent classified_store_value_4 from going above 77



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var classified_store_value_0;
var classified_store_value_1;
var classified_store_value_2;
var classified_store_value_3;
var classified_store_value_4;
//var x ;

function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	classified_store_value_0 = 0;
	classified_store_value_1 = 0;
	classified_store_value_2 = 0;
	classified_store_value_3 = 0;
	classified_store_value_4 = 0;
	//x = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mousePressed()
{
	console.log("mousePressed", mouseX, mouseY);
	classified_store_value_1 -= 1;
	classified_store_value_1 = constrain(classified_store_value_1,3,21);
	
	classified_store_value_3 -= 2;
	classified_store_value_3 = constrain(classified_store_value_3,2,11);
	
	classified_store_value_4 = mouseX;
	classified_store_value_4 = min(classified_store_value_4,77);
}

function mouseReleased()
{
	console.log("mouseReleased", mouseX, mouseY);
	classified_store_value_0 = mouseX;
	classified_store_value_0 = min(classified_store_value_0,22);
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
	classified_store_value_2 = mouseX;
	classified_store_value_2 = constrain(classified_store_value_2,2,11);
}
///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,classified_store_value_0, 26);
	pop();

	push();
	translate(120,380);
	drawDial(140,classified_store_value_1, 26);
	pop();

	push();
	translate(280,170);
	drawDial(140,classified_store_value_2, 15);
	pop();

	push();
	translate(280,380);
	drawDial(140,classified_store_value_3, 16);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(classified_store_value_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
