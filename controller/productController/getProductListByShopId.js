const { getProductByShopId } = require('../../service/productService');

const getProductListByShopId = async (req, res) => {
  const result = await getProductByShopId(req);

  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = getProductListByShopId;
