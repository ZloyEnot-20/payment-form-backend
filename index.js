import express from "express";
import mongoose from "mongoose";
import router from "./routes.js";
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

//Disabling CORS policy
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/api", router);

async function startApp() {
  const DB_URL = process.env.DB_URL;
  try {
    //connecting to DB
    await mongoose
      .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() =>
        app.listen(PORT, () =>
          console.log(`Server up and running! on port ${PORT}`)
        )
      );
  } catch (e) {
    console.error(e);
  }
}

startApp();
