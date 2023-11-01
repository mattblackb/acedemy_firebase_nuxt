// displays achievement outcome

function outcome()

{

  var val = readVar("ch12asuki_cum_clean");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12asukiach11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();