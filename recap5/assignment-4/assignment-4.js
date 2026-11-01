async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}
async function main() {
  try {
    const user = {name: 'John Doe', job: 'Developer'};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData('https://reqres.in/api/users', options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}
main();
