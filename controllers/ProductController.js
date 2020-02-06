class ProductController {
    constructor(productService) {
        this.productService = productService
    }

    async getProducts(req, res) {
        let page = req.query.pag ? req.query.page : 1

        const products = await this.productService.getProducts(page)

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