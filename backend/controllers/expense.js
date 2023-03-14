const ExpenseSchema = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  const { tittle, amount, category, description, date } = req.body;
  const expense = ExpenseSchema({
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
    await expense.save();

    res.status(200).json({
      success: true,
      message: "Gasto agregado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
  console.log(expense);
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({
        success: true,
        message: "gasto eliminado correctamente",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    });
};
