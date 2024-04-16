// displays lust for alexia

function lustcheck()

{

  var val = readVar("alexia_lust");

	

    if ((val > -200)&&(val < 5))

        document.write("<img src='buttonsetc/lust0.jpg'>"); 

    else
	
	if ((val > 4)&&(val < 10))

        document.write("<img src='buttonsetc/lust1.jpg'>"); 

    else  

    if ((val > 9)&&(val < 15))

        document.write("<img src='buttonsetc/lust2.jpg'>"); 

    else 

    if ((val > 14)&&(val < 20))

        document.write("<img src='buttonsetc/lust3.jpg'>"); 

    else 

    if ((val > 19)&&(val < 25))

        document.write("<img src='buttonsetc/lust4.jpg'>"); 

    else 

    if ((val > 24)&&(val < 30))

        document.write("<img src='buttonsetc/lust5.jpg'>"); 

    else 

    if ((val > 29)&&(val < 35))

        document.write("<img src='buttonsetc/lust6.jpg'>"); 

    else 

    if ((val > 34)&&(val < 40))

        document.write("<img src='buttonsetc/lust7.jpg'>"); 

    else 

    if ((val > 39)&&(val < 45))

        document.write("<img src='buttonsetc/lust8.jpg'>"); 

	else 

    if ((val > 44)&&(val < 50))

        document.write("<img src='buttonsetc/lust9.jpg'>");  

	else 

    if ((val > 49)&&(val < 55))

        document.write("<img src='buttonsetc/lust10.jpg'>");  

	else 

    if ((val > 54)&&(val < 60))

        document.write("<img src='buttonsetc/lust11.jpg'>"); 

	else 

    if ((val > 59)&&(val < 65))

        document.write("<img src='buttonsetc/lust12.jpg'>"); 

	else 

    if ((val > 64)&&(val < 70))

       document.write("<img src='buttonsetc/lust13.jpg'>"); 

	else 

    if ((val > 69)&&(val < 75))

        document.write("<img src='buttonsetc/lust14.jpg'>");  

	else 

    if ((val > 74)&&(val < 80))

        document.write("<img src='buttonsetc/lust15.jpg'>"); 

	else 

    if ((val > 79)&&(val < 85))

        document.write("<img src='buttonsetc/lust16.jpg'>"); 

	else 

    if ((val > 84)&&(val < 90))

        document.write("<img src='buttonsetc/lust17.jpg'>");  

	else 

    if ((val > 89)&&(val < 95))

        document.write("<img src='buttonsetc/lust18.jpg'>");  

	else 

    if ((val > 94)&&(val < 100))

        document.write("<img src='buttonsetc/lust19.jpg'>"); 

	else 

    if ((val > 99)&&(val < 200))

        document.write("<img src='buttonsetc/lust20.jpg'>"); 

    else 

        document.write("<img src='buttonsetc/error.jpg'>");     

}

lustcheck();