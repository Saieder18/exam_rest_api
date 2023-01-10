import mongoose from 'mongoose'

export const StudentSchema = new mongoose.Schema(
    {
        studentId: { type: Number, required: true },
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        age: { type: Number, required: true },
        mobileNumber: { type: Number, required: true },
        email: { type: String, required: true },
    }, 
    { timestamps: true }
)

const Student = mongoose.model('Student', StudentSchema)
export default Student
