// displays achievement outcome

function outcome()

{

  var val = readVar("ch14annie_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/annie_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/annie_blank.jpg'>");

}

outcome();