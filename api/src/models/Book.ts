import mongoose, { Document, Schema } from 'mongoose'

export type BookDocument = Document & {
  title: string
  description: string
  language: string
  publishedYear: number
  publisher: string
  category: string[]
  location: string
  quantity: number
  availability: string

  author: mongoose.Schema.Types.ObjectId
  user: mongoose.Schema.Types.ObjectId
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
    min: 1900,
  },
  language: { type: String, required: true },

  publisher: {
    type: String,
  },

  category: [String],
  location: {
    type: String,
  },
  quantity: {
    type: Number,
  },

  availability: {
    type: String,
  },
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Author',
    },
  ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
})

export default mongoose.model<BookDocument>('Book', bookSchema)
