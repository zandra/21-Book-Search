import connectToDB from '../../../utils/db';
import Book from "../../../models/book";

export default async (req, res) => {
  await connectToDB();
  Book.find({})
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
};