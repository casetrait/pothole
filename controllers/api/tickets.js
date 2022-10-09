const Ticket = require("../models/ticket");

module.exports = { create };

// function create(req, res) {
//   Ticket.create(req.body, function (err, post) {
//     res.status(200).json("ok");
//   });
// }

async function create(req, res) {
  await Ticket.create(req.body).then(res.status(200).json("ok"));
}
