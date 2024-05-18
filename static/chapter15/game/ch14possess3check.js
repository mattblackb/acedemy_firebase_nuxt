// displays possession outcome

function outcome()

{

  var val = readVar("ch14have_briefcase");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14possession3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14possession3_blank.jpg'>");

}

outcome();