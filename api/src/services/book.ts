import { NotFoundError } from '../helpers/apiError'
import Book, { BookDocument } from '../models/Book'

const create = async (book: BookDocument): Promise<BookDocument> => {
  return await book.save()
}

const findAll = async () => {
  return await Book.find().sort({ name: 1 })
}

export default { create, findAll }
