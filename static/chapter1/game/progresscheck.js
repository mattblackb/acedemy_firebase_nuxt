// displays progress score

function infcheck()

{

  var val = readVar("progress");

	
	if ((val > -100)&&(val < -29))

        document.write("<img src='buttonsetc/progressminus30.jpg'>"); 

    else
	
	if ((val > -30)&&(val < -24))

        document.write("<img src='buttonsetc/progressminus25.jpg'>"); 

    else

    if ((val > -25)&&(val < -19))

        document.write("<img src='buttonsetc/progressminus20.jpg'>"); 

    else
	
	if ((val > -20)&&(val < -14))

        document.write("<img src='buttonsetc/progressminus15.jpg'>"); 

    else
		
	if ((val > -15)&&(val < -9))

        document.write("<img src='buttonsetc/progressminus10.jpg'>"); 

    else
		
	if ((val > -10)&&(val < 0))

        document.write("<img src='buttonsetc/progressminus5.jpg'>"); 

    else 
		
	if ((val > -1)&&(val < 5))

        document.write("<img src='buttonsetc/progress0.jpg'>"); 
	
	else 

    if ((val > 4)&&(val < 10))

        document.write("<img src='buttonsetc/progress5.jpg'>");

    else 

    if ((val > 9)&&(val < 15))

        document.write("<img src='buttonsetc/progress10.jpg'>"); 

    else 

    if ((val > 14)&&(val < 20))

        document.write("<img src='buttonsetc/progress15.jpg'>"); 

    else 

    if ((val > 19)&&(val < 25))

        document.write("<img src='buttonsetc/progress20.jpg'>"); 

    else 

    if ((val > 24)&&(val < 30))

        document.write("<img src='buttonsetc/progress25.jpg'>"); 

    else 

    if ((val > 29)&&(val < 35))

        document.write("<img src='buttonsetc/progress30.jpg'>"); 

    else 

    if ((val > 34)&&(val < 40))

        document.write("<img src='buttonsetc/progress35.jpg'>"); 

    else 

    if ((val > 39)&&(val < 45))

        document.write("<img src='buttonsetc/progress40.jpg'>"); 

	else 

    if ((val > 44)&&(val < 50))

        document.write("<img src='buttonsetc/progress45.jpg'>");  

	else 

    if ((val > 49)&&(val < 55))

        document.write("<img src='buttonsetc/progress50.jpg'>");  

	else 

    if ((val > 54)&&(val < 60))

        document.write("<img src='buttonsetc/progress55.jpg'>"); 

	else 

    if ((val > 59)&&(val < 65))

        document.write("<img src='buttonsetc/progress60.jpg'>"); 

	else 

    if ((val > 64)&&(val < 70))

       document.write("<img src='buttonsetc/progress65.jpg'>"); 

		    else 

    if ((val > 69)&&(val < 75))

        document.write("<img src='buttonsetc/progress70.jpg'>");  

		    else 

    if ((val > 74)&&(val < 80))

        document.write("<img src='buttonsetc/progress75.jpg'>"); 

		    else 

    if ((val > 79)&&(val < 85))

        document.write("<img src='buttonsetc/progress80.jpg'>"); 

		    else 

    if ((val > 84)&&(val < 90))

        document.write("<img src='buttonsetc/progress85.jpg'>");  

		    else 

    if ((val > 89)&&(val < 95))

        document.write("<img src='buttonsetc/progress90.jpg'>");  

		    else 

    if ((val > 94)&&(val < 100))

        document.write("<img src='buttonsetc/progress95.jpg'>"); 

		    else 

    if ((val > 99)&&(val < 200))

        document.write("<img src='buttonsetc/progress100.jpg'>"); 

    else 

        document.write("<img src='buttonsetc/error.jpg'>");     

}

infcheck();