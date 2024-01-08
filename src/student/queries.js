const getAllStudents = "SELECT * FROM students"
const getStudentId = "SELECT * FROM students WHERE id = $1"

const checkEmailExist = "SELECT s FROM students s WHERE s.email = $1"

const addStudentData  = "INSERT INTO students (name, email, age, dob) VALUES ($1,$2,$3,$4)"

const removeStudent = "DELETE FROM students WHERE id = $1"

const updateStudent = "UPDATE students SET name = $2, email = $3 WHERE id = $1"

module.exports = {
    getAllStudents,
    getStudentId,
    checkEmailExist,
    addStudentData,
    removeStudent,
    updateStudent
}