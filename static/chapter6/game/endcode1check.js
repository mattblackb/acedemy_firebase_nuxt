// displays 1st code outcome

function outcome()

{

  var val = readVar("score");
	
	//0
	
	if ((val > -1)&&(val < 1))

	document.write("<img src='buttonsetc/code_d.jpg'>"); 
	
else

	//1
	
	if ((val > 0)&&(val < 2))

	document.write("<img src='buttonsetc/code_a.jpg'>"); 
	
else
	
	//2
	
	if ((val > 1)&&(val < 3))
  
	document.write("<img src='buttonsetc/code_c.jpg'>"); 

else
	//3
  
	if ((val > 2)&&(val < 4))

     document.write("<img src='buttonsetc/code_b.jpg'>"); 
		
else
	
	 document.write("<img src='buttonsetc/code_zero.jpg'>");

}

outcome();