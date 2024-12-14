function addNumbers(a, b) {
    let result = 0;
    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b; // Perform addition if both inputs are numbers
    } else {
        console.log("Both inputs must be numbers.");
    }
    return result;
}

// Example usage:
let sum = addNumbers(5, 10);
console.log("Sum:", sum); // Output: Sum: 15
