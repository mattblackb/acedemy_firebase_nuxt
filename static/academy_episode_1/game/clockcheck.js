// displays time

function clockcheck()

{

var val = readVar("clock");
	
	//8

    if ((val > -3)&&(val < -1))

        document.write("<img src='buttonsetc/clock8.jpg'>"); 

    else
	
	//8:30

    if ((val > -2)&&(val < 0))

        document.write("<img src='buttonsetc/clock830.jpg'>"); 

    else

	//9

    if ((val > -1)&&(val < 1))

        document.write("<img src='buttonsetc/clock9.jpg'>"); 

    else 

	//9:30

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/clock930.jpg'>"); 

    else 

	//10:00

    if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/clock10.jpg'>"); 

    else 

	//10:30

    if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/clock1030.jpg'>"); 

    else 

	//11:00

    if ((val > 3)&&(val < 5))

        document.write("<img src='buttonsetc/clock11.jpg'>"); 

    else 

	//11:30

    if ((val > 4)&&(val < 6))

        document.write("<img src='buttonsetc/clock1130.jpg'>"); 

    else 

	//12:00

    if ((val > 5)&&(val < 7))

        document.write("<img src='buttonsetc/clock12.jpg'>"); 

    else 

	//12:30

    if ((val > 6)&&(val < 8))

        document.write("<img src='buttonsetc/clock1230.jpg'>"); 

	else 

	//13:00

    if ((val > 7)&&(val < 9))

        document.write("<img src='buttonsetc/clock1.jpg'>");  

	else
	
	//13:30

    if ((val > 8)&&(val < 10))

        document.write("<img src='buttonsetc/clock130.jpg'>");  

	else
	
	//14:00

    if ((val > 9)&&(val < 11))

        document.write("<img src='buttonsetc/clock2.jpg'>");  

	else
	
	//14:30

    if ((val > 10)&&(val < 12))

        document.write("<img src='buttonsetc/clock230.jpg'>");  

	else
	
	//15:00

    if ((val > 11)&&(val < 13))

        document.write("<img src='buttonsetc/clock3.jpg'>");  

	else
	
	//15:30

    if ((val > 12)&&(val < 14))

        document.write("<img src='buttonsetc/clock330.jpg'>");  

	else
	
	//16:00

    if ((val > 13)&&(val < 15))

        document.write("<img src='buttonsetc/clock4.jpg'>");  

	else
	
	//16:30

    if ((val > 14)&&(val < 16))

        document.write("<img src='buttonsetc/clock430.jpg'>");  

	else
	
	//17:00

    if ((val > 15)&&(val < 17))

        document.write("<img src='buttonsetc/clock5.jpg'>");  

	else
	
	//17:30

    if ((val > 16)&&(val < 18))

        document.write("<img src='buttonsetc/clock530.jpg'>");  

	else
	
	//18:00

    if ((val > 17)&&(val < 19))

        document.write("<img src='buttonsetc/clock6.jpg'>");  

	else
	
	//18:30

    if ((val > 18)&&(val < 20))

        document.write("<img src='buttonsetc/clock630.jpg'>");  

	else
	
	//19:00

    if ((val > 19)&&(val < 21))

        document.write("<img src='buttonsetc/clock7.jpg'>");  

	else
	
	//19:30

    if ((val > 20)&&(val < 22))

        document.write("<img src='buttonsetc/clock730.jpg'>");  

	else
	
	//20:00

    if ((val > 21)&&(val < 23))

        document.write("<img src='buttonsetc/clock8.jpg'>");  

	else
	
	//20:30

    if ((val > 22)&&(val < 24))

        document.write("<img src='buttonsetc/clock830.jpg'>");  

	else
	
	//21:00

    if ((val > 23)&&(val < 25))

        document.write("<img src='buttonsetc/clock9.jpg'>");  

	else
	
	//21:30

    if ((val > 24)&&(val < 26))

        document.write("<img src='buttonsetc/clock930.jpg'>");  

	else

	//22:00

    if ((val > 25)&&(val < 27))

        document.write("<img src='buttonsetc/clock10.jpg'>");  

		else 

	//22:30 and beyond

    if ((val > 26)&&(val < 35))

        document.write("<img src='buttonsetc/clock1030.jpg'>"); 

    else 

        document.write("<img src='buttonsetc/clockerror.jpg'>");       

}

clockcheck();