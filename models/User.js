const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: true
        },
        handler: {
            type: String,
            required: true,
        },
        age: {
            type: Number
        }
    }
)

module.exports = mongoose.model('User', userSchema)  