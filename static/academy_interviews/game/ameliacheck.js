// displays sub game score

function infcheck()

{

  var val = readVar("end_amelia");

	if ((val > -1)&&(val < 1))

        document.write("<img src='buttonsetc/end_amelia0.png'>"); 

    else 

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/end_amelia1.png'>"); 

    else 

    if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/end_amelia2.png'>"); 

    else 

    if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/end_amelia3.png'>"); 

	else 

    if ((val > 3)&&(val < 5))

        document.write("<img src='buttonsetc/end_amelia4.png'>");  

	else 

    if ((val > 4)&&(val < 6))

        document.write("<img src='buttonsetc/end_amelia5.png'>");
	
	else 

    if ((val > 5)&&(val < 7))

        document.write("<img src='buttonsetc/end_amelia6.png'>");
	
	else 

    if ((val > 6)&&(val < 8))

        document.write("<img src='buttonsetc/end_amelia7.png'>");

    else 

        document.write("<img src='buttonsetc/end_amelia0.png'>");     

}

infcheck();