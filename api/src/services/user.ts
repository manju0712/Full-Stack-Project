import User, { UserDocument } from '../models/User'

const create = async (userDocument: UserDocument): Promise<UserDocument> => {
  return userDocument.save()
}

const findAll = async () => {
  return await User.find()
}

export default { create, findAll }
