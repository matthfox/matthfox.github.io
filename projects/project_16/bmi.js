/* 
Matthew Fox
CIS 111 Lab05, Task 2
BMI Calculator
 */

//Declaring function
function calcBMI(){
	//get height in feet, height in inches, weight from form and store in 3 variables feet, inches, weight
	const feet = parseFloat(document.getElementById("heightInFeet").value);
	const inches = parseFloat(document.getElementById("heightInInches").value);
	const weight = parseFloat(document.getElementById("weight").value);
	
	//make sure all inputs are present and valid, alert message if not
	if (isNaN(feet) || isNaN(inches) || isNaN(weight)) {
		alert("Please enter valid input");
	}
	//invalid entry when feet and inches are equal or less than 0 (We're assuming a height of less a foot is still valid as long as total height in inches is greater than 0)
	else if (feet <= 0 && inches <= 0) {
		alert("Please enter valid height.");
	}
	//invalid entry when inches are greater than 12
	else if (inches > 12) {
		alert("Please enter valid height.");
	}
	//invalid entry when weight is less than or equal to 0
	else if (weight <= 0) {
		alert("Please enter valid weight");
	}
	//all inputs are present and valid
	else {
		//convert height in feet and inches to total inches and store in another variable height
		const height = (feet * 12) + inches;
		//calculate bmi using the formula, store in a variable called bmi
		const bmi = (weight * 703)/(height**2);
		//use nested if statements to determine category based on bmi
		let category = "";
		if (bmi < 18.5) {
			category = "Underweight";
		}
		else if (bmi >= 18.5 && bmi < 25) {
			category = "Normal";
		}
		else if (bmi >= 25 && bmi < 30) {
			category = "Overweight";
		}
		else {
			category = "Obese";
		}
		//display bmi on the html page with 2 decimal places
		document.getElementById("results").innerText = bmi.toFixed(2);
		//display category on the page
		document.getElementById("category").innerText = category;
	}
}

//Clears all input fields
function reset() {
	document.getElementById("heightInFeet").value = "";
	document.getElementById("heightInInches").value = "";
	document.getElementById("weight").value = "";		
}