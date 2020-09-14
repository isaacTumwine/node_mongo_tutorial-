import { Schema, model } from "mongoose";
const schema = new Schema({
  title: String,
  author: String,
});

export default model("Book", schema);
