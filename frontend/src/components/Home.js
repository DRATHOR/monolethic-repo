// src/components/Home.js
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  // Fetch API message from the backend
  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>{message}</p> {/* Display the message from the API */}
    </div>
  );
};

export default Home;
