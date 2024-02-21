// displays achievement outcome

function outcome()

{

  var val = readVar("ch14take_folder");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach29.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach29_blank.jpg'>");

}

outcome();