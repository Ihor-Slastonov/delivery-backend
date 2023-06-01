const express = require('express');

const { getAllShops } = require('../../controller/shopController');

const router = express.Router();

router.get('/', getAllShops);

module.exports = router;
