/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'
import { BookDocument } from './Book'

export type UserDocument = Document & {
  _id: string
  FirstName: string
  LastName: string
  createdAt: Date
  DOB: Date
  email: string
  borrowBooks: string[] | BookDocument[]
}
const borrowBookSchema = new mongoose.Schema({
  book: {
    type: mongoose.Types.ObjectId,
    ref: 'Book',
  },
  borrowDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
  },
})

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    index: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    Default: Date.now,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  borrowBooks: [borrowBookSchema],
})

export default mongoose.model<UserDocument>('User', userSchema)
