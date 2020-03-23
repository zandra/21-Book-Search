import json from '../../../data/books.json';

export default (req, res) => {
  const books = json;
  console.log(books.length);
  res.status(200).json(json);
};