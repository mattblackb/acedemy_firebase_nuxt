// displays sub game score

function infcheck()

{

  var val = readVar("sober");

	if ((val > -10)&&(val < 1))

        document.write("<img src='buttonsetc/sober0.jpg'>"); 

    else

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/sober1.jpg'>"); 

    else 

    if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/sober2.jpg'>"); 

    else 

    if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/sober3.jpg'>"); 

    else 

    if ((val > 3)&&(val < 10))

        document.write("<img src='buttonsetc/sober4.jpg'>");    

    else 

        document.write("<img src='buttonsetc/error.jpg'>");     

}

infcheck();