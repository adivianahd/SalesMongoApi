const mongoose = require("mongoose");

const saleSchema = mongoose.Schema(
  {
    Product: {},

    User: {
      type: String
    },

    Date: {
      type: Date,
      default: Date.now
    }
  }
);
module.exports = mongoose.model("Sale", saleSchema);
