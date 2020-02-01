const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        surname: {
            type: String
        },
        age: {
            type: Number
        }
    }
)
module.exports = mongoose.model('user', userSchema)