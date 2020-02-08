const Sales = require("./../models/Sale")

class SaleService {

    constructor() {
        this.limit = 3
    }

    getSales() {
        const skip = (page - 1) * this.limit
        const query = Product.find().skip(skip).limit(limit).exec();

        return query
    }

    saveNewSales(newSales) {
        const sales = new Users(newSales);
        return sales.save();
    }


    getSalesById(id) {
        const query = Sales.findById(id);

        return query
    }

    getSalesByUser(id) {
        const query = Sales.findById(id);

        return query
    }

}

module.exports = SaleService