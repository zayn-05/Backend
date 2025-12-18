const Member = require("../models/Member");

exports.createMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getMembers = async (req, res) => {
  res.json(await Member.find());
};

exports.getMemberById = async (req, res) => {
  const member = await Member.findById(req.params.id);
  if (!member) return res.status(404).json({ message: "Member not found" });
  res.json(member);
};

exports.updateMember = async (req, res) => {
  const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!member) return res.status(404).json({ message: "Member not found" });
  res.json(member);
};

exports.deleteMember = async (req, res) => {
  const member = await Member.findByIdAndDelete(req.params.id);
  if (!member) return res.status(404).json({ message: "Member not found" });
  res.json({ message: "Member deleted" });
};
