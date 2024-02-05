// displays achievement outcome

function outcome()

{

  var val = readVar("ch14_alexia_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/alexia_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/alexia_blank.jpg'>");

}

outcome();