// displays achievement outcome

function outcome()

{

  var val = readVar("ch12vixen_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/250vixen.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/250vixen_blank.jpg'>");

}

outcome();