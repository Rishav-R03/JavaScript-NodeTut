import express from 'express'
import { userLogin, userSignup } from './controller.js'
const router = express.Router()

router.get('/login',userLogin)
router.get('/login',userSignup)

export default router 

