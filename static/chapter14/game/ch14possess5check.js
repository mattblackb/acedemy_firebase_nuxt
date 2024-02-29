// displays possession outcome

function outcome()

{

  var val = readVar("ch14have_package");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14possession5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14possession5_blank.jpg'>");

}

outcome();