const Book = require("../models/Book").default;

exports.findBooks = async (req, res) => {
  // res.send("updated");

  const books = await Book.find();

  res.send({ data: books });
};

exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.send({ data: book });

  // console.log(data);
  // res.send(data);
};

exports.findBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
  } catch {
    res.status(404).send({ error: "Book is not found!" });
  }

  res.send({ data: book });
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    Object.assign(book, req.body);
    res.send({ data: book });
    book.save();
  } catch {
    res.status(404).send({ error: "Book is not found!" });
  }

  // res.send({ data: book });
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    await book.remove();
    res.send({ data: true });
  } catch {
    res.status(404).send({ error: "Book is not found!" });
  }

  // res.send({ data: book });
};
