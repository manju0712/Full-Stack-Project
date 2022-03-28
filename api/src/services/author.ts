import { NotFoundError } from '../helpers/apiError'
import Author, { AuthorDocument } from '../models/Author'

const createAuthor = async (
  author: AuthorDocument
): Promise<AuthorDocument> => {
  return author.save()
}

const findAllAuthors = async () => {
  return await Author.find().sort({ name: 1 })
}

const findSingleAuthor = async (
  authorId: string
): Promise<AuthorDocument | null> => {
  const foundAuthor = await Author.findById(authorId).populate('books')

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}
const updateAuthor = async (
  authorId: string,
  updatedAuthor: Partial<AuthorDocument>
): Promise<AuthorDocument | null> => {
  const foundAuthor = await Author.findByIdAndUpdate(authorId, updatedAuthor, {
    new: true,
  })

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}
const deleteAuthor = async (
  authorId: string
): Promise<AuthorDocument | null> => {
  const foundAuthor = Author.findByIdAndDelete(authorId)

  if (!foundAuthor) {
    throw new NotFoundError(`Movie ${authorId} not found`)
  }

  return foundAuthor
}

export default {
  createAuthor,
  findAllAuthors,
  updateAuthor,
  findSingleAuthor,
  deleteAuthor,
}
