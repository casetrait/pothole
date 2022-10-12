const express = require("express");
const router = express.Router();
const votesCtrl = require("../../controllers/api/votes");

//edit users votes

//add conVote
router.put("/addCon/:id", votesCtrl.addConVote)
//remove conVote
router.put("/removeCon/:id", votesCtrl.removeConVote)

//add resVote
router.put("/addRes/:id", votesCtrl.addResVote)
//remove resVote
router.put("/removeRes/:id", votesCtrl.removeResVote)

module.exports = router;