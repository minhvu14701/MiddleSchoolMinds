const otherController = require("../controllers/otherController");
const router = require("express").Router();
router.get("/subject", otherController.getSub);
router.get("/class", otherController.getListClass);

module.exports = router;
