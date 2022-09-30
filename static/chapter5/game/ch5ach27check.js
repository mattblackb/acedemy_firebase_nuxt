// displays bridgette cctv outcome

function outcome()

{

  var val = readVar("bridgette_cctv");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ach27.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach27_blank.jpg'>");

}

outcome();