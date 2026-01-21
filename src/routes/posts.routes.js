const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts.controller');

// IMPORTANT: static route first
router.get('/', postController.getAllPosts);

// Dynamic route AFTER '/'
router.get('/:postId', postController.getPostById);

module.exports = router;
