// displays cash level

function infcheck()

{

  var val = readVar("cash");

	if ((val > -200)&&(val < 1))

        document.write("<img src='buttonsetc/cashzero.jpg'>"); 

    else

    if ((val > -1)&&(val < 21))

        document.write("<img src='buttonsetc/cash20.jpg'>"); 

    else 

    if ((val > 20)&&(val < 41))

        document.write("<img src='buttonsetc/cash40.jpg'>"); 

    else 

    if ((val > 40)&&(val < 61))

        document.write("<img src='buttonsetc/cash60.jpg'>"); 

    else 

    if ((val > 60)&&(val < 81))

        document.write("<img src='buttonsetc/cash80.jpg'>"); 

    else 

    if ((val > 80)&&(val < 101))

        document.write("<img src='buttonsetc/cash100.jpg'>"); 
	
	else

    if ((val > 100)&&(val < 121))

        document.write("<img src='buttonsetc/cash120.jpg'>"); 

    else 

    if ((val > 120)&&(val < 141))

        document.write("<img src='buttonsetc/cash140.jpg'>"); 

    else 

    if ((val > 140)&&(val < 161))

        document.write("<img src='buttonsetc/cash160.jpg'>"); 

    else 

    if ((val > 160)&&(val < 181))

        document.write("<img src='buttonsetc/cash180.jpg'>"); 

    else 

    if ((val > 180)&&(val < 201))

        document.write("<img src='buttonsetc/cash200.jpg'>");
	
	else

    if ((val > 200)&&(val < 221))

        document.write("<img src='buttonsetc/cash220.jpg'>"); 

    else 

    if ((val > 220)&&(val < 241))

        document.write("<img src='buttonsetc/cash240.jpg'>"); 

    else 

    if ((val > 240)&&(val < 261))

        document.write("<img src='buttonsetc/cash260.jpg'>"); 

    else 

    if ((val > 260)&&(val < 281))

        document.write("<img src='buttonsetc/cash280.jpg'>"); 

    else 

    if ((val > 280)&&(val < 301))

        document.write("<img src='buttonsetc/cash300.jpg'>");

    else

    if ((val > 300)&&(val < 321))

        document.write("<img src='buttonsetc/cash320.jpg'>"); 

    else 

    if ((val > 320)&&(val < 341))

        document.write("<img src='buttonsetc/cash340.jpg'>"); 

    else 

    if ((val > 340)&&(val < 361))

        document.write("<img src='buttonsetc/cash360.jpg'>"); 

    else 

    if ((val > 360)&&(val < 381))

        document.write("<img src='buttonsetc/cash380.jpg'>"); 

    else 

    if ((val > 380)&&(val < 401))

        document.write("<img src='buttonsetc/cash400.jpg'>");
	
	else

    if ((val > 400)&&(val < 421))

        document.write("<img src='buttonsetc/cash420.jpg'>"); 

    else 

    if ((val > 420)&&(val < 441))

        document.write("<img src='buttonsetc/cash440.jpg'>"); 

    else 

    if ((val > 440)&&(val < 461))

        document.write("<img src='buttonsetc/cash460.jpg'>"); 

    else 

    if ((val > 460)&&(val < 481))

        document.write("<img src='buttonsetc/cash480.jpg'>"); 

    else 

    if ((val > 480)&&(val < 501))

        document.write("<img src='buttonsetc/cash500.jpg'>");
	
	else 

    if ((val > 500)&&(val < 1001))

        document.write("<img src='buttonsetc/cash500plus.jpg'>");

    else 

        document.write("<img src='buttonsetc/cashzero.jpg'>");     

}

infcheck();