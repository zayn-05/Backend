const express = require("express");
const router = express.Router();
const controller = require("../controllers/loanController");

router.post("/", controller.createLoan);
router.get("/", controller.getLoans);
router.put("/:id/return", controller.returnBook);

module.exports = router;