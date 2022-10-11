const express = require("express");
const router = express.Router();
const votesCtrl = require("../../controllers/api/votes");

//get users votes
router.get("/", votesCtrl.showVotes)

//post users votes
router.post("/", votesCtrl.editVotes)

module.exports = router;