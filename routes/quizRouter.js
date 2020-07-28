const express = require('express')
const router = express.Router()
const { getQuestions } = require('../controllers/questionsController')

// gets list of questions to display at start of quiz attempt
router.post('/', getQuestions)
// update user correct vs attempted question columns
router.put('/update')
// return 3 resources based on incorrect questions at end of quiz attempt
router.post('/resources')


module.exports = router;