const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    shopId: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model('product', productSchema);

module.exports = { Product };
