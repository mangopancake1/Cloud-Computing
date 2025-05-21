import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import NoteRoute from "./routes/NoteRoutes.js";
import UserRoute from "./routes/userRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ⚠️ HARUS pakai process.env.PORT TANPA fallback!
const PORT = process.env.PORT;
if (!PORT) {
  console.error("❌ PORT is not defined in environment");
  process.exit(1);
}

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

// 🔄 Jalankan hanya jika DB berhasil sinkron
(async () => {
  try {
    await db.sync();
    console.log("✅ Database synced");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to sync DB:", err);
    process.exit(1);
  }
})();
