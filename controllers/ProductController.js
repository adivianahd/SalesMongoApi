class ProductController {
    constructor(productService) {
        this.productService = productService
    }

    async getProducts(req, res) {
        let page = req.query.page ? req.query.page : 1

        const products = await this.productService.getProducts(page)

        return res.json(products)
    }

    async productRelated(req, res) {
        const category = req.params.category
        const productFound = await this.productService.productRelated(category);


        if (productFound.length > 0) {
            return res.json(productFound)
        }

        return res.sendStatus(404)
    }

    async freeShippingProducts(req, res) {
        const products = await this.productService.freeShippingProducts()

        return res.json(products)
    }

    async getProductsById(req, res) {
        const products = await this.productService.getProductsById(req.params.id)

        return res.json(products)
    }

    async mostSellers(req, res) {

    }

    async addNewProduct(req, res) {
        const products = await this.productService.addNewProduct(req.body)

        return res.json(products)
    }

    async addDiscount(req, res) {
        const products = await this.productService.addDiscount(req.params.id, req.body)

        return res.json(products)
    }
}
module.exports = ProductController 