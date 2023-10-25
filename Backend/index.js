import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoutes.js";
import AuthRoute from "./routes/AuthRoutes.js";
import FakultasRoute from "./routes/FakultasRoutes.js";
import ProdiRoute from "./routes/ProdiRoutes.js";
import db from "./config/Database.js";
import FakulasAndProdi from "./InitialData/FakultasAndProdi.js";
import Users from "./InitialData/Users.js";

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
app.use(FakultasRoute);
app.use(ProdiRoute);

//nyalakan untuk inisialisasi data awal (berurut 1 dulu baru 2)

//1.
// (async () => {
//   await db.sync();
//   FakulasAndProdi();
// })();

//2.
// (async () => {
//   await db.sync();
//   Users();
// })();

app.listen(process.env.APP_PORT, () =>
  console.log("server listening on port " + process.env.APP_PORT)
);
