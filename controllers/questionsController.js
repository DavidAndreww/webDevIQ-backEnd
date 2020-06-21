const { data } = require('../dummyData')
const pool = require('../sql/connection')
const { sqlErrorhandler } = require('../sql/errorHandler');
const sqlErrorHandler = require('../sql/errorHandler');

const getQuestions = (req, res) => {
    let { questions } = req.body;
    let totalQs = questions.length;
    // res.json({questions})

    pool.query(
        `SELECT * FROM questions LIMIT 3`, (err, results) => {
            if (err) return sqlErrorHandler(res, err)
            res.json({ data: results })
        }
    )
}

module.exports = { getQuestions }