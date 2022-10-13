const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../../controllers/api/tickets");

//Get all tickets
router.get("/", ticketsCtrl.index);
router.get("/filters/yourtickets/:userid", ticketsCtrl.yourtickets);
router.get("/filters/category/:category", ticketsCtrl.category);
router.get("/filters/mostconfirmed/", ticketsCtrl.mostconfirmed);
router.get("/filters/mostresolved/", ticketsCtrl.mostresolved);
router.get("/filters/showresolved/", ticketsCtrl.showresolved);
router.get("/filters/markerSearch/:ticketid", ticketsCtrl.markerSearch);

//Anything protected under here
router.use(require("../../config/auth"));
//Post new ticket
router.post("/", ticketsCtrl.create);
router.delete("/:id", ticketsCtrl.delete);
module.exports = router;
