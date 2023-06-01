const { Shop } = require('../../models/shopSchema');
const { HttpError } = require('../../helpers');

const getShops = async () => {
  const shops = await Shop.find({});
  if (!shops) {
    throw HttpError(404, 'Shops not found');
  }
  return shops;
};

module.exports = getShops;
