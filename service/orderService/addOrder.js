const { Order } = require('../../models/orderSchema');
const { HttpError } = require('../../helpers');

const addOrder = async req => {
  const newOrder = await Order.create(req.body);
  if (!newOrder) {
    throw HttpError(500, 'Failed to create the order. Please try again later.');
  }
  return newOrder;
};

module.exports = addOrder;
