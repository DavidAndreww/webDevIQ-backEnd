const { data } = require('../dummyData')
const pool = require('../sql/connection')
const { sqlErrorhandler } = require('../sql/errorHandler');
const sqlErrorHandler = require('../sql/errorHandler');

const getQuestions = (req, res) => {
    let { questions } = req.body;
    let queryLimit = Math.round(Math.ceil(10/questions.length))
    console.log(limit)
    res.json({questions})
    

    // pool.query(
    //     `SELECT * FROM questions WHERE genre=`` LIMIT ${queryLimit}`, (err, results) => {
    //         if (err) return sqlErrorHandler(res, err)
    //         res.json(results)
    //     }
    // )
}

module.exports = { getQuestions }