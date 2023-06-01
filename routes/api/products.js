const express = require('express');

const {
  getProductListByShopId,
} = require('../../controller/productController');

const { isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/:id', isValidId, getProductListByShopId);

module.exports = router;
