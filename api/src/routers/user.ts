import express from 'express'

import { createUser, findAllUsers } from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllUsers)
router.post('/', createUser)

export default router
