import express from 'express'

import { createBook, findAllBooks } from '../controllers/book'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllBooks)
router.post('/', createBook)

export default router
