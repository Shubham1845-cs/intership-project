import express from 'express'
import {login,register} from '../controllers/authController.js'
const router=express.Router();

router.post('/login',login);
router.post('/registration',register);

router.post('/login',login);

export default router;