const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// formatting model for book database including data types of each key
const bookSchema = new Schema({
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model("Book", bookSchema);

// exporting model to be used in other part of the application
module.exports = Book;
