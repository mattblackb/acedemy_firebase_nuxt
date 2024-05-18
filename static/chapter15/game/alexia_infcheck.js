// displays influence score

function infcheck()

{

  var val = readVar("alexia_inf");

	if ((val > -200)&&(val < 1))

        document.write("<img src='buttonsetc/happy0.jpg'>"); 

    else

    if ((val > -1)&&(val < 6))

        document.write("<img src='buttonsetc/happy1.jpg'>"); 

    else 

    if ((val > 5)&&(val < 11))

        document.write("<img src='buttonsetc/happy2.jpg'>"); 

    else 

    if ((val > 10)&&(val < 16))

        document.write("<img src='buttonsetc/happy3.jpg'>"); 

    else 

    if ((val > 15)&&(val < 21))

        document.write("<img src='buttonsetc/happy4.jpg'>"); 

    else 

    if ((val > 20)&&(val < 26))

        document.write("<img src='buttonsetc/happy5.jpg'>"); 

    else 

    if ((val > 25)&&(val < 31))

        document.write("<img src='buttonsetc/happy6.jpg'>"); 

    else 

    if ((val > 30)&&(val < 36))

        document.write("<img src='buttonsetc/happy7.jpg'>"); 

    else 

    if ((val > 35)&&(val < 41))

        document.write("<img src='buttonsetc/happy8.jpg'>"); 

	else 

    if ((val > 40)&&(val < 46))

        document.write("<img src='buttonsetc/happy9.jpg'>");  

	else 

    if ((val > 45)&&(val < 51))

        document.write("<img src='buttonsetc/happy10.jpg'>");  

	else 

    if ((val > 50)&&(val < 56))

        document.write("<img src='buttonsetc/happy11.jpg'>"); 

	else 

    if ((val > 55)&&(val < 61))

        document.write("<img src='buttonsetc/happy12.jpg'>"); 

	else 

    if ((val > 60)&&(val < 66))

       document.write("<img src='buttonsetc/happy13.jpg'>"); 

		    else 

    if ((val > 65)&&(val < 71))

        document.write("<img src='buttonsetc/happy14.jpg'>");  

		    else 

    if ((val > 70)&&(val < 76))

        document.write("<img src='buttonsetc/happy15.jpg'>"); 

		    else 

    if ((val > 75)&&(val < 81))

        document.write("<img src='buttonsetc/happy16.jpg'>"); 

		    else 

    if ((val > 80)&&(val < 86))

        document.write("<img src='buttonsetc/happy17.jpg'>");  

		    else 

    if ((val > 85)&&(val < 91))

        document.write("<img src='buttonsetc/happy18.jpg'>");  

		    else 

    if ((val > 90)&&(val < 96))

        document.write("<img src='buttonsetc/happy19.jpg'>"); 

		    else 

    if ((val > 95)&&(val < 200))

        document.write("<img src='buttonsetc/happy20.jpg'>"); 

    else 

        document.write("<img src='buttonsetc/error.jpg'>");     

}

infcheck();