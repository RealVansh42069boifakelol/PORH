var canvas = new fabric.Canvas('myCanvas');

//ball position
var ballY = 0;
var ballX = 0;
//hole position
var holeY = 400;
var holeX = 750;

//block image height
blockImgHeight = 10;
blockImgHeight = 10;

function loadImg()
{
	fabric.Image.formURL("golf-h.png", function(Img)
	{
		var holeObj = Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);

		holeObj.set({
			top: holeY,
			left:holeX
		});
		
		canvas.add(holeObj);
	});
	newImage();
}
//newImage function
function newImage()
{
	fabric.Image.formURL("ball.png",function(Img)
	{
		var ballObj = Img;
		ballObj.scaleToWidth(50);
		ballObj.scaleToHeight(50);

		ballObj.set({
			top: ballY,
			left: ballX
		});
		canvas.add(ballObj);
	});
}
if((ballX == holeX) && (ballY == holeY))
{
	canvas.remove(ballObj);
	document.getElementById("hitTheGoalH").innerHTML = "inventory system in unity is a hard thing too do";
	document.getElementById("myCanvas").style.borderColor = "green";
}
//move down
function down()
{
	if(ballY <= 450)
	{
		ballY += blockImgHeight;
		console.log("you can put if statement without curly brackets but you do only one line");
		console.log("for example "+"if(blockImgHeight == 20)")
		console.log("				//do something");
		canvas.remove(ballObj);
		newImage();
	}
}
//move up
function up()
{
	if(ballY >=0)
	{
		ballY -= blockImgHeight;
		console.log("MILLIONS TO ONE!");
		canvas.remove(ballobj);
		canvas.remove(ballObj);
		newImage();
	}
}
//move left
function left()
{
	if(ballX >= 0)
	{
		ballX += blockImgWidth;
		console.log("MICHAEL WAS NEVER IN WITNESS PROTECTION");
		console.log("WITNESS PROTECTION FOR WHAT");
		canvas.remove(ballObj);
		newImage();
	}
}
//move right
function right() 
{
	if(ballX <= 750)
	{
		ballX -= blockImgWidth;
		console.log("19/20");
		canvas.remove(ballObj);
		newImage();
	}
}
