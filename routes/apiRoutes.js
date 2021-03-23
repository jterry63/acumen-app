var db = require("../models");
var path = require("path");
var connection = require("../config/connection.js")



module.exports = function (app) {
  var surveyData = [];


  app.get("/api/data", function (req, res) {
    var dbQuery = "SELECT * FROM vle2lt3dz5ogjgdk.surveys";

    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });


  app.post("/api/surveys", function (req, res) {
    surveyData.push(req.body);
    res.json(true);
    console.log("Survey Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO vle2lt3dz5ogjgdk.surveys (question1_value, question1_comment, question2_value, question2_comment, question3_value, question3_comment, question4_value, question4_comment, question5_value, question5_comment, question6_value, question6_comment, question7_value, question7_comment, question8_comment) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    connection.query(dbQuery, [req.body.question1, req.body.comment1, req.body.question2, req.body.comment2, req.body.question3, req.body.comment3, req.body.question4, req.body.comment4, req.body.question5, req.body.comment5, req.body.question6, req.body.comment6, req.body.question7, req.body.comment7, req.body.comment8,], function (err, result) {
      if (err) throw err;
      console.log("Survey Successfully Saved!");
      res.end();
    });

  });

};
