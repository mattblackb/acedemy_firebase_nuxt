// displays achievement outcome

function outcome()

{

  var val = readVar("ch14goodhead_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach31.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach31_blank.jpg'>");

}

outcome();