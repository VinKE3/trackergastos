const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
