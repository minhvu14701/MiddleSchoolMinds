const sql = require("../models/index");

class userModel {
  static async register(newUser, result) {
    sql.query(`INSERT INTO tbluser SET ?`, newUser, (err, res) => {
      if (err) {
        console.log("ERROR: ", err);
        result(err, null);
        return;
      }
      //Hiển thị vào teminal
      console.log("New user: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  }
  static async login(username, result) {
    sql.query(
      `SELECT * FROM tbluser WHERE username = ?`,
      username,
      (err, res) => {
        if (err) {
          console.log("ERROR: ", err);
          result(err, null);
        } else {
          console.log("User: ", res[0]);
          result(null, res[0]);
          return;
        }
      }
    );
  }
}
module.exports = userModel;
