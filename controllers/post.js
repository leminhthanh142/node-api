const Post = require('../models/post');

exports.createPost = (req, res) => {
    const post = new Post(req.body);

    // save post to DB
    post.save().then(result => res.status(200).json({
        post: result
    }))

    // check for errors
    const errors = req.validationErrors();
    if (errors) {
        res.status(400).json({
            error: errors.map(err => err.msg)
        })
    }
}

exports.getPosts = (req, res) => {
    // get all posts
    Post.find().select('_id title body')
        .then(posts => res.json({posts}))
        .catch(err => console.log(err.msg));
}