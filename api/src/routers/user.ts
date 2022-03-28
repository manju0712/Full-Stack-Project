import express from 'express'

import {
  createUser,
  deleteUser,
  findAllUsers,
  updateUser,
  findSingleUser,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllUsers)
router.post('/', createUser)
router.get('/:userId', findSingleUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router
