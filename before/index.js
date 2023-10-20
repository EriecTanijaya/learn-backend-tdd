const express = require('express');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const postTradeItemController = require('./controllers/postTradeItemController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb://127.0.0.1:27017/trading`);

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

const TraderModel = mongoose.model('Trader', traderSchema);

const TradeItemModel = mongoose.model('TradeItem', tradeItemSchema);

const editTradeItemController = async (req, res) => {
  if (!req.body.traderId) {
    return res.status(400).send(`traderId is required`);
  }

  if (!req.body.name) {
    return res.status(400).send(`name is required`);
  }

  if (!req.body.price) {
    return res.status(400).send(`price is required`);
  }

  await TradeItemModel.create({ trade_item_id: uuidv4(), name: req.body.name, price: req.body.price });

  res.sendStatus(200);
};

app.get('/', (req, res) => res.send(`yessir`));

app.post('/trading/items', postTradeItemController);

// const getTradeItemsController = (req, res) => {};

// const createOfferController = (req, res) => {};

// const acceptOfferController = (req, res) => {};

// app.get('/trading/items', getTradeItemsController);

// app.post('/trading/offers', createOfferController);

// app.post('/trading/offers/:offerId/accept', acceptOfferController);

const port = 3000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
