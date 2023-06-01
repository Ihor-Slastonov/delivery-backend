const Joi = require('joi');

const addOrderSchemaJoi = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
    .required(),
  phone: Joi.string().min(10).max(17).required(),
  address: Joi.string().min(1).max(30).required(),
  totalCoast: Joi.string().min(1).max(10).required(),
  products: Joi.array().required(),
});

module.exports = addOrderSchemaJoi;
