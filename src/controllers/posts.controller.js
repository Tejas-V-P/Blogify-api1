// src/controllers/posts.controller.js
const { validationResult } = require('express-validator');

const createPost = (req, res) => {
  // Check the "Checklist" results
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    // 400 Bad Request: The standard for "The client sent bad data"
    return res.status(400).json({ 
      errors: errors.array() 
    });
  }

  // If we get here, the data is valid!
  const { title, content } = req.body;
  
  res.status(201).json({
    message: "Post created successfully",
    data: { title, content }
  });
};

module.exports = { createPost };