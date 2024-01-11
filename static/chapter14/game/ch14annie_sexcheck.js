// displays achievement outcome

function outcome()

{

  var val = readVar("ch14annie_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/startchecks/annie_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/startchecks/annie_blank.jpg'>");

}

outcome();