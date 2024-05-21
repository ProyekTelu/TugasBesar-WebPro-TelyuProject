import Faculty from "../models/FacultyModel.js";

export const getAllFaculty = async (req, res) => {
  try {
    const response = await Faculty.findAll();

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
