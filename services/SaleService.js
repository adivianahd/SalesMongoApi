const Sales = require("./../models/Sale");

class SaleService {

    constructor() {
        this.limit = 3;
    }

    getSales(page = 1) {
        const skip = (page - 1) * this.limit;
        const query = Sales.find().skip(skip).limit(this.limit).exec();

        return query;
    }

    saveNewSales(newSales) {
        const sales = new Sales(newSales);
        return sales.save();
    }


    getSalesById(id) {
        const query = Sales.findById(id);

        return query;
    }

    getSalesByUser(id) {
        const query = Sales.findById(id);

        return query;
    }

}

module.exports = SaleService;