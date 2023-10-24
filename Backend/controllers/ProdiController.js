import Prodi from "../models/ProdiModel.js";

export const getAllProdi = async (req, res) => {
  try {
    const response = await Prodi.findAll();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getProdiByKodeFakultas = async (req, res) => {
  try {
    const response = await Prodi.findAll({
      where: {
        kodeFakultas: req.params.kodeFakultas,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
