// creates top level Express function
const express = require('express')
// creates new Router object
const router = express.Router()
// import questions controller
const getQuestions = require('../controllers/quizController/getQuestions')
const getResources = require('../controllers/quizController/getResources')

// gets list of questions to display at start of quiz attempt
router.post('/', getQuestions)
// update user correct vs attempted question columns
router.put('/update')
// return 3 resources based on incorrect questions at end of quiz attempt
router.post('/resources', getResources)

// export router for use in Server.js
module.exports = router;