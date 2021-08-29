const bodyParser = require('body-parser')
const {Post} = require('../models/posts');


exports.getPost = () =>{
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const skipIndex = (page - 1) * limit;
        const results = {};

        try {
        results.results = await Post.find()
            .sort({ _id: 1 })
            .limit(limit)
            .skip(skipIndex)
            .exec();
        res.paginatedResults = results;
        next();
        } catch (e) {
            console.log(e)
            res
            .status(500)
            .json({ message: "Error Occured while fetching the data" });
        }
    };
}

exports.addPost = async (req, res) => {
	subject = req.body.subject,
	description = req.body.description,
	author = req.body.author

	let newPost = new Post({
		subject : subject,
        description : description,
        author : author
	})

	newPost.save().then((post) => {
		res.send(post)
	}).catch((err) => {
		res.send(err)
	})
}


exports.updatePost= async (req, res) => {
	let post = {}
	if (req.body.subject) post.subject = req.body.subject
	if (req.body.description) post.desciption = req.body.description
	if (req.body.author) post.author = req.body.author

	post = { $set: post }

	Post.updateOne({_id: req.params.id}, post).then(() => {
		res.send(post)
	}).catch((err) => {
		res.send(err)
	})
}


exports.deletePost= async (req, res) => {
	Post.deleteOne({_id: req.params.id}).then(() => {
		res.json({"msg":"post deleted"})
	}).catch((err) => {
		res.send(err)
	})
}
