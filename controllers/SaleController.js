class SaleController {
  constructor(SaleService) {
    this.SaleService = SaleService;
  }

  async getSales(req, res) {
    const sales = await this.SaleService.getSales();

    return res.json(sales);
  }

  async getSalesById(req, res) {
    const sales = await this.SaleService.getSalesById(req.params.id);

    return res.json(sales);
  }
  async getSalesByUser(req, res) {
    const sales = await this.SaleService.getSalesById(req.params.id);

    return res.json(sales);
  }


}
module.exports = SaleController;