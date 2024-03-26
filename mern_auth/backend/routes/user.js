const express = require('express')
const { getUser, loginUser, signUpUser } = require('../controllers/userController')

const router = express.Router()

router.get('/', getUser)
router.post('/login', loginUser)

// signup route
router.post('/signup', signUpUser)


module.exports = router