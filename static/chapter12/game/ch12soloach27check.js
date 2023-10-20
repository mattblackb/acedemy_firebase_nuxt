// displays achievement outcome

function outcome()

{

  var val = readVar("ch12cherry_backstage");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach27.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach27_blank.jpg'>");

}

outcome();