// Assignment 2: Distance between points
const x1 = Number(prompt('Enter x-coordinate of point 1:'));
const y1 = Number(prompt('Enter y-coordinate of point 1:'));
const x2 = Number(prompt('Enter x-coordinate of point 2:'));
const y2 = Number(prompt('Enter y-coordinate of point 2:'));

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const resultElement = document.getElementById('result');

resultElement.textContent = `The distance between points (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(2)}.`;
