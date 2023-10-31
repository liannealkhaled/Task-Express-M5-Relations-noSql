const Tag = require("../../models/Tag");
const Post = require("../../models/Post");

exports.createTag = async (req, res, next) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};
exports.tagsGet = async (req, res, next) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (error) {
    next(error);
  }
};

exports.postAdd = async (req, res, next) => {
  try {
    req.body.tag = req.tag._id;
    const posts = await Post.create(req.body);
    await req.tag.updateOne({ $push: { posts: posts } });
    res.status(201).json(posts);
  } catch (error) {
    next(error);
  }
};
// exports.postAdd = async (req, res, next) => {
//     try {
//   req.body.tag = req.tag._id
//       const posts = await Post.create(req.body);
//       await req.tag.updateOne({$push: { ??? : posts}})
//       res.status(201).json(posts)
//     } catch (error) {
//       next(error);
//     }
//   };

exports.addTagToPost = async (req, res, next) => {
  try {
    const { tagId, postId } = req.params;
    const tag = await Tag.findByIdAndUpdate(tagId, {
      $push: { posts: postId },
    });

    const post = await Post.findByIdAndUpdate(postId, {
      $push: { tags: tagId },
    });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
