// displays achievement outcome

function outcome()

{

  var val = readVar("ch11_caitlin_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/250caitlin.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/250caitlin_blank.jpg'>");

}

outcome();