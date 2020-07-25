const pool = require('../sql/connection')
const { sqlErrorhandler } = require('../sql/errorHandler');
const sqlErrorHandler = require('../sql/errorHandler');;

function customSQLStatement(questions) {
    let syntax;
    switch (questions.length) {
        case 1:
            syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY RAND() LIMIT 10`
            break;
        case 2:
            syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY RAND() LIMIT 10`
            break;
        case 3:
            syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}", "${questions[2]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY RAND() LIMIT 10`
            break;
        case 4:
            syntax = `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}", "${questions[2]}", "${questions[3]}") GROUP BY id HAVING COUNT(${questions.length}) ORDER BY RAND() LIMIT 10`
            break;
        default:
            ''
    }
    return syntax
}
function trimResults(results, num){
    if (results.length > num) results.splice(num)
    return results
}

const getQuestions = (req, res) => {
    let { questions } = req.body;
    console.log(questions)
    let queryLimit = Math.round(Math.ceil(10 / questions.length))
    pool.query(
        customSQLStatement(questions), (err, results) => {
            if (err) return sqlErrorHandler(res, err)
            res.send(trimResults(results, 10))
        }
    )
}

module.exports = { getQuestions }