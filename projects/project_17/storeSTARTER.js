"use strict;"
//Matthew Fox

//You will create array of objects named inventory
//each product is an object with item and price 
//{item: "itemname": price: 10}

const inventory = [
{item: "shampoo", price: 9.99},
{item: "conditioner", price: 9.99},
{item: "soap", price: 6.00},
{item: "toothpaste", price: 2.99},
{item: "toothbrush", price: 13.40},        
];

//declare any global variables
let grandtotal = 0;
let receipt = "";

//display the inventory in a table on the webpage
let tableHTML = "<table>" + "<caption>MENU</caption>" +"<tr><th>Item</th><th>Price</th></tr>";

for (let i = 0; i < inventory.length;i++) {
    tableHTML+= "<tr><td>" + inventory[i].item + "</td><td>" + inventory[i].price.toFixed(2) + "</td></tr>";
}

tableHTML += "</table>";

document.getElementById("menu").innerHTML = tableHTML;

//function to run when add is clicked
function addItem(){
    //get the item name from the textbox (make sure something is entered in item and quantity)
    const itemname = document.getElementById("itemname").value;
    //get the quantity from the textbox
    const quantity = parseInt(document.getElementById("quantity").value);
    //alert if item or quantity is missing
    if (itemname === "" || isNaN(quantity)) {
        alert("Missing input");
    }
    //alert if quantity is equal to or less than 0
    else if (quantity <=0) {
        alert("Enter valid input");
    } 
    else {
        //call the findPrice function (provided to you in starter code) to look up the price of this item.  This function returns the price.  If the variable itemname has the user input then call it as:
        let itemprice = findPrice(itemname);

        //if the itemprice returned is -1 do a window.alert with the message "item not found"
        if (itemprice === -1) {
            alert("Item not found");
        }

        else {
            //calculate the item total (quantity times price) and add this to grandtotal.
            let total = quantity * itemprice;
            grandtotal += quantity * itemprice;
            //display the grandtotal on the page
            document.getElementById("total").innerText = grandtotal.toFixed(2);

            //add to receipt in textarea
            receipt +=  quantity + " " + itemname + " at " + itemprice.toFixed(2) + " each = $" + total.toFixed(2) + "\r\n";
            document.getElementById("receipt").value = receipt;

            //clear the textboxes
            document.getElementById("itemname").value ="";
            document.getElementById("quantity").value ="";
        }
    } 
}

//function to run when clear is clicked
function newOrder(){
    //clear the page
    document.getElementById("itemname").value ="";
    document.getElementById("quantity").value ="";
    document.getElementById("total").innerText ="";
    document.getElementById("receipt").value ="";
    //reset grand total
    grandtotal = 0;
    receipt = "";

}


//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}
