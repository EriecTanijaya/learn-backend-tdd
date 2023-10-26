const { v4: uuidv4 } = require('uuid');
const TradeItemModel = require('../infra/database/models/tradeItemModel');
const { default: mongoose } = require('mongoose');
const { createMongooseTradeItemRepo } = require('./mongooseTradeItemRepo');

describe('MongooseTradeItemRepo', () => {
  describe('save', () => {
    test('should able save trade item', async () => {
      mongoose.connect(`mongodb://127.0.0.1:27017/trading`);

      const tradeItemRepo = createMongooseTradeItemRepo({ TradeItemModel });

      const newTradeItem = { tradeItemId: uuidv4(), name: 'frozen keyboard', price: 10 };

      await tradeItemRepo.save(newTradeItem);

      expect(await tradeItemRepo.exists(newTradeItem.traderItemId));

      await TradeItemModel.deleteMany({});

      await mongoose.connection.close();
    });
  });
});
