const express = require("express");
const router = express.Router();
const ticketCtrl = require("../../controllers/api/ticket");

//Post new ticket
router.post("/", ticketCtrl.create);

//Get all tickets
