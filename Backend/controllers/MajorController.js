import Major from "../models/majorModel.js";

export const getAllMajor = async (req, res) => {
  try {
    const response = await Major.findAll();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getMajorByFacultyCode = async (req, res) => {
  try {
    const response = await Major.findAll({
      where: {
        facultyCode: req.params.facultyCode,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
