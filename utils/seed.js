require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

const Book = require("../models/book");

let bookSeed = [
  {
    title: "The Story of More",
    subtitle: "How We Got to Climate Change and Where to Go from Here",
    authors:["Hope Jahren"],
    description: "“Hope Jahren is the voice that science has been waiting for.” —Nature “A superb account of the deadly struggle between humanity and what may prove the only life-bearing planet within ten light years, written in a brilliantly sardonic and conversational style.” —E. O. Wilson “Hope Jahren asks the central question of our time: how can we learn to live on a finite planet? The Story of More is thoughtful, informative, and—above all—essential.” —Elizabeth Kolbert, author of The Sixth Extinction Hope Jahren is an award-winning scientist, a brilliant writer, a passionate teacher, and one of the seven billion people with whom we share this earth. In The Story of More, she illuminates the link between human habits and our imperiled planet. In concise, highly readable chapters, she takes us through the science behind the key inventions—from electric power to large-scale farming to automobiles—that, even as they help us, release greenhouse gases into the atmosphere like never before. She explains the current and projected consequences of global warming—from superstorms to rising sea levels—and the actions that we all can take to fight back. At once an explainer on the mechanisms of global change and a lively, personal narrative given to us in Jahren’s inimitable voice, The Story of More is the essential pocket primer on climate change that will leave an indelible impact on everyone who reads it.",
    publisher: "Vintage",
    pages: 192,
    image: "http://books.google.com/books/content?id=sD6nDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  {
    title: "Becoming",
    authors:["Michelle Obama"],
    description: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America, she helped create the most welcoming and inclusive White House in history. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private. A deeply personal reckoning of a woman of soul and substance who has steadily defied expectations.",
    publisher: "Crown Publishing Group (NY)",
    pages: 400,
    image: "http://books.google.com/books/content?id=5GvWmQKLchQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  }
];

async function deleteData() {
  console.log(`Dropping Data ... ☔️ ☔️ `);
  await Book.remove();
  console.log(`Data Deleted. To load sample data, run\n\n\t npm run seed\n\n`);
  process.exit();
}

async function loadData() {
  try {
    await Book.insertMany(bookSeed);
    console.log(' 📚📚📚 Done!');
    process.exit();
  } catch(e) {
    console.log('\n👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run unseed\n\n\n');
    console.log(e);
    process.exit();
  }
}

if(process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}