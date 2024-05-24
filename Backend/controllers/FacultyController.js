import Faculty from "../models/FacultyModel.js";
import Major from "../models/MajorModel.js";

export const getAllFaculty = async (req, res) => {
  try {
    const response = await Faculty.findAll();

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getAllFacultyMajor = async(req, res) => {
  try {
    const response = await Faculty.findAll({
      include: [
        {
          model : Major,
          attributes: ["id", "name", "code", "degree"],
        },
      ],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
