// displays sub game score

function infcheck()

{

  var val = readVar("end_sarah");

	if ((val > -1)&&(val < 1))

        document.write("<img src='buttonsetc/end_sarah0.png'>"); 

    else 

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/end_sarah1.png'>"); 

    else 

    if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/end_sarah2.png'>"); 

    else 

    if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/end_sarah3.png'>"); 

	else 

    if ((val > 3)&&(val < 5))

        document.write("<img src='buttonsetc/end_sarah4.png'>");  

	else 

    if ((val > 4)&&(val < 6))

        document.write("<img src='buttonsetc/end_sarah5.png'>"); 
	
	else 

    if ((val > 5)&&(val < 7))

        document.write("<img src='buttonsetc/end_sarah6.png'>");
	
	else 

    if ((val > 6)&&(val < 8))

        document.write("<img src='buttonsetc/end_sarah7.png'>");
	
	else 

    if ((val > 7)&&(val < 9))

        document.write("<img src='buttonsetc/end_sarah8.png'>");

    else 

        document.write("<img src='buttonsetc/end_sarah0.png'>");     

}

infcheck();