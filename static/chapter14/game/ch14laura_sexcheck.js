// displays achievement outcome

function outcome()

{

  var val = readVar("ch14laura_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/laura_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/laura_blank.jpg'>");

}

outcome();