const pool = require("../../sql/connection");
// SQL error handler
const { sqlErrorhandler } = require("../../sql/errorHandler");

// METHOD: POST
// PATH: 'localhost:3030/quiz/
const getQuestions = (req, res) => {
    // variable holding array of question types being requested
    let { questions } = req.body;
    // get questions based off of users question types & quiz length
    pool.query(customSQLQuestionStatement(questions), (err, results) => {
      if (err) return sqlErrorHandler(res, err);
      res.send(trimResults(results, 10));
    });
  };
  // returns SQL Statement based on number of question genres requested
  function customSQLQuestionStatement(questions) {
    let syntax;
    switch (questions.length) {
      case 1:
        syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY RAND() LIMIT 10`;
        break;
      case 2:
        syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY RAND() LIMIT 10`;
        break;
      case 3:
        syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}", "${questions[2]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY RAND() LIMIT 10`;
        break;
      case 4:
        syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}", "${questions[2]}", "${questions[3]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY RAND() LIMIT 10`;
        break;
      default:
        "";
    }
    return syntax;
  }
  // limits number of questions in server response to the value of 'num'
  function trimResults(results, num) {
    if (results.length > num) results.splice(num);
    return results;
  }

module.exports = getQuestions