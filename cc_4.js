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