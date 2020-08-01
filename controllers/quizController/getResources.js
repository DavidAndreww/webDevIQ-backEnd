const pool = require("../../sql/connection");
// SQL error handler
const { sqlErrorhandler } = require("../../sql/errorHandler");

// limits number of questions in server response to the value of 'num'
function trimResults(results, num) {
    if (results.length > num) results.splice(num);
    return results;
  }
  
  // METHOD: POST
  // PATH: 'localhost:3030/quiz/resources'
  const getResources = (req, res) => {
    let { resources } = req.body;
    let arrOfResourceIds = threeRandomResources(resources);
    pool.query(customSQLResourceStatement(arrOfResourceIds), (err, results) => {
      if (err) return sqlErrorHandler(res, err);
      res.send(trimResults(results, 3));
    });
  };
  
  function threeRandomResources(array) {
    if (array.length <= 3) {
      return array;
    }
    const resources = [];
    while (resources.length < 3) {
      let val = array[Math.floor(Math.random() * Math.floor(array.length))];
      if (!resources.includes(val)) {
        resources.push(val);
      }
    }
    return resources;
  }
  
  function customSQLResourceStatement(questions) {
    let syntax;
    switch (questions.length) {
      case 1:
        syntax = `SELECT * FROM resources WHERE question_id IN (${questions[0]})`;
        break;
      case 2:
        syntax = `SELECT * FROM resources WHERE question_id IN (${questions[0]}, ${questions[1]})`
        break;
      case 3:
        syntax = `SELECT * FROM resources WHERE question_id IN (${questions[0]}, ${questions[1]}, ${questions[2]})`
        break;
      default:
        "";
    }
    return syntax;
  }

  module.exports = getResources