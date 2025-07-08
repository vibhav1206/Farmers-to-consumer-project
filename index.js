import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db/index.js';
import router from './router/router.js';

const app = express();

// Middleware
app.use(cors({
    origin: "*",
    credentials: true,
}));
app.use(bodyParser.json());

// Connect to MongoDB
connectDB()
    .then(() => {
        console.log("MongoDB connected");
        // Start server
        app.listen(4000, () => {
            console.log("Server is running on port 4000");
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
    });

// Routes
app.use("/", router);
