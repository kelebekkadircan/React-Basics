const jwt = require('jsonwebtoken');
const User = require('../models/userModal');

const requireAuth = async (req, res, next) => {
    // verify authentication
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' })
    }
    // extract token from header
    const token = authorization.split(' ')[1]

    // verify token
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findOne({ _id: id })
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' })
    }


}

module.exports = requireAuth