import { Request, Response, NextFunction } from 'express'

import Book from '../models/Book'
import BookService from '../services/book'
import { BadRequestError } from '../helpers/apiError'

// POST /books
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBook = new Book(req.body)

    const createdBook = await BookService.createBook(newBook)
    res.json(createdBook)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /Books
export const findAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allBooks = await BookService.findAllBooks()
    res.json(allBooks)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
export const findSingleBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BookService.findSingleBook(req.params.bookId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.params.authorId
    const update = req.body
    const updatedBook = await BookService.updateBook(bookId, update)
    res.json(updatedBook)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.params.bookId
    await BookService.deleteBook(bookId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const borrowBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(
      await BookService.borrowBook(
        req.body.bookId,
        req.body.userId,
        req.body.borrrowdate,
        req.body.returnDate
      )
    )
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
