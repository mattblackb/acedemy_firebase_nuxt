// displays achievement outcome

function outcome()

{

  var val = readVar("ch11alicia_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/startchecks/250alicia.jpg'>");
	
else
	
document.write("<img src='buttonsetc/startchecks/250alicia_blank.jpg'>");

}

outcome();