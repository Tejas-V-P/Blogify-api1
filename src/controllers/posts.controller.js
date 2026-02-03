// Mock posts data (adjust if your project already has a data source)
const posts = [
  {
    id: '1',
    title: 'First Post',
    content: 'This is the first blog post'
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'This is the second blog post'
  }
];

// GET /api/v1/posts
exports.getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: posts
  });
};

// GET /api/v1/posts/:postId
exports.getPostById = (req, res) => {
  const { postId } = req.params;

  const post = posts.find(p => p.id === postId);

  res.status(200).json({
    success: true,
    data: post
  });
};
