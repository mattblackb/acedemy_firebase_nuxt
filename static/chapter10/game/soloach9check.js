// displays solo police bribe outcome

function outcome()

{

  var val = readVar("solo_bribe");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/soloach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/soloach9_blank.jpg'>");

}

outcome();