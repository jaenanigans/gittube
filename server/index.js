import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config({ path: '../.env' });
const DB = process.env.MONGO;

const connect = () => {
	mongoose
		.connect(DB)
		.then(() => {
			console.log('CONNECTED TO DB');
		})
		.catch((err) => {
			throw err;
		});
};

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);

app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || 'Something went wrong';
	return res.status(status).json({
		success: false,
		message,
		status,
	});
});

app.listen(8800, () => {
	connect();
	console.log('connected to server');
});
