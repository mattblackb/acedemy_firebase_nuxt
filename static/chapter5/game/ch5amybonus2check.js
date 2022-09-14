// displays amy_bonus outcome

function outcome()

{

  var val = readVar("ch5amy_stroke_cum");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch5amybonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();