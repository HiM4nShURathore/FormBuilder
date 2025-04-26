// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js';
import formRoutes from './routes/formRoutes.js';
import responseRoutes from './routes/responseRoutes.js'
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/welcome', (req, res) => {
    res.status(200).json({ message: "Welcome to the No-Code Dynamic Form Builder API!" });
  });
app.use('/api/users', userRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/responses', responseRoutes);
  

// Routes
// app.use("/api/forms", require("./routes/formRoutes"));
// app.use("/api/responses", require("./routes/responseRoutes"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
