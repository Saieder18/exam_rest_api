import mongoose from 'mongoose'

export const SubjectSchema = new mongoose.Schema(
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

const Subject = mongoose.model('Subject', SubjectSchema)
export default Subject
