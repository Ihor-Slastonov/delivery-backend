const { ctrlWrapper } = require('../../helpers');

const addNewOrder = require('./addNewOrder');

module.exports = {
  addNewOrder: ctrlWrapper(addNewOrder),
};
