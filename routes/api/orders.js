const express = require('express');

const { addNewOrder } = require('../../controller/orderController');
const { validateOrderBody } = require('../../middlewares');

const router = express.Router();

router.get('/', validateOrderBody, addNewOrder);

module.exports = router;
