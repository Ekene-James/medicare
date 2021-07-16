const express = require("express");
const Encounter = require("../models/Encounter");

const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const { getEncounters,createEncounter, sendEncounter } = require("../controller/encounter");

router.use(protect("doctor"));
router.use(authorize("doctor"));


router
  .route("/encounter")
  .get(advancedResults(Encounter),getEncounters)
  .post(createEncounter)

router
  .route("/encounter/send")
  .post(sendEncounter)
  
module.exports = router;
