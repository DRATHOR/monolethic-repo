// src/components/About.js
import React, { useEffect, useState } from 'react';

const About = () => {
  const [message, setMessage] = useState('');

  // Simulate an API call
  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return (
    <div>
      <h1>About</h1>
      <p>{message}</p> {/* Display the message from the API */}
    </div>
  );
};

export default About;
