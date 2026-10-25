// Recap 2, assignment 4: sortArray
function sortArray(arr) {
  return arr.toSorted((a, b) => a - b);
}
const original = [5, 2, 8, 1, 9];
const sorted = sortArray(original);
console.log('original:', original);
console.log('sorted:', sorted);
