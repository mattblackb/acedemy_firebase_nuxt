// displays achievement outcome

function outcome()

{

  var val = readVar("ch12_sapphire_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/250sapphire.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/250sapphire_blank.jpg'>");

}

outcome();