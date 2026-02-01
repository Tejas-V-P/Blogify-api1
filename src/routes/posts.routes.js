// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

// GET /api/v1/posts/
router.get('/', postsController.getAllPosts);

// GET /api/v1/posts/:postId
// Step 1: Define the placeholder with a colon (:)
router.get('/:postId', postsController.getPostById);

module.exports = router;