import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import logger from './middlewares/loggerMiddleware.js';
import errorHandler from './middlewares/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import initializeUsers from './InitializeAdmin.js';

dotenv.config();

const PORT = process.env.PORT || 9000
const app = express();

//Req body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


initializeUsers().then(()=>{
//Logger middleware
app.use(logger);

//Req mapping middleware
app.use("/api/auth", authRoutes);
app.use("/api/appointments", bookingRoutes);

//Error handler middleware
app.use(errorHandler);

    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
}).catch(error => {
    console.error("Error initializing admin user:", error);
});





