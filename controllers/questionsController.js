const { data } = require('../dummyData')
const pool = require('../sql/connection')
const { sqlErrorhandler } = require('../sql/errorHandler');
const sqlErrorHandler = require('../sql/errorHandler');

const getQuestions = (req, res) => {
    let { questions } = req.body;
    console.log(questions)
    let queryLimit = Math.round(Math.ceil(10 / questions.length))
    console.log(queryLimit)

    pool.query(
        `SELECT * FROM questions WHERE genre IN ("${questions[0]}", "${questions[1]}") GROUP BY id HAVING COUNT(2) LIMIT ${queryLimit} `, (err, results) => {
            if (err) return sqlErrorHandler(res, err)
            res.send(results)
        }
    )

}

module.exports = { getQuestions }