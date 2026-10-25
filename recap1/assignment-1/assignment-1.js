// Assignment 1: Temperature conversion
const celsius = Number(prompt('Enter temperature in Celsius:'));
const fahrenheit = (celsius * 9) / 5 + 32;
const fahrenheitElement = document.getElementById('resultF');
fahrenheitElement.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;

const kelvin = celsius + 273.15;
const kelvinElement = document.getElementById('resultK');
kelvinElement.textContent = `${celsius}°C is equal to ${kelvin.toFixed(2)}K.`;
