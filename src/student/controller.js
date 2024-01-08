const pool = require("../../db")
const { getAllStudents, getStudentId, checkEmailExist, addStudentData, removeStudent, updateStudent } = require("./queries")
const getStudents = (req,res) =>{
    console.log('student from api')
    pool.query(getAllStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}
const getStudentById = (req,res) =>{
    console.log('student from api')
    const id = parseInt(req.params.id);
    pool.query(getStudentId,[id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const addStudent = (req,res) =>{
    const { name, email,age, dob } = req.body;

    pool.query(checkEmailExist, [email], (error, results)=>{
        if(results.rows.length){
            res.send("Emalil already Exist");
        }

        pool.query(addStudentData, [name, email, age, dob], (error, results)=>{
            if(error) throw error;
            res.status(200).send("Submit Successful")
        })
    })
}

const delStudentById = (req,res) => {
    const id = parseInt(req.params.id);

    pool.query(getStudentId,[id],(error, results) =>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("no student found with that ID")
        }
        pool.query(removeStudent,[id], (error,results) =>{
            if(error) throw error
            res.status(200).send("Student Deleted")
        })
    })
}


const updateStudentById = (req,res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body

    pool.query(getStudentId,[id],(error, results) =>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("no student found with that ID")
        }
        pool.query(updateStudent,[id, name, email ], (error,results) =>{
            if(error) throw error
            res.status(200).send("Student Data updated")
        })
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    delStudentById,
    updateStudentById
}