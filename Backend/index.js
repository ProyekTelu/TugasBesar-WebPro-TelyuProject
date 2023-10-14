import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoutes.js";
import AuthRoute from "./routes/AuthRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
const port = 5000;

app.listen(port, () => console.log("server listening on port " + port));
