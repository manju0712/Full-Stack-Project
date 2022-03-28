import { Request, Response, NextFunction } from 'express'

import Author from '../models/Author'
import AuthorService from '../services/author'
import { BadRequestError } from '../helpers/apiError'

// POST /books
export const createAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newAuthor = new Author(req.body)

    const createdBook = await AuthorService.createAuthor(newAuthor)
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
export const findAllAuthors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allAuthors = await AuthorService.findAllAuthors()
    res.json(allAuthors)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
export const findSingleAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await AuthorService.findSingleAuthor(req.params.authorId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
export const updateAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorId = req.params.authorId
    const update = req.body
    const updatedAuthor = await AuthorService.updateAuthor(authorId, update)
    res.json(updatedAuthor)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
export const deleteAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorId = req.params.authorId
    await AuthorService.deleteAuthor(authorId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
