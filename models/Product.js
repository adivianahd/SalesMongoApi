const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Price: {
            type: Number
        },
        Description: {
            type: String
        },
        Category: {
            type: String
        },
        Cantidad_en_stock: {
            type: Number
        },
        FreeShipping: {
            type: Boolean
        },
        created_at: {
            type: Date,
            default: Date.now
        },
    }
)

module.exports = mongoose.model('product', ProductSchema);