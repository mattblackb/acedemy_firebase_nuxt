// displays achievement outcome

function outcome()

{

  var val = readVar("ch14_jodie_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/jodie_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/jodie_blank.jpg'>");

}

outcome();