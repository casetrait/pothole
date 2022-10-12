const Ticket = require("../../models/ticket");

module.exports = {
  addConVote,
  removeConVote,
  addResVote,
  removeResVote,
};

async function addConVote(req, res) {
  try {
    let addVotes = req.body.ticketAddCount;
    console.log(addVotes.confirmationCount, "<-backend initial");
    let ticket = await Ticket.findById(req.params.id);
    res.status(200).json(ticket);
    ticket.confirmationCount = addVotes.confirmationCount;
    ticket.confirmationVote.push(req.body.user._id);
    ticket.save();
    console.log(ticket.confirmationCount, "<--aftersave");
  } catch (err) {
    res.status(500).json(err);
  }
}

async function removeConVote(req, res) {
  try {
    let addVotes = req.body.ticketAddCount;
    console.log(addVotes.confirmationCount, "<-backend initial");
    let ticket = await Ticket.findById(req.params.id);
    res.status(200).json(ticket);
    ticket.confirmationCount = addVotes.confirmationCount;
    const index = ticket.confirmationVote.indexOf(req.body.user._id);
    if (index > -1) {
      ticket.confirmationVote.splice(index, 1);
    }
    ticket.save();
    console.log(ticket.confirmationCount, "<--aftersave");
  } catch (err) {
    res.status(500).json(err);
  }
}

async function addResVote(req, res) {
  try {
    let ticket = await Ticket.findById(req.params.id);
    res.status(200).json(ticket);
    ticket.resolvedVote.push(req.body.user._id);
    ticket.save();
    console.log(ticket);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function removeResVote(req, res) {
  try {
    let ticket = await Ticket.findById(req.params.id);
    res.status(200).json(ticket);
    const index = ticket.resolvedVote.indexOf(req.body.user._id);
    if (index > -1) {
      ticket.resolvedVote.splice(index, 1);
    }
    ticket.save();
    console.log(ticket);
  } catch (err) {
    res.status(500).json(err);
  }
}
