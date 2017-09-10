var num1 = prompt('Hi this is a calculator. Please enter the first number of your calculation','Here please');
var output;

if ( num1 >= 0 || num1 < 0){

	console.log("Great your first number is : "  + num1 );
	var operator = prompt('Now could you input the operator you like from the following list \n Sub -  s \n Add - a \n Multi - m \n Divide - d \n Power - p\n Square Root - q','Here please');
	
	if (operator == 'a' || operator == 'A') {
		console.log("The operator is + ");
		var num2 = prompt('Please enter the last number of your calculation','Here please');
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		 
		if ( num2 >= 0 || num2 < 0){
			output = (num1 + num2);
			console.log(num1 + ' and ' + num2 + ' add together to make = ');
		}
		else{
			console.log('come on you had one step left and you screwed the pooch, try again')
		}
	}
	else if (operator == 's' || operator == 'S') {
		console.log("The operator is - ");
		var num2 = prompt('Please enter the number you wish to subtract by','Here please');
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		
		if ( num2 >= 0 || num2 < 0){
			output = (num1 - num2);
			console.log(num1 + ' subtract ' + num2 + ' makes = ');
		}
		else{
			console.log('come on you had one step left and you screwed the pooch, try again')
		}	
	}
	else if (operator == 'm'|| operator == 'M') {
		console.log("The operator is x ");
		var num2 = prompt('Please enter the last number of your calculation','Here please');
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		
		if ( num2 >= 0 || num2 < 0){
			output = (num1 * num2);
			console.log(num1 + ' and ' + num2 + ' multiply together to make = ');
		}
		else{
			console.log('come on you had one step left and you screwed the pooch, try again')
		}
	}
	else if (operator == 'd'|| operator == 'D') {
		console.log("The operator is / ");
		var num2 = prompt('Please enter the denominator of your calculation','Here please');
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		
		if ( num2 >= 0 || num2 < 0){
			output = (num1 / num2);
			console.log(num1 + ' divided by ' + num2 + ' makes = ');
		}
		else{
			console.log('come on you had one step left and you screwed the pooch, try again')
		}
	}
	else if (operator == 'p' || operator == 'P' ) {
		console.log("The operator is ^ ");
		var num2 = prompt('Please enter the indice','Here please');
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		if ( num2 >= 0 || num2 < 0){
			output = (Math.pow(num1,num2));
			console.log(num1 + ' to the power of ' + num2 + ' makes = ');
		}
		else{
			console.log('come on you had one step left and you screwed the pooch, try again')
		}	
			
	}
	else if (operator == 'q' ||operator == 'Q' ) {
		num1 = parseFloat(num1);
		output = (Math.pow(num1,1/2));
		console.log(num1 + ' square root is = ');
	}
	else{
		console.log('well done you broke it you typed in the wrong letter, please refresh and try again')
	}



}else{
	console.log("This is not a number can you please refresh and try again please")
}
console.log(output);