import Fakultas from "../models/FakultasModel.js";

export const getAllFakultas = async (req, res) => {
  try {
    const response = await Fakultas.findAll();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
