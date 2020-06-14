const express = require('express')
const router = express.Router()
const { getQuestions } = require('../controllers/questionsController')


router.post('/', getQuestions)


module.exports = router;