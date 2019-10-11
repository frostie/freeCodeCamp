function nextInLine(arr, item) {
  
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5,6,7,8,9,10];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

  /* Ensure that you are editing the inside of the nextInLine function.
Use an array function you learned to add the item to the end of the array arr.
Use an array function you learned to remove the first element from array arr.
Return the element removed. */
