const router = require("express").Router();
const Post = require("../models/postModel");

router.post("/" , async (req,res) => {

    // retrieve the data from the request
    const {title, createdAt, tags, html} = req.body;
    //console.log(title, createdAt, tahs, html);
    //construct the post model
    const newPost = new Post({
        title,
        createdAt,
        tags,
        html
    });
    //save post model

    try {
        const savedPost = await newPost.save();
        res.json(savedPost);
        console.log(savedPost);
    } catch(err){
        console.error(err);
    }
});

router.get("/", async (req,res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.get("/:id", async (req,res) => {
    const post = await Post.findById(req.params.id);
    req.json(post);
});


module.exports = router;