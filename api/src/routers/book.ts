import express from 'express'

import {
  createBook,
  deleteBook,
  findAllBooks,
  findSingleBook,
  updateBook,
  borrowBook,
} from '../controllers/book'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllBooks)
router.post('/', createBook)
router.get('/:bookId', findSingleBook)
router.put('/:bookId', updateBook)
router.delete('/:bookId', deleteBook)
router.post('/:borrow', borrowBook)

export default router
