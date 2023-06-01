const { getShops } = require('../../service/shopService');

const getAllShops = async (req, res) => {
  const result = await getShops();
  console.log(result);
  return res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = getAllShops;
