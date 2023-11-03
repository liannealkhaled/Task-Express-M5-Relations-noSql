const { Schema, model } = require("mongoose");

const TagSchema = new Schema({
  name: { type: String, required: true, default: "TAG" },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = model("Tag", TagSchema);
