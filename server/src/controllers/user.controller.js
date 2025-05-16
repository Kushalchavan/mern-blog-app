import User from "../models/user.model.js";

export const getUserSavedPost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated!");
  }

  const user = await User.findOne({ clerkUserId });

  res.status(200).json(user.savedPosts);
};

export const savePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.body.postId;

  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated!");
  }

  const user = await User.findOne({ clerkUserId });
  const isSavedPost = user.savedPosts.some((p) => p === postId);

  if (!isSavedPost) {
    await User.findByIdAndUpdate(user._id, {
      $push: { savedPost: postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      $pull: { savedPost: postId },
    });
  }

  setTimeout(() => {
    res.status(200).json(isSavedPost ? "Post unsaved" : "Post save");
  }, 3000);
};
