// displays achievement outcome

function outcome()

{

  var val = readVar("ch14sebastian_key");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach18.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach18_blank.jpg'>");

}

outcome();