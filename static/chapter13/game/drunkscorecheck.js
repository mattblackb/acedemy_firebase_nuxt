// displays sub game score

function infcheck()

{

  var val = readVar("alcohol");

	if ((val > -10)&&(val < 1))

        document.write("<img src='buttonsetc/drunk0.jpg'>"); 

    else

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/drunk1.jpg'>"); 

    else 

    if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/drunk2.jpg'>"); 

    else 

    if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/drunk3.jpg'>"); 

    else 

    if ((val > 3)&&(val < 5))

        document.write("<img src='buttonsetc/drunk4.jpg'>");
	
	else 

    if ((val > 4)&&(val < 6))

        document.write("<img src='buttonsetc/drunk5.jpg'>");
	
	else 

    if ((val > 5)&&(val < 10))

        document.write("<img src='buttonsetc/drunk6.jpg'>");

    else 

        document.write("<img src='buttonsetc/error.jpg'>");     

}

infcheck();