const { data } = require('../dummyData')
const pool = require('../sql/connection')

const getQuestions = (req, res) => {
    res.json(data)
}

module.exports = { getQuestions }