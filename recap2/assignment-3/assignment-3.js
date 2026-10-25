// Recap 2, assignment 3: Even numbers
const numbers = [];
const evenNumbers = [];
let input = prompt('Enter a number or empty to stop');

while (input !== '' && input !== null) {
  numbers.push(Number(input));
  input = prompt('Enter a number or empty to stop');
}
console.log('Numbers:', numbers);
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
const evenNumbersList = document.getElementById('even-numbers');
if (evenNumbers.length === 0) {
  evenNumbersList.textContent = 'None.';
} else {
  evenNumbersList.textContent = evenNumbers.join(', ');
}
window.alert('End of the program');
