import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import shortUrlRoutes from "./routes/urlRoutes";

import connectDB from "./config/dbConfig";

connectDB();

const port = process.env.PORT || 5001;

const app = express();

// adding middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", shortUrlRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
