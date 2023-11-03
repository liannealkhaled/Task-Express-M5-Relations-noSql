const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  post: { type: String, required: true, default: "POST" },
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

module.exports = model("Post", PostSchema);
