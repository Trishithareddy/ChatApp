import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for frontend
app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true, // allow cookies
}));

app.use(express.json()); // parse JSON
