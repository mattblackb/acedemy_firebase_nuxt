// displays phone message outcome

function outcome()

{

  var val = readVar("ch14bridgette_message");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14message1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14message1_blank.jpg'>");

}

outcome();