import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'

const createUser = async (
  userDocument: UserDocument
): Promise<UserDocument> => {
  return userDocument.save()
}

const findAllUsers = async () => {
  return await User.find()
}
const findSingleUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = await User.findById(userId).populate('borrowBooks.book')

  if (!foundUser) {
    throw new NotFoundError(`Book ${userId} not found`)
  }

  return foundUser
}
const updateUser = async (
  userId: string,
  updatedUser: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, updatedUser, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}
const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

export default {
  createUser,
  findAllUsers,
  findSingleUser,
  updateUser,
  deleteUser,
}
