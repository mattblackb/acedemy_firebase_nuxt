// displays achievement outcome

function outcome()

{

  var val = readVar("ch14_didi_sex");

if (val > 0)
	
document.write("<img src='buttonsetc/pregame/didi_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/pregame/didi_blank.jpg'>");

}

outcome();