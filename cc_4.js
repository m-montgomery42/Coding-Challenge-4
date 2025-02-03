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
// Use a while loop to decrease stock until it reaches zero
let totalSales = 0;
let i = 0;
while (i < sales.length) {
    totalSales += sales[i];
    i++;
}
// Log each decrement to the console using a template literal
console.log(`Total sales: $${totalSales}`);