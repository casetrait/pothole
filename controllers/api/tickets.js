const { createIndexes } = require("../../models/ticket");
const Ticket = require("../../models/ticket");

module.exports = {
  index,
  create,
  delete: deleteTicket,
  yourtickets,
  category,
};

async function create(req, res) {
  try {
    await Ticket.create({ ...req.body, user: req.user._id });
    res.status(200).json("Added to DB succesfully!");
  } catch (err) {
    res.status(500).json(err);
  }
}

async function index(req, res) {
  try {
    let tickets = await Ticket.find({}).sort({ createdAt: "desc" });
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteTicket(req, res) {
  try {
    let ticket = await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json("Successfully deleted");
  } catch (err) {
    res.status(500).json(err);
  }
}

async function yourtickets(req, res) {
  try {
    let tickets = await Ticket.find({ reporter: req.params.userid });

    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function category(req, res) {
  try {
    console.log(req.params.category);
    let tickets = await Ticket.find({ category: req.params.category });

    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json(err);
  }
}
