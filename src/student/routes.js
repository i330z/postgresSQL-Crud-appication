const { Router } = require("express");
const { getStudents, getStudentById, addStudent, delStudentById, updateStudentById} = require('./controller')
const router = new Router();

router.get('/', getStudents )
router.get('/:id', getStudentById )
router.delete('/:id', delStudentById )
router.put('/:id', updateStudentById )

router.post('/', addStudent)
module.exports = router