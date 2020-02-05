const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        User: {
            type: String
        },
        Password: {
            type: String
        },
        Age: {
            type: Number
        }
    }
)
module.exports = mongoose.model('user', userSchema)
