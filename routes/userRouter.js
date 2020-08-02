const express = require('express')
const router = express.Router()
const { login, signup, updateAttempts } = require('../controllers/userController')

router.post('/', login)
router.post('/signup', signup)
router.put('/update', updateAttempts)

module.exports = router;