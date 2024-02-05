// displays achievement outcome

function outcome()

{

  var val = readVar("ch14_alicia_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/alicia_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/alicia_blank.jpg'>");

}

outcome();