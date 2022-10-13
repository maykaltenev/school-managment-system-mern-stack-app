import express from 'express';
import { getStudents, createStudent } from '../controller/student.js'

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
export default router;
