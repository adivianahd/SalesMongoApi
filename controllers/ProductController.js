class ProductController {
    constructor(productService) {
        this.productService = productService
    }

    async getProducts(req, res) {
        const products = await this.productService.getProducts()

        return res.json(products)
    }

    async getProductsById(req, res) {
        const products = await this.productService.getProductsById(req.params.id)

        return res.json(products)
    }

    async save(req, res) {
        const products = await this.productService.save(req.body)

        return res.json(products)
    }

    async update(req, res) {
        const products = await this.productService.update(req.params.id, req.body)

        return res.json(products)
    }
}
module.exports = ProductController 