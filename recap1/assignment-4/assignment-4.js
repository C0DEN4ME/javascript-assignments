// Assignment 4: Course grade
const grade = Number(prompt('Enter your numeric grade (0-100):'));
let numberGrade;

if (grade >= 88 && grade <= 100) {
  numberGrade = '5';
} else if (grade >= 76 && grade < 88) {
  numberGrade = '4';
} else if (grade >= 64 && grade < 76) {
  numberGrade = '3';
} else if (grade >= 52 && grade < 64) {
  numberGrade = '2';
} else if (grade >= 40 && grade < 52) {
  numberGrade = '1';
} else if (grade >= 0 && grade < 40) {
  numberGrade = '0';
} else {
  numberGrade = 'Invalid grade. Please enter a number between 0 and 100.';
}

const resultElement = document.getElementById('result');
resultElement.textContent = `Your letter grade is: ${numberGrade}`;
120;
