// Task 1: If Statements
// Declare a variable purchaseAmount with a value
let purchaseAmount = 120;
console.log(`Purchase Amount: $${purchaseAmount}`);
let finalAmount = purchaseAmount;
// Use an if statement to apply a discount if the amount is greater than $100
if (purchaseAmount > 100) {
    finalAmount *= 0.9;
    console.log("Discount applied");
}
// Log the final amount to the console using a template literal
console.log(`Final amount after discount: $${finalAmount}`);

// Task 2: For Loop
// Declare an array sales with at least five sales figures
let sales = [250, 400, 300, 150, 500];
console.log("Sales Array:", sales);
// Use a for loop to calculate the total sales
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales [i];
}
// Log the total sales to the console using a template literal
console.log(`Total sales: $${totalSales}`);

// Task 3: While Loop
// Declare a variable stock with an initial value of 10
let stock = 10;
// Use a while loop to decrease stock until it reaches zero
while (stock > 0) {
    console.log(`Stock amount: ${stock}`);
    stock--;
}
// Log each decrement to the console using a template literal
console.log(`Stock amount: ${stock}`);

// Task 4: Do... While Loop
// Declare a variable responses with an initial value of zero
let responses = 0;
// Use a do...while loop to collect responses, simulating user input with responses++ until it reaches 3
// Log each response count to the console using a template literal
do {
    console.log(`Response count: ${responses}`);
    responses++;
} while (responses < 3);

// Task 5: For...In Loop
// Declare an object employee with properties
let employee = {
    name: "John Doe",
    position: "General Manager",
    salary: 95000
};
// Use a for...in loop to iterate through the object properties
for (let property in employee) {
// Log each property and value to the console using a template literal
console.log(`${property}: ${employee[property]}`);
}

// Task 6: For...Of Loop
// Declare an array products with at least three product names
let products = ["Laptop", "Smartphone", "Tablet"];
// Use a for...of loop to display each product
for (let product of products) {
// Log each product name to the console using a template literal
    console.log(`Product: ${product}`);
}

// Task 7: forEach() Method
// Declare an array orders with at least three order IDs
let orders = [123, 456, 789];
// Use the forEach() method to log each order ID to the console using a template literal
orders.forEach(orderID => {
    console.log(`Order ID: ${orderID}`);
});

// Task 8: Function Declaration
// Write a function calculateTax that takes an amount and tax rate
function calculateTax(amount, taxRate) {
    // Return the calculated tax
    return amount * taxRate;
}
let tax = calculateTax(2000, 0.10);
// Log the result to the console using a template literal
console.log(`Tax: $${tax}`);

// Task 9: Function Expressions
// Declare a function expression applyDiscount that takes a price and discount percentage
const applyDiscount = function(price, discountPercentage) {
    // Return the discounted price
    return price - (price * (discountPercentage / 100));
};
let discountedPrice = applyDiscount(2500, 15);
// Log the result to the console using a template literal
console.log(`Discounted price: $${discountedPrice}`);

// Task 10: Arrow Function
// Write an arrow function calculatePoints that takes a purchase amount and  returns point earned
const calculatePoints = purchaseAmount => Math.floor(purchaseAmount / 10);
let points = calculatePoints(550);
// Log the result to the console using a template literal
console.log(`Loyalty points earned: $${points}`);