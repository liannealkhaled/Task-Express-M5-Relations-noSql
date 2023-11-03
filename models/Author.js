const { Schema, model } = require("mongoose");

const AuthorSchema = new Schema({
  name: { type: String, required: true, default: "AUTHOR" },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = model("Author", AuthorSchema);

///// without destructure :::
///// const mongoose = require("mongoose")
////// const Author = new mongoose.Schema({} )
//// type: mongoose.types.obj....
