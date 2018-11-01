// Game currently only supports sequences of length up to 9
var sequenceLength = 5;

var sequence = [];
var inputSequence = [];

var difficulty = 2;
var delayTime = 1000;

function setup() 
{
	createCanvas(1030,200);
}

function draw() 
{
	
}

function generateSequence() 
{

}

// To-do
// -Clean up the algorithm for finding points of triangle
// -Find a better looking triangular shape while maintaing consistency of placement with other triangles
//
function drawSequence() 
{
	strokeWeight(1);
	stroke('#ffffff');

	for (var i = 0; i < sequenceLength; i++) 
	{
		sequence[i] = roll();

		fill('#dddddd');
		rect(100 * (i + 1),30,100,100);
		fill('#ffffff');

		switch(sequence[i]) 
		{
			case 1:
				// Up arrow
				triangle(100 * (i + 1) + 80, 110, 100 * (i + 1) + 20, 110, 100 * (i + 1) + 50, 50);
				break;
			case 2:
				// Right arrow
				triangle(100 * (i + 1) + 20, 50, 100 * (i + 1) + 20, 110, 100 * (i + 1) + 80, 80);
				break;
			case 3:
				// Down arrow
				triangle(100 * (i + 1) + 80, 50, 100 * (i + 1) + 20, 50, 100 * (i + 1) + 50, 110);
				break;
			case 4:
				// Left arrow
				triangle(100 * (i + 1) + 80, 50, 100 * (i + 1) + 80, 110, 100 * (i + 1) + 20, 80);
				break;
			default:
				alert("You've messed up");
		}
	}
	setTimeout(function(){clear();}, delayTime);
}

function roll() 
{
	return Math.floor((Math.random() * 4) + 1);
}

function setDifficulty(diffID)
{
	difficulty = diffID;

	switch(diffID) 
	{
		case 1:
			document.getElementById("diff").innerHTML = "Easy";
			delayTime = 1500;
			break;
		case 2:
			document.getElementById("diff").innerHTML = "Medium";
			delayTime = 1000;
			break;
		case 3:
			document.getElementById("diff").innerHTML = "Hard";
			delayTime = 500;
			break;
		default:
			alert("Something went wrong");
			break;
	}
}