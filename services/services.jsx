// services.jsx
export const fetchData = async () => {
  try {
    const response = await fetch(
      'https://freetestapi.com/api/v1/destinations/',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          // If your API requires specific headers, add them here
        },
        // Do not include a body in a GET request
      },
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
