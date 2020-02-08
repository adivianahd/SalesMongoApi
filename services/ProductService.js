const Product = require("./../models/Product")

class ProductService {

    constructor() {
        this.limit = 3
    }

    getProducts(page) {
        const skip = (page - 1) * this.limit
        const query = Product.find().skip(skip).limit(limit).exec();

        return query
    }

    async discountUpdate() {
        const products = await Product.find();
        const updates = [];

        products.forEach((e) => {
            if (e.anything == null) {
                e.anything = 0;
                updates.push(Product.findByIdAndUpdate(e.id, e));
            }
        });

        const result = await Promise.all(updates)
        return result.length + " Productos actualizados"
    }

    async getProductsById(id) {
        const query = await Product.findById(id);

        return query
    }

    addNewProduct(newProduct) {
        const product = new Product(newProduct);
        return product.save();
    }

    async freeShippingProducts() {
        const query = await Product.find({ freeSheppingTrue: true }).exec()
        return query

    }

    async productRelated(category) {
        const products = await Product.find({ Category: category }).exec();
        console.log("astrid", "products:", products);
        return products;
    }

    addDiscount(id, newProduct) {

        return Product.findByIdAndUpdate(id, newProduct);
    }
}

module.exports = ProductService