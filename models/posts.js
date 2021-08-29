const mongoose = require('mongoose')

// Schema for AddressBook
const postSchema = mongoose.Schema({
    subject: {
        type: String,
        required: true,
        maxLength: 50
    },
	description: {
		type: String,
		required: true,
        maxLength: 256
	},
	author: {
		type: String
	}
})

//Creating the collection Address
const Post = mongoose.model('Post', postSchema)

exports.Post = Post;