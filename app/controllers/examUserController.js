const examModel = require("../models/exam");
const client = require("../config/InitRedis");
const e = require("express");
class examUserController {
  //lấy các kì thi của user
  static async getAllExamUser(req, res) {
    try {
      const userId = req.body.userId;
      if (userId) {
        var result = await examModel.getExamUser(userId);
        if (result) {
          res.send(result);
        }
      }
    } catch (err) {
      res.status(500).send("Don't access with model");
    }
  }
  //lấy câu hỏi của đề thi
  static async getQuestionById(req, res) {
    try {
      const quesId = req.body.quesId;
      if (quesId) {
        examModel.getQuestion(quesId, async (err, data) => {
          if (err) {
            res.send(err || "Error");
            console.log("Error controller");
          } else {
            examModel.getTitleQuestion(quesId, async (err, title) => {
              if (err) {
                res.send(err || "Error");
                console.log("Error controller");
              } else {
                // console.log("Question", data);
                // console.log("title", title);
                res.status(200).json({ data, title });
              }
            });
          }
        });
      } else {
        console.log("Ma de thi k ton tai");
        res.status(403).send("Ma de thi k ton tai");
      }
    } catch (err) {
      res.status(500).send("Don't access with model");
    }
  }
  static async getTime(req, res) {
    const { userKey } = req.body;
    client.get(userKey, (err, reply) => {
      if (err) {
        console.log("Get time redis error", err);
        throw err;
      } else {
        res.status(200).json({ time: reply });
      }
    });
  }
  static async setTime(req, res) {
    const { userKey, time } = req.body;
    var timeInt = parseInt(time);
    var countDownTime = setInterval(() => {
      if (timeInt > 0) {
        timeInt--;
        client.set(userKey, timeInt, (err, reply) => {
          if (err) throw err;
        });
      } else if (timeInt == 0) {
        client.del(userKey, function (err, response) {
          if (response == 1) {
            console.log("Deleted time Successfully!");
          } else {
            console.log("Cannot delete time");
          }
        });
        clearInterval(countDownTime);
      }
    }, 1000);

    res.json({ success: true });
  }
  //lưu câu hỏi
  static async saveAnswers(req, res) {
    const { questionId } = req.params;
    const { userQues, answer } = req.body;
    client.set(`${userQues}:${questionId}`, answer, (err, reply) => {
      if (err) {
        console.log("Error saving answers", err);
        res.send(err);
      } else {
        console.log("Successfully saved answers");
        res.status(200).send("Successfully saved answers");
      }
    });
  }
  static async getAnswers(req, res) {
    const { questionId } = req.params;
    const { userQues } = req.body;
    // Lấy trạng thái đã chọn từ Redis
    client.get(`${userQues}:${questionId}`, (err, reply) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.json({ answer: reply });
    });
  }
  static async delAnswers(req, res) {
    const { questionId } = req.params;
    const { userQues } = req.body;
    client.del(`${userQues}:${questionId}`, (err, reply) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      if (reply == 1) {
        console.log("Deleted answer Successfully!");
        res.status(200).send("Delete answer success");
      } else {
        console.log("Cannot delete answer ");
      }
    });
  }
  //lưu câu trả lời vào dữ liệu để tính điểm
  static async saveAnswerData(req, res) {
    try {
      const data = {
        user_id: req.body.user_id,
        question_id: req.body.question_id,
        answer: req.body.answer,
        create_user: req.body.user_id,
        update_user: "",
        create_date: new Date(),
        update_date: "",
      };
      examModel.saveAnswersUsers(data, async (err, result) => {
        if (err) {
          res.send(err || "Error");
          console.log("Error controller");
        } else {
          console.log("Insert answer success");
          res.status(200).send("insert success" + result);
        }
      });
    } catch (err) {
      res.status(500).send("Don't access with model");
    }
  }
  static async updateAnswerData(req, res) {
    try {
      const data = {
        answer: req.params.answer,
        user_id: req.body.user_id,
        question_id: req.body.question_id,
      };
      examModel.updateAnswersUsers(data, async (err, result) => {
        if (err) {
          res.send(err || "Error");
          console.log("Error controller");
        } else {
          console.log("Update answer success");
          res.status(200).send("Update answer:" + result);
        }
      });
    } catch (err) {
      res.status(500).send("Don't access with model");
    }
  }
  //Lấy điểm
  static async getUserPointExam(req, res) {
    try {
      const data = {
        user_id: req.body.user_id,
        cuoc_thi_id: req.body.cuoc_thi_id,
      };
      examModel.calculateAnswers(data, async (err, result) => {
        if (err) {
          res.send(err || "Error");
          console.log("Error controller 2");
        } else {
          // console.log("Get Point success: ", result);
          res.send(result);
        }
      });
    } catch (err) {
      res.status(500).send("Don't access with model");
    }
  }
}

module.exports = examUserController;
