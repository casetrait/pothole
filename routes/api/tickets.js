const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../../controllers/api/tickets");

//Get all tickets
router.get("/", ticketsCtrl.index);
router.get("/filters/yourtickets/:userid", ticketsCtrl.yourtickets);
router.get("/filters/category/:category", ticketsCtrl.category);

//Anything protected under here
router.use(require("../../config/auth"));
//Post new ticket
router.post("/", ticketsCtrl.create);
router.delete("/:id", ticketsCtrl.delete);
module.exports = router;
