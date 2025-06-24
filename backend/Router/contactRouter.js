import express from 'express'
import { contactdata } from '../controllers/contactController.js'

const router =express.Router()
router.post('/submit',contactdata)

export default router
