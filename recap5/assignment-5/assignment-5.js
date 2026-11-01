const api = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const table = document.querySelector('table');
const status = document.querySelector('#status');
const dialog = document.querySelector('dialog');
let selection = 0;

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

async function showDetails(restaurant, nameCell) {
  selection++;
  const currentSelection = selection;
  for (const cell of document.querySelectorAll('.highlight')) {
    cell.classList.remove('highlight');
  }
  nameCell.classList.add('highlight');
  dialog.textContent = '';
  const heading = document.createElement('h2');
  heading.textContent = restaurant.name;
  dialog.appendChild(heading);
  const details = [restaurant.address, `${restaurant.postalCode} ${restaurant.city}`,
    `Phone: ${restaurant.phone}`, `Company: ${restaurant.company}`];
  for (const detail of details) {
    const p = document.createElement('p');
    p.textContent = detail;
    dialog.appendChild(p);
  }
  const title = document.createElement('h3');
  title.textContent = "Today's menu";
  dialog.appendChild(title);
  const menu = document.createElement('div');
  menu.textContent = 'Loading menu...';
  dialog.appendChild(menu);
  const close = document.createElement('button');
  close.textContent = 'Close';
  close.addEventListener('click', function () { dialog.close(); });
  dialog.appendChild(close);
  dialog.showModal();
  try {
    const data = await fetchData(`${api}/restaurants/daily/${restaurant._id}/fi`);
    if (currentSelection !== selection) return;
    menu.textContent = '';
    if (!data.courses || data.courses.length === 0) {
      menu.textContent = 'No menu available today.';
      return;
    }
    for (const course of data.courses) {
      const p = document.createElement('p');
      p.textContent = `${course.name} — ${course.price || 'Price unavailable'} (${course.diets || 'No dietary information'})`;
      menu.appendChild(p);
    }
  } catch (error) {
    menu.textContent = 'Could not load menu. Check your school network or VPN connection.';
    console.error(error);
  }
}

async function main() {
  try {
    const restaurants = await fetchData(`${api}/restaurants`);
    restaurants.sort(function (a, b) { return a.name.localeCompare(b.name, 'fi'); });
    for (const restaurant of restaurants) {
      const row = document.createElement('tr');
      const name = document.createElement('td');
      const button = document.createElement('button');
      button.textContent = restaurant.name;
      name.appendChild(button);
      const address = document.createElement('td');
      address.textContent = restaurant.address;
      row.appendChild(name);
      row.appendChild(address);
      table.appendChild(row);
      button.addEventListener('click', function () { showDetails(restaurant, name); });
    }
    status.textContent = 'Select a restaurant to see its menu.';
  } catch (error) {
    status.textContent = 'Could not load restaurants. Connect to the school network or VPN and reload.';
    console.error(error);
  }
}
main();
