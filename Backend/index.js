import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoutes.js";
import AuthRoute from "./routes/AuthRoutes.js";
import db from "./config/Database.js";
dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use(UserRoute);
app.use(AuthRoute);

// (async () => {
//   await db.sync();
// })();

app.listen(process.env.APP_PORT, () =>
  console.log("server listening on port " + process.env.APP_PORT)
);
