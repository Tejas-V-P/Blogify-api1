// src/controllers/posts.controller.js

const getPostById = (req, res) => {
  // Step 2: Access the value using the key defined in the route
  const { postId } = req.params; 

  res.status(200).json({
    success: true,
    message: `Post Office lookup successful!`,
    data: {
      requestedId: postId,
      content: `This is the data for post ${postId}`
    }
  });
};

module.exports = {
  // ... your other controllers (like getAllPosts)
  getPostById,
};