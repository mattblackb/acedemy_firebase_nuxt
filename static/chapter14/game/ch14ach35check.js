// displays achievement outcome

function outcome()

{

  var val = readVar("ch14twins_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach35.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach35_blank.jpg'>");

}

outcome();