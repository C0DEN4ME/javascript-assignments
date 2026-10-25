// Recap 2, assignment 1: Array basics

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const towns = [];
for (let i = 0; i < 3; i++) {
  let input = prompt('Enter a town name');
  towns.push(input);
}
console.log('countries: ' + countries);
console.log('length of countries: ' + countries.length);
console.log('country at index 2 is ' + countries[2]);
console.log('last country is ' + countries[countries.length - 1]);
console.log('towns: ' + towns);
console.log('length of towns: ' + towns.length);
