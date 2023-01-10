import express from 'express'
import { getAllStudent, getByIdStudent, addStudent, deleteStudent, updateStudent } from '../controllers/students.js' 
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getAllStudent)
router.get('/:id', verifyToken, getByIdStudent)
router.post('/', verifyToken, addStudent)
router.put('/:id', verifyToken, updateStudent)
router.delete('/:id', verifyToken, deleteStudent)

// router.post('/', addStudent)

export default router
