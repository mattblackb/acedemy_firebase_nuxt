// displays achievement outcome

function outcome()

{

  var val = readVar("ch14_principal_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/principal_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/principal_blank.jpg'>");

}

outcome();