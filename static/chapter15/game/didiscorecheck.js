// displays sub game score

function infcheck()

{

  var val = readVar("didi_score");

	if ((val > -200)&&(val < -4))

        document.write("<img src='buttonsetc/score_neg5.jpg'>"); 

    else

    if ((val > -5)&&(val < -3))

        document.write("<img src='buttonsetc/score_neg4.jpg'>"); 

    else 

    if ((val > -4)&&(val < -2))

        document.write("<img src='buttonsetc/score_neg3.jpg'>"); 

    else 

    if ((val > -3)&&(val < -1))

        document.write("<img src='buttonsetc/score_neg2.jpg'>"); 

    else 

    if ((val > -2)&&(val < 0))

        document.write("<img src='buttonsetc/score_neg1.jpg'>"); 

    else 

    if ((val > -1)&&(val < 1))

        document.write("<img src='buttonsetc/score_zero.jpg'>"); 

    else 

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/score_pos1.jpg'>"); 

    else 

    if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/score_pos2.jpg'>"); 

    else 

    if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/score_pos3.jpg'>"); 

	else 

    if ((val > 3)&&(val < 5))

        document.write("<img src='buttonsetc/score_pos4.jpg'>");  

	else 

    if ((val > 4)&&(val < 100))

        document.write("<img src='buttonsetc/score_pos5.jpg'>");   

    else 

        document.write("<img src='buttonsetc/error.jpg'>");     

}

infcheck();