require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

const Book = require("../models/book");

let bookSeed = [
  {
    title: "Agency",
    authors:["William Gibson"],
    description: "In William Gibson's first novel since 2014's bestselling \"The Peripheral,\" a gifted \"app-whisperer,\" hired to beta test a mysterious new product, finds her life endangered by her relationship with her surprisingly street-smart and combat-savvy digital assistant. Residence: Vancouver, B.C. Print run 150,000.",
    publisher: "Berkley",
    pages: 416,
    image: "http://books.google.com/books/content?id=Os_GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  {
    title: "Pattern Recognition",
    authors:["William Gibson"],
    description: "Pattern Recognition - a pulsating techno-thriller by William Gibson, bestselling author of Neuromancer Cayce Pollard has been flown to London. She's a 'coolhunter' - her services for hire to global corporations desperate for certainty in a capricious and uncertain world. Now she's been offered a special project: track down the makers of the addictive online film that's lighting up the 'net. Hunting the source will take her to Tokyo and Moscow and put her in the sights of Japanese computer crazies and Russian Mafia men. She's up against those who want to control the film, to own it - who figure breaking the law is just another business strategy. The kind of people who relish turning the hunter into the hunted . . . William Gibson is a prophet and a satirist, a black comedian and an outstanding architect of cool. Readers of Neal Stephenson, Ray Bradbury and Iain M. Banks will love this book. Pattern Recognition is the first novel in the Blue Ant trilogy - read Spook Country and Zero History for more. 'A big novel, full of bold ideas . . . races along like an expert thriller' GQ 'Dangerously hip. Its dialogue and characterization will amaze you. A wonderfully detailed, reckless journey of espionage and lies' USA Today 'A compelling, humane story with a sympathetic heroine searching for meaning and consolation in a post-everything world' Daily Telegraph Idoru is a gripping techno-thriller by William Gibson, bestselling author of Neuromancer 'Fast, witty and cleverly politicized' Guardian",
    publisher: "Berkley",
    pages: 368,
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