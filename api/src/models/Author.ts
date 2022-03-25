/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export type AuthorDocument = Document & {
  _id: string
  FirstName: string
  LastName: string
  email: string
  Country: string
  books: [Schema.Types.ObjectId]
}

const authorSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    index: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
})

export default mongoose.model<AuthorDocument>('Author', authorSchema)
