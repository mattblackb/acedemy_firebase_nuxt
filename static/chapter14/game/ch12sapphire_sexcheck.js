// displays achievement outcome

function outcome()

{

  var val = readVar("ch12sapphire_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/startchecks/250sapphire.jpg'>");
	
else
	
document.write("<img src='buttonsetc/startchecks/250sapphire_blank.jpg'>");

}

outcome();