import express from 'express'
import {login,register} from '../controllers/authController.js'
import { useNavigate } from 'react-router-dom';
const router=express.Router();


router.post('/login',login);

router.post('/registration',register);




export default router;