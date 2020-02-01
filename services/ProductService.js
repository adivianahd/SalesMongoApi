const Product = require("./../models/Product")

class ProductService {
    getProducts() {
        const query = Product.find();

        return query
    }

    getProductsById(id) {
        const query = Product.findById(id);

        return query
    }

    save(newProduct) {
        const product = new Product(newProduct);
        return product.save();
    }

    update(id, newProduct) {
        console.log("Test");

        return Product.findByIdAndUpdate(id, newProduct);
    }
}

module.exports = ProductService