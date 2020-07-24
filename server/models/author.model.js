const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is the only field, it is required"],
        minlength: [3, "Gotta have a longer name than 3 characters, make some up!"],
    }
}, {timestamps: true});
module.exports.Author = mongoose.model('Author', AuthorSchema)