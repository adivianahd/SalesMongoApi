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
            if (e.cualquierCosa == null) {
                e.cualquierCosa = 0;
                updates.push(Product.findByIdAndUpdate(e.id, e));
            }
        });

        const result = await Promise.all(updates)
        return result.length + " Productos actualizados"
    }

    getProductsById(id) {
        const query = Product.findById(id);

        return query
    }

    save(newProduct) {
        const product = new Product(newProduct);
        return product.save();
    }

    freeShippingProducts() {
        const query = Product.find.length({ freeSheppingTrue: true }).exec()
        return query

    }

    addDiscount(id, newProduct) {
        console.log("Test");

        return Product.findByIdAndUpdate(id, newProduct);
    }
}

module.exports = ProductService