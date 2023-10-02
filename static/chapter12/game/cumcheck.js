// displays cumshot score

function infcheck()

{

  var val = readVar("cum");

	if ((val > -1)&&(val < 1))

        document.write("<img src='buttonsetc/code_zero.jpg'>"); 

    else

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/code_1.jpg'>"); 

    else 

    if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/code_2.jpg'>"); 

    else 

    if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/code_3.jpg'>");
	
	else 

    if ((val > 3)&&(val < 5))

        document.write("<img src='buttonsetc/code_4.jpg'>"); 
	
	else 

    if ((val > 4)&&(val < 6))

        document.write("<img src='buttonsetc/code_5.jpg'>"); 



    else 

        document.write("<img src='buttonsetc/code_hash.jpg'>");     

}

infcheck();