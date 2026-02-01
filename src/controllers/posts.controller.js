const getAllPosts = (req, res) => {
  // 1. Destructure the query parameter
  const { sortBy } = req.query;

  // Sample data (in real app, this would come from database)
  let posts = [
    { id: 1, title: "Hello World", date: "2024-01-01" },
    { id: 2, title: "Learning Express", date: "2024-01-02" }
  ];

  // 2. Logic check
  if (sortBy === 'date') {
    console.log('Sorting posts by date...');
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // 3. The Standard Response
  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: posts
  });
};

const getPostById = (req, res) => {
  const { postId } = req.params;
  
  // Sample data (in real app, this would come from database)
  const posts = [
    { id: 1, title: "Hello World", date: "2024-01-01" },
    { id: 2, title: "Learning Express", date: "2024-01-02" }
  ];

  const post = posts.find(p => p.id === parseInt(postId));

  if (!post) {
    return res.status(404).json({
      status: 'error',
      message: 'Post not found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: post
  });
};

module.exports = {
  getAllPosts,
  getPostById
};