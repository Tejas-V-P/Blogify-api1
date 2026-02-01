const express = require('express');
const app = express();
const PORT = 3000;

// Import the specialized department
const postRouter = require('./routes/posts.routes.js');

// Global Route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// Route Delegation (Mounting)
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});