const { default: mongoose } = require('mongoose');

const tradeItemSchema = new mongoose.Schema({
  trade_item_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const tradeItemModel = mongoose.model('TradeItem', tradeItemSchema);

module.exports = tradeItemModel;
