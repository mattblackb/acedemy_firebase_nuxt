// displays principal blackmail outcome

function outcome()

{

  var val = readVar("principal_secret");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ach33.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach33_blank.jpg'>");

}

outcome();