// displays possession outcome

function outcome()

{

  var val = readVar("ch14principal_key");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14possession2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14possession2_blank.jpg'>");

}

outcome();