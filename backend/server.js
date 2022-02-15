import express from 'express' ;

import dotenv from 'dotenv';

import connectDB from './config/db.js';

import eventRoutes from './routes/eventRoutes.js';

import userRoutes from './routes/userRoutes.js';


dotenv.config();

connectDB()


const app = express();

app.use(express.json())

app.use(express.static('public'))

app.use('/api/events',eventRoutes);

app.use('/api/users',userRoutes);

// Throwing our error  Middlewares in Node js
// app.use((err,req,res,next)=>{
//     const error = res.statusCode === 200 ? 500 : res.statusCode;
//     res.status(statusCode);
//     res.json({
//         message:err.message,
//         stack:process.env.NODE_ENV === 'production' ? null : err.stack
//     })
// })



const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running  on ${PORT} port! You are doing a great job Reine  keep it up!`));