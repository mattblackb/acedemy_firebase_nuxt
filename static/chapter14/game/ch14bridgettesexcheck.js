// displays achievement outcome

function outcome()

{

  var val = readVar("ch14bridgette_sex");

if ((val > 0)&&(val < 2))
	
document.write("<img src='buttonsetc/clock9.jpg'>");
	
else
	
if ((val > 1)&&(val < 3))
	
document.write("<img src='buttonsetc/character_profiles_bridgette_naked.jpg'>");
	
else
	
document.write("<img src='buttonsetc/character_profiles_bridgette_blank.jpg'>");

}

outcome();