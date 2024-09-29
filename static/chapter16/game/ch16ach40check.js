// displays achievement outcome

function outcome()

{

  var val = readVar("ch16maddison_disappointed");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach40.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach40_blank.jpg'>");

}

outcome();