// displays possession outcome

function outcome()

{

  var val = readVar("ch14have_folder");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14possession4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14possession4_blank.jpg'>");

}

outcome();