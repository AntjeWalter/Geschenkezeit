export default async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}
