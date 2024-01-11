// displays achievement outcome

function outcome()

{

  var val = readVar("ch12haven_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/250haven.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/250haven_blank.jpg'>");

}

outcome();