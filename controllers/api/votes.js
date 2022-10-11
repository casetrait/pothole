const Ticket = require("../../models/ticket");

module.exports = {
    showVotes,
    editVotes
};

async function showVotes(req, res) {
    try {
      let ticket = await Ticket.get(req);
      res.status(200).json(ticket);
    } catch (err) {
      res.status(500).json(err);
    }
}

async function editVotes(req, res) {
    try {
      await Ticket.push({ ...req.body, user: req.user._id });
      res.status(200).json("Added to DB succesfully!");
    } catch (err) {
      res.status(500).json(err);
    }
}