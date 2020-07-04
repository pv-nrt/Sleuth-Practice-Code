/*

Officer: 3463827
CaseNum: 202-3-28279149-3463827

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce cyan filled text with blue outline in Diggity font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(585,585);
	textSize(33);
}

function draw()
{
	background(255);

	fill(255,192,203);
	stroke(0,0,0);
	textFont(Ballpointprint);
//	text("these", 355,135);
//	text("sometimes.", 313,174);
	fill(255,165,0);
	stroke(0,0,255);
	textFont(Diggity);
//	text("a", 524,213);
	textFont(RonsFont);
//	text("Is", 357,247);
//	text("all", 276,247);
	push();
	stroke(0,0,0);
	textFont(Ballpointprint);
//	text("?", 139,213);
	pop();
	textFont(Ballpointprint);
//	text("x", 89,457);
	fill(255,192,203);
	textFont(Melissa);
//	text("away", 417,213);
	push();
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
//	text("ignore", 267,135);
	pop();
	stroke(0,255,0);
	textFont(Diggity);
//	text("the", 277,325);
//	text("sure", 210,283);
	fill(255,165,0);
//	text("can", 486,283);
	fill(255,192,203);
	stroke(0,0,0);
//	text("not", 162,283);
//	text("silence.", 326,325);
//	text("If", 332,99);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Ballpointprint);
//	text("me", 87,213);
	push();
	fill(0,255,255);
	stroke(0,255,0);
	textFont(Melissa);
//	text("no", 154,135);
//	text("?", 314,99);
	pop();
	textFont(RonsFont);
//	text("you", 59,99);
	fill(255,255,0);
	textFont(Ballpointprint);
//	text("bre", 23,247);
	fill(0,255,255);
	stroke(255,0,0);
	textFont(Melissa);
//	text("sort", 166,247);
	fill(255,192,203);
	textFont(Ballpointprint);
//	text("ak", 65,247);
	push();
	fill(255,255,0);
	stroke(0,0,255);
	textFont(Melissa);
//	text("avoiding", 9,213);
	pop();
	textFont(RonsFont);
//	text("Are", 450,174);
//	text("send", 473,99);
	fill(255,165,0);
	stroke(0,0,0);
	textFont(Melissa);
//	text("cash.", 10,135);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Diggity);
//	text("can", 105,135);
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Melissa);
//	text("ver", 54,391);
	stroke(0,0,255);
	textFont(RonsFont);
//	text("Da", 12,457);
	fill(255,255,0);
	stroke(0,255,0);
//	text("isy", 44,457);
//	text("?", 77,283);
	fill(255,165,0);
	stroke(255,0,0);
//	text("continual", 439,135);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Melissa);
//	text("how", 269,283);
	stroke(255,0,0);
//	text("we", 284,213);
	textFont(Ballpointprint);
//	text("and", 108,247);
	textFont(RonsFont);
//	text("so", 175,174);
	fill(255,165,0);
	textFont(Diggity);
//	text("s", 72,174);
	push();
	textFont(Melissa);
//	text("Fore", 14,391);
	pop();
	stroke(0,0,0);
	textFont(Melissa);
//	text("hould", 331,213);
	textFont(Ballpointprint);
//	text("darling", 55,33);
	fill(255,255,0);
	textFont(RonsFont);
//	text("yours,", 91,391);
	push();
	fill(0,255,255);
	stroke(0,255,0);
//	text("?", 59,325);
	pop();
	textFont(Melissa);
//	text("are", 137,174);
	stroke(255,0,0);
	textFont(RonsFont);
//	text("I'm", 101,283);
	fill(0,255,255);
	stroke(255,0,255);
	textFont(Ballpointprint);
//	text("I", 446,283);
//	text("longer", 182,135);
	stroke(0,0,255);
//	text("Bob,", 150,33);
//	text("I", 65,135);
//	text("Perhaps", 176,213);
	push();
	stroke(0,255,0);
	textFont(Diggity);
//	text("money", 238,99);
	pop();
	textFont(Diggity);
	text("safe", 16,283);
	text("for", 476,213);
	fill(255,192,203);
	stroke(255,0,0);
	textFont(Melissa);
//	text("take", 9,325);
//	text("s", 319,213);
	fill(255,255,0);
	stroke(0,0,255);
	textFont(RonsFont);
//	text("of", 198,99);
	fill(0,255,255);
	textFont(Ballpointprint);
//	text("The", 83,325);
	push();
	fill(255,192,203);
	stroke(255,0,0);
	textFont(Diggity);
//	text("more", 381,283);
	pop();
	textFont(Melissa);
//	text("out.", 316,247);
	stroke(255,0,255);
	textFont(RonsFont);
//	text("so,", 361,99);
	stroke(0,0,0);
	textFont(Melissa);
//	text("My", 18,33);
	stroke(0,0,255);
	textFont(Diggity);
	text("guard", 215,174);
	text("you", 512,174);
	text("go", 382,213);
	text("delay", 21,174);
	text("I", 407,99);
	text("can", 424,99);
	textFont(RonsFont);
//	text("this", 216,247);
	fill(255,192,203);
	stroke(255,0,255);
	textFont(Melissa);
//	text("You", 96,174);
//	text("Are", 18,99);
//	text("relationship", 448,247);
	textFont(RonsFont);
//	text("secrets,", 154,325);
//	text("short", 117,99);
	textFont(Ballpointprint);
//	text("much", 312,283);
	textFont(Diggity);
//	text("our", 400,247);
//	text("ed", 274,174);



}
