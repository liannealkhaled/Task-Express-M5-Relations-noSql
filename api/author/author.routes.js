const express = require("express");
const router = express.Router();

const { route } = require("../posts/posts.routes");
const {
  postsCreate,
  createAuthor,
  getAuthors,
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

router.post("/:authorId", postsCreate);
router.get("/", getAuthors);

router.post("/", createAuthor);
///// populate.
module.exports = router;
