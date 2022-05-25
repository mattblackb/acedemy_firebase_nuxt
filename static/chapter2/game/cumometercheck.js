// displays sub game score

function infcheck()

{

  var val = readVar("cumometer");

	if ((val > -100)&&(val < 1))

        document.write("<img src='buttonsetc/cumometer0.jpg'>"); 

    else 

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/cumometer1.jpg'>"); 

    else 

    if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/cumometer2.jpg'>"); 

    else 

    if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/cumometer3.jpg'>"); 

	else 

    if ((val > 3)&&(val < 5))

        document.write("<img src='buttonsetc/cumometer4.jpg'>");  

	else 

    if ((val > 4)&&(val < 6))

        document.write("<img src='buttonsetc/cumometer5.jpg'>");
	
	else 

    if ((val > 5)&&(val < 7))

        document.write("<img src='buttonsetc/cumometer6.jpg'>");
	
	else 

    if ((val > 6)&&(val < 8))

        document.write("<img src='buttonsetc/cumometer7.jpg'>");
	
	else 

    if ((val > 7)&&(val < 9))

        document.write("<img src='buttonsetc/cumometer8.jpg'>");
	
	else 

    if ((val > 8)&&(val < 10))

        document.write("<img src='buttonsetc/cumometer9.jpg'>");
	
	else 

    if ((val > 9)&&(val < 11))

        document.write("<img src='buttonsetc/cumometer10.gif'>");
	
	else 

    if ((val > 10)&&(val < 12))

        document.write("<img src='buttonsetc/cumometer11.gif'>");

	else 

    if ((val > 11)&&(val < 100))

        document.write("<img src='buttonsetc/cumometer12.gif'>");

    else 

        document.write("<img src='buttonsetc/error.jpg'>");     

}

infcheck();