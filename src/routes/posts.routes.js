const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.controller.js');

// Clean, readable, and professional
router.get('/', postController.getAllPosts);

module.exports = router;