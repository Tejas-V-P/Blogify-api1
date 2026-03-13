const Post = require("../models/post.model");
const users = require("../models/user.model");

const getAllPosts = async() => {
    return await Post.find().populate("author", "username");
};

const getPostById = async(id) => {
    return await Post.findById(id).populate("author", "name email")
};

const createPost = async(postData) => {
    return await Post.create(postData);
};

const updatePost = async(id, updateData) => {
    return await Post.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });
};

const deletePost = async(id, postData) => {
    return await Post.findByIdAndDelete(id);
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost  
};
