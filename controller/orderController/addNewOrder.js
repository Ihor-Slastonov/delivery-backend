const { addOrder } = require('../../service/orderService');

const addNewOrder = async (req, res) => {
  const result = await addOrder(req);
  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = addNewOrder;
