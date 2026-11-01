async function main() {
  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {'x-api-key': 'reqres-free-v1', 'Content-Type': 'application/json'},
      body: JSON.stringify({name: 'John Doe', job: 'Developer'})
    });
    // Fetch does not throw automatically for HTTP errors.
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}
main();
