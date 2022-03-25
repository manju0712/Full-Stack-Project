/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  _id: string
  FirstName: string
  LastName: string
  createdAt: Date
  DOB: Date
  email: string
}

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
    unique: true,
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
