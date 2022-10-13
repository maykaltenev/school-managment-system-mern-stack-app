import student from "../models/student.js";

export const getStudents = async (req, res) => {
    try {
        const allStudents = await student.find();
        res.status(200).json({ message: "Congrats all students found!", allStudents })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const createStudent = async (req, res) => {

    const student = req.body;
    const newStudent = new student(student);

    try {
        await newStudent.save();
        res.status(201).json({ message: "User created", newStudent })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}