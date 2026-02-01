// The Manager's Logic
const getAllPosts = (req, res) => {
  // A manager always returns a status code! 
  // 200 means "OK/Success"
  res.status(200).json({
    message: 'Route handled by postController.getAllPosts',
    success: true
  });
};

module.exports = {
  getAllPosts
};