// displays alexia flirting outcome

function outcome()

{

  var val = readVar("ch9barmaid_flirt");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch9alxach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch9alxach1_blank.jpg'>");

}

outcome();