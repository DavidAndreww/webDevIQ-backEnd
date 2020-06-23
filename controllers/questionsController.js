const { data } = require('../dummyData')
const pool = require('../sql/connection')
const { sqlErrorhandler } = require('../sql/errorHandler');
const sqlErrorHandler = require('../sql/errorHandler');
const { query } = require('express');

function getSQLStatement(questions) {
    let syntax;
    switch (questions.length) {
        case 1:
            syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY genre`
            break;
        case 2:
            syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY genre`
            break;
        case 3:
            syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}", "${questions[2]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY genre`
            break;
        case 4:
            syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}", "${questions[2]}", "${questions[3]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY genre`
            break;
        default:
            ''
    }
    return syntax
}
function trimResults(results){
    if (results.length > 10) results.splice(10)
    return results
}

const getQuestions = (req, res) => {
    let { questions } = req.body;
    let queryLimit = Math.round(Math.ceil(10 / questions.length))
    pool.query(
        getSQLStatement(questions), (err, results) => {
            if (err) return sqlErrorHandler(res, err)
            res.send(trimResults(results))
        }
    )

}

module.exports = { getQuestions }