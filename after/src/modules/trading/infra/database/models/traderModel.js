const { default: mongoose } = require('mongoose');

const traderSchema = new mongoose.Schema({
  trader_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const traderModel = mongoose.model('Trader', traderSchema);

module.exports = traderModel;
