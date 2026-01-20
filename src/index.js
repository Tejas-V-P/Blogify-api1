const express = require('express');
const app = express();
const PORT = 1200;

// Root route (UNCHANGED behavior)
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API! This is the main entry point.');
});

// Import posts router
const postRouter = require('./routes/posts.routes');


// Mount posts router
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
