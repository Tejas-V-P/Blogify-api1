// Mock posts data (adjust if your project already has a data source)

const postsService = require("../services/post.services");


// GET /api/v1/posts
const getAllPosts = async(req, res, next) => {
  try{
    const posts = await postsService.getAllPosts();
    res.status(200).json({
      success: true,
      data: posts,
    });
    }
    catch (error){
      next(error);
    }    
};

// GET /api/v1/posts/:postId
const getPostById = async(req, res, next) => {
  try{
    const {postId} = req.params;
    const post = await postsService.getPostById(postId);

    if(!post){
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    res.status(200).json({
      success: true,
      data: post
    });
  }
  catch (error){
    next(error);
  }
};

const createPost = async(req, res, next) => {
  try{
    const newPost = await postsService.createPost(req.body);
    res.status(201).json({
      success: true,
      data: newPost
    });
  } catch(error){
    next(error);
  }
};

const updatePost = async(req, res, next)=>{
  try{
    const { postId } = req.params;
    const updateData = req.body;
    const updatedPost = await postsService.updatePost(postId, updateData);
    if(!updatedPost){
      return res.status(404).json({
        success: false,
        message: "Post not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedPost,
    });
  }catch(error){
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try{
    const {postid} = req.params;
    const deletedPost = await postsService.deletePost(postId);
    if(!deletedPost){
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
   res.status(200).json({
      success: true,
      data: updatedPost,
    });
  } catch(error){
    next(error);
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
}