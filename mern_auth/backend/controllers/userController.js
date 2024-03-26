const User = require('../models/userModal')
const jwt = require('jsonwebtoken')

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })


}



// login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.login(email, password)
        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}
// signup user
const signUpUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password)
        //create Token
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getUser = async (req, res) => {
    try {
        res.json({ message: 'getUser router works' })
    }
    catch (err) {

    }
}

module.exports = { loginUser, signUpUser, getUser }