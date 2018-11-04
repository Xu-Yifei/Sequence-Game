// Game currently only supports sequences of length up to 9
var sequenceLength;

var sequence = [];
var inputSequence = [];

var difficulty = 2;
var delayTime = 1000;

var presses = 0;

function setup() 
{
	createCanvas(1030,300);
}

function leftClick()
{
	if(sequence[presses] == 4) // If correct
	{
		stroke('#e2ea88');
		fill('#b6c138');
		rect(100 * (presses + 1),30,100,100);
		fill('#e2ea88');
	}
	else
	{
		stroke('#ea9588');
		fill('#992a1a');
		rect(100 * (presses + 1),30,100,100);
		fill('#ea9588');
	}

	triangle(100 * (presses + 1) + 80, 50, 100 * (presses + 1) + 80, 110, 100 * (presses + 1) + 20, 80);
	
	presses++;

	if(presses > sequenceLength - 1)
	{
		document.removeEventListener('keydown',startClicking);
		showActual();
	}
}

function upClick()
{
	if(sequence[presses] == 1) // If correct
	{
		stroke('#e2ea88');
		fill('#b6c138');
		rect(100 * (presses + 1),30,100,100);
		fill('#e2ea88');
	}
	else
	{
		stroke('#ea9588');
		fill('#992a1a');
		rect(100 * (presses + 1),30,100,100);
		fill('#ea9588');
	}

	triangle(100 * (presses + 1) + 80, 110, 100 * (presses + 1) + 20, 110, 100 * (presses + 1) + 50, 50);

	presses++;

	if(presses > sequenceLength - 1)
	{
		document.removeEventListener('keydown',startClicking);
		showActual();
	}
}

function rightClick()
{
	if(sequence[presses] == 2) // If correct
	{
		stroke('#e2ea88');
		fill('#b6c138');
		rect(100 * (presses + 1),30,100,100);
		fill('#e2ea88');
	}
	else
	{
		stroke('#ea9588');
		fill('#992a1a');
		rect(100 * (presses + 1),30,100,100);
		fill('#ea9588');
	}

	triangle(100 * (presses + 1) + 20, 50, 100 * (presses + 1) + 20, 110, 100 * (presses + 1) + 80, 80);

	presses++;

	if(presses > sequenceLength - 1)
	{
		document.removeEventListener('keydown',startClicking);
		showActual();
	}
}

function downClick()
{
	if(sequence[presses] == 3) // If correct
	{
		stroke('#e2ea88');
		fill('#b6c138');
		rect(100 * (presses + 1),30,100,100);
		fill('#e2ea88');
	}
	else
	{
		stroke('#ea9588');
		fill('#992a1a');
		rect(100 * (presses + 1),30,100,100);
		fill('#ea9588');
	}

	triangle(100 * (presses + 1) + 80, 50, 100 * (presses + 1) + 20, 50, 100 * (presses + 1) + 50, 110);

	presses++;

	if(presses > sequenceLength - 1)
	{
		document.removeEventListener('keydown',startClicking);
		showActual();
	}
}

function startClicking(event)
{
	if (event.keyCode == 37) 
    {
    	leftClick();
    } 
    else if (event.keyCode == 38)
    {
    	upClick();
    }
    else if (event.keyCode == 39)
    {
    	rightClick();
    }
    else if (event.keyCode == 40)
    {
    	downClick();
    }
}

function drawInput() 
{
	document.addEventListener('keydown', startClicking);
}

function showActual()
{
	stroke('#f7e6a0');

	for (var i = 0; i < sequenceLength; i++) 
	{
		fill('#efc313');
		rect(100 * (i + 1),30 + 120,100,100);
		fill('#f7e6a0');

		switch(sequence[i]) 
		{
			case 1:
				// Up arrow
				triangle(100 * (i + 1) + 80, 110 + 120, 100 * (i + 1) + 20, 110 + 120, 100 * (i + 1) + 50, 50 + 120);
				break;
			case 2:
				// Right arrow
				triangle(100 * (i + 1) + 20, 50 + 120, 100 * (i + 1) + 20, 110 + 120, 100 * (i + 1) + 80, 80 + 120);
				break;
			case 3:
				// Down arrow
				triangle(100 * (i + 1) + 80, 50 + 120, 100 * (i + 1) + 20, 50 + 120, 100 * (i + 1) + 50, 110 + 120);
				break;
			case 4:
				// Left arrow
				triangle(100 * (i + 1) + 80, 50 + 120, 100 * (i + 1) + 80, 110 + 120, 100 * (i + 1) + 20, 80 + 120);
				break;
			default:
				alert("You've messed up");
		}
	}
}

// To-do
// -Clean up the algorithm for finding points of triangle
// -Find a better looking triangular shape while maintaing consistency of placement with other triangles
//
function drawSequence() 
{
	clear(); 
	document.removeEventListener('keydown',startClicking);
	presses = 0;

	sequenceLength = parseInt(document.getElementById("seqLength").value);

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

	setTimeout(function(){clear(); drawInput();}, delayTime);
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
