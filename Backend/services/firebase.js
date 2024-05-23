import admin from "firebase-admin";
import dotenv from "dotenv";
import serviceAccount from "./telu-project-firebase-adminsdk-jeuip-b3a2a39ca4.json" assert { type: "json" };

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
