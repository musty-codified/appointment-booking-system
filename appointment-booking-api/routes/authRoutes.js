import express from "express";
import {registerUer, authenticate} from '../controllers/authController.js'
const router = express.Router();

//Route handler for POST /api/auth/register
router.post('/register', registerUer)

//Route handler for POST /api/auth/login
router.post('/', authenticate)

export default router;