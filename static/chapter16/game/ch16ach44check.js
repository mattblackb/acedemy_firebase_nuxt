// displays achievement outcome

function outcome()

{

  var val = readVar("ch16ramsey_bridgette");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch16ach44_blank.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch16ach44_1.jpg'>");
	
	else
		
	if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/endcards/ch16ach44_2.jpg'>");
	
	else
		
	if ((val > 3)&&(val < 5))

        document.write("<img src='buttonsetc/endcards/ch16ach44_3.jpg'>");
	
	else
		
	if ((val > 4)&&(val < 7))

        document.write("<img src='buttonsetc/endcards/ch16ach44_4.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach44_blank.jpg'>");

}

outcome();