const quesAnsController = require("../controllers/quesAnsController");
const router = require("express").Router();
const verifiTokenController = require("../controllers/verifiTokenController");
router.get("/question", quesAnsController.getQues);
router.post("/title/:quesId", quesAnsController.getTitleQues);
router.post("/addQuestion", quesAnsController.addQuestions);
module.exports = router;
