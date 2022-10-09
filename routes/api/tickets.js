const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../../controllers/api/tickets");

//Get all tickets
router.get("/", ticketsCtrl.index)

//Anything protected under here
router.use(require("../../config/auth"));
//Post new ticket
router.post("/", ticketsCtrl.create);

//Get all tickets

module.exports = router;
