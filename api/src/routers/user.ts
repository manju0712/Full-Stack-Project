import express from 'express'
import passport from 'passport'

import {
  createUser,
  deleteUser,
  findAllUsers,
  updateUser,
  findSingleUser,
  googleLogin,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.post(
  '/google-login',
  passport.authenticate('google-id-token', { session: false }),
  googleLogin
)
router.get('/', passport.authenticate('jwt', { session: false }), findAllUsers)
router.post('/', createUser)
router.get('/:userId', findSingleUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router
