// displays achievement outcome

function outcome()

{

  var val = readVar("ch12asuki_cum_titjob");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12asukiach8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();