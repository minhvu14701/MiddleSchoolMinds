const sql = require("../models/index");
class quesAnsModel {
  static async getQuesion(result) {
    sql.query(
      "SELECT question.id,fullname,tenmon,question.content,date_ques,COUNT(answer.id) AS SumAnswer FROM question INNER JOIN tblmon ON question.id_mon = tblmon.id INNER JOIN tbluser ON question.id_user = tbluser.id LEFT JOIN answer ON question.id = answer.id_ques GROUP BY question.id",
      (err, res) => {
        if (err) {
          console.log("ERROR:", err);
          result(err, null);
          return;
        } else {
          result(null, res);
          return;
        }
      }
    );
  }
  //Lấy tiêu đề câu hỏi
  static async getTitle(quesId, result) {
    sql.query(
      "SELECT fullname,tenmon,content,date_ques FROM question INNER JOIN tblmon ON question.id_mon = tblmon.id INNER JOIN tbluser ON question.id_user = tbluser.id WHERE question.id = ?",
      quesId,
      (err, res) => {
        if (err) {
          console.log("ERROR:", err);
          result(err, null);
          return;
        } else {
          result(null, res[0]);
          return;
        }
      }
    );
  }
  //Lấy list câu trả lời
  static async getAnswer(quesId, result) {
    sql.query(
      "SELECT fullname,content,date FROM answer INNER JOIN tbluser ON answer.id_user = tbluser.id WHERE id_ques = ?",
      quesId,
      (err, res) => {
        if (err) {
          console.log("ERROR:", err);
          result(err, null);
          return;
        } else {
          result(null, res);
          return;
        }
      }
    );
  }
  //Thêm câu hỏi
  static async addQuestion(newQues, result) {
    sql.query("INSERT INTO question SET ?", newQues, (err, res) => {
      if (err) {
        console.log("ERROR: ", err);
        result(err, null);
        return;
      } else {
        result(null, res);
      }
    });
  }
}

module.exports = quesAnsModel;
