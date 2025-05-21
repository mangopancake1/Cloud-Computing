import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import NoteRoute from "./routes/NoteRoutes.js";
import UserRoute from "./routes/userRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;



// ✅ Konfigurasi CORS
const allowedOrigins = [
  "https://notes-fe0141-dot-c-13-451813.uc.r.appspot.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());


app.use(NoteRoute);
app.use(UserRoute);


(async () => {
    try {
        await db.sync();
        console.log("Database synced successfully.");
    } catch (error) {
        console.error("Failed to sync database:", error);
    }
})();

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));