const { data } = require('../dummyData')
const getQuestions = (req, res) => {
    res.json(data)
}

module.exports = { getQuestions }