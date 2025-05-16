import express from "express";
import {
  createPost,
  getPost,
  getPosts,
  deletePost,
  uploadAuth
} from "../controllers/post.controller.js";

const router = express.Router();

router.route("/upload-auth").get(uploadAuth)
router.route("/").post(createPost).get(getPost);
router.route("/:slug").get(getPosts);
router.route("/:id").delete(deletePost);

export default router;
