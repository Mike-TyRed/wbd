import express from "express";

const router = express.Router();

import { getPosts, createPost } from '../controllers/posts.js'
//##### Rutas

//##### Peticiones y respuesta
router.get('/', getPosts);
router.post('/', createPost);

export default router;

//  http://localhost:5000/posts