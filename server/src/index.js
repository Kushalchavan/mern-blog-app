import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/connectDb.js";
import errorHandler from "./middlewares/errorHandler.js";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";
import webHookRouter from "./routes/webhook.route.js";
import commentRouter from "./routes/comment.route.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(express.json());
app.use(clerkMiddleware);
app.use(morgan("tiny"));
app.use(cors(process.env.CLIENT_URL));

app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.use("/webhooks", webHookRouter);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(errorHandler); // error handler

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} successfully`);
});
