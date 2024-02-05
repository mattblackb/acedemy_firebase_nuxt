// displays achievement outcome

function outcome()

{

  var val = readVar("ch14take_package");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach28.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach28_blank.jpg'>");

}

outcome();