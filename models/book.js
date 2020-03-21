const mongoose = require('mongoose');

const savedBookSchema = new mongoose.Schema({
  title: String,
  authors: [String],
  description: String,
  publisher: String,
  pages: Number,
  image: String,
  dateAdded: { type: Date, default: Date.now }
});

const SavedBook = mongoose.model("Workout", savedBookSchema);

module.exports = SavedBook;