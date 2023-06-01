const { Schema, model } = require('mongoose');

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = model('shop', shopSchema);

module.exports = { Shop };
