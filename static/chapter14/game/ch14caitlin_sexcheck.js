// displays achievement outcome

function outcome()

{

  var val = readVar("ch14_caitlin_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/caitlin_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/caitlin_blank.jpg'>");

}

outcome();