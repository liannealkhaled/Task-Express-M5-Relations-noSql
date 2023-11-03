const express = require("express");
const router = express.Router();

const { route } = require("../posts/posts.routes");
const {
  postsCreate,
  createAuthor,
  getAllAuthors,
  deleteAuthorbyId,
} = require("./author.controllers");
const Author = require("../../models/Author");

//routes function
router.param("authorId", async (req, res, next, authorId) => {
  const author = await Author.findById(authorId);
  if (author) {
    req.author = author;
    next();
  } else {
    const err = new Error("Post Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getAllAuthors);
router.post("/", createAuthor);
// router.delete("/", deleteAuthorbyId);
router.post("/:authorId", postsCreate);

///// populate.
module.exports = router;
