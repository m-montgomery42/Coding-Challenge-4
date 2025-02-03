// Task 1- If Statements
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