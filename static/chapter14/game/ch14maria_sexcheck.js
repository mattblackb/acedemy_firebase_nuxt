// displays achievement outcome

function outcome()

{

  var val = readVar("ch14_maria_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/maria_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/maria_blank.jpg'>");

}

outcome();