const Ticket = require("../../models/Ticket");

module.exports = { 
  index,
  create 
};

// function create(req, res) {
//   Ticket.create(req.body, function (err, post) {
//     res.status(200).json("ok");
//   });
// }

async function create(req, res) {
  await Ticket.create(req.body).then(res.status(200).json("ok"));
}


async function index(req,res) {
  try {
    await Ticket.find({});
    res.status(200).json("Fetch Succesful");
  } catch (err) {
    res.status(500).json(err);
  }
}