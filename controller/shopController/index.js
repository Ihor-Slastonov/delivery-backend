const { ctrlWrapper } = require('../../helpers');

const getAllShops = require('./getAllShops');

module.exports = {
  getAllShops: ctrlWrapper(getAllShops),
};
