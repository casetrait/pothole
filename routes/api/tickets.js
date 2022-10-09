const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../../controllers/api/tickets");

//Post new ticket
router.post("/", ticketsCtrl.create);

//Get all tickets
router.get("/", ticketsCtrl.index)

module.exports = router
