const Ticket = require("../../models/ticket");

module.exports = {
  addConVote,
  removeConVote,
  addResVote,
  removeResVote,
};

async function addConVote(req, res) {
  try {
    let ticket = await Ticket.findById(req.params.id);
    ticket.confirmationVote.push(req.body.user._id);
    ticket.confirmationCount = ticket.confirmationVote.length;
    ticket.save();
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function removeConVote(req, res) {
  try {
    let ticket = await Ticket.findById(req.params.id);
    const index = ticket.confirmationVote.indexOf(req.body.user._id);
    if (index > -1) {
      ticket.confirmationVote.splice(index, 1);
    }
    ticket.confirmationCount = ticket.confirmationVote.length;
    ticket.save();
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function addResVote(req, res) {
  try {
    let ticket = await Ticket.findById(req.params.id);
    ticket.resolvedVote.push(req.body.user._id);
    ticket.resolvedCount = ticket.resolvedVote.length;
    ticket.save();
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function removeResVote(req, res) {
  try {
    let ticket = await Ticket.findById(req.params.id);
    const index = ticket.resolvedVote.indexOf(req.body.user._id);
    if (index > -1) {
      ticket.resolvedVote.splice(index, 1);
    }
    ticket.resolvedCount = ticket.resolvedVote.length;
    ticket.save();
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json(err);
  }
}
