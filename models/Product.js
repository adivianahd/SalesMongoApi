const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        Name: {
            type: String
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
    }
)

module.exports = mongoose.model('product', ProductSchema);