// displays report score

function infcheck()

{

  var val = readVar("report");

	
	if ((val > -1)&&(val < 5))

        document.write("<img src='buttonsetc/report0.jpg'>"); 
	
	else 

    if ((val > 4)&&(val < 10))

        document.write("<img src='buttonsetc/report5.jpg'>");

    else 

    if ((val > 9)&&(val < 15))

        document.write("<img src='buttonsetc/report10.jpg'>"); 

    else 

    if ((val > 14)&&(val < 20))

        document.write("<img src='buttonsetc/report15.jpg'>"); 

    else 

    if ((val > 19)&&(val < 25))

        document.write("<img src='buttonsetc/report20.jpg'>"); 

    else 

    if ((val > 24)&&(val < 30))

        document.write("<img src='buttonsetc/report25.jpg'>"); 

    else 

    if ((val > 29)&&(val < 35))

        document.write("<img src='buttonsetc/report30.jpg'>"); 

    else 

    if ((val > 34)&&(val < 40))

        document.write("<img src='buttonsetc/report35.jpg'>"); 

    else 

    if ((val > 39)&&(val < 45))

        document.write("<img src='buttonsetc/report40.jpg'>"); 

	else 

    if ((val > 44)&&(val < 50))

        document.write("<img src='buttonsetc/report45.jpg'>");  

	else 

    if ((val > 49)&&(val < 55))

        document.write("<img src='buttonsetc/report50.jpg'>");  

	else 

    if ((val > 54)&&(val < 60))

        document.write("<img src='buttonsetc/report55.jpg'>"); 

	else 

    if ((val > 59)&&(val < 65))

        document.write("<img src='buttonsetc/report60.jpg'>"); 

	else 

    if ((val > 64)&&(val < 70))

       document.write("<img src='buttonsetc/report65.jpg'>"); 

		    else 

    if ((val > 69)&&(val < 75))

        document.write("<img src='buttonsetc/report70.jpg'>");  

		    else 

    if ((val > 74)&&(val < 80))

        document.write("<img src='buttonsetc/report75.jpg'>"); 

		    else 

    if ((val > 79)&&(val < 85))

        document.write("<img src='buttonsetc/report80.jpg'>"); 

		    else 

    if ((val > 84)&&(val < 90))

        document.write("<img src='buttonsetc/report85.jpg'>");  

		    else 

    if ((val > 89)&&(val < 95))

        document.write("<img src='buttonsetc/report90.jpg'>");  

		    else 

    if ((val > 94)&&(val < 100))

        document.write("<img src='buttonsetc/report95.jpg'>"); 

		    else 

    if ((val > 99)&&(val < 200))

        document.write("<img src='buttonsetc/report100.jpg'>"); 

    else 

        document.write("<img src='buttonsetc/error.jpg'>");     

}

infcheck();