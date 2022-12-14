import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import passport from 'passport'
import cors from 'cors'

import movieRouter from './routers/movie'
import userRouter from './routers/user'
import bookRouter from './routers/book'
import authorRouter from './routers/author'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import { googleStrategy, jwtStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(cors())
app.use(apiContentType)
app.use(express.json())

//Passport Configuration
app.use(passport.initialize())
passport.use(googleStrategy)
passport.use(jwtStrategy)

// Set up routers
app.use('/api/v1/movies', movieRouter)
app.use('/api/users', userRouter)
app.use('/api/books', bookRouter)
app.use('/api/authors', authorRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
