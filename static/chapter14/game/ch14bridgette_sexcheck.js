// displays achievement outcome

function outcome()

{

  var val = readVar("ch14bridgette_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/bridgette_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/bridgette_blank.jpg'>");

}

outcome();