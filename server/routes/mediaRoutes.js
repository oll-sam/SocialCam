import express from 'express';
import { findMedia, createMedia, updateMedia, deleteMedia, likeMedia } from '../controllers/mediaController.js';

// setting up router

const router = express.Router();

router.get('/', findMedia);
router.post('/', createMedia);
router.patch('/:id', updateMedia);
router.delete('/:id', deleteMedia);
router.patch('/:id/likeMedia', likeMedia);

export default router;