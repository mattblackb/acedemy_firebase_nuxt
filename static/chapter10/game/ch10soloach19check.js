// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solostreet_didi");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach19.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach19_blank.jpg'>");

}

outcome();