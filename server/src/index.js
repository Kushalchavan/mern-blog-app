import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/connectDb.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(express.json());
app.use(morgan("tiny"));


app.use("/", (req, res) => {
  res.json({
    status: 200,
    message: "Working!",
  });
});

app.use(errorHandler); // error handler

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} successfully`);
});
