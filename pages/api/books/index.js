import json from '../../../data/books.json';

export default (req, res) => {
  res.status(200).json(json);
};