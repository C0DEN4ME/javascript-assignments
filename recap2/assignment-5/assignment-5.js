// Recap 2, assignment 5: sortArray with order
function sortArray(arr, order = 'asc') {
  if (order === 'asc') {
    return arr.toSorted((a, b) => a - b);
  } else if (order === 'desc') {
    return arr.toSorted((a, b) => b - a);
  } else throw new Error('Invalid order parameter. Use "asc" or "desc".');
}
const original = [5, 2, 8, 1, 9];
const sorted = sortArray(original, 'asc');
const sortedDesc = sortArray(original, 'desc');
console.log('original:', original);
console.log('sorted:', sorted);
console.log('sortedDesc:', sortedDesc);
const invalidOrder = sortArray(original, 'banana'); // This will throw an error
