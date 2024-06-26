// displays sub game score

function infcheck()

{

  var val = readVar("end_score");
 

    if ((val > -10)&&(val < 1))

        document.write("<img src='buttonsetc/end_score0.jpg'>"); 

    else 

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/end_score1.jpg'>"); 

    else 

    if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/end_score2.jpg'>"); 

    else 

    if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/end_score3.jpg'>"); 

	else 

    if ((val > 3)&&(val < 5))

        document.write("<img src='buttonsetc/end_score4.jpg'>");  

	else 

    if ((val > 4)&&(val < 6))

        document.write("<img src='buttonsetc/end_score5.jpg'>");
	
	else 

    if ((val > 5)&&(val < 7))

        document.write("<img src='buttonsetc/end_score6.jpg'>");
	
	else 

    if ((val > 6)&&(val < 8))

        document.write("<img src='buttonsetc/end_score7.jpg'>");
	
	else 

    if ((val > 7)&&(val < 9))

        document.write("<img src='buttonsetc/end_score8.jpg'>");
	
	else 

    if ((val > 8)&&(val < 10))

        document.write("<img src='buttonsetc/end_score9.jpg'>");
	
	else 

    if ((val > 9)&&(val < 11))

        document.write("<img src='buttonsetc/end_score10.jpg'>");
	
	else 

    if ((val > 10)&&(val < 12))

        document.write("<img src='buttonsetc/end_score11.jpg'>");
	
	else 

    if ((val > 11)&&(val < 13))

        document.write("<img src='buttonsetc/end_score12.jpg'>");
	
	else 

    if ((val > 12)&&(val < 14))

        document.write("<img src='buttonsetc/end_score13.jpg'>");
	
	else 

    if ((val > 13)&&(val < 15))

        document.write("<img src='buttonsetc/end_score14.jpg'>");
	
	else 

    if ((val > 14)&&(val < 16))

        document.write("<img src='buttonsetc/end_score15.jpg'>");
	
	else 

    if ((val > 15)&&(val < 17))

        document.write("<img src='buttonsetc/end_score16.jpg'>");
	
	else 

    if ((val > 16)&&(val < 18))

        document.write("<img src='buttonsetc/end_score17.jpg'>");
	
	else 

    if ((val > 17)&&(val < 19))

        document.write("<img src='buttonsetc/end_score18.jpg'>");
	
	else 

    if ((val > 18)&&(val < 20))

        document.write("<img src='buttonsetc/end_score19.jpg'>");
	
	else 

    if ((val > 19)&&(val < 100))

        document.write("<img src='buttonsetc/end_score20.jpg'>");

    else 

        document.write("<img src='buttonsetc/error.jpg'>");     

}

infcheck();