// displays jodie agree outcome

function outcome()

{

  var val = readVar("ch2jodie_agree");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch2ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch2ach5_blank.jpg'>");

}

outcome();