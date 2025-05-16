import express from "express";
import {
  getPostComments,
  addComment,
  deleteComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.route("/:postId").get(getPostComments).post(addComment);
router.route("/:id").delete(deleteComment);

export default router;
