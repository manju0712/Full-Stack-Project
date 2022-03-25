import { NotFoundError } from '../helpers/apiError'
import Author, { AuthorDocument } from '../models/Author'

const create = async (author: AuthorDocument): Promise<AuthorDocument> => {
  return author.save()
}

const findAll = async () => {
  return await Author.find().sort({ name: 1 })
}

export default { create, findAll }
