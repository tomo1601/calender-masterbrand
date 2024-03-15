const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    fullname: {
        type: String,
        reuired: true
    },
    avatar: {
        type: String,
        default: 'https://firebasestorage.googleapis.com/v0/b/cnpm-30771.appspot.com/o/no-user.png?alt=media&token=517e08ab-6aa4-42eb-9547-b1b10f17caf0'
    },
    role: {
        type: String,
        default: 'User'
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    otp: {
        type: String,
        reuired: false,
        default:''
    }, 
    status: {
        type: String,
        enum: ["ACTIVE", 'BLOCKED']
    }
})

UserSchema.virtual('event',{
    ref: 'events',
    localField: '_id',
    foreignField: 'userId',
    justOne: false,
    count: true
})

module.exports = mongoose.model('users', UserSchema)