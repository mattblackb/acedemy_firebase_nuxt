// displays achievement outcome

function outcome()

{

  var val = readVar("ch14caitlin_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach38.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach38_blank.jpg'>");

}

outcome();