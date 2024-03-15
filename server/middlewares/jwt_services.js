const jwt = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config

const verifyAccessToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        if (!authHeader) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: 'Please login'
                })
        }
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
            if (err)
                return res.status(401).send({ message: 'Unauthorized' })
            req.id = data.userId
        })
        const user = await User.findById({_id: req.id})
        if(!user){
            return res
            .status(400)
            .json({success:false, message:"user not exist!"})
        }
        next()
    }
    catch (error) {
        return next(error)
    }
} 

module.exports = {
    verifyAccessToken
}