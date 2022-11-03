// displays 7th code outcome

function outcome()

{

  var val = readVar("principal_secret");

	

    if (val > 0)

        document.write("<img src='buttonsetc/code_9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/code_1.jpg'>");

}

outcome();