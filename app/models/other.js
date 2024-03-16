const sql = require("../models/index");
class otherModel {
  static async getSubject(result) {
    sql.query("SELECT * FROM tblmon", (err, res) => {
      if (err) {
        console.log("ERROR:", err);
        result(err, null);
        return;
      } else {
        result(null, res);
        return;
      }
    });
  }
  static async getClass(result) {
    sql.query("SELECT * FROM tbllop", (err, res) => {
      if (err) {
        console.log("ERROR:", err);
        result(err, null);
        return;
      } else {
        result(null, res);
        return;
      }
    });
  }
}

module.exports = otherModel;
