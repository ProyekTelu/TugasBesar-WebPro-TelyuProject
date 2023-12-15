import Faculty from "../models/FacultyModel.js";
import Request from "../models/RequestModel.js";
import Project from "../models/ProjectModel.js";

export const getAllFaculty = async (req, res) => {
  try {
    const response = await Faculty.findAll();

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
