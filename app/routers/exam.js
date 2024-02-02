const examUserController = require("../controllers/examUserController");
const router = require("express").Router();
const verifiTokenController = require("../controllers/verifiTokenController");

router.post(
  "/examUser",
  verifiTokenController.verifiToken,
  examUserController.getAllExamUser
);
router.post(
  "/question",
  verifiTokenController.verifiToken,
  examUserController.getQuestionById
);
router.post("/getTime", examUserController.getTime);
router.post("/setTime", examUserController.setTime);
router.post("/saveAnswer/:questionId", examUserController.saveAnswers);
router.post("/getAnswer/:questionId", examUserController.getAnswers);
router.post("/delAnswer/:questionId", examUserController.delAnswers);
router.post("/saveSelectAnswer", examUserController.saveAnswerData);
router.post("/updateAnswerData/:answer", examUserController.updateAnswerData);
router.post("/getPoint", examUserController.getUserPointExam);

module.exports = router;
