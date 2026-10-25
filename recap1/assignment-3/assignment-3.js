// Assignment 3: Triangle type
const side1 = Number(
  prompt('Enter the length of the first side of the triangle:')
);
const side2 = Number(
  prompt('Enter the length of the second side of the triangle:')
);
const side3 = Number(
  prompt('Enter the length of the third side of the triangle:')
);
const isValidTriangle =
  side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;

if (!isValidTriangle) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'The given sides do not form a valid triangle.';
} else if (side1 === side2 && side2 === side3) {
  //if all sides are equal, then it is an equilateral triangle
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'The triangle is equilateral.';
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  //if two sides are equal, then it is an isosceles triangle
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'The triangle is isosceles.';
} else {
  //if no sides are equal, then it is a scalene triangle
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'The triangle is scalene.';
}
