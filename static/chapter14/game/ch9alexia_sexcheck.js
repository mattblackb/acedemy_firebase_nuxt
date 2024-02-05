// displays achievement outcome

function outcome()

{

  var val = readVar("ch9_alexia_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/250alexia.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/250alexia_blank.jpg'>");

}

outcome();