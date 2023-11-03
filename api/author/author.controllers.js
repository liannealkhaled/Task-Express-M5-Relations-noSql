const Author = require("../../models/Author");
const Post = require("../../models/Post");

exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(200).json(author);
  } catch (error) {
    next(error);
  }
};
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};
exports.postsCreate = async (req, res, next) => {
  try {
    req.body.author = req.author._id;
    const newPost = await Post.create(req.body);
    await req.author.updateOne({ $push: { posts: newPost } });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

// exports.deleteAuthorbyId = async (req, res) => {
//   const { id } = req.params;
//   const deletedauthor = await Author.findByIdAndDelete(id);
//   return res.status(204).end();
// };
