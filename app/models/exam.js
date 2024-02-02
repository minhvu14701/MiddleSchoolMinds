const sql = require("../models/index");

class examModel {
  static async getExamUser(userId) {
    return new Promise((resolve) => {
      sql.query(
        "SELECT coc_cuoc_thi.id,tenlop,tenmon,mon_id,name, coc_cuoc_thi.time,open_time,close_time,point FROM coc_cuoc_thi JOIN tbllop AS l ON coc_cuoc_thi.lop_id = l.id JOIN tblmon AS m ON coc_cuoc_thi.mon_id = m.id LEFT JOIN coc_2_user ON coc_cuoc_thi.id = coc_2_user.coc_id WHERE coc_2_user.user_id = ? ",
        userId,
        (err, res) => {
          if (err) {
            console.log("ERROR:", err);
            resolve(err);
          } else {
            // console.log("Exam", res);
            resolve(res);
          }
        }
      );
    });
  }
  static async getQuestion(quesId, result) {
    sql.query(
      "SELECT ct.id, ct.noi_dung,ct.answer1,ct.answer2,ct.answer3,ct.answer4,ct.key1,ct.key2,ct.key3,ct.key4 FROM coc_cuoc_thi_question AS ct WHERE cuoc_thi_id = ? ORDER BY id ASC",
      quesId,
      (err, res) => {
        if (err) {
          console.log("ERROR:", err);
          result(err, null);
          return;
        } else {
          // console.log("Exam", res);
          result(null, res);
          return;
        }
      }
    );
  }
  static async getTitleQuestion(quesId, result) {
    sql.query(
      "SELECT cct.`name` AS titleName , cct.time, m.tenmon  FROM coc_cuoc_thi AS cct JOIN tblmon AS m ON cct.mon_id = m.id WHERE cct.id = ?",
      quesId,
      (err, res) => {
        if (err) {
          console.log("ERROR:", err);
          result(err, null);
          return;
        } else {
          // console.log("Exam", res);
          result(null, res[0]);
          return;
        }
      }
    );
  }
  static async saveAnswersUsers(data, result) {
    sql.query("INSERT INTO coc_2_use_question SET ?", data, (err, res) => {
      if (err) {
        console.log("ERROR:", err);
        result(err, null);
        return;
      } else {
        // console.log("New answer", { id: res.insertId, ...data });
        result(null, { id: res.insertId, ...data });
        return;
      }
    });
  }
  static async updateAnswersUsers(data, result) {
    sql.query(
      "UPDATE coc_2_use_question SET answer = ? WHERE user_id = ? AND question_id = ?",
      [data.answer, data.user_id, data.question_id],
      (err, res) => {
        if (err) {
          console.log("ERROR:", err);
          result(err, null);
          return;
        } else {
          // console.log("Update answer:", data.answer);
          result(null, data.answer);
          return;
        }
      }
    );
  }
  //tính điểm:
  static async calculateAnswers(data, result) {
    var totalQues = {};
    sql.getConnection((err, conn) => {
      if (err) {
        console.log("error: ", err);
      }
      conn.query(
        "SELECT question_id,key1,key2,key3,key4,answer FROM coc_cuoc_thi_question INNER JOIN coc_2_use_question ON coc_cuoc_thi_question.id = coc_2_use_question.question_id WHERE user_id = ? AND cuoc_thi_id = ?",
        [data.user_id, data.cuoc_thi_id],
        (err, ans) => {
          if (err) {
            console.log("Error select answer: ", err);
            result(err, null);
            return;
          } else {
            // console.log("Answer: ", ans);
            conn.query(
              "SELECT COUNT(cuoc_thi_id) AS totalQuestion FROM coc_cuoc_thi_question WHERE cuoc_thi_id = ?",
              data.cuoc_thi_id,
              (error, total) => {
                if (err) {
                  console.log("Error total question: ", error);
                  result(err, null);
                  return;
                } else {
                  console.log("total question: ", total);
                  totalQues = total[0].totalQuestion;
                  let correct = 0;
                  ans.forEach((row) => {
                    if (
                      (row.answer == 0 && row.key1 == 1) ||
                      (row.answer == 1 && row.key2 == 1) ||
                      (row.answer == 2 && row.key3 == 1) ||
                      (row.answer == 3 && row.key4 == 1)
                    ) {
                      correct += 1;
                    }
                  });
                  const point = (correct / totalQues) * 10;
                  conn.query(
                    "UPDATE coc_2_user SET point = ? WHERE user_id = ? AND coc_id = ?",
                    [point, data.user_id, data.cuoc_thi_id],
                    (err, up) => {
                      if (err) {
                        console.log("Error update point: ", error);
                        result(err, null);
                        return;
                      } else {
                        console.log("Update point successfully");
                        result(
                          {
                            totalQuestion: totalQues,
                            totalCorrect: correct,
                            userPoint: point,
                            updatePoint: "Success",
                          },
                          null
                        );
                      }
                      //đóng kết nối
                      conn.release();
                    }
                  );
                }
              }
            );
          }
        }
      );
    });
  }
}

module.exports = examModel;
