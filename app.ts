import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/route";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", routes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Improved MongoDB connection handling
function connectToDatabase() {
  mongoose
    .connect(process.env.MONGODB_URI!)
    .then(() => {
      console.log("Connected to MongoDB");
      // Only start server after successful DB connection
      const PORT = process.env.PORT || 8080;
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      // Retry connection after delay
      setTimeout(connectToDatabase, 5000);
    });
}

// Initial connection attempt
connectToDatabase();

export default app;
