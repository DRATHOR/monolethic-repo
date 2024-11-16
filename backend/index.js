
const express = require('express');
const cors = require('cors');  // Import CORS
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API route
app.get('/api/hello', (req, res) => {
  res.json({data:[{id:2139,name:'devendra'}], message: 'Hello from the backend!' });
});

// Catch-all to serve the frontend app for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
