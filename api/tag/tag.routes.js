const express = require("express");
const router = express.Router();
const { createTag, tagsGet, addTagToPost } = require("./tag.controllers");

router.post("/", createTag);
router.get("/", tagsGet);
router.put("/:tagId/:postId", addTagToPost);
module.exports = router;
