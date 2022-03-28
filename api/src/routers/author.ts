import express from 'express'

import {
  createAuthor,
  findAllAuthors,
  updateAuthor,
  deleteAuthor,
  findSingleAuthor,
} from '../controllers/author'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllAuthors)
router.post('/', createAuthor)
router.get('/:authorId', findSingleAuthor)
router.put('/:authorId', updateAuthor)
router.delete('/:authorId', deleteAuthor)

export default router
