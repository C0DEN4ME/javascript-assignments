async function main() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      headers: {'x-api-key': 'reqres-free-v1'}
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
