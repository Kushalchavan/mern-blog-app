import express from "express";
import {
  createPost,
  getPost,
  getPosts,
  deletePost,
} from "../controllers/post.controller";

const router = express.Router();

router.route("/").post(createPost).get(getPost);
router.route("/:slug").get(getPosts);
router.route("/:id").delete(deletePost);


export default router;