import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'

import movieRouter from './routers/movie'
import userRouter from './routers/user'
import bookRouter from './routers/book'
import authorRouter from './routers/author'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())

// Set up routers
app.use('/api/v1/movies', movieRouter)
app.use('/api/users', userRouter)
app.use('/api/books', bookRouter)
app.use('/api/authors', authorRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
