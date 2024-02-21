// displays phone message outcome

function outcome()

{

  var val = readVar("ch14laura_message");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14message2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14message2_blank.jpg'>");

}

outcome();