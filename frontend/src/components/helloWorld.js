// src/components/HelloWorld.js
import React, { useState, useEffect } from 'react';

const HelloWorld = () => {
  const [message, setMessage] = useState('');  // State to store the response from the API
  const [loading, setLoading] = useState(true);  // State to track loading status

  // Fetch the API data when the component is mounted
  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())  // Parse the JSON response
      .then((data) => {
        setMessage(data.message);  // Set the API response message in state
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMessage('Error fetching message');
        setLoading(false);
      });
  }, []);  // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      {loading ? (
        <p>Loading...</p>  // Show a loading message while fetching data
      ) : (
        <p>{message}</p>  // Display the message received from the backend
      )}
    </div>
  );
};

export default HelloWorld;
