/* 
Matthew Fox 
CIS 111 Lab04, Task 2 
This program creates a receipt
 */

// user enters the price of a product
const price = parseFloat(prompt("What is the price of the product?"));
// user enters the quantity purchased
const quantity = parseFloat(prompt("How much product was purchased?"));
// calculate subtotal
const subtotal = price * quantity;
// calculate discount
let discount = 0;
if (subtotal >= 500) { 
	discount = subtotal * 0.05;
}
else { 
	discount = subtotal * 0.03;
}
// calculate total price
const total = subtotal - discount;
// print subtotal, discount, total, programmer name
let html = "<p>" + "Subtotal: $" + subtotal.toFixed(2) + "</p>";
html += "<p>" + "Discount: $" + discount.toFixed(2) + "</p>";
html += "<p>" + "Total: $" + total.toFixed(2) + "</p>";
html += "<p>Programmed by Matthew Fox</p>"
document.write(html)