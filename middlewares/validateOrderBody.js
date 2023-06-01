const { addOrderSchemaJoi } = require('../helpers/validations');
const { HttpError } = require('../helpers');

const validateOrderBody = (req, res, next) => {
  const { error } = addOrderSchemaJoi.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  next();
};

module.exports = validateOrderBody;
