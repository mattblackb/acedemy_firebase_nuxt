// displays achievement outcome

function outcome()

{

  var val = readVar("ch11_alicia_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/250alicia.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/250alicia_blank.jpg'>");

}

outcome();