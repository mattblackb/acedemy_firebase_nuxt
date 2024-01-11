// displays achievement outcome

function outcome()

{

  var val = readVar("ch14alicia_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/startchecks/alicia_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/startchecks/alicia_blank.jpg'>");

}

outcome();