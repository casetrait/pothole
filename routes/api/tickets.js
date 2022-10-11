const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../../controllers/api/tickets");

//Get all tickets
router.get("/", ticketsCtrl.index);
router.get("/yourtickets/:userid", ticketsCtrl.yourtickets);

//Anything protected under here
router.use(require("../../config/auth"));
//Post new ticket
router.post("/", ticketsCtrl.create);
router.delete("/:id", ticketsCtrl.delete);
module.exports = router;
