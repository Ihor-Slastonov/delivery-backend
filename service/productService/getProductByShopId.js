const { Product } = require('../../models/productSchema');
const { HttpError } = require('../../helpers');

const getProductByShopId = async req => {
  const { id } = req.params;

  const products = await Product.find({ shopId: id });
  if (!products) {
    throw HttpError(404, 'Products not found');
  }
  return products;
};

module.exports = getProductByShopId;
