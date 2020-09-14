import express, { json } from "express";
import { connect } from "mongoose";
import { findBooks, createBook, findBook, updateBook, deleteBook } from "./controllers/books";

connect("mongodb://localhost:27017/express-mongoose", {
    useNewUrlparser: true,
  })
  .then(() => {
    const app = express();

    app.use(json());

    app.get("/books", findBooks);

    app.post("/books", createBook);

    app.get("/books/:id", findBook);
    app.patch("/books/:id", updateBook);
    app.delete("/books/:id", deleteBook);

    app.listen(8000, () => {
      console.log("server has Started at Port 8000");
    });
  })
  .catch(() => {
    console.log("Database connection failed");
  });
