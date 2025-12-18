const Loan = require("../models/Loan");

exports.createLoan = async (req, res) => {
  try {
    const loan = await Loan.create(req.body);
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLoans = async (req, res) => {
  const loans = await Loan.find().populate("memberId").populate("bookId");
  res.json(loans);
};

exports.returnBook = async (req, res) => {
  const loan = await Loan.findById(req.params.id);
  if (!loan) return res.status(404).json({ message: "Loan not found" });

  loan.returnedAt = new Date();
  await loan.save();

  res.json(loan);
};
