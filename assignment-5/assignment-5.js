// Assignment 5: Sum of natural numbers
const number = Number(prompt('Enter a positive integer:'));
const numberfield = document.getElementById('sum');

if (number < 1 || !Number.isInteger(number)) {
  numberfield.textContent = 'Please enter a positive integer.';
} else {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  numberfield.textContent = `The sum of natural numbers up to ${number} is: ${sum}`;
}
