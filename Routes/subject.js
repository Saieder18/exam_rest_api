import express from 'express'
import { getAllSubject, getByIdSubject, addSubject, deleteSubject, updateSubject } from '../controllers/Subjects.js' 
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getAllSubject)
router.get('/:id', verifyToken, getByIdSubject)
router.post('/', verifyToken, addSubject)
router.put('/:id', verifyToken, updateSubject)
router.delete('/:id', verifyToken, deleteSubject)

export default routerimport express from 'express'
import { login, register } from '../controllers/auth.js'

const router = express.Router();
