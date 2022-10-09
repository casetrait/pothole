const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../../controllers/api/tickets");

//Post new ticket
<<<<<<< HEAD
router.post("/", ticketsCtrl.create);

//Get all tickets
router.get("/", ticketsCtrl.index)

module.exports = router
=======
router.use(require("../../config/auth"));
router.post("/", ticketsCtrl.create);

//Get all tickets

module.exports = router;
>>>>>>> main
