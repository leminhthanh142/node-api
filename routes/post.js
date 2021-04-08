const express = require('express');
const { createPost, getPosts } = require("../controllers/post");
const { createPostValidator } = require("../validators/post");


const router = express.Router();

router.get('/posts', getPosts)
router.post('/posts/createpost', createPostValidator, createPost);

module.exports = router;