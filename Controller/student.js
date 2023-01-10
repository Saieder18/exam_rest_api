import Student from "../models/Student.js"

export const getAllStudent = async (req, res) => {
    try {
        const subject = await Student.find()
        if (subject.length !== 0)
            res.status(200).json(subject)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getByIdStudent = async (req, res) => {
    try {
        const { id } = req.params
        const subject = await Subject.findById(id)
        if (subject)
            res.status(200).json(subject)
        else
            res.status(404).json({ error: 'resource not found' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addStudent = async (req, res) => {
    try {
        const { studentId, fullName, address, age, mobileNumber, email } = req.body
        const studentInfo = await Student.create({
            studentId,
            fullName,
            address,
            age,
            mobileNumber,
            email
        })
        const savedStudent = await studentInfo.save()
        res.status(201).json({ id: savedStudent._id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteStudent = async (req, res) => {
    try {
        await Student.deleteOne({ 
            programId: req.params.studentId, 
            _id: req.params.id 
        })
        res.status(204).send()
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const updateStudent = async (req, res) => {
    try {
        const filter = { 
            programId: req.params.studentId, 
            _id: req.params.id 
        }
        const { studentId, fullName, address, age, mobileNumber, email } = req.body
        const update = { 
            studentId,
            fullName,
            address,
            age,
            mobileNumber,
            email
        }

        await Student.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}
