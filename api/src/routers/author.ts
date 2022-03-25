import express from 'express'

import { createAuthor, findAllAuthors } from '../controllers/author'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllAuthors)
router.post('/', createAuthor)

export default router
