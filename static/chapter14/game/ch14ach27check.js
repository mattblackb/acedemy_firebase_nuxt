// displays achievement outcome

function outcome()

{

  var val = readVar("ch14take_briefcase");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach27.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach27_blank.jpg'>");

}

outcome();