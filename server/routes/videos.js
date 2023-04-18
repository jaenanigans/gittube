import express from 'express';
import {
	addVideo,
	getVideo,
	deleteVideo,
	updateVideo,
	addView,
	random,
	trend,
	sub,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//create a video
router.post('/', verifyToken, addVideo);
router.put('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/find/:id', getVideo);
router.put('/view/:id', addView);
router.get('/trend', trend);
router.get('/random', random);
router.get('/sub', verifyToken, sub);

export default router;
