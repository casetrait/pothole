const Ticket = require("../../models/ticket");

module.exports = { create };

async function create(req, res) {
  try {
    await Ticket.create({ ...req.body, user: req.user._id });
    res.status(200).json("Added to DB succesfully!");
  } catch (err) {
    res.status(500).json(err);
  }
}
