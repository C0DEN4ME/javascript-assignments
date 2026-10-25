// Assignment 6: Multiplication table
const input = Number(
  prompt('Enter a number to generate a multiplication table upto this number:')
);
const table = document.getElementById('multiplication-table');
const caption = document.createElement('caption');
caption.textContent = 'Multiplication Table up to ' + input;
table.appendChild(caption);

for (let i = 1; i <= input; i++) {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  for (let j = 1; j <= input; j++) {
    const td = document.createElement('td');
    td.textContent = `${i * j}`;
    tr.appendChild(td);
  }
}
