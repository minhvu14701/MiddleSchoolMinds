const quesAnsModel = require("../models/quesAns");
class quesAnsController {
  //Lấy list câu hỏi
  static async getQues(req, res) {
    try {
      quesAnsModel.getQuesion(async (err, data) => {
        if (err) {
          res.send(err || "Error");
          console.log("Error with model");
        } else {
          res.send(data);
          console.log("Get question Successful");
        }
      });
    } catch (err) {
      res.status(500).send("Don't access with model");
    }
  }
  //Lấy tiêu đề từng câu hỏi
  static async getTitleQues(req, res) {
    try {
      const quesId = req.params.quesId;
      if (quesId) {
        quesAnsModel.getTitle(quesId, async (err, data) => {
          if (err) {
            res.send(err || "Error");
            console.log("Error with model getTitle:", err);
          } else {
            quesAnsModel.getAnswer(quesId, async (error, answer) => {
              if (error) {
                res.send(error || "Error");
                console.log("Error with model getAnswer:", error);
              } else {
                res.status(200).json({ data, answer });
              }
            });
          }
        });
      } else {
        console.log("Ma cau hoi k ton tai");
        res.status(403).send("Question id not exist");
      }
    } catch (err) {
      res.status(500).send("Don't access with model");
    }
  }
  //Thêm câu hỏi
  static async addQuestions(req, res) {
    try {
      const newQues = {
        id_user: req.body.id_user,
        id_mon: req.body.id_mon,
        content: req.body.content,
        date_ques: new Date(),
      };
      quesAnsModel.addQuestion(newQues, (err, data) => {
        if (err) {
          console.log("Error with model: ", err);
          res.send(false);
        } else {
          res.status(200).send(true);
        }
      });
    } catch (error) {
      console.log(error);
      res.status(401).send(error);
    }
  }
}

module.exports = quesAnsController;
