import express from "express";
import mongoose from "mongoose";
import router from "./routes.js";
import "dotenv/config";
import cors from "cors";

const { DB_URL } = process.env;

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/api", router);

async function startApp() {
  try {
    //connecting to DB
    await mongoose.connect(DB_URL);

    app.listen(PORT, () => console.log(`Server started on localhost: ${PORT}`));
  } catch (e) {
    console.error(e);
  }
}

startApp();
