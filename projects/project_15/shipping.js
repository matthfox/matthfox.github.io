/* 
Matthew Fox
CIS 111 Lab05, Task 1
Calculate Shipping Charges
 */

//Declaring the function
function calc(){
	//get the weight from the textbox
	const weight = parseFloat(document.getElementById("weight").value);
	//validate, if it is 0 or less then alert an error message
	if (isNaN(weight) || weight <= 0) {
		alert("Weight must be greater than 0 kg.")
	}
	//if good, use nested if statements to determine cost per kg
	else {
		let cost = 0;
		if (weight < 2.5) {
			cost = 3.50;
		}
		else if (weight > 5) {
			cost = 2.45;
		}
		else {
			cost = 2.85;
		}
		//calculate total
		const total = weight * cost;
		//display results in the div on the page
		document.getElementById("receipt").innerHTML = "<p>" + "Cost is $ " + cost.toFixed(2) + " per kg" + "</p>" + "<p>" + "Total charge is $ " + total.toFixed(2) + "</p>";
	}
}