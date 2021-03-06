const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  authors: [String],
  description: String,
  publisher: String,
  pages: Number,
  image: String,
  dateAdded: { type: Date, default: Date.now }
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

module.exports = Book;
