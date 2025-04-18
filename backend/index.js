import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import NoteRoute from "./routes/NoteRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

const PORT = 5005;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

(async () => {
    try {
        await db.sync();
        console.log("Database synced successfully.");
    } catch (error) {
        console.error("Failed to sync database:", error);
    }
})();

