const { data } = require('../dummyData')
const pool = require('../sql/connection')
const { sqlErrorhandler } = require('../sql/errorHandler');
const sqlErrorHandler = require('../sql/errorHandler');

const getQuestions = (req, res) => {
    let { id } = req.body;
    console.log(id)

    pool.query(
        `SELECT * FROM questions WHERE id=${id}`, (err, results) => {
            if (err) return sqlErrorHandler(res, err)
            res.json({ data: results })
        }
    )
}

module.exports = { getQuestions }