// Recap 2, assignment 2: Array operations
const numbers = [];
for (let i = 0; i < 5; i++) {
  let input = prompt('Enter a number');
  numbers.push(Number(input));
}
console.log('numbers: ', [...numbers]); //the spread operator (...) is used to create a copy of the array to see changes made to the original array.
let input = prompt('Enter a number to check if it is in the array');
if (numbers.includes(Number(input))) {
  console.log(input + ' is in the array');
} else {
  console.log(input + ' is not in the array');
}
numbers.pop();
console.log('updated numbers: ', [...numbers]);
numbers.sort((a, b) => a - b);
console.log('sorted numbers: ', numbers);
