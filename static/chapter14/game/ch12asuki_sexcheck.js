// displays achievement outcome

function outcome()

{

  var val = readVar("ch12_asuki_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/250asuki.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/250asuki_blank.jpg'>");

}

outcome();