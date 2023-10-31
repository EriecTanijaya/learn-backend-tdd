const express = require('express');
const mongoose = require('mongoose');
const { createPostTradeItemControllers } = require('./modules/trading/useCases/postTradeItem/postTradeItemController');
const { createPostTradeItemUseCase } = require('./modules/trading/useCases/postTradeItem/postTradeItemUseCase');
const { createMongooseTradeItemRepo } = require('./modules/trading/repos/mongooseTradeItemRepo');
const { createMongooseTraderRepo } = require('./modules/trading/repos/mongooseTraderRepo');
const TradeItemModel = require('./modules/trading/infra/database/models/tradeItemModel');
const TraderModel = require('./modules/trading/infra/database/models/traderModel');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb://127.0.0.1:27017/trading`);

app.get('/', (req, res) => res.send(`yessir`));

const tradeItemRepo = createMongooseTradeItemRepo({ TradeItemModel });
const traderRepo = createMongooseTraderRepo({ TraderModel });

const postTradeItemUseCase = createPostTradeItemUseCase({ tradeItemRepo, traderRepo });

const postTradeItemController = createPostTradeItemControllers(postTradeItemUseCase);

app.post('/trading/items', postTradeItemController);

// app.get('/trading/items', getTradeItems);

// app.post('/trading/offers', createOffer);

// app.post('/trading/offers/:offerId/accept', acceptOffer);

const port = 3000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
