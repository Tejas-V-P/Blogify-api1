const express = require('express');
const router = express.Router();

// 1. Import resource routers
const userRouter = require('./users.routes.js');
const postRouter = require('./posts.routes.js');

// 2. Map routes to their respective routers
// This means anything hitting "/posts" goes to postRouter
router.get('/about', (res, req) => {
    res.setEncoding('About page')
});

router.get('/error-test', async (req, res, next) => {
    next(new Error("This is a thrown error"));
})

router.use('/users', userRouter);
router.use('/posts', postRouter);

// Future expansion:
// const userRouter = require('./users.routes.js');
// router.use('/users', userRouter);

module.exports = router;