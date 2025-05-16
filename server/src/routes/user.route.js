import express from "express";
import { getUserSavedPost, savePost } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/saved").get(getUserSavedPost);
router.route("/save").patch(savePost);

export default router;
