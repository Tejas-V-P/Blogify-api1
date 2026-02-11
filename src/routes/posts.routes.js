const express = require('express');
const router = express.Router();

// Matches: GET /api/v1/posts
router.get('/', (req, res) => {
    res.json({ message: "Fetching all posts" });
});

// Matches: GET /api/v1/posts/:id
router.get('/:id', (req, res) => {
    res.json({ message: `Fetching post with ID: ${req.params.id}` });
});

module.exports = router;