const { ctrlWrapper } = require('../../helpers');

const getProductListByShopId = require('./getProductListByShopId');

module.exports = {
  getProductListByShopId: ctrlWrapper(getProductListByShopId),
};
