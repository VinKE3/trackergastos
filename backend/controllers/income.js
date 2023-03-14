const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
  const { tittle, amount, category, description, date } = req.body;
  const income = IncomeSchema({
    tittle,
    amount,
    category,
    description,
    date,
  });
  try {
    //validaciones de datos
    if (!tittle || !amount || !category || !description || !date) {
      return res.status(400).json({
        success: false,
        message: "Todos los campos son obligatorios",
      });
    }
    if (amount < 0 || amount === "number") {
      return res.status(400).json({
        success: false,
        message: "El monto no puede ser negativo",
      });
    }
    await income.save();

    res.status(200).json({
      success: true,
      message: "Ingreso agregado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
  console.log(income);
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({
        success: true,
        message: "Ingreso eliminado correctamente",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    });
};
