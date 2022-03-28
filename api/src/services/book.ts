import User from '../models/User'
import { NotFoundError } from '../helpers/apiError'
import Book, { BookDocument } from '../models/Book'

const createBook = async (book: BookDocument): Promise<BookDocument> => {
  return await book.save()
}

const findAllBooks = async () => {
  return await Book.find().sort({ name: 1, publishedYear: -1 })
}
const findSingleBook = async (bookId: string): Promise<BookDocument | null> => {
  const foundBook = await Book.findById(bookId).populate('borrowBooks.book')

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}
const updateBook = async (
  bookId: string,
  updatedBook: Partial<BookDocument>
): Promise<BookDocument | null> => {
  const foundBook = await Book.findByIdAndUpdate(bookId, updatedBook, {
    new: true,
  })

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}
const deleteBook = async (bookId: string): Promise<BookDocument | null> => {
  const foundBook = Book.findByIdAndDelete(bookId)

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

const borrowBook = async (
  bookId: string,
  userId: string,
  borrowDate: Date,
  returnDate: Date
) => {
  const foundBook = await Book.findById(bookId)
  const foundUser = await User.findById(userId)

  if (!foundUser || !foundBook) {
    throw new NotFoundError('Book or User Not Found')
  }

  const bookExist = (foundUser.borrowBooks as string[]).some(
    (id) => id === bookId
  )
  if (!bookExist) {
    const borrowBook = {
      book: bookId,
      borrowDate: borrowDate,
      returnDate: returnDate,
    }
    foundUser.borrowBooks = [...foundUser.borrowBooks, borrowBook] as string[]
    foundUser.save()
  }
  return foundUser
}

export default {
  createBook,
  findAllBooks,
  findSingleBook,
  updateBook,
  deleteBook,
  borrowBook,
}
