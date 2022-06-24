// displays shower_bonus outcome

function outcome()

{

  var val = readVar("ch4shower_sex");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch4showerbonus5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();