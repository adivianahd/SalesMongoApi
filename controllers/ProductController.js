class ProductController {
    constructor(productService) {
        this.productService = productService
    }

    async getProducts(req, res) {
        const page = req.query.page
        console.log(page);


        const products = await this.productService.getProducts()

        return res.json(products)
    }
    async freeShippingProducts(req, res) {
        const products = await this.productService.freeShippingProducts()

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

    async addDiscount(req, res) {
        return res.json(await this.productService.addDiscount());
        const products = await this.productService.addDiscount(req.params.id, req.body)

        return res.json(products)
    }
}
module.exports = ProductController 